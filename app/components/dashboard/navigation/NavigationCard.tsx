import Link from "next/link";

const NavigationCard = () => {
    return (
        <div className="dashboard-component">
            <h2>Navigation</h2>
            <Link 
                className="button blue-button"
                href="/masculine-names"
            >
                Noms masculins
            </Link>
            <Link 
            className="button blue-button"
            href="/feminine-names"
            >
                Noms féminins
            </Link>
            <Link
            className="button blue-button"
            href="/neutral-names"
            >
                Noms neutres
            </Link>
        </div>
    );
};

export default NavigationCard;