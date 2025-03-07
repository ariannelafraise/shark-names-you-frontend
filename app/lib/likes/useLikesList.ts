'use client';
import useSWR from "swr";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Name } from "@/app/models/name";

const fetcher = async (endpoint: string, token: string) : Promise<Array<Name>> => {
    try {
        const res = await axios.get('http://localhost:8080' + endpoint, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return res.data;
    } catch {
        throw new Error("Could not retrieve likes");
    }
};

const useLikesList = () : {data: Array<Name> | undefined, error: Error | undefined, isLoading: boolean} => {
    const { data: session } = useSession();
    const token = session?.accessToken;

    return useSWR<Array<Name>, Error>(
        token ? ['/user/likes', token] : null,
        (args: Array<string>) => fetcher(args[0], args[1])
    );
};

export default useLikesList;