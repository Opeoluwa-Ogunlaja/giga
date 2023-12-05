import { useEffect, useState, useRef } from "react"

export const useAsync = (promise) => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const promiseRef = useRef(promise)

    useEffect(() => {
        promiseRef.current = promise
    }, [promise])

    useEffect(() => {
        promiseRef.current
        .then((data) => {
            setData(data)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => setLoading(false))
    }, [])

    return [isLoading, data, error]
}