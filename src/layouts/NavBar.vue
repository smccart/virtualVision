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

      <!-- Title (Vision2Virtual links to About Us) -->
      <q-toolbar-title class="toolbar-title">
        <router-link
          to="/about-us"
          class="home-link"
        >
          {{ toolbarTitle }}
        </router-link>
      </q-toolbar-title>

      <!-- Navigation Links -->
      <div class="nav-links">
        <q-btn
          flat
          :label="visionPlanningLabel"
          to="/talk-to-developer"
          class="nav-text"
        />
        <q-btn
          flat
          :label="fullVisionLabel"
          to="/focused-strategy-sessions"
          class="nav-text"
        />
        <q-btn
          flat
          label="Complete Website Build"
          to="/complete-website-build"
          class="nav-text"
        />
      </div>

      <!-- Tagline -->
      <div class="tagline">{{ tagline }}</div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
  const { toolbarTitle, tagline, visionPlanningLabel, fullVisionLabel } =
    defineProps({
      toolbarTitle: {
        type: String,
        required: true,
      },
      tagline: {
        type: String,
        required: true,
      },
      visionPlanningLabel: {
        type: String,
        default: 'Talk to a Developer',
      },
      fullVisionLabel: {
        type: String,
        default: 'Focused Strategy Sessions',
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
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    opacity: 0.98;
    transition: background-color 0.3s ease-in-out; /* Smooth transition */
  }

  .tagline {
    color: $textWhite;
    font-size: 1.2em;
    font-weight: 700;
    padding-right: 1rem;
    white-space: nowrap;
  }

  .toolbar-title {
    font-family: inherit;
    font-weight: 1.25rem;
    color: $textWhite;
    font-size: 1.75em;
    font-weight: 600;
    padding: 1rem 0rem 1rem 2rem;
    justify-content: space-evenly;
  }

  .nav-links {
    display: flex;
    gap: 0.9rem;
    flex: 2;
    white-space: nowrap;
    justify-content: space-evenly;
    padding-right: 15.5rem;
  }

  .nav-text {
    color: $textWhite;
    font-size: 1.1em;
    font-weight: 600;
  }
</style>
