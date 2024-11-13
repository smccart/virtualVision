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
      <router-view />
    </q-page-container>

    <!-- Add Footer here -->
    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import NavBar from './NavBar.vue';
  import LeftDrawer from '../layouts/LeftDrawer.vue';
  import Footer from '../layouts/Footer.vue';

  defineOptions({
    name: 'MainLayout',
  });

  // State for controlling the left drawer
  const leftDrawerOpen = ref(false); // Set to false by default to keep the drawer closed on load

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
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';
</style>
