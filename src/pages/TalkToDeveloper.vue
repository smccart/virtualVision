<template>
  <q-page class="flex-column">
    <div class="content-container">
      <div class="tagline">
        <h2>{{ messages.tagline }}</h2>
      </div>

      <div class="tone-message-grid">
        <div class="tone-supportive tone-message-box">
          <p>{{ messages.supportiveIntro }}</p>
          <p>{{ messages.supportiveMain }}</p>
        </div>
        <div class="tone-dominant tone-message-box">
          <p>{{ messages.dominantSupportiveIntro }}</p>
          <p>{{ messages.dominantMain }}</p>
        </div>
        <div class="tone-influential tone-message-box">
          <p>{{ messages.influentialSupportiveIntro }}</p>
          <p>{{ messages.influentialMain }}</p>
        </div>
        <div class="tone-conscientious tone-message-box">
          <p>{{ messages.conscientiousSupportiveIntro }}</p>
          <p>{{ messages.conscientiousMain }}</p>
        </div>
      </div>

      <div class="supportive-wrapup">
        <p class="supportive-wrapup-intro">
          {{ messages.supportiveWrapUpIntro }}
        </p>
        <p class="supportive-wrapup-main">
          {{ messages.supportiveWrapUpMain }}
        </p>
      </div>

      <div class="binary-choice">
        <div class="choice-prompts">
          <p>{{ messages.promptInfluential }}</p>
          <p>{{ messages.promptSupportive }}</p>
        </div>
        <div class="action-buttons">
          <q-btn
            :label="messages.binaryChoiceReadySupportiveInfluential"
            to="/book"
            class="choice-btn q-mb-md enhanced-btn"
          />
          <q-btn
            :label="messages.binaryChoiceExploreSupportiveConscientious"
            to="/focused-strategy-sessions"
            class="choice-btn q-mb-md enhanced-btn"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';

  const { getCurrentMessages, setCurrentLevel } = useSalesStrategyMessages();
  setCurrentLevel('talkToDeveloper');
  const messages = getCurrentMessages;
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
  @import '/src/css/shared-styles.scss';

  .content-container {
    width: 100%;
    max-width: 1000px;
    padding-top: calc(var(--navbar-height, 4rem) + 2rem);
    margin: 0 auto;
  }

  .tagline {
    text-align: center;
    margin-bottom: 0rem;
    z-index: 1;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($textWhite, 0.25);
      z-index: -1;
    }
  }

  h2 {
    font-size: xx-large;
    color: $grayDark;
    font-weight: 600;
    margin: 1rem auto 2rem;
  }

  .tone-message-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
  }

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
    font-size: x-large;
    margin-bottom: 0.5rem;
    color: $grayVeryDark;
    font-weight: 600;
    padding-top: 0.5rem;
  }

  .supportive-wrapup-main {
    font-size: large;
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
      font-weight: 500;
      color: $grayVeryDark;
      margin-bottom: 0.1em;
      padding-left: 0.25rem;
    }
  }

  .action-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;

    .enhanced-btn {
      width: 35%;
      height: 6rem;
      background-color: rgba(255, 255, 255, 0.5);
      color: $grayDark;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 8px;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
      padding: 0.5rem 0.5rem 0.3rem;

      &:hover {
        background-color: rgba(255, 255, 255, 0.6);
        box-shadow: 2px 4px 8px rgba($grayVeryDark, 0.5);
        transition: all 0.3s ease-in-out;
      }
    }
  }
</style>
