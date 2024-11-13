<template>
  <q-footer class="footer glossy">
    <div class="footer-content">
      <div class="footer-links">
        <q-btn
          flat
          label="Privacy Policy"
          to="/privacy-policy"
          class="footer-link"
        />
        <q-btn
          flat
          label="Terms of Service"
          to="/terms-of-service"
          class="footer-link"
        />
      </div>
      <div class="footer-contact">
        <q-btn
          flat
          icon="email"
          label="Contact Us"
          to="/contact"
          class="contact-link"
        />
      </div>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
  // No longer need brandTitle and tagline props as they were removed from the footer.
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

</style>
