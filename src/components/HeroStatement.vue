<template>
  <div class="hero-section">
    <h1 class="hero-title">{{ heroTitle }}</h1>
    <div class="hero-buttons">
      <q-btn
        :label="learnMoreLabel"
        class="learn-more-btn"
      />
      <q-btn
        :label="exploreLabel"
        class="explore-btn"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const heroTitle =
    'Your dreams matter, and we bring bold ideas to life. Our engaging websites captivate your audience while delivering thoughtful, compelling solutions.';

  const learnMoreLabel = 'Learn More';
  const exploreLabel = 'Explore';
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .hero-section {
    padding: 3rem 6rem 0;
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

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding: 1rem;
    margin-bottom: 5rem;
  }

  .learn-more-btn {
    background-color: $redDark;
    color: mix($textWhite, $greenVeryLight, 99%);
    border-radius: 999px;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    width: 240px;
    text-align: center;
    white-space: nowrap;
    transition: transform 0.3s ease, box-shadow 0.3s ease,
      background-color 0.3s ease;
  }

  .explore-btn {
    background-color: $blueDark;
    color: mix($textWhite, $orangeVeryLight, 99%);
    border-radius: 999px;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    width: 240px;
    text-align: center;
    white-space: nowrap;
    transition: transform 0.3s ease, box-shadow 0.3s ease,
      background-color 0.3s ease;
  }

  .q-btn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
</style>
