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

  // Props for the tone type and message text
  const props = defineProps<{
    tone: 'supportive' | 'dominant' | 'influential' | 'conscientious';
    message: string;
  }>();

  // Define hover state for dynamic style adjustments
  const isHovered = ref(false);

  // Dynamic CSS class based on tone prop
  // const toneClass = computed(() => {
  //   switch (props.tone) {
  //     case 'supportive':
  //       return isHovered.value ? 'tone-supportive:hover' : 'tone-supportive';
  //     case 'dominant':
  //       return isHovered.value ? 'tone-dominant:hover' : 'tone-dominant';
  //     case 'influential':
  //       return isHovered.value ? 'tone-influential:hover' : 'tone-influential';
  //     case 'conscientious':
  //       return isHovered.value
  //         ? 'tone-conscientious:hover'
  //         : 'tone-conscientious';
  //     default:
  //       return '';
  //   }
  // });

  // Methods to handle hover state
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
