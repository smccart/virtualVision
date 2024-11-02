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
  import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';
  import SupportiveMessageBox from '../components/SupportiveMessageBox.vue';
  import DominantMessageBox from '../components/DominantMessageBox.vue';
  import InfluentialMessageBox from '../components/InfluentialMessageBox.vue';
  import ConscientiousMessageBox from '../components/ConscientiousMessageBox.vue';

  defineOptions({
    name: 'ChoicePage',
  });

  const { getCurrentMessages, setCurrentLevel } = useSalesStrategyMessages();
  const currentMessage = getCurrentMessages;

  const binaryChoices = [
    {
      title: 'Take Action',
      description: 'Focus on functionality and structure.',
    },
    {
      title: 'Inspire Change',
      description: 'Enhance user engagement and interaction.',
    },
  ];

  function showChoice(choice: string) {
    setCurrentLevel(choice === 'SDC' ? 1 : 2);
  }
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .hero-section {
    padding: 4rem;
    margin-top: 4rem;
    text-align: center;
    background-color: rgba($grayLight, 0.5);
    color: $blueDark;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .message-container {
    display: flex; /* Set display to flex */
    flex-direction: row; /* Set direction to row */
    justify-content: center; /* Center items horizontally */
    gap: 3rem; /* Space between message boxes */
    max-width: 800px; /* Limit width for better centering */
    margin: 0 auto; /* Center the message container */
    padding: 1rem; /* Add padding for a more spacious look */
  }

  .message-box {
    flex: 1; /* Allow message boxes to grow equally */
    min-width: 18rem; /* Minimum width for message boxes */
    padding: 1rem;
    padding-top: 2rem;
    border: 15px solid; /* Add border style */
    background-color: white; /* Set background to white */
    color: black; /* Set text color to black */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    font-weight: 600;
    word-wrap: break-word; /* Allow long words to break */
    text-align: center;
  }

  .supportive { border-color: $greenMid; }
  .dominant { border-color: $redMid; }
  .influential { border-color: $orangeMid; }
  .conscientious { border-color: $blueMid; }

  .choice-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .learn-more-btn,
  .explore-btn {
    border-radius: 999px;
    padding: 1rem;
    font-size: 1.5rem;
    width: 400px;
    height: 80px;
    text-align: center;
    white-space: nowrap;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  }

  .learn-more-btn {
    background-color: $redMid;
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
