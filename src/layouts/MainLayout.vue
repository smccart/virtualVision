<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="custom-header"
      elevated
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
            class="nav-text"
          />
          <q-btn
            flat
            :label="aboutLabel"
            to="/about"
            class="nav-text"
          />
          <q-btn
            flat
            :label="servicesLabel"
            to="/services"
            class="nav-text"
          />
          <q-btn
            flat
            :label="portfolioLabel"
            to="/portfolio"
            class="nav-text"
          />
          <q-btn
            flat
            :label="contactLabel"
            to="/contact"
            class="nav-text"
          />
        </div>
        <div class="tagline">{{ tagline }}</div>
      </q-toolbar>
    </q-header>

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

  .custom-header {
    background-color: $blueDark;
    margin-bottom: 1rem;
  }

  .toolbar-title {
    font-family: inherit;
    font-weight: bold;
    color: $textWhite;
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

  .nav-text {
    color: $orangeVeryLight;

    color: mix($textWhite, $orangeVeryLight, 99%);
  }

  .tagline {
    color: $textWhite;
    font-size: 1.3em;
    font-weight: 500;
    margin-left: auto;
    padding-right: 3rem;
    white-space: nowrap;
  }

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
