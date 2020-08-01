<template>
      <nav>
        <v-app-bar app clipped-left dark src="@/assets/photo/footage.jpg">
             <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                    <router-link to="/">
                        <img alt="logogc1" src="@/assets/photo/logogc1.png" width="210px" height="55px">
                     </router-link>
                <v-spacer></v-spacer>
               <v-tooltip bottom>  
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="mx-0" href="https://www.facebook.com/gilchrist.calunia" target="_blank" id="facebooklink" fab x-small dark  v-bind="attrs" v-on="on"><v-icon>mdi-facebook</v-icon></v-btn>
                    </template>
                      <span>Add or Follow me on Facebook</span> 
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs}">
                      <v-btn  class="mx-0" href="https://www.instagram.com/gilchristcalunia" target="_blank" id="instagramlnk"  fab x-small dark v-bind="attrs" v-on="on"><v-icon>mdi-instagram</v-icon></v-btn>
                    </template>
                      <span>Follow me on Instagram</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                   <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mr-5" href="https://github.com/Gilchrist32" target="_blank" id="githublink"  fab x-small dark v-bind="attrs" v-on="on"><v-icon>mdi-github</v-icon></v-btn>
                  </template>
                    <span>Follow me on Github and give a star for my repositories</span>
                  </v-tooltip>
        </v-app-bar>
        <div class="justify-content-center text-center">
        <v-navigation-drawer app v-model="drawer" src="@/assets/photo/bstyle.jpg"> 
        <v-list-item>
            <v-app-bar-nav-icon dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link to="/">
                        <img class="mt-2 ml-2" alt="logogc1" src="@/assets/photo/logogc1.png" width="210px" height="50">
                     </router-link>       
             </v-list-item>
      <v-divider></v-divider>
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
        <template v-slot:append>
            <div id="tx" class="pa-5 white--text">
                &copy; GC {{ new Date().getFullYear() }} | All Rights Reserved
            </div>
        </template>
        </v-navigation-drawer>    
     </div>
   </nav>
</template>
<script>
export default {
   data () {
       return {
           drawer: false,
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