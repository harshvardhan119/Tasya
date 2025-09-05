
import React from 'react';

interface ImageViewerProps {
    src: string;
    alt: string;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt }) => {
    return (
        <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-contain" 
            />
        </div>
    );
};
