import { defineStore } from 'pinia';

interface Message {
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
  supportiveWrapUp: string;
  prompt: string; // New prompt displayed after the supportive wrap-up
  binaryChoiceReady: string; // Binary choice for visitors ready to move forward
  binaryChoiceExplore: string; // Binary choice for visitors wanting to explore
}

interface Messages {
  [key: string]: Message;
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {
      level1: {
        supportive:
          "We understand that managing a do-it-yourself website can be overwhelming, especially when you're already juggling countless responsibilities.",
        dominant:
          'You deserve a website that positions you as an authority in your industry, actively supporting your business growth and helping you connect with customers more effectively.',
        influential:
          'Imagine a website that represents your brand beautifully, attracts new customers seamlessly, and simplifies your daily operations.',
        conscientious:
          "A well-crafted, professional website isn't just another item on your checklist; it's a strategic business tool that ensures your growth and success with precision.",
        supportiveWrapUp:
          "Whether you're exploring your options or ready to elevate your website to the next level, we're here to make it happen alongside you. This is your journey, and it's your choice.",
        prompt:
          'Choose the statement below that feels right to you and best captures your inner voice.',
        binaryChoiceReady:
          'I’m ready to see what the next step would look like.',
        binaryChoiceExplore:
          'I want to explore more to see if this is the right fit.',
      },
      // Additional levels can be added similarly if needed
    } as Messages,
    currentLevel: 1,
    selectedInnerVoice: 'supportive', // Tracks the user's selected tone
  }),
  actions: {
    setMessages(newMessages: Messages) {
      this.messages = newMessages;
    },
    setCurrentLevel(level: number) {
      this.currentLevel = level;
    },
    setSelectedInnerVoice(innerVoice: string) {
      this.selectedInnerVoice = innerVoice;
    },
  },
  getters: {
    getCurrentMessages: (state): Message => {
      return state.messages[`level${state.currentLevel}`];
    },
  },
});
