'use client';
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import deleteAccount from "../lib/settings/deleteAccount";

const DeleteAccountButton = () => {

    const { data: session } = useSession();
    const token = session?.accessToken;

    const handle = async () => {
        if (token) {
            deleteAccount(token)
                .catch((e : Error) => {
                    redirect('/error?error=0:' + e.message);
                })
                .then(() => {
                    signOut({
                        callbackUrl: '/login?error=Account deleted successfully'
                    });
                });
        }
    }

    return (
        <input
        onClick={handle}
        className="button danger-button" 
        type="button"
        value="Delete my account"
        />
    );
};

export default DeleteAccountButton;