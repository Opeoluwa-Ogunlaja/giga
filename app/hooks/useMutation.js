'use client'

import { useCallback, useState, useRef, useEffect } from "react"

export const useMutation = (promise) => {
    const [isMutating, setMutating] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const promiseRef = useRef(promise)

    useEffect(() => {
        promiseRef.current = typeof promise == "function" ? promise : () => promise
    }, [promise])

    const mutate = useCallback((params, { onSuccess = () => {}, onError = () => {} }) => {
        setMutating(true)
        promiseRef.current(params)
            .then((data) => {
                onSuccess(data)
                setData(data)
            })
            .catch((err) => {
                onError(err)
                setError(err)
            })
            .finally(() => setMutating(false))
    }, [])

    return { mutate, isMutating, data, error }
}