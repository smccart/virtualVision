import { defineStore } from 'pinia';

interface Message {
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
  supportiveInnerVoice: string;
  dominantInnerVoice: string;
  influentialInnerVoice: string;
  conscientiousInnerVoice: string;
  prompt: string; // Added prompt for dynamic management
}

interface Messages {
  [key: string]: Message;
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
        supportiveInnerVoice:
          'I feel confident when I have support exploring new ideas.',
        dominantInnerVoice:
          'I need tools to make a big impact and take bold action.',
        influentialInnerVoice:
          'I’m inspired to create something extraordinary.',
        conscientiousInnerVoice:
          'I want to ensure everything is done with precision.',
        prompt:
          'Pick the statement that speaks to your heart and reflects your inner voice the most.', // Short and concise prompt
      },
      // Add more levels if needed...
    } as Messages,
    currentLevel: 1,
  }),
  actions: {
    setMessages(newMessages: Messages) {
      this.messages = newMessages;
    },
    setCurrentLevel(level: number) {
      this.currentLevel = level;
    },
  },
  getters: {
    getCurrentMessages: (state): Message => {
      return state.messages[`level${state.currentLevel}`];
    },
  },
});
