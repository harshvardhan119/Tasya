
import { GoogleGenAI, Modality } from "@google/genai";

const PROMPT = `Showcase the provided image beautifully on a minimalistic gray slate textured backdrop. Apply soft, professional studio lighting focused on the main subject of the image, enhancing clarity, depth, and contrast. Ensure the original content of the image remains intact and unchanged, while the background and lighting create a premium, gallery-style presentation.`;

export const generateArtShowcase = async (base64ImageData: string, mimeType: string): Promise<string> => {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable is not set.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image-preview',
        contents: {
            parts: [
                {
                    inlineData: {
                        data: base64ImageData,
                        mimeType: mimeType,
                    },
                },
                {
                    text: PROMPT,
                },
            ],
        },
        config: {
            responseModalities: [Modality.IMAGE, Modality.TEXT],
        },
    });

    // Find the image part in the response
    const imagePart = response.candidates?.[0]?.content?.parts?.find(part => part.inlineData);

    if (imagePart && imagePart.inlineData) {
        return imagePart.inlineData.data;
    }

    throw new Error("No image was generated. The model may have returned only text or an error.");
};
