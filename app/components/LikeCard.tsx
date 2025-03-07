import React from "react";
import { Name } from "../models/name";

interface Props {
    name: Name
}

const LikeCard: React.FC<Props> = ({ name }) => {
    return (
        <div className="bg-blue-700 flex flex-col md:flex-row items-center p-4 rounded-3xl text-center m-2 w-full">
            <p className="md:w-1/3">{name.name}</p>
            <p className="md:w-1/3">{name.totalUsage}</p>
            <p className="md:w-1/3">{name.binaryGender}</p>
        </div>
    );
};

export default LikeCard;