<template>
  <MainLayout>
    <div class="talk-to-developer">
      <h1>Talk to a Developer</h1>
      <p>For just $49, get a one-on-one session with a full-stack developer to analyze your needs and provide actionable solutions.</p>

      <!-- Dynamic Buttons -->
      <div class="cta-buttons">
        <q-btn flat label="Book Now" to="/book" class="cta-book" />
        <q-btn flat label="Learn More" to="/focused-strategy-sessions" class="cta-learn-more" />
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
// Import shared messaging if needed from the store.
</script>

<style scoped>
.talk-to-developer {
  text-align: center;
  padding: 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
