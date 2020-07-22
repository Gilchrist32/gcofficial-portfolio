<template>
  <div class="about">
    <v-container fluid pa-0 ma-0>
      <v-row>
        <v-col md="12" sm="12" class="image-section">
          <div class="top">
          </div>
        </v-col>
        <v-row class="user-left">
          <v-col md="4" sm="4" class="user-pro">
            <v-row>
              <v-col md="12" sm="12" class="user-image">
                <v-img class="mt-n16 mx-auto" src="../assets/photo/gilchrist.png" alt="gilchrist" width="200px" />
                <h1 class="text-center">Gilchrist Abrea Calunia</h1>
                <h3 class="text-center">Web Developer</h3>
              </v-col>
              <v-row class="user-detail">
                <v-col md="12" sm="12" class="user-detail-section text-left">
                   <v-alert class="user-detail-section2 text-left" dense outlined color="grey">
                     <v-icon class="mr-3" color="amber accent-3">email</v-icon><span class="white--text">EMAIL</span>
                     <p>calunia32@gmail.com</p>
                     <v-divider></v-divider>
                     <v-icon class="mr-3" color="amber accent-3">phone_android</v-icon><span class="white--text">MOBILE</span>
                     <p> 09365657801 / 09334371899</p>
                  </v-alert>
                </v-col>
              </v-row>
            </v-row>
          </v-col>
          <v-col md="8" sm="8" class="profile-section">
          <v-row claas="profile-section-row">
            <v-col md="12" sm="12" class="header">
              <v-row>
                <v-col md="8" sm="6" class="header-sectiom">
                  <h1>User Profile</h1>
                </v-col>
              </v-row>
              <v-divider></v-divider>
            </v-col>
            <v-col class="user-info">
              <v-tabs id="tabstitle" grow v-model="tab" background-color="#FAFAFA" color="#3F67B3">
                  <v-tab v-for="tabname in tabnames" :key="tabname"> {{ tabname }} </v-tab>
                </v-tabs>
                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="tabname in tabnames" :key="tabname">
                      <v-flex id="flex" v-if="tabname === 'Information'">
                          <v-row>
                            <v-col md="2" sm="2" class="mt-3 ml-1">
                              <p>Age</p>
                              <span>22</span>
                            </v-col>
                            <v-col md="3" sm="3" class="mt-3">
                              <p>Birth Date</p>
                              <span>09/04/1997</span>
                            </v-col>
                            <v-col md="2" sm="2" class="mt-3">
                              <p>Gender</p>
                              <span>Male</span>
                            </v-col>
                            <v-col md="2" sm="2" class="mt-3">
                              <p>Status</p>
                              <span>Single</span>
                            </v-col>
                            <v-col md="2" sm="2" class="mt-3 mr-1">
                              <p>Religion</p>
                              <span>Catholic</span>
                            </v-col>
                            <v-col md="12" sm="12" class="mt-3">
                              <p>Address</p>
                              <span>Purok Tulingan Brgy. San Agustin, Tomas Oppus, Southern Leyte</span>
                               <p class="mt-3">Bio</p>
                              <span>An energetic and imaginative young web developer whos is able to work alongside
                                other talented IT Professionals in creating websites to the highest standards. I love
                                problems a creatingn beautiful fuctional work.
                              </span>
                            </v-col>
                          </v-row>
                      </v-flex>
                      <v-flex id="flex" v-if="tabname == 'Experience'">
                        <v-row>
                            <v-col md="12" sm="12" class="mt-3">
                              <h3>Department of Labor and Employment Region 7 (DOLE VII)</h3>
                              <p style="font-size: 13px;">IT Specialist</p>
                              <span style="font-size: 15px;">August 2019 - December 2019</span><br>
                              <span style="font-size: 15px;">Insular Bldg. General Maxilom Gorordo Avenue, Cebu City</span>
                               <v-divider></v-divider>
                               <h3 class="mt-3">Department of Labor and Employment Region 7 (DOLE VII)</h3>
                              <p style="font-size: 13px;">IT Specialist</p>
                              <span style="font-size: 15px;">August 2018 - April 2019</span><br>
                              <span style="font-size: 15px;">Insular Bldg. General Maxilom Gorordo Avenue, Cebu City</span>
                            </v-col>
                          </v-row>
                      </v-flex>
                    </v-tab-item>
                  </v-tabs-items>
            </v-col>
          </v-row>
        </v-col>
        </v-row>
      </v-row>
      <carousel />
    </v-container>
  </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'

export default {
  components: {
    Carousel,
  },
   data: () => ({
    tab: null,
    tabnames: ['Information', 'Experience']
  }),
 computed: {
   theme(){
     return this.$vuetify.theme.dark ? "dark" :"light";
   }
 }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Didact+Gothic&display=swap');

.top {
  background: url('../assets/photo/background1.jpeg');
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-section{
  padding: 0px;
  margin-top: 10px;
}
.image-section img{
  width: 100%;
  position: relative;
}
.user-left{
  margin: 0px;
}
.user-pro{
  padding-bottom:30px;
  background: url('../assets/photo/backstyle.jpeg');
}
.user-image{
  margin-top:-50px;
}
.user-detail{
  margin:0px; 
}
.user-detail-section p{
  font-size:15px;
  padding: 0px;
  margin: 0px;
}
.user-detail-section{
  margin-top:10px;
}
.user-detail-section span{
  font-size: 17px;
}
.user-detail-section small{
  font-size:12px;
  color:#D3A86A;
}
.user-detail-section .t2{
  color:#2e2e2e;
  font-size: 12px;
}
.profile-section{
  padding: 1px 0px 13px 15px;
  background-color: #FFFFFF;  
}
.profile-sectiom-row{
  margin: 0px;
}
.header-section1 h1{
  font-size: 25px;
  margin: 0px;
}
.header-section1 p{
  color:#878787;
}
.user-info p{
  font-size:12px;
  padding: 0px;
  margin: 0px;
  font-family: 'Didact Gothic', sans-serif;
}
.user-info{
  margin-top:10px;
}
.user-info span{
  color:#3F67B3;
  font-size: 14px;
   font-family: 'Didact Gothic', sans-serif;
}
.user-info small{
  font-size:12px;
  color:#D3A86A;
}
.user-info .t2{
  color:#2e2e2e;
  font-size: 12px;
}
h1, h2, h3, h4, h5{
  font-family: 'Concert One';
}
</style>
