<template>
  <div class="hero-message-container">
    <ToneItem
      :tone="'supportive'"
      :message="supportive"
      class="tone-supportive"
    />
    <ToneItem
      :tone="'dominant'"
      :message="dominant"
      class="tone-dominant"
    />
    <ToneItem
      :tone="'influential'"
      :message="influential"
      class="tone-influential"
    />
    <ToneItem
      :tone="'conscientious'"
      :message="conscientious"
      class="tone-conscientious"
    />
  </div>
  <div class="supportive-wrapup">
    <p>{{ supportiveWrapUp }}</p>
  </div>
</template>

<script setup lang="ts">
  import ToneItem from './ToneItem.vue';
  import { useSalesStrategyMessages } from '../../stores/SalesStrategyMessages';
  import { computed } from 'vue';

  // Define the store to access messages
  const salesStrategyMessages = useSalesStrategyMessages();

  // Extract the current messages from the store
  const currentMessages = computed(
    () => salesStrategyMessages.getCurrentMessages
  );

  // Define props for the hero message
  const supportive = currentMessages.value.supportive;
  const dominant = currentMessages.value.dominant;
  const influential = currentMessages.value.influential;
  const conscientious = currentMessages.value.conscientious;
  const supportiveWrapUp = currentMessages.value.supportiveWrapUp;
</script>

<style scoped lang="scss">
  @import '../../css/app.scss';


</style>
