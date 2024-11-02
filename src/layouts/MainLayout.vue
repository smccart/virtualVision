<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="custom-header"
      elevated
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="toolbar-title">
          {{ toolbarTitle }}
        </q-toolbar-title>
        <div class="nav-links">
          <q-btn
            flat
            :label="homeLabel"
            to="/"
            class="nav-text"
          />
          <q-btn
            flat
            :label="aboutLabel"
            to="/about"
            class="nav-text"
          />
          <q-btn
            flat
            :label="servicesLabel"
            to="/services"
            class="nav-text"
          />
          <q-btn
            flat
            :label="portfolioLabel"
            to="/portfolio"
            class="nav-text"
          />
          <q-btn
            flat
            :label="contactLabel"
            to="/contact"
            class="nav-text"
          />
        </div>
        <div class="tagline">{{ tagline }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="210"
    >
      <q-list class="custom-drawer-list">
        <q-item
          to="/"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">
            {{ homeLabel }}
          </q-item-section>
        </q-item>
        <q-item
          to="/about"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">
            {{ aboutLabel }}
          </q-item-section>
        </q-item>
        <q-item
          to="/services"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">
            {{ servicesLabel }}
          </q-item-section>
        </q-item>
        <q-item
          to="/portfolio"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">
            {{ portfolioLabel }}
          </q-item-section>
        </q-item>
        <q-item
          to="/contact"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">
            {{ contactLabel }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  defineOptions({
    name: 'MainLayout',
  });

  const leftDrawerOpen = ref(false);

  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }

  onMounted(() => {
    leftDrawerOpen.value = false; // Ensure the drawer is closed on mount
  });

  const toolbarTitle = 'Vision 2 Virtual';
  const tagline = 'Bringing Your Vision to Life';
  const heroTitle =
    'Your dreams matter, and we bring bold ideas to life. Our engaging websites captivate your audience while delivering thoughtful, compelling solutions.';

  const homeLabel = 'Home';
  const aboutLabel = 'About Us';
  const servicesLabel = 'Services';
  const portfolioLabel = 'Portfolio';
  const contactLabel = 'Contact';

  const learnMoreLabel = 'Learn More';
  const exploreLabel = 'Explore';
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

  .custom-header {
    background-color: $blueDark;
    margin-bottom: 1rem;
  }

  .toolbar-title {
    font-family: inherit;
    font-weight: bold;
    color: $textWhite;
    font-size: 2em;
    padding: 1rem;
    margin-left: 2rem;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    flex: 2;
    white-space: nowrap;
  }

  .nav-text {
    color: $orangeVeryLight;

    color: mix($textWhite, $orangeVeryLight, 99%);
  }

  .tagline {
    color: $textWhite;
    font-size: 1.3em;
    font-weight: 500;
    margin-left: auto;
    padding-right: 3rem;
    white-space: nowrap;
  }

  .custom-drawer-list {
    padding: 2em !important;
    margin: 0 !important;
  }

  .custom-drawer-item {
    padding: 0.5rem 3rem !important;
  }

  .custom-drawer-item-section {
    max-width: 180px !important;
    overflow: hidden;
    white-space: nowrap;
  }

  .hero-section {
    padding: 1rem 7rem 0;
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
    margin-bottom: 2rem;
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
