<template>
  <div class="hero-message-container">
    <!-- Tone messages with hover effects -->
    <div
      v-for="(message, tone) in messages"
      :key="tone"
      :class="[
        'tone-message-box',
        `tone-${tone}`,
        { hovered: isHovered === tone },
      ]"
      @mouseover="() => handleMouseOver(tone)"
      @mouseleave="handleMouseLeave"
    >
      <p>{{ message }}</p>
    </div>

    <!-- Supportive wrap-up message -->
    <div class="supportive-wrapup">
      <p>{{ supportiveWrapUp }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages';

  // Props for optional display text
  const props = defineProps<{
    ToneMessageChoices?: string;
    supportiveLabel: string;
    dominantLabel: string;
    influentialLabel: string;
    conscientiousLabel: string;
    prompt: string;
  }>();

  // Emit event for choice selection
  const emit = defineEmits<{
    (event: 'choose', choice: string): void;
  }>();

  // Sales strategy messages store
  const salesStrategyMessages = useSalesStrategyMessages();
  const currentMessages = computed(
    () => salesStrategyMessages.getCurrentMessages
  );

  // Tone messages and wrap-up
  const messages = {
    supportive: currentMessages.value.supportive,
    dominant: currentMessages.value.dominant,
    influential: currentMessages.value.influential,
    conscientious: currentMessages.value.conscientious,
  };
  const supportiveWrapUp = currentMessages.value.supportiveWrapUp;

  // Labels for choice buttons
  const labels = {
    supportive: props.supportiveLabel,
    dominant: props.dominantLabel,
    influential: props.influentialLabel,
    conscientious: props.conscientiousLabel,
  };
  const tones = Object.keys(labels);

  // Hover state
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
</style>
