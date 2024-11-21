<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Use NavBar for the Navigation Bar -->
    <NavBar
      :toolbarTitle="toolbarTitle"
      :tagline="tagline"
      @toggleLeftDrawer="toggleLeftDrawer"
    />

    <!-- Use LeftDrawer for the Drawer Menu -->
    <LeftDrawer
      :drawerOpen="leftDrawerOpen"
      @update:drawerOpen="(value) => (leftDrawerOpen = value)"
    />

    <q-page-container>
      <!-- Add BackgroundImages component -->
      <BackgroundImages />

      <!-- Main content -->
      <router-view :key="route.name" />
    </q-page-container>

    <!-- Add Footer here -->
    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'; // Import useRoute
import NavBar from './NavBar.vue';
import LeftDrawer from '../layouts/LeftDrawer.vue';
import Footer from '../layouts/Footer.vue';
import BackgroundImages from '../components/BackgroundImages.vue';
import { useSalesStrategyMessages } from '../stores/SalesStrategyMessages'; // Import the store

defineOptions({
  name: 'MainLayout',
});

// State for controlling the left drawer
const leftDrawerOpen = ref(false);

// Function to toggle the drawer
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Close the drawer on mount to ensure it's closed by default
onMounted(() => {
  leftDrawerOpen.value = false;
});

// Toolbar title and tagline
const toolbarTitle = 'Vision 2 Virtual';
const tagline = 'Bringing Your Vision to Life';

// Use route for navigation logic
const route = useRoute();

// Watch for route changes and update store
watch(
  () => route.name,
  (newRouteName) => {
    if (typeof newRouteName === 'string') {
      useSalesStrategyMessages().setCurrentLevel(newRouteName);
    } else {
      console.warn(`Invalid route name type: ${typeof newRouteName}`);
    }
  }
);
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
</style>
