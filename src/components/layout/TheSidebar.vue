<template>
    <div class="justify-content-center text-center">
        <v-navigation-drawer v-model="show" clipped app src="@/assets/photo/footage.jpg"> 

            <v-layout>
                <v-flex>
                    <v-list dense>
                        <v-list-item class="justify-center mt-1">
                            <router-link to="/">
                                 <v-img max-width="160" alt="gc" src="@/assets/photo/gc.png"></v-img>
                            </router-link>       
                        </v-list-item>

                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="text-center white--text text-title font-weight-normals">Gilchrist Calunia</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                         
                        <v-divider class="mx-2" color="white"></v-divider>
                        
                        <v-list dense nav>
                            <v-list-item v-for="link in menuItems" :key="link.title" router :to="link.route">
                                <v-list-item-action>
                                    <v-icon left color="#FFC400">{{ link.icons }}</v-icon>
                                </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title class="white--text" id="title">{{ link.title }}</v-list-item-title>
                                     </v-list-item-content > 
                            </v-list-item>
                        </v-list>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-navigation-drawer>    
     </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'the-side-bar',
    props: ['visible'],
    components: {
    },
    computed: {
      show: {
        get () {
          return this.visible
        },
        set (value) {
           if (!value) {
             this.$emit('close')
           }
        }
      },
      ...mapState(['mode'])
    },
   data () {
       return {
           menuItems: [
               { icons: 'mdi-home', title: 'HOME', route: '/' },
               { icons: 'mdi-account-circle', title: 'PROFILE', route: '/about' },
               { icons: 'school', title: 'EDUCATION', route: '/education' },
               { icons: 'computer', title: 'PROJECT', route: '/project'}
           ]
       }
   },
}
</script>

<style scoped>
.drawer {
    background-color: #f7f7f7 !important;
}
.text-title {
    font-family: 'Teko', sans-serif !important;
    font-stretch: expanded !important; 
    font-size: 1.3rem !important;
}
</style>