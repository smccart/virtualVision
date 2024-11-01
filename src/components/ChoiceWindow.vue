<template>
  <div class="choice-window">
    <img :src="imageSrc" alt="Choice Image" class="choice-image" />
    <p class="choice-text">{{ text }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p class="todo-count">Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p class="status">Active: {{ active ? 'yes' : 'no' }}</p>
    <p class="clicks">Clicks on todos: {{ clickCount }}</p>
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

<style scoped lang="scss">
@import '/src/css/app.scss';

.choice-window {
  border: 1px solid $grayLight;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  max-width: 300px;
  background-color: $blueLight;
  color: mix($textWhite, $orangeDark, 99%); // Using mix for mainly white with a hint of orange
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
  color: mix($textWhite, $orangeDark, 99%); // Using mix for mainly white with a hint of orange
}

.todo-count {
  color: $grayMid;
  font-size: 14px;
}

.status {
  color: $greenDark;
  font-weight: bold;
}

.clicks {
  color: $redDark;
  font-weight: bold;
}
</style>
