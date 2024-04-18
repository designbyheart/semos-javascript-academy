export const storeToLocalStorage = (key, value, duration = 120) => {
    let expirationInMinutes = duration * 60 * 1000
    const expirationDate = new Date(new Date().getTime() + expirationInMinutes)
    const item = {
        value,
        expirationDate: expirationDate.toISOString()
    }

    localStorage?.setItem(key, JSON.stringify(item))
}

export const storeTokens = (token, refreshToken) => {
    if (token?.length < 10 || typeof window === 'undefined') {
        return
    }

    storeToLocalStorage('token', token)

    if (refreshToken?.length < 10 || typeof window === 'undefined') {
        storeToLocalStorage('refreshToken', refreshToken)
    }
}

export const loadFromStorage = (key) => {
   if(!localStorage) {
       return null
   }

    const result = localStorage?.getItem(key)

    if (!result) {
        return null
    }

    try {
        const item = JSON.parse(result)
        const now = new Date()
        const expirationDate = new Date(item.expirationDate)

        if (now > expirationDate) {
            localStorage?.removeItem(key)

            return null
        }

        return item.value
    } catch (error) {
        return result
    }
}

export const clearStorage = () => {
    typeof window !== 'undefined' && localStorage?.clear()
}
