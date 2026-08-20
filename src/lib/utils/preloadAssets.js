import { preloadImages } from "./preloadImages"
import { preloadFonts } from "./preloadFonts"

export const preloadAssets = async (onProgress) => {

    const criticalImages = document.querySelectorAll(
        'img[data-loader="critical"]'
    )

    const totalTasks = criticalImages.length + 1

    let completedTasks = 0

    const updateProgress = () => {

        completedTasks++

        const progress = Math.round(
            (completedTasks / totalTasks) * 100
        )

        onProgress?.(progress)
    }


    const imagePromise = preloadImages(() => {
        updateProgress()
    })


    const fontsPromise = preloadFonts()
        .then(() => {
            updateProgress()
        })
        .catch((error) => {

            console.warn(
                "[Loader] Fonts failed:",
                error
            )

            updateProgress()
        })


    await Promise.all([
        imagePromise,
        fontsPromise
    ])


    onProgress?.(100)
}