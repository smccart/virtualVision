<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      :style="{ backgroundColor: '#0b2545' }"
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
          Vision 2 Virtual
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item to="/">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item to="/about">
          <q-item-section>About Us</q-item-section>
        </q-item>
        <q-item to="/services">
          <q-item-section>Services</q-item-section>
        </q-item>
        <q-item to="/portfolio">
          <q-item-section>Portfolio</q-item-section>
        </q-item>
        <q-item to="/contact">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="hero-section">
        <h1 class="hero-title">
          Vision 2 Virtual brings your ideas to life, creating impactful, custom
          websites that inspire, engage, and deliver results.
        </h1>
        <div class="hero-buttons">
          <q-btn
            label="Learn More"
            :style="learnMoreButtonStyle"
          />
          <q-btn
            label="Explore"
            :style="exploreButtonStyle"
          />
        </div>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineOptions({
    name: 'MainLayout',
  });

  const leftDrawerOpen = ref(false);

  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }

  // Styles for hero section and buttons
  const exploreButtonStyle = {
    backgroundColor: '#0b2545', // Dark blue background
    borderRadius: '999px', // Maximum border-radius to make it oval
    color: '#ffffff', // White text for high contrast
    padding: '0.5rem 1.5rem', // Padding for inner spacing
    fontSize: '1.2rem', // Larger font size for visibility
    width: '240px', // Fixed width for consistency
    textAlign: 'center',
  };

  const learnMoreButtonStyle = {
    backgroundColor: '#8b0000', // Deep red background
    borderRadius: '999px', // Maximum border-radius to make it oval
    color: '#ffffff', // White text for high contrast
    padding: '0.5rem 1.5rem', // Padding for inner spacing
    fontSize: '1.2rem', // Larger font size for visibility
    width: '240px', // Fixed width for consistency
    textAlign: 'center',
  };
</script>

<style scoped>
  .toolbar-title {
    font-family: inherit; /* Use the same font from the app's stylesheet */
    font-weight: bold; /* Make the text bold for authority */
    color: white; /* White text for contrast */
    font-size: 2em;
    padding-left: 1em;

  }

  .hero-section {
  padding: 3rem 6rem 0;
  text-align: center;
  background-color: rgba(255, 166, 0, 0.032); /* Very light, low-saturation orange */
  min-height: 300px;
  color: #0b2545;
  max-width: 75%; /* Adjusted width */
  margin: 0 auto; /* Centering the hero section */
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px; /* Rounded edges */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle drop shadow */
}

  .hero-title {
    color: #0b2545; /* Dark blue for contrast */
    font-size: 2.3rem; /* Adjusted for better visibility */
    font-weight: 700; /* Bold */
    letter-spacing: 0.06em; /* Adjusted letter spacing */
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;

    padding: 1rem;
    margin-bottom: 5rem;
  }

  .q-btn:hover {
    background-color: #091b35; /* Richer, darker shade on hover */
    box-shadow: 0 0 10px rgba(133, 133, 133, 0.5); /* Glow effect */
    transform: scale(1.1); /* Increase font size on hover */
    transition: all 0.3s ease-in-out; /* Smooth transition */
  }
</style>
