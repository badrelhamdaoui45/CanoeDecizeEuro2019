'use server';

/**
 * @fileOverview This file defines a Genkit flow to enhance the quality of an image using GenAI.
 *
 * - enhancePhotoQuality - A function that enhances the quality of a given photo.
 * - EnhancePhotoQualityInput - The input type for the enhancePhotoQuality function.
 * - EnhancePhotoQualityOutput - The return type for the enhancePhotoQuality function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const EnhancePhotoQualityInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo to be enhanced, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type EnhancePhotoQualityInput = z.infer<typeof EnhancePhotoQualityInputSchema>;

const EnhancePhotoQualityOutputSchema = z.object({
  enhancedPhotoDataUri: z
    .string()
    .describe(
      'The enhanced photo as a data URI with MIME type and Base64 encoding.'
    ),
});
export type EnhancePhotoQualityOutput = z.infer<typeof EnhancePhotoQualityOutputSchema>;

export async function enhancePhotoQuality(
  input: EnhancePhotoQualityInput
): Promise<EnhancePhotoQualityOutput> {
  return enhancePhotoQualityFlow(input);
}

const enhancePhotoQualityPrompt = ai.definePrompt({
  name: 'enhancePhotoQualityPrompt',
  input: {schema: EnhancePhotoQualityInputSchema},
  output: {schema: EnhancePhotoQualityOutputSchema},
  prompt: [
    {media: {url: '{{{photoDataUri}}}'}},
    {
      text: 'Enhance the quality of this photo, improving its contrast and sharpness. Return the enhanced photo as a data URI.',
    },
  ],
  model: 'googleai/gemini-2.5-flash-image-preview',
  config: {
    responseModalities: ['TEXT', 'IMAGE'],
  },
});

const enhancePhotoQualityFlow = ai.defineFlow(
  {
    name: 'enhancePhotoQualityFlow',
    inputSchema: EnhancePhotoQualityInputSchema,
    outputSchema: EnhancePhotoQualityOutputSchema,
  },
  async input => {
    const {media} = await enhancePhotoQualityPrompt(input);
    return {enhancedPhotoDataUri: media!.url!};
  }
);
