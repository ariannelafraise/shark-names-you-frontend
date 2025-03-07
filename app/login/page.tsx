"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";

const Login = () => {
    const { data: session } = useSession();
    const params = useSearchParams();

    if (session) {
        redirect('/dashboard');
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        await signIn('credentials', {username, password});
    }

    return (
        <>
            <h1>Connexion</h1>
            <form
                onSubmit={(e : FormEvent) => handleSignIn(e)}
                className="flex flex-col justify-center items-center"
            >
                <div className="bg-blue-800 flex flex-col items-center p-10 rounded-3xl m-10 w-9/10 md:w-1/2 xl:w-1/4">
                    <img
                        src="https://cdn.discordapp.com/attachments/818886030605942834/1346932977485086872/FaPCaeF.png?ex=67c9fc96&is=67c8ab16&hm=ae650f70457e293c0e6e97ea6a48b8ace3a8ee34b817f89cb0c0cd013f9e95af&"
                        className="w-3/4 md:w-75"
                    />
                    {
                        params.get('error') ? <p className="text-red-300">{params.get('error')}</p> : <></>
                    }
                    <input
                        id="username"
                        type="text"
                        required={true}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nom d'utilisateur"
                        className="p-2 m-1 border-b-2 border-solid border-gray-600 focus:border-white w-full text-center"
                    />
                    <input
                        id="password"
                        type="password"
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        className="p-2 mt-4 m-1 border-b-2 border-solid border-gray-600 focus:border-white w-full text-center"
                    />
                    <input
                        type="submit"
                        value="Se connecter"
                        className="button blue-button"
                    />
                </div>
            </form>
        </>
    );
}

export default Login;