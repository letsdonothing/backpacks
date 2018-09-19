<template>
  <div class="main">
    <div class="links">
      <transparent-button
        v-for="(product, index) in products"
        @btnClicked="animateScrollBy(index * height)"
        :text="product.name"
        :isLarge="true" />
    </div>

    <div class="logo">
      YOUR LOGO
    </div>

    <div v-if="scrollTop >= height" class="scroll-back">
      <transparent-button
        :text="'Go up'"
        @btnClicked="animateScrollBy(-scrollTop)"
      />
    </div>

    <image-block
      v-for="(product, index) in products"
      :imageName="String(index + 1)"
      :product="product"
    />
  </div>
</template>

<script>
import ImageBlock from './ImageBlock'
import TransparentButton from './TransparentButton'

export default {
  name: 'Main',
  data () {
    return {
      height: document.documentElement.clientHeight,
      scrollTop: window.pageYOffset,
      products: [{
        name: 'Product 1'
      },
      {
        name: 'Product 2'
      },
      {
        name: 'Product 3'
      },
      {
        name: 'Product 4'
      },
      {
        name: 'Product 5',
      }]
    }
  },
  mounted() {
    let self = this;

    window.onscroll = function() {
      self.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }
  },
  methods: {
    animateScrollBy(y) {
      let self = this
      let scrolled = 0;
      let step = Math.ceil(y / self.height) * 10;

      let timer = setInterval(() => {
        if (scrolled >= Math.abs(y)) clearInterval(timer);
        if (Math.abs(y) - scrolled <= 30) step /= Math.abs(step);
        window.scrollBy(0, step);
        scrolled += Math.abs(step);
      }, 1)
    },
    scroll() {

    }
  },
  components: {
    'image-block': ImageBlock,
    'transparent-button': TransparentButton
  }
}
</script>

<style scoped>
.main {
  margin: 0;
  width: 100vw;
}
.logo {
  z-index: 2;
  position: absolute;
  font-size: 30pt;
  color: #fff;
  right: 0;
  top: 0;
  padding: 10px 25px;
}
.links {
  z-index: 2;
  position: absolute;
  padding: 10px 25px;
}
.scroll-back {
  z-index: 2;
  left: 50px;
  bottom: 50px;
  position: fixed;
}
</style>
