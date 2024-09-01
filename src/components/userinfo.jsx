"use client";
import { UserContext } from "./provider";
import { useContext } from "react";

export const UserInfo = () => {
// useContext => extract value yg dishare
    const { username } = useContext(UserContext);

    return (
    <div>
        username : {username}
    </div>
    );
}