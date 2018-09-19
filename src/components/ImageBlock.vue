<template>
  <div class="image-block">
    <img :src="require('../assets/images/' + this.imageName + '.jpg')" alt=".">
    <div class="blur"></div>
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <transparent-button :text="'Buy'" />
    </div>
  </div>
</template>

<script>
import TransparentButton from './TransparentButton';

export default {
  name: 'ImageBlock',
  props: {
    imageName: String,
    product: Object
  },
  data() {
    return {
      isReady: false
    }
  },
  components: {
    'transparent-button': TransparentButton
  }
}
</script>

<style scoped>
.image-block {
  width: 100%;
  height: 100vh;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
.product-info {
  width: inherit;
  height: 40vh;
  top: calc(50% - 20vh);
  position: absolute;
  overflow: hidden;
}
h2 {
  position: relative;
  font: 50pt 'Gotham Medium';
  color: #fff;
}
.blur {
  top: calc(50% - 20vh);
  left: calc(50vw - 300px);
  position: absolute;
  width: 600px;
  height: 40vh;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
}

.buy-button {
  color: #fff;
  font: 15pt sans-serif;
  height: 44px;
  width: 100px;
  border: 2px solid #fff;
  border-radius: 22px;
  background-color: transparent;
  cursor: pointer;
}
.readybutton {
  color: black;
  background-color: #fff;
}
</style>
