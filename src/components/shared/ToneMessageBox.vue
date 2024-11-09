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
  const toneClass = computed(() => {
    switch (props.tone) {
      case 'supportive':
        return isHovered.value ? 'tone-supportive:hover' : 'tone-supportive';
      case 'dominant':
        return isHovered.value ? 'tone-dominant:hover' : 'tone-dominant';
      case 'influential':
        return isHovered.value ? 'tone-influential:hover' : 'tone-influential';
      case 'conscientious':
        return isHovered.value
          ? 'tone-conscientious:hover'
          : 'tone-conscientious';
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
  @import '/src/css/app.scss';

  // Styling for each tone
  .tone-message-box {
    padding: 1rem;
    border-radius: 16px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s,
      font-size 0.3s;

    &.tone-supportive {
      background-color: $blueVeryLight;
      color: $blueVeryDark;
    }
    &.tone-supportive:hover {
      background-color: $orangeLight; // Predefined lighter orange variant
    }

    &.tone-dominant {
      background-color: $orangeVeryLight;
      color: $blueVeryDark;
    }
    &.tone-dominant:hover {
      background-color: $yellowVeryLight; // Predefined lighter yellow variant
    }

    &.tone-influential {
      background-color: $yellowLight; // Derived yellow for influential
      color: $purpleVeryDark;
    }
    &.tone-influential:hover {
      background-color: $purpleDark;
    color: $yellowVeryLight; // Predefined lighter yellow variant
    }

    &.tone-conscientious {
      background-color: $blueMid;
      color: $yellowVeryLight;
    }
    &.tone-conscientious:hover {
      background-color: $blueDark; // Predefined lighter blue dark variant
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
      font-size: 1.01rem; // Slightly increase the font size on hover
    }
  }
</style>
