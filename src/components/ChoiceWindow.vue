<template>
  <div>
    <img :src="imageSrc" alt="Choice Image" />
    <p>{{ text }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue';
import { Todo, Meta } from './models';

const props = defineProps<{
  imageSrc: string;
  text: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}>();

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos ? props.todos.length : 0);
</script>

<style scoped>
.choice-window {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.choice-window:hover {
  transform: translateY(-4px);
}

.choice-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 12px;
}

.choice-text {
  font-size: 16px;
  color: #333;
}
</style>
