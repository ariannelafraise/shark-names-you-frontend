'use client';

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Logout = () => {
    const { data: session, status } = useSession();

    if (status === "loading") return <></>;

    if (session) {
        signOut({
            callbackUrl: '/login?error=Logged out successfully'
        });
    } else {
        redirect('/login');
    }

    return <></>;
}

export default Logout;