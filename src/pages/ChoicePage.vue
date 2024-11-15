<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Tagline for the page or section -->
      <div class="tagline">
        <h2>{{ currentMessage.tagline }}</h2>
      </div>

      <!-- Tone message choices in a 2x2 grid layout -->
      <div class="tone-message-grid">
        <!-- Each tone message box uses globally defined styles -->
        <div class="tone-supportive tone-message-box">
          <p>{{ currentMessage.supportive }}</p>
        </div>
        <div class="tone-dominant tone-message-box">
          <p>{{ currentMessage.dominant }}</p>
        </div>
        <div class="tone-influential tone-message-box">
          <p>{{ currentMessage.influential }}</p>
        </div>
        <div class="tone-conscientious tone-message-box">
          <p>{{ currentMessage.conscientious }}</p>
        </div>
      </div>

      <!-- Supportive wrap-up and binary choice prompt below -->
      <div class="supportive-wrapup">
        <p>{{ currentMessage.supportiveWrapUp }}</p>
      </div>
      <div class="binary-choice">
        <p>{{ currentMessage.prompt }}</p>
        <div class="action-buttons">
          <q-btn
            :label="currentMessage.binaryChoiceReady"
            @click="navigateToPage('process')"
            class="choice-btn q-mb-md"
          />
          <q-btn
            :label="currentMessage.binaryChoiceExplore"
            @click="navigateToPage('explore')"
            class="choice-btn q-mb-md"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';

  // Fetch messages and functions from the store
  const { getCurrentMessages, setCurrentLevel, setSelectedInnerVoice } = useSalesStrategyMessages();
  const currentMessage = getCurrentMessages; // Access the getter as a property
  const router = useRouter(); // Access Vue router for page navigation

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
  @import '/src/css/shared-styles.scss';

  .content-container {
    width: 100%;
    max-width: 1000px;
    margin: 6rem auto;
  }

  .tagline {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      color: $blueDark;
    }
  }

  .tone-message-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 2rem;
  }

  .supportive-wrapup {
    text-align: center;
    margin: 1.5rem 0;
    font-size: 1.1em;
    color: $blueDark;
  }

  .binary-choice {
    text-align: center;
    margin: 1.2em 5em;
  }

  .action-buttons {
    display: flex;
    justify-content: center;
    gap: 0.4em;
  }
</style>
