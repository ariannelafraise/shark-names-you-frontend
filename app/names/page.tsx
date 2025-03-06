'use client';
import { useSession } from "next-auth/react";
import axios from "axios";
import { useState, useEffect } from "react";

const Names = () => {
    const { data: session } = useSession();

    const [name, setName] = useState(null);

    const getName = async () => {
        return axios.get(
            'http://localhost:8080/name/feminine',
            {
                headers: {
                    'Authorization': "Bearer " + session?.accessToken
                }
            }
        ).then(res => setName(res.data));
    }

    useEffect(() => {
        if (session) {
            getName();
        }
    }, [session]);


    if (name) {
        return (
            <>
                <img src="https://media.discordapp.net/attachments/818886030605942834/1346932977485086872/FaPCaeF.png?ex=67c9fc96&is=67c8ab16&hm=ae650f70457e293c0e6e97ea6a48b8ace3a8ee34b817f89cb0c0cd013f9e95af&=&format=webp&quality=lossless&width=476&height=476"/>
                <p>{name["name"]}</p>
                
            </>
        );
    }

    return <p>...</p>;

}

export default Names;