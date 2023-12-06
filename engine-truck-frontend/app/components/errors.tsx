'use client';

import { Alert } from "flowbite-react"

export const ErrorInputs = ({type, title, message}) => {
    return (
        <Alert color={type} rounded>
            <span className="font-medium">{title}</span> {message}
        </Alert>
    )
}