'use client';

import { useSearchParams } from "next/navigation";
import ErrorComponent from "../components/ErrorComponent";

const ErrorPage = () => {
    const params = useSearchParams();
    let code = params.get('error')?.split(':')[0];
    let message = params.get('error')?.split(':')[1];

    if (!code) code = '-1';
    if (!message) message = 'Something went wrong';
    
    return <ErrorComponent code={parseInt(code)} message={message}/>
};

export default ErrorPage;