'use client';

import { Alert } from "flowbite-react"

interface ErrorInputsProps {
    type: any;
    title: any;
    message: any;
}

export const ErrorInputs: React.FC<ErrorInputsProps> = ({ type, message }) => {
    return (
        <Alert color={type} rounded>
            {message}
        </Alert>
    )
}