import Link from "next/link";
import DeleteAccountButton from "./DeleteAccountButton";

const AccountCard = () => {
    return (
        <div className="dashboard-component">
            <h2>Compte</h2>
            <Link className="button danger-button" href="/logout">Déconnexion</Link>
            <DeleteAccountButton/>
        </div>
    );
};

export default AccountCard;