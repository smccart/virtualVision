import { defineStore } from 'pinia';
import { Level1 } from './messages/Level1'; // Import Level 1 messages
import { TalkToDeveloper } from './messages/TalkToDeveloper'; // Import Talk to Developer messages

// Define the structure for individual message sets
export interface Message {
  tagline: string; // Tagline for the page or section
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
  promptInfluential: string; // First part of the prompt with influential tone
  promptSupportive: string; // Second part of the prompt with supportive tone
  binaryChoiceReady: string; // Binary choice for visitors ready to move forward
  binaryChoiceExplore: string; // Binary choice for visitors wanting to explore
}

// Define the structure for the collection of messages
interface Messages {
  [key: string]: Message;
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {
      level1: Level1,
      talkToDeveloper: TalkToDeveloper,
    } as Messages, // Enforce type safety
    currentLevel: 'level1', // Default to level 1
    selectedInnerVoice: 'supportive', // Default to supportive tone
  }),
  actions: {
    // Update the current set of messages
    setMessages(newMessages: Messages) {
      this.messages = newMessages;
    },
    // Update the current level (e.g., level1, talkToDeveloper)
    setCurrentLevel(level: string) {
      this.currentLevel = level;
    },
    // Update the selected tone (e.g., supportive, dominant, etc.)
    setSelectedInnerVoice(innerVoice: string) {
      this.selectedInnerVoice = innerVoice;
    },
  },
  getters: {
    // Dynamically retrieve the current set of messages based on state
    getCurrentMessages: (state): Message => {
      return state.messages[state.currentLevel];
    },
  },
});
