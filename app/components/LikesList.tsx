import LikeCard from "./LikeCard";
import { Name } from "../models/name";
import useLikesList from "../lib/likes/useLikesList";

const LikesList = () => {

    const { data, error, isLoading } = useLikesList();

    if (isLoading) return <p>...</p>;

    if (error) return <p className="text-red-300">{error.message}</p>;

    if (data) {
        return (
            data.length > 0
            ?
            <div className="dashboard-component dashboard-solo">
                <h2>My Likes</h2>
                {data.map((name : Name) => <LikeCard key={name.name} name={name}/>)}
            </div>
            :
            <p>You have not liked any names yet!</p>
        );
    }
};

export default LikesList;