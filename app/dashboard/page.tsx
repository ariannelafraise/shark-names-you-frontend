import LikesList from "../components/LikesList";

const Dashboard = () => {
    return (
        <>
            <h1 className="mt-10 text-center text-[10vw] md:text-[5vw] font-thin">Dashboard</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="bg-blue-800 flex flex-col items-center p-10 rounded-3xl m-10 w-9/10 md:w-1/2 lg:w-1/4">
                    <img
                        src="https://cdn.discordapp.com/attachments/818886030605942834/1346932977485086872/FaPCaeF.png?ex=67caa556&is=67c953d6&hm=552a6a300570bbc75a813da3795b180f4355b84de7bbf60d44064b1931dcaccb&"
                        className="w-3/4 md:w-75"
                    />
                    <LikesList/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;