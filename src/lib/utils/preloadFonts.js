import { withTimeout } from "./withTimeout"
import { LOADER_CONFIG } from "./loaderConfig"

export const preloadFonts = async () => {

    await withTimeout(
        document.fonts.ready,
        LOADER_CONFIG.fontTimeout,
        "Fonts"
    )

}