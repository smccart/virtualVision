<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Hero message component -->

      <!-- Tone message choices component remains intact -->
      <ToneMsgChoices
        :supportiveLabel="currentMessage.supportiveInnerVoice"
        :dominantLabel="currentMessage.dominantInnerVoice"
        :influentialLabel="currentMessage.influentialInnerVoice"
        :conscientiousLabel="currentMessage.conscientiousInnerVoice"
        :prompt="currentMessage.prompt"
        @onChoose="showChoice"
      />

      <!-- Binary choice prompt added below ToneMsgChoices -->
      <div class="binary-choice">
        <p>{{ currentMessage.prompt }}</p>
        <div class="action-buttons">
          <q-btn
            :label="currentMessage.binaryChoiceReady"
            @click="navigateToPage('process')"
            color="primary"
            class="q-mb-md"
          />
          <q-btn
            :label="currentMessage.binaryChoiceExplore"
            @click="navigateToPage('explore')"
            color="secondary"
            class="q-mb-md"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';
  import ToneMsgChoices from '../components/ToneMsgChoices.vue';
  import { useRouter } from 'vue-router';

  // Fetch messages and functions from the store
  const { getCurrentMessages, setCurrentLevel, setSelectedInnerVoice } =
    useSalesStrategyMessages();
  const currentMessage = getCurrentMessages; // Access the getter as a property
  const router = useRouter(); // Access Vue router for page navigation

  // Function to handle tone-specific choices
  function showChoice(choice: string) {
    setSelectedInnerVoice(choice); // Track inner voice selection
    setCurrentLevel(1); // Keep current level for simplicity in this binary scenario
  }

  // Function to handle binary navigation based on the visitor’s choice
  function navigateToPage(choice: string) {
    if (choice === 'process') {
      router.push({ name: 'processPage' }); // Route name for the process explanation page
    } else if (choice === 'explore') {
      router.push({ name: 'heroJourney' }); // Route name for the Hero’s Journey funnel
    }
  }
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .binary-choice {
    text-align: center;
    margin: 2em 5em;
  }

  .action-buttons {
    display: flex;
    justify-content: center;
    gap: 0.4em;
  }
</style>
