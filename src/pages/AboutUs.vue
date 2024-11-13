<template>
  <div class="about-us-page q-pa-md">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">About Us</h1>
      <p class="hero-subtitle">
        Welcome to Vision 2 Virtual! We specialize in crafting intuitive and
        emotionally engaging websites that bring your vision to life.
        <br /><br />
        Our mission is to support and empower you through each stage of your
        digital journey.
      </p>
    </div>

    <!-- Call to Action Button -->
    <div class="cta-container">
      <q-btn
        color="primary"
        label="Contact Us"
        class="cta-btn"
        to="/contact"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutUs',
});
</script>

<style scoped lang="scss">
@import '/src/css/app.scss';

</style>
