"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const TodoCard = ({id, menu, amount }) => {
    const router = useRouter();

    async function handleDeleteTodo() {
        const res = await fetch("https://v1.appbackend.io/v1/rows/cSdyjihMzRel", {
            method: "DELETE",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([id])
        });
        const data = await res.json();
        router.refresh();
    }

    return (
        <div>
            <h3>{menu}</h3>
            <h3>{amount}</h3>
            <button className="btn-danger" onClick={handleDeleteTodo}>Delete</button>
        </div>
    )
}