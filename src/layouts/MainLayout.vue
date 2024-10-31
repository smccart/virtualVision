<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      :style="{ backgroundColor: '#0b2545', marginBottom: '1rem' }"
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

        <div class="nav-links">
          <q-btn
            flat
            label="Home"
            to="/"
          />
          <q-btn
            flat
            label="About Us"
            to="/about"
          />
          <q-btn
            flat
            label="Services"
            to="/services"
          />
          <q-btn
            flat
            label="Portfolio"
            to="/portfolio"
          />
          <q-btn
            flat
            label="Contact"
            to="/contact"
          />
        </div>

        <!-- Tagline for Vision2Virtual on the right -->
        <div class="tagline">Bringing Your Vision to Life</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :style="{ width: '100px', padding: '1rem' }"
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
    whiteSpace: 'nowrap', // Prevents text from wrapping
  };

  const learnMoreButtonStyle = {
    backgroundColor: '#8b0000', // Deep red background
    borderRadius: '999px', // Maximum border-radius to make it oval
    color: '#ffffff', // White text for high contrast
    padding: '0.5rem 1.5rem', // Padding for inner spacing
    fontSize: '1.2rem', // Larger font size for visibility
    width: '240px', // Fixed width for consistency
    textAlign: 'center',
    whiteSpace: 'nowrap', // Prevents text from wrapping
  };
</script>

<style scoped>
  .toolbar-title {
    font-family: inherit; /* Use the same font from the app's stylesheet */
    font-weight: bold; /* Make the text bold for authority */
    color: white; /* White text for contrast */
    font-size: 2em;
    padding: 1rem;
    margin-left: 2rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem; /* Adjusted gap for better spacing */
    flex: 2; /* Ensures the nav links take up available space */
    white-space: nowrap;
  }

  .tagline {
    color: white;
    font-size: 1.3em;
    font-weight: 500;
    margin-left: auto; /* Pushes the tagline to the right */
    padding-right: 3rem; /* Adjusted right padding */
    white-space: nowrap;
  }

  .hero-section {
    padding: 3rem 6rem 0;
    text-align: center;
    background-color: rgba(
      255,
      166,
      0,
      0.032
    ); /* Very light, low-saturation orange */
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
    gap: 4rem; /* Increased space between buttons */
    padding: 1rem;
    margin-bottom: 5rem;
  }

  .q-btn {
    border-radius: 999px; /* Making the buttons pill-shaped */
    font-weight: bold;
    color: white; /* Ensuring the text is white for contrast */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
      background-color 0.3s ease-in-out; /* Smooth transition for all properties */
  }

  .q-btn:hover {
    background-color: #07172b; /* Darker, richer shade on hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Stronger shadow effect */
    transform: translateY(-1px); /* Moves the button up smoothly */
  }
</style>
