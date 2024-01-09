'use client'

import React from 'react'
import { Modal } from 'flowbite-react'


const FeatureCreateModal = ({ closeFeatureCreateModal, featureCreateModal}) => {
  return (
    <form>
        <Modal show={featureCreateModal} size="md" onClose={closeFeatureCreateModal} popup>
                <Modal.Header />
                <Modal.Body className="max-h-[80vh] overflow-y-auto">
                    <form className="space-y-6">
                       <div>hola</div>
                    </form>
                </Modal.Body>
            </Modal>


    </form>
  )
}

export default FeatureCreateModal