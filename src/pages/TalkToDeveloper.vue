<template>
  <MainLayout>
    <div class="talk-to-developer">
      <h1>{{ messages.tagline }}</h1>
      <p>{{ messages[`${selectedInnerVoice}Intro`] }}</p>
      <p>{{ messages[`${selectedInnerVoice}Main`] }}</p>

      <div class="cta-buttons">
        <q-btn flat label="{{ messages.binaryChoiceReady }}" to="/book" class="cta-book" />
        <q-btn flat label="{{ messages.binaryChoiceExplore }}" to="/focused-strategy-sessions" class="cta-learn-more" />
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useSalesStrategyMessages } from 'src/stores/SalesStrategyMessages';

const salesMessages = useSalesStrategyMessages();
salesMessages.setCurrentLevel('talkToDeveloper');

const selectedInnerVoice = salesMessages.selectedInnerVoice;
const messages = salesMessages.getCurrentMessages;
</script>

<style scoped>
.talk-to-developer {
  text-align: center;
  padding: 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
