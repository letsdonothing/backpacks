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

/* eslint-disable */

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

    window.onscroll = () => {
      self.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }
  },
  methods: {
    animateScrollBy(n) {
      let scrolled = n > 0 ? this.scrollTop : 0;
      let step = n / Math.abs(n);
      const stepMax = Math.ceil(n / this.height) * 10;
      const x2max = Math.floor(Math.pow(n / 2, 2));
      const div = x2max / stepMax;
      const self = this;

      let timer = setInterval(() => {
        if (scrolled >= Math.abs(n)) {
          clearInterval(timer);
        }
        window.scrollBy(0, step);
        scrolled += Math.abs(step);

        let x = scrolled - Math.abs(n) / 2;
        let x2 = Math.floor(Math.pow(x, 2));
        step = stepMax - (n > 0 ? Math.floor(x2 / div) : Math.ceil(x2 / div));
      }, 5);
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
  left: 0;
  top: 0;
  padding: 10px 25px;
}
.links {
  z-index: 2;
  position: absolute;
  top: 5px;
  right: 0;
  padding: 10px 25px;
}
.scroll-back {
  z-index: 2;
  right: 50px;
  bottom: 50px;
  position: fixed;
}
</style>
