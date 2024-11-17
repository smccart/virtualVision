<template>
  <div class="background-images">
    <div class="bg-image influential" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.background-images {
  position: fixed; /* Fixed to the viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Behind all content */
}

.bg-image {
  position: absolute; /* Ensure it fills the container */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Smooth parallax-like effect */
  filter: grayscale(100%) brightness(100%) opacity(0.15);

  /* Automatic scrolling animation */
  background-image: url('/src/assets/influential_bottom_left.webp');
  background-position: center 16%; /* Start at 16% */
  animation: scrollBackground 25s ease-in-out forwards; /* Animate for 25 seconds */
}

/* Keyframes for smooth background scroll */
@keyframes scrollBackground {
  0% {
    background-position: center 18.5%;
  }
  100% {
    background-position: center 57.7%; /* End at 58% */
  }
}
</style>
