<template>
  <div class="background-images">
    <div class="bg-image supportive" />
    <div class="bg-image dominant" />
    <div class="bg-image influential" />
    <div class="bg-image conscientious" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BackgroundImages',
});
</script>

<style scoped lang="scss">
.background-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Keeps it behind the content */
  display: grid;
  grid-template-rows: 1fr 1fr;
}

/* Base styles for images */
.bg-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; /* For parallax effect */
  background-position: center;
  filter: grayscale(100%) brightness(99%);
}

/* Individual image areas with correct paths */
.supportive {
  grid-row: 1 / 2;
  background-image: url('/src/assets/supportive_top_left.webp');
}

.dominant {
  grid-row: 1 / 2;
  background-image: url('/src/assets/dominant_top_right.webp');
}

.influential {
  grid-row: 2 / 3;
  background-image: url('/src/assets/influential_bottom_left.webp');
}

.conscientious {
  grid-row: 2 / 3;
  background-image: url('/src/assets/conscientious_bottom_left.webp');
}
</style>
