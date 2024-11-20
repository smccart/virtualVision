<template>
  <MainLayout>
    <div class="talk-to-developer">
      <h1>{{ messages.tagline }}</h1>

      <!-- Use static keys since we no longer need selectedInnerVoice -->
      <p>{{ messages.supportiveIntro }}</p>
      <p>{{ messages.supportiveMain }}</p>

      <div class="cta-buttons">
        <q-btn flat label="{{ messages.binaryChoiceReady }}" to="/book" class="cta-book" />
        <q-btn flat label="{{ messages.binaryChoiceExplore }}" to="/focused-strategy-sessions" class="cta-learn-more" />
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useSalesStrategyMessages } from 'src/stores/SalesStrategyMessages';

// Get current messages from the store
const { getCurrentMessages } = useSalesStrategyMessages();
const messages = getCurrentMessages;
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
