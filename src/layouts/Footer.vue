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

  .footer {
    background-color: $blueDark;
    color: $textWhite;
    padding: 0.1rem;
    text-align: center;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0.98;
    transition: background-color 0.3s ease-in-out; /* Smooth transition */
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

  .footer-link {
    color: $textWhite;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      font-size: 1.001rem;
    }
  }

  .footer-contact {
    .contact-link {
      color: $textWhite;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        font-size: 1.01rem;
      }
    }
  }
</style>
