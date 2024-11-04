<template>
  <q-page class="flex-column">
    <div class="content-container">
      <p class="integrated-paragraph">
        {{ currentMessage.supportive }} {{ currentMessage.dominant }}
        {{ currentMessage.influential }} {{ currentMessage.conscientious }}
      </p>

      <!-- Simplified Prompt -->
      <div class="prompt-container">
        <p class="prompt-text">
          Choose the statement that feels most like you.
        </p>
      </div>

      <div class="choices-container">
        <q-btn
          @click="showChoice('supportive')"
          class="choice-btn supportive-btn"
          :label="currentMessage.supportiveInnerVoice"
        />
        <q-btn
          @click="showChoice('dominant')"
          class="choice-btn dominant-btn"
          :label="currentMessage.dominantInnerVoice"
        />
        <q-btn
          @click="showChoice('influential')"
          class="choice-btn influential-btn"
          :label="currentMessage.influentialInnerVoice"
        />
        <q-btn
          @click="showChoice('conscientious')"
          class="choice-btn conscientious-btn"
          :label="currentMessage.conscientiousInnerVoice"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';

  // Fetch messages from the store
  const { getCurrentMessages, setCurrentLevel } = useSalesStrategyMessages();
  const currentMessage = getCurrentMessages; // Access the getter as a property

  // Function to update the current level based on the chosen tone
  function showChoice(choice: string) {
    const levelMapping: { [key: string]: number } = {
      supportive: 1,
      dominant: 2,
      influential: 3,
      conscientious: 4,
    };
    setCurrentLevel(levelMapping[choice]);
  }
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .content-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    padding-top: 8rem; /* Added padding to ensure it's not hidden by the navbar */
    text-align: center;
  }

  .integrated-paragraph {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .prompt-container {
    background-color: #f0f0f0;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 500;
    color: $grayDark;
    margin-bottom: 1.5rem;
  }

  .choices-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two buttons per row */
    gap: 1rem;
    justify-items: center;
  }

  .choice-btn {
    border-radius: 2rem;
    padding: 1.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    width: 100%; /* Adjust to fit within grid layout */
    max-width: 340px;
    text-align: center;
    background-color: white;
    color: black;
    border: 4px solid $grayDark;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .choice-btn:hover {
    border-color: $orangeMid;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
</style>
