<template>
  <q-page class="row items-center justify-evenly">
    <div class="hero-section">
      <h1 class="hero-title">{{ heroTitle }}</h1>
    </div>

    <div class="choice-container">
      <q-btn
        @click="showChoice(binaryChoices[0].title)"
        class="learn-more-btn"
        :label="binaryChoices[0].title"
      />
      <q-btn
        @click="showChoice(binaryChoices[1].title)"
        class="explore-btn"
        :label="binaryChoices[1].title"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'ChoicePage'
});

// Hero section data
const heroTitle =
  'Your dreams matter, and we bring bold ideas to life. Our engaging websites captivate your audience while delivering thoughtful, compelling solutions.';

// Define binary choices data
const binaryChoices = ref([
  {
    title: 'Learn More',
    description: 'Your dreams matter, and we bring bold ideas to life.'
  },
  {
    title: 'Explore',
    description: 'Our engaging websites captivate your audience while delivering thoughtful, compelling solutions.'
  }
]);

const selectedChoice = ref('');

function showChoice(choice: string) {
  selectedChoice.value = choice;
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
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.hero-title {
  color: $blueDark;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 0.0001em;
  line-height: 2.2;
}

.choice-container {
  display: flex; /* Change to flex */
  flex-direction: row; /* Align buttons side by side */
  justify-content: center; /* Center the buttons horizontally */
  gap: 2rem; /* Space between buttons */
  margin-top: 2rem;
}

.learn-more-btn,
.explore-btn {
  border-radius: 999px;
  padding: 1rem; /* Adjust padding */
  font-size: 1.5rem; /* Increase font size */
  width: 400px; /* 5 times wider */
  height: 80px; /* 2 times taller */
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

q-page {
  padding: 0; /* No padding */
  margin: 0; /* No margin */
  display: flex;
  flex-direction: column; /* Stack elements */
}

.hero-section {
  margin-bottom: 0; /* Remove bottom margin if needed */
}

.choice-container {
  margin-top: 2rem; /* Space between hero and buttons */
  display: flex;
  justify-content: center; /* Center buttons */
}
</style>
