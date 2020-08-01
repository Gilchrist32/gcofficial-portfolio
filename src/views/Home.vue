<template>
  <div class="home">
   <Homeinfo />
   <Aboutme />
   <Carousel />
  </div>
</template>

<script>
import Homeinfo from '../components/Homeinfo.vue';
import Aboutme from '../components/Aboutme.vue';
import Carousel from '../components/mixim/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Homeinfo,
    Aboutme,
    Carousel
  }
}
</script>
