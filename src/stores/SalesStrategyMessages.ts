import { defineStore } from 'pinia';
import { LandingPage } from './messages/LandingPage'; // Import Level 1 messages
import { TalkToDeveloper } from './messages/TalkToDeveloper'; // Import Talk to Developer messages

// Define the structure for individual message sets
export interface Message {
  [key: string]: string; // Allow any string key to access a string value
  tagline: string;
  supportiveIntro: string;
  supportiveMain: string;
  dominantIntro: string;
  dominantMain: string;
  influentialIntro: string;
  influentialMain: string;
  conscientiousIntro: string;
  conscientiousMain: string;
  supportiveWrapUpIntro: string;
  supportiveWrapUpMain: string;
  promptInfluential: string;
  promptSupportive: string;
  binaryChoiceReady: string;
  binaryChoiceExplore: string;
}

// Define the structure for the collection of messages
interface Messages {
  [key: string]: Message;
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {
      LandingPage: LandingPage,
      talkToDeveloper: TalkToDeveloper,
    } as Messages, // Enforce type safety
    currentLevel: 'LandingPage', // Default to level 1
  }),
  actions: {
    // Update the current set of messages
    setMessages(newMessages: Messages) {
      this.messages = newMessages;
    },
    // Update the current level (e.g., LandingPage, talkToDeveloper)
    setCurrentLevel(level: string) {
      this.currentLevel = level;
    },
  },
  getters: {
    // Dynamically retrieve the current set of messages based on state
    getCurrentMessages: (state): Message => {
      return state.messages[state.currentLevel];
    },
  },
});
