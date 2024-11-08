interface Message {
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
  supportiveWrapUp: string;
  prompt: string;
  innerVoices: {
    sdc: {
      supportive: string;
      dominant: string;
      conscientious: string;
    };
    sic: {
      supportive: string;
      influential: string;
      conscientious: string;
    };
  };
  pathTransitions: {
    sdc: {
      dominant: string;
    };
    sic: {
      influential: string;
    };
  };
}

interface Messages {
  [key: string]: Message;
}

import { defineStore } from 'pinia';

interface SalesStrategyState {
  messages: Messages;
  currentLevel: number;
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {
      level1: {
        /* Hero's Journey Step: Introduce the current situation, acknowledging the user's challenges.
           Sales Step: Take immediate control and establish a sense of support and readiness to help. */

        supportive:
          'We understand that managing a do-it-yourself website all by yourself can be overwhelming, especially when you have countless other responsibilities.',
        dominant:
          'You deserve a website that actively supports your business growth instead of holding you back, helping you connect with customers more effectively.',
        influential:
          'Imagine a website that represents your brand beautifully and works seamlessly to attract new customers and simplify your day-to-day.',
        conscientious:
          'A well-crafted, professional website isn’t just another item on your list; it’s a strategic business tool designed to help you grow and succeed.',

        supportiveWrapUp:
          "Whether you're exploring your options or ready to take your website to the next level, we're here to help you make it happen. This is your journey, and it's your choice.",
        prompt:
          'Choose the path that feels closest to where you are right now.',

        innerVoices: {
          sdc: {
            supportive: 'I can feel that my website has untapped potential.',
            dominant:
              'It looks like the right time to take meaningful steps to improve it.',
            conscientious:
              'I want to make sure it works well, with the right support guiding me.',
          },
          sic: {
            supportive:
              'I am interested in exploring how enhancing my website can help my business grow.',
            influential:
              'It sounds like taking these thoughtful steps will make a positive difference.',
            conscientious:
              'I want everything to work smoothly, with expert guidance ensuring that each part fits well.',
          },
        },

        pathTransitions: {
          sdc: {
            supportive:
              'We are excited to guide you as you take this significant step to enhance your website.',
            dominant:
              'Your proactive choice shows you are ready to make impactful improvements and take meaningful action.',
          },
          sic: {
            supportive:
              'We are here to support you as you begin making thoughtful changes to improve your website.',
            influential:
              'With thoughtful progress, your vision will start to take shape step by step, aligning with your goals.',
          },
        },
      },
      // Add more levels as needed...
    } as Messages,
    currentLevel: 1,
  }),
  actions: {
    setMessages(newMessages: Messages) {
      this.$state.messages = newMessages;
    },
    setCurrentLevel(level: number) {
      this.currentLevel = level;
    },
  },
  getters: {
    getCurrentMessages: (state: SalesStrategyState): Message => {
      return state.messages[`level${state.currentLevel}`];
    },
  },
});
