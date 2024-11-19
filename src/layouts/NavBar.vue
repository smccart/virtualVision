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
        class="menu-button"
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
    display: flex;
    align-items: center; /* Vertically aligns items */
    justify-content: space-between; /* Balances left, center, and right zones */
    height: 4rem; /* Fixed header height */
    z-index: 10; /* Keeps header above other content */
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    opacity: 0.98;
    transition: background-color 0.3s ease-in-out; /* Smooth transition */
    padding: 1rem 1rem;
    white-space: nowrap;
  }

  .menu-button {
    margin-right: 1rem;

    @media (min-width: 768px) {
      margin-right: 2rem; /* Add more space for larger screens */
    }
  }

  .toolbar-title {
    display: inline-flex; /* Shrink-wraps the title content */
    justify-content: flex-start; /* Aligns title to the left */
    align-items: center; /* Vertically centers the text */
    flex: none; /* Prevents title from taking extra space */
    font-size: 1.75rem;
    font-weight: 600;
    color: $textWhite;
    padding: 0; /* No extra padding */
    margin: 0; /* No extra margin */
  }

  .nav-links {
    display: flex;
    justify-content: center; /* Centers navigation links */
    align-items: center; /* Vertically aligns navigation links */
    gap: 1rem; /* Adds space between links */
    flex: 1; /* Dynamically adjusts to available space */
    padding: 0; /* No extra padding */
  }

  .nav-text {
    color: $textWhite;
    font-size: 1.1em;
    font-weight: 600;
  }

  .tagline {
    color: $textWhite;
    font-size: 1.2em;
    font-weight: 700;
    white-space: nowrap;
  }
</style>
