<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Hero message component -->
      <ToneMessageDisplay
        :supportive="currentMessage.supportive"
        :dominant="currentMessage.dominant"
        :influential="currentMessage.influential"
        :conscientious="currentMessage.conscientious"
      />

      <!-- Inner voice choices in a two-by-two grid layout -->
      <InnerVoiceChoices
        :supportiveLabel="currentMessage.supportiveInnerVoice"
        :dominantLabel="currentMessage.dominantInnerVoice"
        :influentialLabel="currentMessage.influentialInnerVoice"
        :conscientiousLabel="currentMessage.conscientiousInnerVoice"
        @onChoose="showChoice"
      />

      <!-- Prompt text in the center -->
      <ToneMessageDisplay :text="currentMessage.prompt" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';
  import ToneMessageDisplay from '../components/shared/ToneMessageDisplay.vue';
  import InnerVoiceChoices from '../components/InnerVoiceChoices.vue';

  // Fetch messages from the store
  const {
    getCurrentMessages,
    setCurrentLevel,
    setSelectedInnerVoice,
    getFeedbackSegue,
  } = useSalesStrategyMessages();
  const currentMessage = getCurrentMessages; // Access the getter as a property

  // Function to update the current level and set selected inner voice based on the chosen tone
  function showChoice(choice: string) {
    // Set the selected inner voice in the store
    setSelectedInnerVoice(choice);

    // Optionally display feedback segue statement here or perform any additional logic
    const feedback = getFeedbackSegue();
    console.log(feedback); // Example output, replace with actual UI integration if needed

    // Update the current level (if advancing to a new level is required)
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


</style>
