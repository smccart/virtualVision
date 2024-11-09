<template>
  <div :class="['tone-message-box', toneClass]" @mouseover="onHover" @mouseleave="onLeave">
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Props for the tone type and message text
const props = defineProps<{
  tone: 'supportive' | 'dominant' | 'influential' | 'conscientious';
  message: string;
}>();

// Define hover state for dynamic style adjustments
const isHovered = ref(false);

// Dynamic CSS class based on tone prop
const toneClass = computed(() => {
  switch (props.tone) {
    case 'supportive':
      return isHovered.value ? 'tone-supportive-hover' : 'tone-supportive';
    case 'dominant':
      return isHovered.value ? 'tone-dominant-hover' : 'tone-dominant';
    case 'influential':
      return isHovered.value ? 'tone-influential-hover' : 'tone-influential';
    case 'conscientious':
      return isHovered.value ? 'tone-conscientious-hover' : 'tone-conscientious';
    default:
      return '';
  }
});

// Methods to handle hover state
const onHover = () => {
  isHovered.value = true;
};

const onLeave = () => {
  isHovered.value = false;
};
</script>

<style scoped lang="scss">
// Styling for each tone
.tone-message-box {
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;

  &.tone-supportive {
    background-color: $blueVeryLight;
    color: $blueDark;
  }
  &.tone-supportive-hover {
    background-color: lighten($orangeLight, 20%); // Gentle transition towards dominant
  }

  &.tone-dominant {
    background-color: $orangeLight;
    color: $orangeDark;
  }
  &.tone-dominant-hover {
    background-color: lighten($yellowLight, 20%); // Hint towards influential
  }

  &.tone-influential {
    background-color: $yellowLight; // Derived yellow for influential
    color: darken($yellowLight, 20%);
  }
  &.tone-influential-hover {
    background-color: lighten($blueMid, 20%); // Progression towards conscientious
  }

  &.tone-conscientious {
    background-color: $blueMid;
    color: $blueDark;
  }
  &.tone-conscientious-hover {
    background-color: lighten($blueDark, 10%); // Subtle transition
  }

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
