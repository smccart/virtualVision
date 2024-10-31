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
        <q-toolbar-title class="toolbar-title"
          >Vision 2 Virtual</q-toolbar-title
        >
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
        <div class="tagline">Bringing Your Vision to Life</div>
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
          <q-item-section class="custom-drawer-item-section"
            >Home</q-item-section
          >
        </q-item>
        <q-item
          to="/about"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section"
            >About Us</q-item-section
          >
        </q-item>
        <q-item
          to="/services"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section"
            >Services</q-item-section
          >
        </q-item>
        <q-item
          to="/portfolio"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section"
            >Portfolio</q-item-section
          >
        </q-item>
        <q-item
          to="/contact"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section"
            >Contact</q-item-section
          >
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
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .hero-title {
    color: #0b2545;
    font-size: 2.3rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
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
