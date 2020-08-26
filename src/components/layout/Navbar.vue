<template>
    <div>
        <v-app-bar app clipped-left dark src="@/assets/photo/backstyle.jpeg">
            <v-btn icon @click="drawer = !drawer">
                <v-icon 
                    class="iconify" 
                    data-icon="heroicons-outline:menu-alt-4"
                >sort</v-icon>
            </v-btn>
                
                <v-spacer></v-spacer>
                    <router-link to="/">
                        <img alt="logogc1" src="@/assets/photo/gc.png" width="80px" height="55px">
                     </router-link>

                <v-spacer></v-spacer>

                <v-menu bottom left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>keyboard_arrow_down</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>  
                          <v-btn href="https://www.facebook.com/gilchrist.calunia" target="_blank" id="facebooklink" fab x-small dark  v-bind="attrs" v-on="on"><v-icon>mdi-facebook</v-icon></v-btn>
                          <v-btn href="https://www.instagram.com/gilchristcalunia" target="_blank" id="instagramlnk" fab x-small dark v-bind="attrs" v-on="on"><v-icon>mdi-instagram</v-icon></v-btn>
                          <v-btn href="https://github.com/Gilchrist32" target="_blank" id="githublink" fab x-small dark v-bind="attrs" v-on="on"><v-icon>mdi-github</v-icon></v-btn>
                      </v-list-item>
                    </v-list>
                </v-menu>

        </v-app-bar>
           <TheSidebar
            :visible="drawer" @close="drawer = false"
            :mode="mode"
        />
    </div>
</template>
<script>
import TheSidebar from '@/components/layout/TheSidebar.vue'
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    TheSidebar
  },
  data () {
    return {
       drawer: true
    }
  },
   computed: {
        ...mapState(['mode'])
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');
#title{
   font-family: 'Didact Gothic';
   font-weight: bolder;
   font-size: 15px;
}
#tx{
    font-size: 13px;
    text-align: center;
}

</style>