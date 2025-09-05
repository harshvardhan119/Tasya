
interface Base64ConversionResult {
    base64Data: string;
    mimeType: string;
}

export const fileToBase64 = (file: File): Promise<Base64ConversionResult> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            // The result includes the data URL prefix (e.g., "data:image/png;base64,"), which we need to remove.
            const [header, base64Data] = result.split(',');

            if (!base64Data) {
                reject(new Error("Could not parse file data."));
                return;
            }

            const mimeTypeMatch = header.match(/:(.*?);/);
            if (!mimeTypeMatch || !mimeTypeMatch[1]) {
                reject(new Error("Could not determine file MIME type."));
                return;
            }
            
            resolve({ base64Data, mimeType: mimeTypeMatch[1] });
        };
        reader.onerror = error => reject(error);
    });
};
