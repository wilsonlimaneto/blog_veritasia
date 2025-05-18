---
title: "Integrating Genkit for AI-Powered Features"
description: "A practical guide to integrating Genkit into your Next.js application to leverage powerful AI models for various tasks."
date: "2025-04-25"
image: "Genkit+Integration"
author: "Cristian Brutten"
---

## Introduction to Genkit

Genkit is a powerful toolkit for building AI-driven applications. It simplifies interaction with various AI models and provides a structured way to manage AI flows.

### Setting up Genkit

Ensure you have Genkit and the necessary provider plugins installed.

\`\`\`bash
npm install genkit @genkit-ai/googleai
\`\`\`

### Defining a Simple Flow

Here's an example of a basic Genkit flow:

\`\`\`typescript
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MyInputSchema = z.object({ query: z.string() });
const MyOutputSchema = z.object({ result: z.string() });

const myFlow = ai.defineFlow(
  {
    name: 'mySimpleFlow',
    inputSchema: MyInputSchema,
    outputSchema: MyOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
      prompt: \`Respond to: \${input.query}\`,
    });
    return { result: llmResponse.text() };
  }
);

export async function runMyFlow(query: string) {
  return myFlow({ query });
}
\`\`\`

> Genkit streamlines the development of AI features, making your application smarter and more capable.
