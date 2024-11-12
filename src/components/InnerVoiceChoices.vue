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
  max-width: 30rem;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, font-size 0.3s ease-in-out, font-weight 0.3s ease-in-out;
  border: 4px solid;
}

.choice-btn:hover {
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
  transform: translateY(-1px);
  font-size: 1.11rem; // Slightly increase the font size
  font-weight: 600; // Increase font weight for emphasis
}


  // .supportive-btn {
  //   background-color: $yellowVeryLight;
  //   color: $purpleDark;
  //   border-color: $purpleDark;
  // }

  // .supportive-btn:hover {
  //   background-color: $purpleDark;
  //   color: $yellowVeryLight;
  //   border-color: $yellowVeryLight;
  // }

  // .dominant-btn {
  //   background-color: $orangeVeryLight;
  //   color: $blueDark; /* Dark blue text for better contrast */
  //   border-color: $blueDark; /* Border matches text color */
  // }

  // .dominant-btn:hover {
  //   background-color: $blueDark;
  //   color: $orangeVeryLight; /* Purple text for better contrast */
  //   border-color: $orangeVeryLight; /* Border matches text color */
  // }

  // .influential-btn {
  //   background-color: $purpleDark;
  //   color: $yellowVeryLight; /* Purple text for better contrast */
  //   border-color: $yellowVeryLight; /* Border matches text color */
  // }

  // .influential-btn:hover {
  //   background-color: $yellowVeryLight; /* Invert colors on hover */
  //   color: $purpleDark; /* Yellow text */
  //   border-color: $purpleDark; /* Border matches text color */
  // }

  // .conscientious-btn {
  //   background-color: $blueDark;
  //   color: $orangeVeryLight; /* Light yellow text for better contrast */
  //   border-color: $orangeVeryLight; /* Border matches text color */
  // }

  // .conscientious-btn:hover {
  //   background-color: $orangeVeryLight; /* Invert colors on hover */
  //   color: $blueDark; /* Blue text */
  //   border-color: $blueDark; /* Border matches text color */
  // }

  // .choice-btn:hover {
  //   box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  //   transform: translateY(-2px);
  // }
</style>
