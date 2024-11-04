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
      <q-toolbar-title class="toolbar-title">
        <router-link
          to="/"
          class="home-link"
          >{{ toolbarTitle }}</router-link
        >
      </q-toolbar-title>

      <!-- Updated Navigation Links -->
      <div class="nav-links">
        <q-btn
          flat
          :label="aboutLabel"
          to="/about"
          class="nav-text"
        />
        <q-btn
          flat
          :label="visionPlanningLabel"
          to="/vision-planning"
          class="nav-text"
        />
        <q-btn
          flat
          :label="fullVisionLabel"
          to="/full-vision-realization"
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

  // Destructure props and update labels
  const {
    toolbarTitle,
    tagline,
    aboutLabel,
    visionPlanningLabel,
    fullVisionLabel,
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
    aboutLabel: {
      type: String,
      default: 'About Us',
    },
    visionPlanningLabel: {
      type: String,
      default: 'Vision Planning',
    },
    fullVisionLabel: {
      type: String,
      default: 'Full Vision Realization',
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

  .home-link {
    color: $textWhite;
    text-decoration: none;
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
