<template>
  <div class="conscientious-message-box">
    <p>{{ props.message }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ message: string }>();
</script>

<style scoped>
.conscientious-message-box {
  padding: 1rem;
  background-color: rgba(0, 0, 255, 0.1); /* Example color for conscientious */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
