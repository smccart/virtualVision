<!-- src/components/shared/ChoiceButton.vue -->
<template>
  <q-btn
    @click="handleClick"
    class="choice-btn"
    :label="label"
  />
</template>

<script setup lang="ts">
// Props for button label and click handling
const { label, choice } = defineProps<{
  label: string;
  choice: string;
}>();

// Define an emit for button click
const emit = defineEmits<{
  (event: 'selectChoice', choice: string): void;
}>();

function handleClick() {
  emit('selectChoice', choice);
}
</script>

<style scoped lang="scss">
.choice-btn {
  border-radius: 2rem;
  padding: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
  max-width: 320px;
  text-align: center;
  background-color: white;
  color: black;
  border: 4px solid #555; /* Example color */
  transition: transform 0.3s, box-shadow 0.3s;
}

.choice-btn:hover {
  border-color: #ffa500; /* Example hover color */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
</style>
