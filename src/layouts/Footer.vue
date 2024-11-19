<template>
  <q-footer class="footer glossy">
    <div class="footer-content">
      <!-- Footer Links -->
      <div class="footer-links">
        <q-btn
          flat
          label="About Us"
          to="/about-us"
          class="footer-link"
          aria-label="About Us"
        />
        <q-btn
          flat
          label="Privacy Policy"
          to="/privacy-policy"
          class="footer-link"
          aria-label="Privacy Policy"
        />
        <q-btn
          flat
          label="Terms of Service"
          to="/terms-of-service"
          class="footer-link"
          aria-label="Terms of Service"
        />
      </div>

      <!-- Contact Button -->
      <div class="footer-contact">
        <q-btn
          flat
          icon="email"
          label="Contact Us"
          to="/contact"
          class="contact-link"
          aria-label="Contact Us"
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

  .footer {
    background-color: $blueDark;
    color: $textWhite;
    padding: 0.5rem 1.5rem;
    text-align: center;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0.98;
    transition: background-color 0.3s ease-in-out;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    @media (min-width: 600px) {
      flex-direction: row;
    }
  }

  .footer-link {
    color: $textWhite;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  .footer-contact {
    .contact-link {
      color: $textWhite;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid transparent;
      box-shadow: 0em 0em 0.1em rgba(255, 255, 255, 0.43); /* Adds a subtle glow */
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: $textWhite;
        color: $blueDark;
      }
    }
  }
</style>
