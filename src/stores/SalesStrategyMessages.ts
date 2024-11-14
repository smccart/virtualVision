import { defineStore } from 'pinia';

interface Message {
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
        supportive:
          'Running a business means managing so many moving parts. Often, a website alone isn’t enough—you need to handle social media, payments, scheduling, and follow-ups across multiple tools. We bring everything together in one place.',
        dominant:
          'Imagine a site that does more than look good. It’s your all-in-one platform for telling your story, letting clients book sessions, and making sales—all from a single, easy-to-use hub.',
        influential:
          "We help you create an experience that keeps your customers engaged, answers their questions, and lets them take action—whether it's learning more about what you do or booking a session right away.",
        conscientious:
          'This isn’t just a basic website. It’s a thoughtfully designed tool that supports your business, handling everything from scheduling to payments smoothly and simply.',
        supportiveWrapUp:
          'We’re here to make business easier by giving you one simple platform instead of a bunch of disconnected tools. Let’s turn your website into a place where your customers can connect and take action.',
        prompt:
          'Ready to explore what a truly connected site can do for you? Choose the path that feels right for your next step.',

        // These two existing fields will be used for the button labels
        binaryChoiceReady: 'I’m ready to see what’s possible.',
        binaryChoiceExplore:
          'I’d like to learn more and see if we’re a good fit.',
      },
      // Additional levels can be added similarly if needed
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
