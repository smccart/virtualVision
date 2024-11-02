<template>
  <q-page class="row items-center justify-evenly">
    <div class="hero-section">
      <div class="message-container">
        <p class="hero-message">{{ currentMessage.supportive }}</p>
        <p class="hero-message">{{ currentMessage.dominant }}</p>
        <p class="hero-message">{{ currentMessage.influential }}</p>
        <p class="hero-message">{{ currentMessage.conscientious }}</p>
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
import { computed } from 'vue';
import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';

defineOptions({
  name: 'ChoicePage'
});

const { getCurrentMessages, setCurrentLevel } = useSalesStrategyMessages();
const currentMessage = computed(() => getCurrentMessages);

const binaryChoices = [
  {
    title: 'Take Action',
    description: 'Focus on functionality and structure.'
  },
  {
    title: 'Inspire Change',
    description: 'Enhance user engagement and interaction.'
  }
];

function showChoice(choice: string) {
  setCurrentLevel(choice === 'SDC' ? 1 : 2);
}
</script>

<style scoped lang="scss">
@import '/src/css/app.scss';

.hero-section {
  padding: 1rem 7rem 0;
  text-align: center;
  background-color: rgba($orangeLight, 0.01);
  min-height: 300px;
  color: $blueDark;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.message-container {
  display: flex; /* Use flexbox to arrange messages side by side */
  flex-wrap: wrap; /* Allow messages to wrap */
  justify-content: space-around; /* Space between messages */
}

.hero-message {
  color: $blueDark;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8;
  margin: 0.5rem;
  max-width: 200px; /* Limit width for readability */
}

.choice-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.learn-more-btn,
.explore-btn {
  border-radius: 999px;
  padding: 1rem;
  font-size: 1.5rem;
  width: 400px;
  height: 80px;
  text-align: center;
  white-space: nowrap;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.learn-more-btn {
  background-color: $redDark;
  color: mix($textWhite, $greenVeryLight, 99%);
}

.explore-btn {
  background-color: $blueDark;
  color: mix($textWhite, $orangeVeryLight, 99%);
}

.q-btn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}
</style>
