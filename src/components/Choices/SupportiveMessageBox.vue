<template>
  <div class="supportive-message-box">
    <p>{{ props.message }}</p>
  </div>
</template>

<script setup lang="ts">
// Use defineProps directly without importing it
const props = defineProps<{ message: string }>();
</script>

<style scoped>
.supportive-message-box {
  padding: 1rem;
  background-color: rgba(255, 255, 204, 0.8); /* Example background */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
