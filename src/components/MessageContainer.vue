<template>
  <div class="hero-section">
    <h1 class="hero-title">{{ heroTitle }}</h1>
  </div>
</template>

<script setup lang="ts">
  const heroTitle =
    'Your dreams matter, and we bring bold ideas to life. Our engaging websites captivate your audience while delivering thoughtful, compelling solutions.';
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .hero-section {
    padding: 1rem 6rem 0;
    text-align: center;
    background-color: rgba($orangeLight, 0.01);
    min-height: 300px;
    color: $blueDark;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .hero-title {
    color: $blueDark;
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: 0.0001em;
    line-height: 2.2;
  }
</style>
