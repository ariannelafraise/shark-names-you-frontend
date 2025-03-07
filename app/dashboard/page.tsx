'use client';
import { useSession } from "next-auth/react";
import LikesList from "../components/dashboard/likes/LikesList";
import NavigationCard from "../components/dashboard/navigation/NavigationCard";
import { redirect } from "next/navigation";
import AccountCard from "../components/dashboard/account/AccountCard";
import GreetCard from "../components/dashboard/greet/GreetCard";

const Dashboard = () => {

    const {data: session, status} = useSession();

    if (status == "unauthenticated") redirect('/login');

    if (status == "loading") return <></>;

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
                <img
                    src="https://cdn.discordapp.com/attachments/818886030605942834/1346932977485086872/FaPCaeF.png?ex=67caa556&is=67c953d6&hm=552a6a300570bbc75a813da3795b180f4355b84de7bbf60d44064b1931dcaccb&"
                    className="w-1/2 md:w-75"
                />
                <h1>Tableau de bord</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center p-10 rounded-3xl w-full xl:w-9/10">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                        <NavigationCard/>
                        <GreetCard/>
                        <AccountCard/>
                    </div>

                    <LikesList/>

                </div>
            </div>
        </>
    );
}

export default Dashboard;