'use client';

import React, { useState } from 'react'
import ComponentCreateComponent from './ComponentCreateComponent';
import ComponentCreateMedia from './ComponentCreateMedia';
import { Button, Modal } from 'flowbite-react';
import ComponentCompatibleEngines from './ComponentCompatibleEngines';

const ComponentOpenModal = () => {
    const [componentId, setComponentId] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleCloseModal = () => {
        setCurrentStep(1);
        setOpenModal(false);
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <ComponentCreateComponent setComponentId={setComponentId} onNext={handleNext} onCancel={handleCloseModal} />;
            case 2:
                return <ComponentCompatibleEngines componentId={componentId} onNext={handleNext} onCancel={handleCloseModal} />;
            case 3:
                return <ComponentCreateMedia componentId={componentId} onFinish={handleCloseModal} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Crear</Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body className="max-h-[80vh] overflow-y-auto">
                    {renderCurrentStep()}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ComponentOpenModal