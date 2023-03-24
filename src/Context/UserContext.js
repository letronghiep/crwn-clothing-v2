import { createContext, useEffect, useState } from 'react'

import { createDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,


});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            // console.log(user);
            if (user) createDocumentFromAuth(user)
            setCurrentUser(user)


        })

        return unsubcribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
