<template>
  <nav class="sky">
    <StructureMaxWidth
      class="brick md:flex md:items-center md:justify-between h-16"
    >
      <div class="flex space-x-6 md:space-x-0">
        <div class="md:hidden">
          <button class="text-black overflow-hidden" @click="open = !open">
            <IconDotsHorizontal :open="open" />
          </button>
        </div>
        <AnimatedStreamLogo />
      </div>
      <div>
        <ul
          class="md:flex md:space-x-6 md:block"
          :class="{ block: open, hidden: !open }"
        >
          <li><nuxt-link to="/">About Me</nuxt-link></li>
          <li><nuxt-link to="/schedule">Twitch Schedule</nuxt-link></li>
          <li><nuxt-link to="/blog">My Content</nuxt-link></li>
        </ul>
      </div>
    </StructureMaxWidth>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.sky {
  background: #b5f3ff;
}
</style>
