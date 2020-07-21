<template>
    <div class="bg1">
      <v-mask class="gradient d-flex justify-content-center align-items-center">
          <v-container>
              <v-row>
                   <v-col  md="3" offset-md="2">
                      <v-img src="../assets/photo/aboutme.png" width="320px" height="400px"></v-img>
                   </v-col>
                   <v-col class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-6">
                    <h1 id="about" class="h6-responsive font-weight-bold mt-sm-3">About Me</h1>
                    <hr class="yellow accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px" />
                    <p>Hi! I am Gilchrist Calunia, a web designer/developer focus in designing and Coding have been my passion
                        since the day I started working with computers but I found myself into web design/development. 
                        I enjoy creating beautifully designed, intuitive and functional websites.
                    </p>
                    <p>I enjoy challenging tasks and look forward to interesting and innovative projects.</p>
                    <router-link to="/about">
                     <v-btn class="ma-2" color="#FFC400" dark large  rounded href="https://github.com/Gilchrist32/gilchristcalunia" target="_blank">
                        <v-icon class="mr-2" >accessibility</v-icon><span id="chat">MORE ABOUT</span></v-btn>
                    </router-link>
                  </v-col>
              </v-row>
          </v-container>
    </v-mask> 
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@900&family=Didact+Gothic:wght@900&display=swap');

.bg1{
    background: url('../assets/photo/backstyle.jpeg');
}
 #about{
    font-family: 'Mulish', sans-serif;
    color: #ffffff;
    padding-top: 25px;
  }
  P{
    font-family: 'Didact Gothic';
    color: #EEEEEE;  
  }
#chat{
  color: #ffffff;
  font-family: 'Didact Gothic';
}

</style>