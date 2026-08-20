export const withTimeout = (
    promise,
    timeout = 10000,
    label = "Asset"
) => {

    let timeoutId

    const timeoutPromise = new Promise((resolve) => {

        timeoutId = setTimeout(() => {

            console.warn(
                `[Loader] ${label} timed out after ${timeout}ms`
            )

            resolve()

        }, timeout)

    })

    return Promise.race([
        promise,
        timeoutPromise
    ]).finally(() => {

        clearTimeout(timeoutId)

    })
}