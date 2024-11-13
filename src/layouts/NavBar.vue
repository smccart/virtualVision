<template>
  <q-header
    class="custom-header glossy"
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
          to="/about-us"
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

</style>
