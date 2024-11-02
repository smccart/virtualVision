<template>
  <q-page class="row items-center justify-evenly">
    <!-- Binary choices using data from the script section -->
    <div class="choice-container">
      <div class="choice-window" v-for="(choice, index) in binaryChoices" :key="index">
        <h3>{{ choice.title }}</h3>
        <p>{{ choice.description }}</p>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'ChoicePage'
});

// Define binary choices data
const binaryChoices = ref([
  {
    title: 'Choice 1',
    description: 'This is ChoicePage.vue.'
  },
  {
    title: 'Choice 2',
    description: 'This is a description of the second choice.'
  }
]);
</script>

<style scoped>
.choice-container {
  display: flex;
  justify-content: space-around;
  margin-top: 0rem;
}

.choice-window {
  width: 40%;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 1em;
  text-align: center;
}

q-page {
  padding: 0;
  margin: 0;
}
</style>
