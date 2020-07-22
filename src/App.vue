<template>
  <v-app>
    <Navbar />
    <main>
    <vue-page-transition name="fade-in-right" class="content">

      <v-content>
        <router-view></router-view>
      </v-content>
   
    </vue-page-transition>
    </main>
    <Footer />
    <BackToTop />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
    BackToTop,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
main{
  background: url('assets/photo/background.jpg');
}
</style>>
