import { defineStore } from 'pinia';

interface Message {
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
  SDC: string; // Add SDC message
  SIC: string; // Add SIC message
}

interface Messages {
  [key: string]: Message; // Allows dynamic indexing based on levels
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {
      level1: {
        supportive:
          'We understand the dreams you’ve been holding onto, and we’re here to guide you every step of the way.',
        dominant:
          'Your vision deserves to be realized, and we’re ready to give you the tools to make an impact.',
        influential:
          'Imagine captivating your audience with something extraordinary, something only you can bring to life.',
        conscientious:
          'Every project we craft is built with precision, ensuring a foundation that sets you up for long-term success.',
        SDC: 'I would feel more confident knowing I have support as I explore my next big idea, and it’s comforting to know there’s a strong foundation I can trust.', // SDC button message
        SIC: 'I would like having the comfort of knowing I can create something impactful, and I feel inspired by the thought of crafting something that truly resonates, all while keeping the details in check.', // SIC button message
      },
      // Add more levels as needed...
    } as Messages,
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
