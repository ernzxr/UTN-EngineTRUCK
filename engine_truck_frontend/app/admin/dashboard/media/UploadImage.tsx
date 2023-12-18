'use client';

import { MediaCreate } from '@/lib/services/interfaces/media';
import { FileInput, Label } from 'flowbite-react';
import { useState } from 'react';

interface UploadImageProps {
    onFileChange: (media: MediaCreate) => void;
}

export const UploadImage: React.FC<UploadImageProps> = ({ onFileChange }) => {
    const handleFileChange = (event: any) => {
        const file = event.target.files?.[0] || null;

        if (file) {
            const mediaObject: MediaCreate = ({
                file,
                media_type: 1,
            });
            onFileChange(mediaObject);
        }
    };

    return (
        <div>
            <div>
                <Label htmlFor="file-upload-helper-text" value="Subir imagen" />
            </div>
            <FileInput onChange={handleFileChange} id="file-upload-helper-text" helperText="PNG, JPG, JPEG o WEBP (MAX. 800x400px)." />
        </div>
    );
}