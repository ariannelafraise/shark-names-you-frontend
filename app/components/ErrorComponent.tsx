import React from "react";

interface Props {
    code: number,
    message: string
}

const ErrorComponent: React.FC<Props> = ({ code, message }) => {
    return(
        <>
            <h1>Something went wrong!</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="bg-blue-800 flex flex-col items-center p-10 rounded-3xl m-10 w-9/10 md:w-1/2 lg:w-1/4">
                    <img
                        src="https://cdn.discordapp.com/attachments/818886030605942834/1346932957365014568/6xXiSZg.png?ex=67c9fc91&is=67c8ab11&hm=9b64258f43da67a1aae98e7c9ba1d2e9f0a30184ca8770846a2434d65e610776&"
                        className="w-3/4 md:w-75"
                    />
                    {code == 0 ? <></> : <p>{code}</p>}
                    <p>{message}</p>
                </div>
            </div>
        </>
    );
};

export default ErrorComponent;