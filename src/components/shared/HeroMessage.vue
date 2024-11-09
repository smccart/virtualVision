<!-- src/components/HeroMessage.vue -->
<template>
  <div class="hero-message-container">
    <ToneMessageBox
      :message="supportive"
      class="tone-supportive"
    />
    <ToneMessageBox
      :message="dominant"
      class="tone-dominant"
    />
    <ToneMessageBox
      :message="influential"
      class="tone-influential"
    />
    <ToneMessageBox
      :message="conscientious"
      class="tone-conscientious"
    />
  </div>
</template>

<script setup lang="ts">
  import ToneMessageBox from './ToneMessageBox.vue';

  // Define props for the hero message
  const { supportive, dominant, influential, conscientious } = defineProps<{
    supportive: string;
    dominant: string;
    influential: string;
    conscientious: string;
  }>();
</script>

<style scoped lang="scss">
  .hero-message-container {
  display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  // .tone-supportive,
  // .tone-dominant,
  // .tone-influential,
  // .tone-conscientious {
  //   font-size: 1.2rem;
  //   line-height: 1.5rem;
  // }
</style>
