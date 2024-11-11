import { defineStore } from 'pinia';

interface Message {
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
  supportiveWrapUp: string;
  supportiveInnerVoice: string;
  dominantInnerVoice: string;
  influentialInnerVoice: string;
  conscientiousInnerVoice: string;
  prompt: string;
  feedbackSegueSupportive: string;
  feedbackSegueDominant: string;
  feedbackSegueInfluential: string;
  feedbackSegueConscientious: string;
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
        supportiveInnerVoice:
          'I feel confident when I have support exploring new ideas.',
        dominantInnerVoice:
          'I need tools to make a big impact and take bold action.',
        influentialInnerVoice:
          'I’m inspired to create something extraordinary.',
        conscientiousInnerVoice:
          'I want to ensure everything is done with precision.',
        prompt:
          'Pick the statement that speaks to your heart and reflects your inner voice the most.',
        feedbackSegueSupportive:
          'We understand the importance of having the right support, and we’ll continue to be by your side every step of the way.',
        feedbackSegueDominant:
          'We’re excited to help you make bold moves and achieve the impact you desire.',
        feedbackSegueInfluential:
          'We love your passion for creating something extraordinary, and we’re here to help make it happen.',
        feedbackSegueConscientious:
          'We appreciate your dedication to precision, and we’re committed to ensuring every detail aligns perfectly with your vision.',
      },
      // Removed level2 to focus on level1 for now
    } as Messages,
    currentLevel: 1,
    selectedInnerVoice: 'supportive', // Added this line to track the user's selected inner voice
  }),
  actions: {
    setMessages(newMessages: Messages) {
      this.$state.messages = newMessages;
    },
    setCurrentLevel(level: number) {
      this.currentLevel = level;
    },
    setSelectedInnerVoice(innerVoice: string) {
      // Added action to update selectedInnerVoice
      this.selectedInnerVoice = innerVoice;
    },
  },
  getters: {
    getCurrentMessages: (state): Message => {
      return state.messages[`level${state.currentLevel}`];
    },
    getFeedbackSegue: (state): string => {
      const currentMessages = state.messages[`level${state.currentLevel}`];
      switch (state.selectedInnerVoice) {
        case 'supportive':
          return currentMessages.feedbackSegueSupportive;
        case 'dominant':
          return currentMessages.feedbackSegueDominant;
        case 'influential':
          return currentMessages.feedbackSegueInfluential;
        case 'conscientious':
          return currentMessages.feedbackSegueConscientious;
        default:
          return '';
      }
    },
  },
});
