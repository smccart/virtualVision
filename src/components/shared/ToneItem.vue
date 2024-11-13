<template>
  <div
    :class="['tone-message-box', toneClass]"
    @mouseover="onHover"
    @mouseleave="onLeave"
  >
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';

  const props = defineProps<{
    tone: 'supportive' | 'dominant' | 'influential' | 'conscientious';
    message: string;
  }>();

  // Define hover state for dynamic style adjustments
  const isHovered = ref(false);

  const onHover = () => {
    isHovered.value = true;
  };

  const onLeave = () => {
    isHovered.value = false;
  };
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
</style>
