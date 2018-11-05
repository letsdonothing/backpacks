<template>
  <button
    :class="{ 'ready-button': isReady, 'large': isLarge }"
    @click="clickBtn"
    @mouseenter="isReady = true"
    @mouseout="isReady = false">
      {{ text }}
  </button>
</template>

<script>

export default {
  name: 'TransparentButton',
  props: {
    text: String,
    isLarge: Boolean
  },
  data() {
    return {
      isReady: false
    }
  },
  methods: {
    clickBtn() {
      this.$emit('btnClicked');
    }
  }
}
</script>

<style scoped>
button {
  color: #fff;
  font: 15pt sans-serif;
  height: 44px;
  width: 100px;
  border: 2px solid #fff;
  border-radius: 22px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
.ready-button {
  color: black;
  background-color: white;
}
.large {
  width: 150px;
}
</style>
