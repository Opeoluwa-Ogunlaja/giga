'use client'
import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { useSessionStorage } from "../hooks/useStorage";
import { usePathname } from 'next/navigation'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const UserProvider = ({children}) => {
    const pathname = usePathname()
    const [ userToken, setUserToken, removeUserToken ] = useSessionStorage('uTo', '')
    const [loading, value, error] = useFetch('http://localhost:2030/api/v1/users/profile', {
        headers: {
            authorization: "Bearer " + userToken
        }
    } ,[pathname])

    return <UserContext.Provider value={{
        isUserLoading: loading,
        user: value ? value.user : null,
        isLoggedIn: error ? false : true,
        setUserToken,
        removeUserToken         
    }}>{children}</UserContext.Provider>
}


export default UserProvider