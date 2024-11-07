<!-- src/components/InnerVoiceChoices.vue -->
<template>
  <div class="choices-container">
    <q-btn
      @click="handleChoice('supportive')"
      class="choice-btn supportive-btn"
      :label="supportiveLabel"
    />
    <q-btn
      @click="handleChoice('dominant')"
      class="choice-btn dominant-btn"
      :label="dominantLabel"
    />
    <q-btn
      @click="handleChoice('influential')"
      class="choice-btn influential-btn"
      :label="influentialLabel"
    />
    <q-btn
      @click="handleChoice('conscientious')"
      class="choice-btn conscientious-btn"
      :label="conscientiousLabel"
    />
  </div>
</template>

<script setup lang="ts">
// Define props for the inner voice labels
const {
  supportiveLabel,
  dominantLabel,
  influentialLabel,
  conscientiousLabel,
} = defineProps<{
  supportiveLabel: string;
  dominantLabel: string;
  influentialLabel: string;
  conscientiousLabel: string;
}>();

// Emit event to signal a choice has been made
const emit = defineEmits<{
  (event: 'choose', choice: string): void;
}>();

function handleChoice(choice: string) {
  emit('choose', choice);
}
</script>

<style scoped lang="scss">
.choices-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  grid-template-rows: auto auto; /* Two rows */
  gap: 1.5rem;
  justify-items: center;
  align-items: center;
}

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
  border: 4px solid #777; /* Example color */
  transition: transform 0.3s, box-shadow 0.3s;
}

.choice-btn:hover {
  border-color: #ffa500; /* Example hover color */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
</style>
