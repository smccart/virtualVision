<template>
  <q-drawer
    :model-value="props.drawerOpen"
    @update:model-value="updateDrawerOpen"
    show-if-above
    bordered
    :width="325"
  >
    <q-list class="journey-drawer-list">
      <q-item
        v-for="(step, index) in journeySteps"
        :key="index"
        :to="step.route"
        class="journey-drawer-item"
      >
        <q-item-section class="journey-drawer-item-section">{{
          step.label
        }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
  // Use the props
  const props = defineProps<{ drawerOpen: boolean }>();

  // Emit function for updating the drawer state
  const emit = defineEmits<{
    (event: 'update:drawerOpen', value: boolean): void;
  }>();

  const updateDrawerOpen = (value: boolean) => {
    emit('update:drawerOpen', value);
  };

  // Complete list of 12 steps of the journey
  const journeySteps = [
    { label: 'Step 1: The Ordinary World', route: '/journey/step-1' },
    { label: 'Step 2: The Call to Adventure', route: '/journey/step-2' },
    { label: 'Step 3: Refusal of the Call', route: '/journey/step-3' },
    { label: 'Step 4: Meeting the Mentor', route: '/journey/step-4' },
    { label: 'Step 5: Crossing the Threshold', route: '/journey/step-5' },
    { label: 'Step 6: Tests, Allies, Enemies', route: '/journey/step-6' },
    { label: 'Step 7: Approach to the Inmost Cave', route: '/journey/step-7' },
    { label: 'Step 8: The Ordeal', route: '/journey/step-8' },
    { label: 'Step 9: Reward (Seizing the Sword)', route: '/journey/step-9' },
    { label: 'Step 10: The Road Back', route: '/journey/step-10' },
    { label: 'Step 11: Resurrection', route: '/journey/step-11' },
    { label: 'Step 12: Return with the Elixir', route: '/journey/step-12' },
  ];
</script>

<style scoped lang="scss">
  @import '/src/css/app.scss';

</style>
