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
import { ref, computed } from 'vue';

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

// Define hover state for dynamic style adjustments
const isHovered = ref<string | null>(null);

const handleMouseOver = (tone: string) => {
  isHovered.value = tone;
};

const handleMouseLeave = () => {
  isHovered.value = null;
};
</script>

<style scoped lang="scss">
@import '/src/css/app.scss';

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
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, border-color 0.3s;
  border: 4px solid;
}

.supportive-btn {
  background-color: $blueVeryLight;
  color: $blueDark;
  border-color: $blueMid;
}

.supportive-btn:hover {
  background-color: color.adjust($orangeLight, $lightness: 20%);
}

.dominant-btn {
  background-color: $orangeLight;
  color: $orangeDark;
  border-color: $orangeMid;
}

.dominant-btn:hover {
  background-color: color.adjust($yellowLight, $lightness: 20%);
}

.influential-btn {
  background-color: $yellowLight;
  color: darken($yellowLight, 20%);
  border-color: $orangeMid;
}

.influential-btn:hover {
  background-color: color.adjust($blueMid, $lightness: 20%);
}

.conscientious-btn {
  background-color: $blueMid;
  color: $blueDark;
  border-color: $blueDark;
}

.conscientious-btn:hover {
  background-color: color.adjust($blueDark, $lightness: 10%);
}

.choice-btn:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
</style>
