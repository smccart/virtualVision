<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Hero message component -->
      <HeroMessage
        :supportive="currentMessage.supportive"
        :dominant="currentMessage.dominant"
        :influential="currentMessage.influential"
        :conscientious="currentMessage.conscientious"
      />

      <!-- Inner voice choices in a two-by-two grid layout -->
      <InnerVoiceChoices
        :supportiveLabel="currentMessage.innerVoices.sdc.supportive"
        :dominantLabel="currentMessage.innerVoices.sdc.dominant"
        :influentialLabel="currentMessage.innerVoices.sic.influential"
        :conscientiousLabel="currentMessage.innerVoices.sdc.conscientious"
        @onChoose="showChoice"
      />

      <!-- Prompt text in the center -->
          </div>
  </q-page>
</template>

<script setup lang="ts">
import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';
import HeroMessage from '../components/shared/HeroMessage.vue';
import InnerVoiceChoices from '../components/InnerVoiceChoices.vue';
import PromptText from '../components/shared/PromptText.vue';

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
  padding-top: 8rem; /* Ensure it's not hidden by the navbar */
  text-align: center;
}
</style>
