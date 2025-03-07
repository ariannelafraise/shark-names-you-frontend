import Link from "next/link";

const NavigationCard = () => {
    return (
        <div className="dashboard-component">
            <h2>Navigation</h2>
            <Link 
                className="button blue-button"
                href="/masculine-names"
            >
                Masculine names
            </Link>
            <Link 
            className="button blue-button"
            href="/feminine-names"
            >
                Feminine names
            </Link>
            <Link
            className="button blue-button"
            href="/androgynous-names"
            >
                Androgynous names
            </Link>
        </div>
    );
};

export default NavigationCard;