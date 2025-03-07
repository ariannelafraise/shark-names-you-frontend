'use client';

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            signOut({
                callbackUrl: '/login?error=Logged out successfully'
            });
        } else {
            redirect('/login');
        }
    }, [session]);

    return <></>;
}

export default Logout;