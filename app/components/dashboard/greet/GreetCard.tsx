import useUsername from "../../../lib/user/useUsername";

const GreetCard = () => {

    const { data, error, isLoading } = useUsername();

    if (error) return <></>;

    return (
        <div className="dashboard-component">
            {isLoading ? <h2>...</h2> : <h2>Bonjour {data}!</h2>}
        </div>
    );
};

export default GreetCard;