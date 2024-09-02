"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const TodoCreate = () => {
    const router = useRouter();
    const [menu, setMenu] = useState("");
    const [amount, setAmount] = useState("");

    async function handleCreateTodo() {
        await fetch("https://v1.appbackend.io/v1/rows/cSdyjihMzRel", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([{ menu, amount }])
        });
        router.refresh();
    }

    return (
        <div>
            <input onChange={(e) => setMenu(e.target.value)} />
            <textarea onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleCreateTodo}>Save</button>    
        </div>
    )
}