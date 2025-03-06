'use client'
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const LikesList = () => {

    const { data: session, status } = useSession();

    const [likedNames, setLikedNames] = useState(null);

    const get = async () => {
        const res = await axios.get('http://localhost:8080/user/likes', {
            headers: {
                Authorization: "Bearer " + session?.accessToken
            }
        });
        setLikedNames(res.data);
    };

    useEffect(() => {
        if (session) get();
    } , [session]);

    if (status == "loading") return <><p>...</p></>;

    return (
            likedNames ? <>
                {likedNames.map(name => <p key={name.name}>{name.name}</p>)}
            </>
            :
            <></>
    );
};

export default LikesList;