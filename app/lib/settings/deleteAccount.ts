import axios from "axios";
import { UnknownError } from "@/app/errors";

const deleteAccount = async (token: string) : Promise<void> => {
    try {
        await axios.delete('http://localhost:8080/user/delete', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
    }
    catch {
        throw new UnknownError();
    }
};

export default deleteAccount;