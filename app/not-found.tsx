import ErrorComponent from "@/app/components/ErrorComponent";

const Custom404 = () => {
    return(<ErrorComponent code={404} message="Couldn't find the page you requested..."/>);
};

export default Custom404;