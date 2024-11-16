<template>
  <div class="background-images">
    <div class="bg-image influential" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const handleScroll = () => {
  const scrollTop = window.scrollY; // Current scroll position
  const viewportHeight = window.innerHeight; // Height of the viewport
  const pageHeight = document.body.scrollHeight - viewportHeight; // Total scrollable height

  const scrollPercentage = scrollTop / pageHeight; // Percentage scrolled

  const image = document.querySelector('.bg-image.influential');
  if (image) {
    const start = 16; // Start at 16% of the image (near the top)
    const end = 58; // End at the bottom of the image

    // Adjust parallax to scroll downward
    const clampedScroll = Math.min(Math.max(scrollPercentage, 0), 1); // Clamp between 0 and 1
    const newPosition = start + (end - start) * clampedScroll; // Moves downward as you scroll

    (image as HTMLElement).style.backgroundPosition = `center ${newPosition}%`;
  }
};

const setInitialPosition = () => {
  const image = document.querySelector('.bg-image.influential');
  if (image) {
    const start = 16; // Match this with your desired initial position
    (image as HTMLElement).style.backgroundPosition = `center ${start}%`;
  }
};

onMounted(() => {
  setInitialPosition(); // Set the initial position on load
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
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
  background-attachment: fixed; /* Parallax effect */
  filter: grayscale(100%) brightness(100%) opacity(0.15);
  transition: background-position 10s ease-in-out;
}

/* Influential image */
.influential {
  background-image: url('/src/assets/influential_bottom_left.webp');
  background-position: center 16%; /* Matches the JavaScript start value */
}
</style>
