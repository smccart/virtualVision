<template>
  <q-page class="flex-column">
    <div class="hero-section">
      <div class="message-container">
        <SupportiveMessageBox
          :message="currentMessage.supportive"
          class="message-box supportive"
        />
        <DominantMessageBox
          :message="currentMessage.dominant"
          class="message-box dominant"
        />
        <InfluentialMessageBox
          :message="currentMessage.influential"
          class="message-box influential"
        />
        <ConscientiousMessageBox
          :message="currentMessage.conscientious"
          class="message-box conscientious"
        />
      </div>
    </div>

    <!-- New Prompt -->
    <div class="prompt-container">
      <p class="prompt-text">
        Honesty shapes the experience. Pick the statement that most genuinely
        reflects your thoughts and feelings. Your choice will help us tailor our
        approach to best support your vision.
      </p>
    </div>

    <div class="choice-container">
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
  </q-page>
</template>

<script setup lang="ts">
  import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';
  import SupportiveMessageBox from '../components/SupportiveMessageBox.vue';
  import DominantMessageBox from '../components/DominantMessageBox.vue';
  import InfluentialMessageBox from '../components/InfluentialMessageBox.vue';
  import ConscientiousMessageBox from '../components/ConscientiousMessageBox.vue';

  defineOptions({
    name: 'ChoicePage',
  });

  const { getCurrentMessages, setCurrentLevel } = useSalesStrategyMessages();
  const currentMessage = getCurrentMessages; // Access the getter as a property

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

  .hero-section {
    padding: 3rem;
    margin-top: 4rem;
    text-align: center;
    background-color: rgba($grayLight, 0.99);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .message-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    max-width: 800px;

    margin-bottom: 0;
    padding: 1rem;
    padding-bottom: 0rem;
  }

  .message-box {
    flex: 1;
    min-width: 19rem;
    padding: 1rem;
    padding-top: 2.5rem;
    border: 15px solid;
    background-color: white;
    color: $grayDark;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-size: 1.2rem;
    font-weight: 500;
    word-wrap: break-word;
    text-align: center;
  }

  .supportive {
    border-color: $blueMid;
  }
  .dominant {
    border-color: $greenMid;
  }
  .influential {
    border-color: $orangeMid;
  }
  .conscientious {
    border-color: $redMid;
  }

  .prompt-container {
    text-align: center;
    margin: 0;
    padding: 1rem;
    background-color: rgba($grayLight, 0.2);
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 500;
    color: $grayDark;
  }

  .choice-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .choice-btn {
    border-radius: 2rem;
    padding: 1.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    width: 34rem;
    height: auto;
    text-align: center;
    white-space: normal;
    background-color: white;
    color: black;
    border: 4px solid $grayDark;
    transition: transform 0.3s ease, box-shadow 0.3s ease,
      border-color 0.3s ease;
    text-transform: none;
  }

  .choice-btn:hover {
    border-color: $orangeMid;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
</style>
