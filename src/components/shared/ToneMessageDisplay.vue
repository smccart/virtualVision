<template>
  <div class="hero-message-container">
    <div
      v-for="(message, tone) in messages"
      :key="tone"
      :class="['tone-message-box', `tone-${tone}`]"
      @mouseover="onHover"
      @mouseleave="onLeave"
    >
      <p>{{ message }}</p>
    </div>
    <div class="supportive-wrapup">
      <p>{{ supportiveWrapUp }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useSalesStrategyMessages } from '../../stores/SalesStrategyMessages';

// Define the store to access messages
const salesStrategyMessages = useSalesStrategyMessages();

// Extract the current messages from the store
const currentMessages = computed(() => salesStrategyMessages.getCurrentMessages);

// Define hover state for dynamic style adjustments
const isHovered = ref(false);

const onHover = () => {
  isHovered.value = true;
};

const onLeave = () => {
  isHovered.value = false;
};

// Define the messages and tone mapping
const messages = {
  supportive: currentMessages.value.supportive,
  dominant: currentMessages.value.dominant,
  influential: currentMessages.value.influential,
  conscientious: currentMessages.value.conscientious
};
const supportiveWrapUp = currentMessages.value.supportiveWrapUp;
</script>
