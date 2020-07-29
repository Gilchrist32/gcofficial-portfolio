<template>
  <div class="project">
    <v-row>
      <v-col>
  <v-card mt-4 max-width="500" class="mx-auto mt-4" id="card-project">
    <v-list-item>
      <v-list-item-avatar size="70"><img src="../assets/photo/gilchrist.png" alt="gilchrist"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline white--text" id="head">GC Official</v-list-item-title>
        <v-list-item-subtitle id="name">by Gilchrist Calunia</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img src="../assets/project/project2.png" height="194" ></v-img>

    <v-card-text id="comment">
      Written in Vuetify Vue <br>
      Visit my script in github.
    </v-card-text>

    <v-card-actions>
      <v-btn class="white--text" color="indigo accent-4" href="https://github.com/Gilchrist32/gcofficial-portfolio" target="_blank">
      <v-icon>folder_open</v-icon><span>View Github</span></v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
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
      Written in Bootstrap Vue <br>
      Visit my script in github.
    </v-card-text>

    <v-card-actions>
      <v-btn class="white--text" color="indigo accent-4" href="https://github.com/Gilchrist32/gilchristcalunia" target="_blank">
      <v-icon>folder_open</v-icon><span>View Github</span></v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
    </v-row>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Didact+Gothic&display=swap');

  #card-project{
    background: #2A3B4D;
    color: #A8B3DB;
  }
  #name{
    color: #C6FF00;
    font-family: 'Didact Gothic';
    font-size: 15px;
  }
  .card-title{
    font-size: 25px;
    font-weight: bolder;
    color: #fff;
  }
  span{
    font-family: 'Concert One';
  }
  #comment{
    font-family: 'Didact Gothic';
    color: #fff;
    font-size: 18px;
  }

</style>