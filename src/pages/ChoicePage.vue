<template>
  <q-page class="flex-column">
    <div class="content-container">
      <!-- Tagline for the page or section -->
      <div class="tagline">
        <h2>{{ currentMessage.tagline }}</h2>
      </div>

      <!-- Tone message choices in a 2x2 grid layout -->
      <div class="tone-message-grid">
        <div class="tone-supportive tone-message-box">
          <p>{{ currentMessage.supportiveIntro }}</p>
          <p>{{ currentMessage.supportiveMain }}</p>
        </div>
        <div class="tone-dominant tone-message-box">
          <p>{{ currentMessage.dominantIntro }}</p>
          <p>{{ currentMessage.dominantMain }}</p>
        </div>
        <div class="tone-influential tone-message-box">
          <p>{{ currentMessage.influentialIntro }}</p>
          <p>{{ currentMessage.influentialMain }}</p>
        </div>
        <div class="tone-conscientious tone-message-box">
          <p>{{ currentMessage.conscientiousIntro }}</p>
          <p>{{ currentMessage.conscientiousMain }}</p>
        </div>
      </div>

      <!-- Supportive wrap-up and binary choice prompt below -->
      <div class="supportive-wrapup">
        <p class="supportive-wrapup-intro">
          {{ currentMessage.supportiveWrapUpIntro }}
        </p>
        <p class="supportive-wrapup-main">
          {{ currentMessage.supportiveWrapUpMain }}
        </p>
      </div>

      <div class="binary-choice">
        <div class="choice-prompts">
          <p>{{ currentMessage.promptInfluential }}</p>
          <p>{{ currentMessage.promptSupportive }}</p>
        </div>
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
  const { getCurrentMessages, setCurrentLevel, setSelectedInnerVoice } =
    useSalesStrategyMessages();
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
    padding-top: calc(
      var(--navbar-height, 4rem) + 2rem
    ); /* Navbar height + some spacing */
    margin: 0 auto;
  }

  .tagline {
    text-align: center;
    margin-bottom: 0rem;
    z-index: 1;

    &::before {
      content: ''; /* Necessary for pseudo-element */
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($textWhite, 0.25);
      z-index: -1; /* Place behind the text */
    }
  }

  h2 {
    font-size: xx-large;
    color: $grayDark;
    font-weight: 600;
    margin: 1rem auto 2rem;
  } // Tagline - All Your Business Needs, United in One Powerful Website

  .tone-message-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
  } // Tone message grid layout

  .tone-message-box {
    border-radius: 8px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: justify;
    padding: 2rem 2rem 1rem 2rem;
    font-size: 1.2em;
  }

  .supportive-wrapup {
    text-align: center;
    margin: 1.5rem auto 2rem;
    width: 80%;
  }

  .supportive-wrapup-intro {
    font-size: x-large; /* Slightly larger for emphasis */
    margin-bottom: 0.5rem; /* Adjust spacing below */
    color: $grayVeryDark;
    font-weight: 600;
    padding-top: 0.5rem;
  }

  .supportive-wrapup-main {
    font-size: large; /* Slightly smaller for contrast */
    font-weight: 400;
    color: $grayVeryDark;
    margin: 0.5rem 0 3rem;
  }

  .binary-choice {
    text-align: center;
    margin: 4em 5em;

    .choice-prompts {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      font-size: 1.2rem;
      font-weight: 600;
      color: $grayVeryDark;
      margin-bottom: 1.5em;
    }
  }

  .action-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>
