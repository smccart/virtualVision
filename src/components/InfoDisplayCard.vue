<template>
  <div :class="['card', toneColor]" @click="onClick">
    <img :src="imageSrc" alt="Card Image" class="card-image" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    imageSrc: String,
    toneColor: String
  },
  methods: {
    onClick() {
      // Handle card click if needed
    }
  }
};
</script>

<style scoped>
.card {
  /* Basic styling for your card */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
.card-image {
  width: 100%;
  height: auto;
}
.card-content {
  padding: 16px;
}
</style>
