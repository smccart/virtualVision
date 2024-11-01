<template>
  <q-page class="row items-center justify-evenly">
    <!-- Updated Component Name: ChoiceWindow with required props -->
    <ChoiceWindow
      title="Example component"
      imageSrc="path/to/image.jpg"
      text="This is the description text."  
      active
      :todos="todos"
      :meta="meta"
    ></ChoiceWindow>

    <!-- New Binary Choice Setup -->
    <div class="choice-container">
      <div class="choice-window">
        <h3>Choice 1</h3>
        <p>This is a description of the first choice.</p>
      </div>
      <div class="choice-window">
        <h3>Choice 2</h3>
        <p>This is a description of the second choice.</p>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo, Meta } from 'components/models';
import ChoiceWindow from 'components/ChoiceWindow.vue'; // Ensure the correct path and component name

defineOptions({
  name: 'ChoicePage'
});

// Existing data and setup
const todos = ref<Todo[]>([
  { id: 1, content: 'ct1' },
  { id: 2, content: 'ct2' },
  { id: 3, content: 'ct3' },
  { id: 4, content: 'ct4' },
  { id: 5, content: 'ct5' }
]);

const meta = ref<Meta>({
  totalCount: 1200
});
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
