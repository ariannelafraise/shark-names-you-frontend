'use client';
import { UnknownError } from "@/app/errors";
import axios from "axios";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = async (endpoint: string, token: string) : Promise<string> => {
    try {
        const res = await axios.get('http://localhost:8080' + endpoint, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        return res.data;
    } catch {
        throw new UnknownError();
    }
};

const useUsername = () => {
    const { data: session } = useSession();
    const token = session?.accessToken;

    return useSWR<string | undefined, Error>(token ? ['/user/username', token] : null, (args: Array<string>) => fetcher(args[0], args[1]));
};

export default useUsername;