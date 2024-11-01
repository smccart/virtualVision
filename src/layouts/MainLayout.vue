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
          {{ toolbarTitle }}
        </q-toolbar-title>
        <div class="nav-links">
          <q-btn
            flat
            :label="homeLabel"
            to="/"
          />
          <q-btn
            flat
            :label="aboutLabel"
            to="/about"
          />
          <q-btn
            flat
            :label="servicesLabel"
            to="/services"
          />
          <q-btn
            flat
            :label="portfolioLabel"
            to="/portfolio"
          />
          <q-btn
            flat
            :label="contactLabel"
            to="/contact"
          />
        </div>
        <div class="tagline">{{ tagline }}</div>
      </q-toolbar>
    </q-header>

    <!-- Adjusted q-drawer with modified properties -->
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
        <h1 class="hero-title">
          {{ heroTitle }}
        </h1>
        <div class="hero-buttons">
          <q-btn
            :label="learnMoreLabel"
            :style="learnMoreButtonStyle"
          />
          <q-btn
            :label="exploreLabel"
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

  // Function to toggle the drawer
  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }

  // Toolbar and hero text content
  const toolbarTitle = 'Vision 2 Virtual';
  const tagline = 'Bringing Your Vision to Life';
  const heroTitle = 'Your dreams matter, and we bring bold ideas to life. Our engaging websites captivate your audience while delivering thoughtful, compelling solutions.';

  // Navigation labels
  const homeLabel = 'Home';
  const aboutLabel = 'About Us';
  const servicesLabel = 'Services';
  const portfolioLabel = 'Portfolio';
  const contactLabel = 'Contact';

  // Hero button labels
  const learnMoreLabel = 'Learn More';
  const exploreLabel = 'Explore';

  // Styles for hero section and buttons
  const exploreButtonStyle = {
    backgroundColor: '#0b2545',
    borderRadius: '999px',
    color: '#ffffff',
    padding: '0.5rem 1.5rem',
    fontSize: '1.2rem',
    width: '240px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };

  const learnMoreButtonStyle = {
    backgroundColor: '#8b0000',
    borderRadius: '999px',
    color: '#ffffff',
    padding: '0.5rem 1.5rem',
    fontSize: '1.2rem',
    width: '240px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };
</script>

<style scoped>
  .toolbar-title {
    font-family: inherit;
    font-weight: bold;
    color: white;
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

  .tagline {
    color: white;
    font-size: 1.3em;
    font-weight: 500;
    margin-left: auto;
    padding-right: 3rem;
    white-space: nowrap;
  }

  .custom-drawer-list {
    padding: 2em !important; /* Removes extra padding */
    margin: 0em !important;
  }

  .custom-drawer-item {
    padding: 0.5rem 3rem !important; /* Reduces padding */
  }

  .custom-drawer-item-section {
    max-width: 180px !important; /* Sets a reasonable max width */
    overflow: hidden;
    white-space: nowrap;
  }

  .hero-section {
    padding: 3rem 6rem 0;
    text-align: center;
    background-color: rgba(255, 166, 0, 0.032);
    min-height: 300px;
    color: #0b2545;
    max-width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1em;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .hero-title {
    color: #0b2545;
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    line-height: 2.2;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding: 1rem;
    margin-bottom: 5rem;
  }

  .q-btn {
    border-radius: 999px;
    font-weight: bold;
    color: white;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  .q-btn:hover {
    background-color: #07172b;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
</style>
