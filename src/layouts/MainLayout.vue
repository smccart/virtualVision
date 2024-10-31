<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header-background">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
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
      <div
        class="hero-section"
        :style="heroGradient"
      >
        <h1 class="hero-title">
          Vision2Virtual brings your ideas to life, creating impactful, custom websites that inspire, engage, and deliver results.
        </h1>
        <div class="hero-buttons">
          <q-btn
            label="Explore"
            class="pill-button blue-pill"
            flat
          />
          <q-btn
            label="Learn More"
            class="pill-button red-pill"
            flat
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
  name: 'MainLayout'
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Gradient background for hero section
const heroGradient = {
  background: `linear-gradient(
    to bottom right,
    rgba(0, 0, 139, 0.2) 0%,  /* Dark blue, subtle transparency */
    rgba(139, 0, 0, 0.2) 25%,  /* Blood red, subtle transparency */
    rgba(34, 139, 34, 0.2) 50%, /* Light green, peaceful tone */
    rgba(255, 165, 0, 0.2) 100% /* Orange-yellow, complementary */
  )`
};
</script>

<style scoped>
.header-background {
  background-color: #00008b; /* Dark Blue */
}

.hero-section {
  padding: 2rem;
  text-align: center;
  color: #333; /* Dark gray for better contrast */
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.pill-button {
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

.blue-pill {
  background-color: #00008b; /* Dark Blue */
  color: #ffea85; /* Light yellow-orange text */
}

.red-pill {
  background-color: #8b0000; /* Dark Red */
  color: #98fb98; /* Super light green text */
}

.pill-button:hover {
  opacity: 0.8; /* Hover effect */
}
</style>
