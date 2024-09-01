"use client";
import { useEffect, useState } from "react";

export default function Page() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const [loginStatus, setLoginStatus] = useState({
        message: "",
        status: "",
    });

    function handleChangeInput(event) {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    }

    function handleSubmitLogin() {}

    useEffect(() => {
        if (loginData.username === "admin" && loginData.password === "admin") {
            setLoginStatus({ message: "Kamu admin", status: "success" });
            return;
        }

        setLoginStatus({ message: "Kamu bukan admin", status: "error" });
    }, [loginData]);

    return (
        <main>
            <div>
                <input
                    name="username"
                    placeholder="Username"
                    onChange={handleChangeInput}
                />
                <input
                    name="password"
                    placeholder="password"
                    onChange={handleChangeInput}
                />
                <button className="btn-primary" onClick={handleSubmitLogin}>Login</button>
            </div>
            {loginStatus.status === "success" && (
                <div className="text-emerald-500">{loginStatus.message}</div>
            )}
            {loginStatus.status === "error" && (
                <div className="text-rose-500">{loginStatus.message}</div>
            )}
        </main>
    )
}

// untuk menyimpan value dalam input yg paling umum adalah e / event