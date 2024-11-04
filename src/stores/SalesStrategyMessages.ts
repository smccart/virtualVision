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
        supportiveInnerVoice:
          'I feel reassured when I know I have support as I explore my ideas, making it easier to take the next step.',
        dominantInnerVoice:
          'I need the tools to make a significant impact and want to take bold action to see results quickly.',
        influentialInnerVoice:
          'I’m inspired by the idea of creating something extraordinary that truly captivates my audience.',
        conscientiousInnerVoice:
          'I want to ensure everything is done with precision, giving me confidence in long-term success.',
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
