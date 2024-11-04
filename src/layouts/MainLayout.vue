<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Use NavBar for the Navigation Bar -->
    <NavBar
      :toolbarTitle="toolbarTitle"
      :tagline="tagline"
      @toggleLeftDrawer="toggleLeftDrawer"
    />

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
          <q-item-section class="custom-drawer-item-section">{{
            homeLabel
          }}</q-item-section>
        </q-item>
        <q-item
          to="/about"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">{{
            aboutLabel
          }}</q-item-section>
        </q-item>
        <q-item
          to="/services"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">{{
            servicesLabel
          }}</q-item-section>
        </q-item>
        <q-item
          to="/portfolio"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">{{
            portfolioLabel
          }}</q-item-section>
        </q-item>
        <q-item
          to="/contact"
          class="custom-drawer-item"
        >
          <q-item-section class="custom-drawer-item-section">{{
            contactLabel
          }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import NavBar from '../components/NavBar.vue';

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

  const homeLabel = 'Home';
  const aboutLabel = 'About Us';
  const servicesLabel = 'Services';
  const portfolioLabel = 'Portfolio';
  const contactLabel = 'Contact';
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
