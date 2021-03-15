<template>
  <section id="pet-area" class="sky">
    <StructureMaxWidth class="relative h-64">
      <AnimatedStreamPet />
    </StructureMaxWidth>
  </section>
</template>

<style scoped>
.sky {
  background: #b5f3ff;
  background: linear-gradient(
    180deg,
    /* rgba(0, 0, 0, 1) 0%,
    rgba(9, 9, 121, 1) 10%,
    rgba(6, 78, 166, 1) 20%, */
      rgb(3, 92, 209) 0%,
    rgb(3, 117, 211) 30%,
    rgba(174, 236, 255, 1) 70%,
    rgba(181, 243, 255, 1) 100%
  );
}
</style>
