<template>
  <div class="slides-show-container">
    <div class="slider">
      <vue-flux
          ref="slider"
          :images="vfImages"
          :options="vfOptions"
          :transitions="vfTransitions">
        <template v-slot:preloader>
          <flux-preloader/>
        </template>
      </vue-flux>
    </div>
  </div>
</template>

<script>
import {FluxPreloader, VueFlux,} from 'vue-flux';

export default {
  name: 'SlideShow',
  components: {
    VueFlux,
    FluxPreloader,
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    getData() {
      return this.shuffle([...Array(18).keys()].map(k => `photos/${k + 1}.jpg`))
    }
  },
  data() {
    return {
      vfOptions: {
        autoplay: true
      },
      vfImages: this.getData(),
      vfTransitions: ['swipe'],
    }
  },
}
</script>

<style scoped>
.slides-show-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

@media only screen and (max-width: 600px) {
  .slides-show-container {
    visibility: hidden;
  }
}

.slider {
  filter: blur(8px);
  transform: scale(1.1);
}
</style>