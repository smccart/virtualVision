<template>
  <q-page class="flex-column">
    <div class="hero-section">
      <div class="message-container">
        <SupportiveMessageBox :message="currentMessage.supportive" class="message-box supportive" />
        <DominantMessageBox :message="currentMessage.dominant" class="message-box dominant" />
        <InfluentialMessageBox :message="currentMessage.influential" class="message-box influential" />
        <ConscientiousMessageBox :message="currentMessage.conscientious" class="message-box conscientious" />
      </div>
    </div>

    <div class="choice-container">
      <q-btn
        @click="showChoice('SDC')"
        class="learn-more-btn"
        :label="binaryChoices[0].title"
      />
      <q-btn
        @click="showChoice('SIC')"
        class="explore-btn"
        :label="binaryChoices[1].title"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">

import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';
import SupportiveMessageBox from '../components/SupportiveMessageBox.vue';
import DominantMessageBox from '../components/DominantMessageBox.vue';
import InfluentialMessageBox from '../components/InfluentialMessageBox.vue';
import ConscientiousMessageBox from '../components/ConscientiousMessageBox.vue';

// Define the component options (if needed)
defineOptions({
  name: 'ChoicePage',
});

// Use the store
const { getCurrentMessages, setCurrentLevel } = useSalesStrategyMessages();

// Make sure `currentMessage` is properly computed
const currentMessage = getCurrentMessages;

// Define binary choices
const binaryChoices = [
  {
    title: 'Take Action',
    description: 'Focus on functionality and structure.',
  },
  {
    title: 'Inspire Change',
    description: 'Enhance user engagement and interaction.',
  },
];

// Method to handle choice selection
function showChoice(choice: string) {
  setCurrentLevel(choice === 'SDC' ? 1 : 2);
}
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .hero-section {
    padding: 2rem;
    text-align: center;
    background-color: rgba($orangeLight, 0.5);
    color: $blueDark;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align messages to the top */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .choice-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    padding-bottom: 2rem; /* Add padding to separate buttons from the bottom */
  }

  /* Other styles remain the same */
</style>
