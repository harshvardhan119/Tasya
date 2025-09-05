
import React, { useState, useCallback } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { ImageViewer } from './components/ImageViewer';
import { Spinner } from './components/Spinner';
import { ErrorDisplay } from './components/ErrorDisplay';
import { generateArtShowcase } from './services/geminiService';
import { fileToBase64 } from './utils/fileUtils';

const App: React.FC = () => {
    const [originalImageFile, setOriginalImageFile] = useState<File | null>(null);
    const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleImageUpload = (file: File) => {
        setOriginalImageFile(file);
        setOriginalImageUrl(URL.createObjectURL(file));
        setGeneratedImageUrl(null);
        setError(null);
    };

    const handleGenerateClick = useCallback(async () => {
        if (!originalImageFile) {
            setError("Please upload an image first.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setGeneratedImageUrl(null);

        try {
            const { base64Data, mimeType } = await fileToBase64(originalImageFile);
            const showcaseImageBase64 = await generateArtShowcase(base64Data, mimeType);
            setGeneratedImageUrl(`data:${mimeType};base64,${showcaseImageBase64}`);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : "An unknown error occurred during image generation.");
        } finally {
            setIsLoading(false);
        }
    }, [originalImageFile]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 sm:p-8 font-sans">
            <div className="container mx-auto max-w-7xl">
                <header className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                        AI Art Showcase Generator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Transform your art into a gallery-ready masterpiece.
                    </p>
                </header>

                <main className="flex flex-col items-center">
                    <div className="w-full max-w-md mb-8">
                        <ImageUploader onImageUpload={handleImageUpload} disabled={isLoading} />
                        <button
                            onClick={handleGenerateClick}
                            disabled={!originalImageFile || isLoading}
                            className="mt-4 w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:dark:bg-gray-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                        >
                            {isLoading ? 'Generating...' : 'Generate Showcase'}
                        </button>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Original Art</h2>
                            {originalImageUrl ? (
                                <ImageViewer src={originalImageUrl} alt="Original art piece" />
                            ) : (
                                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                                    Upload an image to begin
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Showcased Art</h2>
                            <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                                {isLoading && <Spinner />}
                                {error && !isLoading && <ErrorDisplay message={error} />}
                                {generatedImageUrl && !isLoading && !error && (
                                    <ImageViewer src={generatedImageUrl} alt="AI generated showcase of the art piece" />
                                )}
                                {!isLoading && !error && !generatedImageUrl && (
                                    <div className="text-center text-gray-500 dark:text-gray-400 p-4">
                                        Your generated image will appear here.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
