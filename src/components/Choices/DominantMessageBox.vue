<template>
  <div class="dominant-message-box">
    <p>{{ props.message }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ message: string }>();
</script>

<style scoped>
.dominant-message-box {
  padding: 1rem;
  background-color: rgba(255, 0, 0, 0.1); /* Example color for dominant */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
