<template>
    <div>
      <v-card class="mx-auto" flat id="bg1">
          <v-container>
              <v-row>
                   <v-col  md="3" offset-md="2" style="padding-top: 70px" class="mb-12 mt-12">
                      <v-img src="../assets/photo/aboutme.png" width="330px" height="400px"></v-img>
                   </v-col>
                   <v-col class="white-text text-center text-md-left col-md-6 mt-xl-12 mb-12 mt-12">
                    <h1 id="about" class="h6-responsive font-weight-bold mt-sm-3">About Me</h1>
                    <hr class="yellow accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px" />
                    <p>Hi! I am Gilchrist Calunia, a web designer/developer focus in designing and Coding have been my passion
                        since the day I started working with computers but I found myself into web design/development. 
                        I enjoy creating beautifully designed, intuitive and functional websites.
                    </p>
                    <p>I enjoy challenging tasks and look forward to interesting and innovative projects.</p>
                     <!--<v-btn v-for="link in event" :key="link.title" router :to="link.route" :loading="loading"
                     class="ma-2" color="#FFC400" dark large  rounded>
                        <v-icon class="mr-2" >{{ link.icons }}</v-icon><span id="chat">{{ link.title }}</span></v-btn>-->
                  </v-col>
              </v-row>
          </v-container>
    </v-card> 
  </div>
</template>
<script>
export default {
  name: 'aboutme',

  data () {
    return {
      loading: false,
    }
  }
}
</script>>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@900&family=Didact+Gothic:wght@900&display=swap');

#bg1{
    background: url('../assets/photo/backstyle.jpeg');
}
.v-card{
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    min-height: 120vh;
    padding-top: 100px;
}
 #about{
    font-family: 'Mulish', sans-serif;
    color: #ffffff;
    padding-top: 60px;
    
  }
 
 h1 {
            font-size: 3rem !important;
            font-family: 'Teko', sans-serif !important;
            text-shadow: 2px 3px #000000;
            text-transform: uppercase;
            margin: 0 !important; 
            @media (max-width: 767px) {
                font-size: 3rem !important;
            }
 }
  P{
    font-family: 'Didact Gothic';
    color: #EEEEEE; 
     font-weight: lighter;
    font-size: 20px; 
  }
  
#chat{
  color: #ffffff;
  font-family: 'Didact Gothic';
}

</style>