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
</style>
