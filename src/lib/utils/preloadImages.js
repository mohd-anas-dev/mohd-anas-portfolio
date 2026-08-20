import { withTimeout } from "./withTimeout"
import { LOADER_CONFIG  } from "./loaderConfig"
export const preloadImages = async (onProgress) => {

    const images = Array.from(
        document.querySelectorAll(
            'img[data-loader="critical"]'
        )
    )

    if (images.length === 0) {
        return {
            total: 0,
            loaded: 0,
            failed: 0
        }
    }

    let loaded = 0
    let failed = 0


    const updateProgress = () => {

        const completed =
            loaded + failed

        const progress = Math.round(
            (completed / images.length) * 100
        )

        onProgress?.(progress)
    }


    await Promise.all(

        images.map(async (image) => {

            try {

                if (!image.complete) {

                    const imagePromise = new Promise(
                        (resolve, reject) => {

                            const handleLoad = () => {
                                cleanup()
                                resolve()
                            }

                            const handleError = () => {
                                cleanup()
                                reject(
                                    new Error(
                                        `Failed to load image: ${image.src}`
                                    )
                                )
                            }

                            const cleanup = () => {

                                image.removeEventListener(
                                    "load",
                                    handleLoad
                                )

                                image.removeEventListener(
                                    "error",
                                    handleError
                                )

                            }


                            image.addEventListener(
                                "load",
                                handleLoad,
                                { once: true }
                            )

                            image.addEventListener(
                                "error",
                                handleError,
                                { once: true }
                            )

                        }
                    )


                    await withTimeout(
                        imagePromise,
                        10000,
                        `Image ${image.src}`
                    )
                }


                if (image.decode) {

                    try {
                        await withTimeout(
                            image.decode(),
                            LOADER_CONFIG.imageDecodeTimeout,
                            `Image decode ${image.src}`
                        )
                    } catch {
                        // Ignore decode failure
                    }

                }


                loaded++

            } catch (error) {

                failed++

                console.warn(
                    "[Loader] Image failed:",
                    image.src
                )

            } finally {

                updateProgress()

            }

        })

    )


    return {
        total: images.length,
        loaded,
        failed
    }
}