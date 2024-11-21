import { defineStore } from 'pinia';
import { LandingPage } from './messages/LandingPage'; // Import Landing Page messages
import { TalkToDeveloper } from './messages/TalkToDeveloper'; // Import Talk to Developer messages

// Define the structure for individual message sets
export interface Message {
  tagline: string;
  supportiveIntro: string;
  supportiveMain: string;
  dominantSupportiveIntro: string;
  dominantMain: string;
  influentialSupportiveIntro: string;
  influentialMain: string;
  conscientiousSupportiveIntro: string;
  conscientiousMain: string;
  supportiveWrapUpIntro: string;
  supportiveWrapUpMain: string;
  promptInfluential: string;
  promptSupportive: string;
  binaryChoiceReadySupportiveInfluential: string;
  binaryChoiceExploreSupportiveConscientious: string;
}

// Define the structure for the collection of messages
interface Messages {
  [key: string]: Message;
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {
      LandingPage: LandingPage, // Ensure key matches usage in other files
      talkToDeveloper: TalkToDeveloper,
    } as Messages, // Enforce type safety
    currentLevel: 'LandingPage', // Default to Landing Page
  }),
  actions: {
    // Update the current set of messages
    setMessages(newMessages: Messages) {
      this.messages = newMessages;
    },
    // Update the current level (e.g., LandingPage, talkToDeveloper)
    setCurrentLevel(level: string) {
      if (this.messages[level]) {
        this.currentLevel = level; // Only set if the level exists
      } else {
        console.warn(`Invalid level: ${level}`); // Debugging message
      }
    },
  },
  getters: {
    // Dynamically retrieve the current set of messages based on state
    getCurrentMessages: (state): Message => {
      return state.messages[state.currentLevel] || {}; // Fallback for invalid levels
    },
  },
});
