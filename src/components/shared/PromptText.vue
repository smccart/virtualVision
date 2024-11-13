src/components/PromptText.vue
<template>
  <p class="prompt-text">{{ text }}</p>
</template>

<script setup lang="ts">
// Define props for the prompt text
const { text } = defineProps<{ text: string }>();
</script>

<style scoped lang="scss">
.prompt-text {
  font-size: 0.99rem;
  font-weight: 400;
  color: #555; /* Example color */
  text-align: center;
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  grid-column: span 2; /* Make the prompt span both columns */
  margin: 1rem 0;
}
</style>
