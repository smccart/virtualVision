<template>
  <q-page class="row items-center justify-evenly">
    <!-- ChoiceWindow component with data from the script section -->
    <ChoiceWindow
      v-for="(window, index) in choiceWindows"
      :key="index"
      :title="window.title"
      :imageSrc="window.imageSrc"
      :text="window.text"
      :active="window.active"
      :todos="window.todos"
      :meta="window.meta"
    ></ChoiceWindow>

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
import ChoiceWindow from 'components/ChoiceWindow.vue'; // Make sure the path is correct

defineOptions({
  name: 'ChoicePage'
});

// Defining data in the script section, but still avoiding hard-coded strings in the template
const choiceWindows = ref([
  {
    title: 'Example component',
    imageSrc: 'path/to/image.jpg',
    text: 'This is the description text.',
    active: true,
    todos: [
      { id: 1, content: 'ct1' },
      { id: 2, content: 'ct2' },
      { id: 3, content: 'ct3' },
      { id: 4, content: 'ct4' },
      { id: 5, content: 'ct5' }
    ],
    meta: { totalCount: 1200 }
  }
]);

const binaryChoices = ref([
  {
    title: 'Choice 1',
    description: 'This is a description of the first choice.'
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
  margin-top: 2rem;
}

.choice-window {
  width: 40%;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}
</style>
