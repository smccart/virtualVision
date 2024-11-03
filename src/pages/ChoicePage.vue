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
        :label="currentMessage.SDC"
      />
      <q-btn
        @click="showChoice('SIC')"
        class="explore-btn"
        :label="currentMessage.SIC"
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

  .choice-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
  }

  .learn-more-btn,
.explore-btn {
  border-radius: 35px;
  padding: 2rem;
  font-size: 1.4em;
    font-weight: 600;
  width: 36rem;
  height: auto; /* Adjust height to fit wrapped content */
  text-align: center;
  white-space: normal; /* Allow text to wrap */
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  flex-wrap: wrap;
}

  .learn-more-btn {
    background-color: $redMid;
    color: $textWhite;
  }

  .learn-more-btn,
.explore-btn {
  text-transform: none; /* Disable text transformation */
}

  .explore-btn {
    background-color: $blueDark;
    color: $textWhite;
  }

  .q-btn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
</style>
