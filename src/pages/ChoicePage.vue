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
    gap: 3rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  .message-box {
    flex: 1;
    min-width: 17rem;
    padding: 1rem;
    padding-top: 2.5rem;
    border: 15px solid; /* Add border style */
    background-color: white; /* Set background to white */
    color: $grayDark; /* Set text color to black */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
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

  .choice-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
  }

  .learn-more-btn,
  .explore-btn {
    border-radius: 999px;
    padding: 1rem;
    font-size: 1.5rem;
    width: 25rem;
    height: 10rem;
    text-align: center;
    white-space: nowrap;
    transition: transform 0.3s ease, box-shadow 0.3s ease,
      background-color 0.3s ease;
  }

  .learn-more-btn {
    background-color: $redMid;
    color:  $textWhite;
  }

  .explore-btn {
    background-color: $blueDark;
    color:  $textWhite;
  }

  .q-btn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
</style>
