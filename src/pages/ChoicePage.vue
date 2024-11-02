<template>
  <q-page class="page-container">
    <div class="hero-section">
      <p class="hero-message">{{ currentMessage.supportive }}</p>
      <p class="hero-message">{{ currentMessage.dominant }}</p>
      <p class="hero-message">{{ currentMessage.influential }}</p>
      <p class="hero-message">{{ currentMessage.conscientious }}</p>
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

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh; /* Use full viewport height */
  padding: 2rem;
}

.hero-section {
  text-align: center;
  background-color: rgba($orangeLight, 0.01);
  color: $blueDark;
  margin: 0 auto;
  padding: 1rem 7rem;
  flex: 1 0 55%; /* Take 55% of the height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.hero-message {
  color: $blueDark;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8;
  margin: 0.5rem 0;
}

.choice-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex: 0 0 40%; /* Take 40% of the height */
  align-items: center;
}

.learn-more-btn,
.explore-btn {
  border-radius: 999px;
  padding: 1.5rem; /* Increase padding */
  font-size: 1.8rem; /* Increase font size */
  width: 450px; /* Make buttons wider */
  height: 90px; /* Make buttons taller */
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
