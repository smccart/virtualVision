<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated :style="{ backgroundColor: '#0b2545' }">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Vision 2 Virtual</q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
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
          Vision2Virtual brings your ideas to life, creating impactful, custom
          websites that inspire, engage, and deliver results.
        </h1>
        <div class="hero-buttons">
          <q-btn label="Explore" :style="exploreButtonStyle" />
          <q-btn label="Learn More" :style="learnMoreButtonStyle" />
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

// Styles for hero section and buttons
const exploreButtonStyle = {
  backgroundColor: '#0b2545',
  borderRadius: '20px', // Make it pill-shaped
  color: 'rgba(255, 255, 255, 0.7)', // Almost white, low saturation
  padding: '0.5rem 1.5rem'
};

const learnMoreButtonStyle = {
  backgroundColor: '#8b0000',
  borderRadius: '20px', // Make it pill-shaped
  color: 'rgba(255, 255, 255, 0.7)', // Almost white, low saturation
  padding: '0.5rem 1.5rem'
};
</script>

<style scoped>
.hero-section {
  padding: 2rem;
  text-align: center;
  background-color: rgba(255, 165, 0, 0.1); /* Very light, low-saturation orange */
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333; /* Dark gray for contrast */
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
</style>
