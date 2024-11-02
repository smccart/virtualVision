import { defineStore } from 'pinia';

interface Message {
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
}

interface Messages {
  [key: string]: Message; // Allows dynamic indexing based on levels
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {} as Messages, // Initialize as an empty object
    currentLevel: 1, // Track the current level
  }),
  actions: {
    setMessages(newMessages: Messages) {
      this.messages = newMessages; // Accepts an object with messages for each level
    },
    setCurrentLevel(level: number) {
      this.currentLevel = level; // Updates the current level
    },
  },
  getters: {
    getCurrentMessages: (state): Message => {
      return state.messages[`level${state.currentLevel}`]; // Returns the current level messages correctly
    },
  },
});
