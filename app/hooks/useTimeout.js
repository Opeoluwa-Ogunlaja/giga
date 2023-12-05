'use client'
import { useEffect, useRef, useCallback } from "react"

export const useTimeout = (callback, delay, autoplay=false) => {
    const callbackRef = useRef(callback);
    const timeOutRef = useRef();

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback((params) => {
        const paramParser = () => Array.isArray(params) ? params : [params]
        timeOutRef.current = setTimeout(callbackRef.current, delay, ...paramParser())
    })

    const clear = useCallback(() => {
        clearTimeout(timeOutRef.current)
    }, [])
    
    useEffect(() => {
        if(autoplay){ set() }

        return clear
    })

    const reset = useCallback((params) => {
        clear()
        set(params)
    }, [set, clear, delay])

    return [clear, reset, set]
}

