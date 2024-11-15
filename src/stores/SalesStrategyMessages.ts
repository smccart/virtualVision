import { defineStore } from 'pinia';

interface Message {
  tagline: string; // Tagline for the page or section
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
  supportiveWrapUp: string;
  prompt: string;
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
        tagline: 'All Your Business Needs, United in One Powerful Website',
        supportive:
          'We simplify your business tools, connecting everything in one place.',
        dominant:
          'Imagine a platform that sells, schedules, and showcases—all in one hub.',
        influential:
          'Engage your customers with an experience that invites them to act.',
        conscientious:
          'This isn’t just a website; it’s a tool crafted for smooth, efficient growth.',
        supportiveWrapUp:
          'Let’s make business simpler, with a website that empowers connection and action.',
        prompt: 'Ready to explore a connected site? Choose your next step.',
        binaryChoiceReady: "I'm ready to see what’s possible.",
        binaryChoiceExplore: 'I’d like to explore more options.',
      },
    } as Messages,
    currentLevel: 1,
    selectedInnerVoice: 'supportive',
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
