'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a brief description for sponsors.
 *
 * @fileOverview This file defines a Genkit flow to generate a brief description for sponsors.
 * - generateSponsorDescription - A function that generates a description for a sponsor.
 * - GenerateSponsorDescriptionInput - The input type for the generateSponsorDescription function.
 * - GenerateSponsorDescriptionOutput - The return type for the generateSponsorDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSponsorDescriptionInputSchema = z.object({
  sponsorName: z.string().describe('The name of the sponsor.'),
  sponsorActivity: z.string().describe('The activity of the sponsor.'),
});
export type GenerateSponsorDescriptionInput = z.infer<typeof GenerateSponsorDescriptionInputSchema>;

const GenerateSponsorDescriptionOutputSchema = z.object({
  description: z.string().describe('A one-paragraph description of the sponsor.'),
});
export type GenerateSponsorDescriptionOutput = z.infer<typeof GenerateSponsorDescriptionOutputSchema>;

export async function generateSponsorDescription(
  input: GenerateSponsorDescriptionInput
): Promise<GenerateSponsorDescriptionOutput> {
  return generateSponsorDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSponsorDescriptionPrompt',
  input: {schema: GenerateSponsorDescriptionInputSchema},
  output: {schema: GenerateSponsorDescriptionOutputSchema},
  prompt: `You are a marketing expert tasked with creating a brief, engaging description for sponsors of an event.

  Given the sponsor's name and activity, generate a single paragraph description suitable for display on a website.

  Sponsor Name: {{{sponsorName}}}
  Sponsor Activity: {{{sponsorActivity}}}

  Description:`,
});

const generateSponsorDescriptionFlow = ai.defineFlow(
  {
    name: 'generateSponsorDescriptionFlow',
    inputSchema: GenerateSponsorDescriptionInputSchema,
    outputSchema: GenerateSponsorDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
