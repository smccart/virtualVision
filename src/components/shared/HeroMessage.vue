<!-- src/components/HeroMessage.vue -->
<template>
  <p class="hero-message">
    <strong>{{ supportive }}</strong> {{ dominant }}
    <em>{{ influential }}</em> {{ conscientious }}
  </p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define props for the hero message
const { supportive, dominant, influential, conscientious } = defineProps<{
  supportive: string;
  dominant: string;
  influential: string;
  conscientious: string;
}>();
</script>

<style scoped lang="scss">
.hero-message {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
</style>
