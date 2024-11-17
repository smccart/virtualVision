<template>
  <q-header
    class="custom-header glossy"
    elevated
  >
    <q-toolbar>
      <!-- Menu Button -->
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <!-- Title -->
      <q-toolbar-title class="toolbar-title">
        <router-link
          to="/"
          class="home-link"
        >
          {{ toolbarTitle }}
        </router-link>
      </q-toolbar-title>

      <!-- Navigation Links -->
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

      <!-- Tagline -->
      <div class="tagline">{{ tagline }}</div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
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
  height: 4rem; /* Fixed header height */
  z-index: 10; /* Ensure header stays above content */
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
}

.tagline {
  color: $textWhite;
  font-size: 1.1em;
  font-weight: 500;
  margin-right: 0rem;
  padding-right: 1rem;
  white-space: nowrap;
}
</style>
