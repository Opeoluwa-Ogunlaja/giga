import { useCallback, useState } from "react"

const useStorage = (storage, key, initialValue) => {
    const [ value, setValue ] = useState(() => {
        if (storage.getItem(key) == null) {
            if (typeof initialValue == 'function') {
                storage.setItem(key, JSON.stringify(initialValue()))
                return initialValue()
            }
            else{
                storage.setItem(key, JSON.stringify(initialValue))
                return initialValue
            }
        }
        else{
            return JSON.parse(storage.getItem(key));
        }
    })


    const set = useCallback((newValue) => {
        const jsonValue = JSON.stringify(newValue)
        storage.setItem(key, jsonValue)
        setValue(newValue)
    }, [storage, key])

    const remove = useCallback(() => {
        storage.removeItem(key)
        setValue(null)
    }, [storage, key])

    return [value, set, remove]
}

export const useLocalStorage = (key, value = '') => {
    return useStorage(localStorage, key, value)
}

export const useSessionStorage = (key, value = '') => {
    return useStorage(sessionStorage, key, value)
}