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
          'We know how overwhelming it feels to juggle tools for scheduling, payments, and customer management.',
        supportiveMain:
          'Let’s simplify everything into one seamless platform, so you can focus on growing your business.',

        dominantIntro:
          'Your business deserves more than a good-looking website—it needs a powerful, professional tool.',
        dominantMain:
          'Imagine a hub that not only sells and schedules but also positions you as a leader in your field.',

        influentialIntro:
          'Your customers want more than information—they want an experience that keeps them coming back.',
        influentialMain:
          'Let’s create a site that invites them to connect, explore, and take action with confidence.',

        conscientiousIntro:
          'Building a connected platform isn’t just convenient—it’s a smarter way to grow.',
        conscientiousMain:
          'We’ll design a tool that supports your goals, keeps your processes smooth, and drives long-term success.',

        supportiveWrapUpIntro:
          'Your business deserves simplicity and growth in one package.',
        supportiveWrapUpMain:
          'Let’s build a site that inspires connection, streamlines your tools, and drives action.',

        promptInfluential: 'Curious to see what’s possible?', // Influential part of the prompt
        promptSupportive: 'Let’s take the first step together.', // Supportive part of the prompt

        binaryChoiceReady: 'Sounds interesting. How would we start?',
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
