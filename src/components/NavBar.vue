<template>
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
      <q-toolbar-title class="toolbar-title">{{
        toolbarTitle
      }}</q-toolbar-title>

      <!-- Navigation Links -->
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
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  // Destructure props directly
  const {
    toolbarTitle,
    tagline,
    homeLabel,
    aboutLabel,
    servicesLabel,
    portfolioLabel,
    contactLabel,
  } = defineProps({
    toolbarTitle: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    homeLabel: {
      type: String,
      default: 'Home',
    },
    aboutLabel: {
      type: String,
      default: 'About Us',
    },
    servicesLabel: {
      type: String,
      default: 'Services',
    },
    portfolioLabel: {
      type: String,
      default: 'Portfolio',
    },
    contactLabel: {
      type: String,
      default: 'Contact',
    },
  });

  // Define and type the emit function
  const emit = defineEmits<{
    (event: 'toggleLeftDrawer'): void;
  }>();

  function toggleLeftDrawer() {
    emit('toggleLeftDrawer');
  }
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
</style>
