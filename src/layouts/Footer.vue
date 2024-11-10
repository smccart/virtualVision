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
    background-color: $blueVeryDark;
    color: $textWhite;
    padding: 1rem 1rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
    transition: font-size 0.3s ease-in-out;
    &:hover {
      font-size: 1.001rem; // Increase font size by 1% on hover
    }
  }

  .footer-contact {
    .contact-link {
      color: $textWhite;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: font-size 0.3s ease-in-out;
      &:hover {
        font-size: 1.01rem; // Increase font size by 1% on hover
      }
    }
  }
</style>
