<template>
  <div class="relative text-3xl sign" :style="signStyle">
    @luke<b>o</b>codes
  </div>
</template>

<script>
export default {
  computed: {
    signStyle() {
      const style = {
        fontFamily: "Beon",
        color: "#ffd1bf",
        textShadow:
          "0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff8f44, 0 6px 3px #000000",
      };

      return style;
    },
  },
};
</script>

<style scoped>
@import url("//fonts.cdnfonts.com/css/beon");

.sign.off {
  color: rgb(97, 97, 97);
  text-shadow: 0 3px 3px #000;
}

.sign b {
  font-weight: normal;
  animation: blink linear infinite 200s;
}

@keyframes blink {
  2.76% {
    color: inherit;
    text-shadow: inherit;
  }
  2.79% {
    color: rgb(97, 97, 97);
  }
  2.80% {
    text-shadow: 0 3px 3px #000;
  }
  2.84% {
    color: inherit;
    text-shadow: inherit;
  }
  2.87% {
    color: rgb(97, 97, 97);
    text-shadow: 0 3px 3px #000;
  }
  2.90% {
    color: inherit;
    text-shadow: inherit;
  }
  90.90% {
    color: inherit;
    text-shadow: inherit;
  }
  90.92% {
    color: rgb(97, 97, 97);
    text-shadow: 0 3px 3px #000;
  }
  90.93% {
    color: inherit;
    text-shadow: inherit;
  }
}
</style>
