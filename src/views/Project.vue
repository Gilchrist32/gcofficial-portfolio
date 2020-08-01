<template>
  <div class="project">
    <v-container fluid fill-height pt-0>
    <v-row>
      <v-col>
        <v-card mt-4 max-width="500" class="mx-auto mt-4" id="card-project">
          <v-list-item>
            <v-list-item-avatar size="70">
              <img src="../assets/photo/gilchrist.png" alt="gilchrist">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline white--text" id="head">GC Official-Origin</v-list-item-title>
              <v-list-item-subtitle id="name">by Gilchrist Calunia</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img src="../assets/project/project2.png" height="194" ></v-img>

          <v-card-text id="comment">
            <h3>Portfolio</h3>
            <hr class="lime accent-4 mb-2 mt-0 d-inline-block mx-auto" style="width: 100px" /> <br>
            <p>I created using vuetify, postgres, hasura graphql on backend and 
               vuejs on frontend to build this my official website </p>
          </v-card-text>

          <v-card-actions>
            <v-btn class="white--text" color="#0e152c" href="https://github.com/Gilchrist32/gcofficial-portfolio" target="_blank">
            <v-icon left >folder_open</v-icon><span>View Github</span></v-btn>
            <v-spacer></v-spacer>
            <v-btn-icon>
              <v-icon color="lime accent-4">mdi-thumb-up</v-icon>
            </v-btn-icon>
          </v-card-actions>
        </v-card>
      </v-col>

    <v-col>
      <v-card mt-4 max-width="500" class="mx-auto mt-4" id="card-project">
        <v-list-item>
          <v-list-item-avatar size="70"><img src="../assets/photo/gilchrist.png" alt="gilchrist"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline white--text" id="head">GC Official</v-list-item-title>
            <v-list-item-subtitle id="name">by Gilchrist Calunia</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        
         <v-img src="../assets/project/portfolio.png" height="194" ></v-img>
         
         <v-card-text id="comment">
           <h3>Clone Portfolio</h3>
           <hr class="lime accent-4 mb-2 mt-0 d-inline-block mx-auto" style="width: 150px" /> <br>
           <p>I created using bootstrap and 
             vuejs on frontend to build this my another syntax code or tag official website </p>
         </v-card-text>
         
         <v-card-actions>
           <v-btn class="white--text" color="#0e152c" href="https://github.com/Gilchrist32/gilchristcalunia" target="_blank">
           <v-icon left>folder_open</v-icon><span>View Github</span></v-btn>
           <v-spacer></v-spacer>
           
           <v-btn icon>
             <v-icon color="lime accent-4">mdi-thumb-up</v-icon>
           </v-btn>
         </v-card-actions>
  </v-card>
    </v-col>
    </v-row>
    </v-container>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Didact+Gothic&display=swap');

  .project{
    background: #212121;
  }
  #card-project{
    background: url('../assets/photo/backstyle.jpeg');
    color: #A8B3DB;
  }
  #name{
    color: #FFC400;
    font-family: 'Righteous ';
    font-size: 15px;
  }
  .card-title{
    font-size: 25px;
    font-weight: bolder;
    color: #fff;
  }
  h3{
    font-family: 'Righteous';
    color: #FFC400;
  }
  span{
    font-family: 'Righteous';
  }
  p{
    font-size: 15px;
  }
  #comment{
    font-family: 'Didact Gothic';
    color: #fff;
    font-size: 18px;
  }

</style>