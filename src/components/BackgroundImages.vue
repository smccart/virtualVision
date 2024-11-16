<template>
  <div class="background-images">
    <div class="bg-image supportive" />
    <div class="bg-image dominant" />
    <div class="bg-image influential" />
    <div class="bg-image conscientious" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const handleScroll = () => {
  const scrollTop = window.scrollY; // Current scroll position
  const viewportHeight = window.innerHeight; // Height of the viewport
  const pageHeight = document.body.scrollHeight - viewportHeight; // Total scrollable height

  const scrollPercentage = scrollTop / pageHeight; // Percentage scrolled

  document.querySelectorAll('.bg-image').forEach((image, index) => {
    const start = 100; // Start at the bottom of the image
    const end = 0; // End at the top of the image

    const clampedScroll = Math.min(Math.max(scrollPercentage, 0), 1); // Clamped between 0 and 1
    const newPosition = start + (end - start) * clampedScroll;

    // Set `background-position` dynamically based on the image
    let horizontalPosition;
    if (image.classList.contains('supportive')) {
      horizontalPosition = 'left'; // Supportive starts bottom-left
    } else if (image.classList.contains('dominant')) {
      horizontalPosition = 'right'; // Dominant starts bottom-right
    } else if (image.classList.contains('influential')) {
      horizontalPosition = 'left'; // Influential starts top-left
    } else if (image.classList.contains('conscientious')) {
      horizontalPosition = 'right'; // Conscientious starts top-right
    }

    (image as HTMLElement).style.backgroundPosition = `${horizontalPosition} ${newPosition}%`;
  });
};

onMounted(() => {
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
  display: grid;
  grid-template-rows: 50vh 50vh; /* Two equal rows */
  grid-template-columns: 1fr 1fr; /* Two equal columns */
}

.bg-image {
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Parallax effect */
    filter: grayscale(100%) brightness(100%) opacity(0.22); /* Start with full grayscale */
}

/* Supportive image */
.supportive {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-image: url('/src/assets/supportive_top_left.webp');
  background-position: 0% 100%; /* Bottom-left corner to start */
  background-size: cover;
  background-attachment: local; /* For parallax effect */
}

/* Dominant image */
.dominant {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  background-image: url('/src/assets/dominant_top_right.webp');
  background-position: 100% 100%; /* Bottom-right corner to start */
  background-size: cover;
  background-attachment: local; /* For parallax effect */
}

/* Influential image */
.influential {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  background-image: url('/src/assets/influential_bottom_left.webp');
  background-position: 0% 0%; /* Top-left corner to start */
  background-size: cover;
  background-attachment: local; /* For parallax effect */
}

/* Conscientious image */
.conscientious {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  background-image: url('/src/assets/conscientious_bottom_left.webp');
  background-position: 100% 0%; /* Top-right corner to start */
  background-size: cover;
  background-attachment: local; /* For parallax effect */
}
</style>
