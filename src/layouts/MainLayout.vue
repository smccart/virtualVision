<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Use NavBar for the Navigation Bar -->
    <NavBar
      :toolbarTitle="toolbarTitle"
      :tagline="tagline"
      @toggleLeftDrawer="toggleLeftDrawer"
    />

    <!-- Use LeftDrawer for the Drawer Menu -->
    <LeftDrawer :drawerOpen="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import NavBar from '../components/NavBar.vue';
  import LeftDrawer from '../components/LeftDrawer.vue';

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
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

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
</style>
