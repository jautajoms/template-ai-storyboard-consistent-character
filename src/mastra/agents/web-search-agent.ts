import { Agent } from '@mastra/core/agent';
import { google } from '@ai-sdk/google';
import { createAgentMemory } from '../memory-config';

export const webSearchAgent = new Agent({
  name: 'web-search',
  description: 'Web search agent (stub - web search not available in this template)',
  memory: createAgentMemory(),
  instructions: `You are a web search agent stub. Web search functionality is not available in this storyboard generation template.

If users need web search capabilities, they should use a different Mastra template or add web search tools to this project.

For storyboard generation, please use the available agents:
- scriptGeneratorAgent: Creates screenplays from story ideas
- storyboardAgent: Converts scripts to visual storyboards
- imageGeneratorAgent: Generates images for storyboard scenes
- exportAgent: Exports storyboards to PDF and other formats
- pdfUploadAgent: Uploads PDFs to cloud storage`,
  model: google('gemini-2.5-flash'),
});
