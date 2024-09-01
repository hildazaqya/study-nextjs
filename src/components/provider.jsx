"use client";

// 1. Import Create Context
import { createContext } from "react";

// 2. Create Context
export const UserContext = createContext();

// 3. Buat Provider Context
export const UserProvider = ({ children }) => {
    const username = "hildazaqya";
    const userEmail = "hildazaqya@gmail.com";

    return (
        <UserContext.Provider value={{username, userEmail}}>
            {children}
        </UserContext.Provider>
    )
}