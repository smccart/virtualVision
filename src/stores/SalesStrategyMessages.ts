import { defineStore } from 'pinia';

interface Message {
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

interface Messages {
  [key: string]: Message;
}

export const useSalesStrategyMessages = defineStore('salesStrategyMessages', {
  state: () => ({
    messages: {
      level1: {
        tagline: 'All Your Business Needs, United in One Powerful Website',

        supportiveIntro:
          'We understand the challenges of juggling multiple tools for your business.',
        supportiveMain:
          'Let’s simplify everything into one platform that works for you.',

        dominantIntro:
          'Your business deserves a professional site that does more than look good.',
        dominantMain:
          'Imagine a hub that sells, schedules, and builds your authority.',

        influentialIntro:
          'Your customers want more than a website; they want an engaging experience.',
        influentialMain:
          'Let’s create something that invites them to connect and take action.',

        conscientiousIntro:
          'A connected platform isn’t just convenient—it’s strategic.',
        conscientiousMain:
          'We’ll craft a tool to help your business grow smoothly and efficiently.',

        supportiveWrapUpIntro:
          'Your business deserves simplicity and growth in one package.',
        supportiveWrapUpMain:
          'Let’s build a site that inspires connection and drives action.',

        promptInfluential: 'Ready to take the first step?', // Influential part of the prompt
        promptSupportive: 'Let’s explore what’s next.', // Supportive part of the prompt

        binaryChoiceReady: 'Sounds interesting. How could we start?',
        binaryChoiceExplore:
          'I’m not even sure I need this. Let me learn more.',
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
