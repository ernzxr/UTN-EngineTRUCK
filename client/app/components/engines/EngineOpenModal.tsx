'use client';

import React, { useState } from 'react'
import EngineCreateEngine from './EngineCreateEngine';
import EngineCreateImage from './EngineCreateImage';
import EngineCreateFeatures from './EngineCreateFeatures';
import { Button, Modal } from 'flowbite-react';

const EngineOpenModal = () => {
    const [engineId, setEngineId] = useState(0);
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
                return <EngineCreateEngine setEngineId={setEngineId} onNext={handleNext} onCancel={handleCloseModal} />;
            case 2:
                return <EngineCreateFeatures engineId={engineId} onNext={handleNext} onCancel={handleCloseModal} />;
            case 3:
                return <EngineCreateImage engineId={engineId} onFinish={handleCloseModal} />;
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

export default EngineOpenModal