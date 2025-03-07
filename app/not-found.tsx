import ErrorComponent from "@/app/components/ErrorComponent";

const Custom404 = () => {
    return(<ErrorComponent code={404} message="Cette page n'existe pas!"/>);
};

export default Custom404;