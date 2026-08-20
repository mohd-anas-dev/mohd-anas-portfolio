
import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../ui/FallingText.css"

gsap.registerPlugin(ScrollTrigger);

/**
 * FallingText
 *
 * Highlighting API:
 *   highlightWords   = ['Hello', 'World']       // words to match (startsWith)
 *   highlightClasses = ['text-red', 'text-blue'] // OPTIONAL, same order/index as highlightWords
 *
 *   - If highlightClasses[i] is provided, that word gets that class.
 *   - If it's missing for a given index, the word falls back to `highlightClass`.
 *   - You can mix and match: give some words a custom class, leave others to
 *     the shared fallback.
 *
 * ScrollTrigger API (used when trigger="scroll"):
 *   scrollTriggerStart / scrollTriggerEnd - standard GSAP ScrollTrigger position strings
 *   once - if true (default), the fall only triggers the first time it enters view
 *   scrollThreshold - px of real scroll movement required (measured from
 *     the scroll position at mount) before the fall is allowed to fire.
 *     Guards against two things: (1) the section already sitting inside the
 *     start/end zone when the page loads - e.g. it's above the fold - which
 *     would otherwise make ScrollTrigger fire immediately on creation, and
 *     (2) a trivial scrollbar nudge counting as "the user scrolled". Default 50.
 *
 * lineHeight - controls the line-height of the text block (default 1.4)
 */
const FallingText = ({
  className = '',
  text = '',
  highlightWords = [],
  highlightClass = 'highlighted',
  highlightClasses = [],
  trigger = 'scroll',
  scrollTriggerStart = 'top 80%',
  scrollTriggerEnd = 'bottom 20%',
  once = true,
  scrollThreshold = 50,
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem',
  lineHeight = 1.4
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const [effectStarted, setEffectStarted] = useState(false);

  // Build the word spans, giving each highlighted word its own classname if provided
  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');
    const newHTML = words
      .map(word => {
        const matchIndex = highlightWords.findIndex(hw => word.startsWith(hw));
        if (matchIndex === -1) {
          return `<span class="word">${word}</span>`;
        }
        const resolvedClass = highlightClasses[matchIndex] || highlightClass;
        return `<span class="word ${resolvedClass}">${word}</span>`;
      })
      .join(' ');
    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords, highlightClasses, highlightClass]);

  // Decide when the physics effect should start
  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }

    if (trigger === 'scroll' && containerRef.current) {
      // ScrollTrigger checks the current scroll position the moment it's
      // created. If the section is already inside the start/end zone at
      // that point (e.g. it's above the fold), it fires onEnter right away
      // - that's what was causing the fall on page load instead of on an
      // actual scroll. We block that by requiring a real scroll movement
      // of at least `scrollThreshold` px since mount before the fall is
      // allowed through.
      const scrollYAtMount = window.scrollY;
      let hasScrolledEnough = false;

      const start = () => {
        setEffectStarted(true);
        if (once) scrollTriggerRef.current?.kill();
      };

      const onWindowScroll = () => {
        if (Math.abs(window.scrollY - scrollYAtMount) < scrollThreshold) return;
        hasScrolledEnough = true;
        window.removeEventListener('scroll', onWindowScroll);
        // threshold just crossed - if we're already sitting inside the
        // trigger zone, that counts as the "enter" happening right now
        if (scrollTriggerRef.current?.isActive) start();
      };
      window.addEventListener('scroll', onWindowScroll, { passive: true });

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        start: scrollTriggerStart,
        end: scrollTriggerEnd,
        onEnter: () => {
          if (hasScrolledEnough) start();
        },
        // if `once` is false, let it re-trigger as the section re-enters view
        onEnterBack: () => {
          if (!once && hasScrolledEnough) start();
        }
      });

      return () => {
        window.removeEventListener('scroll', onWindowScroll);
        scrollTriggerRef.current?.kill();
        scrollTriggerRef.current = null;
      };
    }
  }, [trigger, scrollTriggerStart, scrollTriggerEnd, once, scrollThreshold]);

  // Matter.js physics setup
  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) {
      return;
    }

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes
      }
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    const wordSpans = textRef.current.querySelectorAll('.word');
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute';
      elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`;
      elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`;
      elem.style.transform = 'none';
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });
    render.mouse = mouse;

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    let rafId;
    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      Matter.Engine.update(engine);
      rafId = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      cancelAnimationFrame(rafId);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`falling-text-container ${className}`}
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        ref={textRef}
        className="falling-text-target"
        style={{
          fontSize: fontSize,
          lineHeight: lineHeight
        }}
      />
      <div ref={canvasContainerRef} className="falling-text-canvas" />
    </div>
  );
};

export default FallingText;