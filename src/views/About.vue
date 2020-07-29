<template>
  <div class="about">
    <v-container fluid pa-0 ma-0>
      <v-row>
        <v-col md="12" sm="12" class="image-section">
          <div class="top">
          </div>
        </v-col>
        <v-row class="user-left" v-for="pro in profile" :key="pro.id">
          <v-col md="4" sm="4" class="user-pro">
            <v-row >
              <v-col md="12" sm="12" class="user-image">
                <v-img class="mt-n16 mx-auto" src="../assets/photo/gilchrist.png" alt="gilchrist" width="200px" />
                <v-card class="mx-auto" max-width="330" shaped color="#2A3B4D">
                  <h2 class="text-center white--text">{{ pro.firstname }} {{ pro.middlename }} {{ pro.lastname }}</h2>
                <h3 class="text-center">Web Developer</h3>
                </v-card>
              </v-col>
              <v-row class="user-detail">
                <v-col md="12" sm="12" class="user-detail-section text-left">
                  <h2 class="contactop text-left ma-auto ml-4">CONTACT:</h2>
                  <hr class="my-1">
                   <v-alert class="user-detail-section2 text-left" dense dark icon="email" prominent color="#2A3B4D" border="left">
                     <span class="white--text" id="conhead">EMAIL</span><br>
                      <hr class="yellow accent-3 mb-2 mt-0 d-inline-block mx-auto" style="width: 100px" />
                     <p id="contact">calunia32@gmail.com</p>
                  </v-alert>
                  <v-alert class="user-detail-section2 text-left" dense dark icon="phone_android" prominent color="#2A3B4D" border="left">
                     <span class="white--text" id="conhead">MOBILE</span><br>
                     <hr class="yellow accent-3 mb-2 mt-0 d-inline-block mx-auto" style="width: 100px" />
                     <p id="contact">09365657801 / 09334371899</p>
                  </v-alert>
                </v-col>
              </v-row>
            </v-row>
          </v-col>
          <v-col md="8" sm="8" class="profile-section pl-0">
          <v-row claas="profile-section-row">
            <v-col md="12" sm="12" class="header">
              <v-row>
                <v-col md="6" sm="8" class="header-section">
                  <h1 class="ml-4"><v-icon color="#FFFF00" x-large>person</v-icon>  PROFILE</h1>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="user-info mr-3 ">
              <v-tabs grow v-model="tab"  background-color="#424242"  dark color="#FFFF00">
                  <v-tab v-for="tabname in tabnames" :key="tabname" id="det"> {{ tabname }} </v-tab>
                </v-tabs>
                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="tabname in tabnames" :key="tabname">
                      <v-flex id="flex" v-if="tabname === 'Information'">
                          <v-row>
                            <v-col md="2" sm="2" class="mt-3 ml-4">
                              <p>Age</p>
                              <span>{{ pro.age }}</span>
                            </v-col>
                            <v-col md="3" sm="3" class="mt-3">
                              <p>Birth Date</p>
                              <span>{{ pro.birthdate }}</span>
                            </v-col>
                            <v-col md="2" sm="2" class="mt-3">
                              <p>Gender</p>
                              <span>{{ pro.gender }}</span>
                            </v-col>
                            <v-col md="2" sm="2" class="mt-3">
                              <p>Status</p>
                              <span>{{ pro.status }}</span>
                            </v-col>
                            <v-col md="2" sm="2" class="mt-3 mr-4">
                              <p>Religion</p>
                              <span>{{ pro.religion }}</span>
                            </v-col>
                            <v-col md="12" sm="12" class="mt-3 mr-4 ml-4">
                              <p>Address</p>
                              <span>{{ pro.address }}</span>
                               <p class="mt-3 ">Bio</p>
                              <span>{{ pro.bio }}</span>
                            </v-col>
                          </v-row>
                      </v-flex>
                      <v-flex id="flex" v-if="tabname == 'Experience'">
                        <v-row>
                            <v-col md="12" sm="12" class="mt-3 mr-4 ml-4">
                              <h2>Department of Labor and Employment Region 7 (DOLE VII)</h2>
                              <p style="font-size: 13px;">IT Specialist</p>
                              <span style="font-size: 15px;">August 2019 - December 2019</span><br>
                              <span style="font-size: 15px;">Insular Bldg. General Maxilom Gorordo Avenue, Cebu City</span>
                               <v-divider></v-divider>
                               <h2 class="mt-3">Department of Labor and Employment Region 7 (DOLE VII)</h2>
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
import { PROFILE } from '../graphql/queries'

export default {
  name: 'About',
  components: {
    Carousel,
  },

  data(){
    return {
      tab: null,
      tabnames: ['Information', 'Experience'],
      profile: []
    }
  },
  apollo: {
    profile: {
      query: PROFILE,
      return ({ data }) {
        this.profile = data.profile
      }
    }
  },
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
  background: url('../assets/background/1.jpg');
  padding: 90px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#det{
   font-size: 15px;
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
   background: url('../assets/background/back.png'); 
}
.profile-section-row{
  margin: 0px;
}
.header-section{
  color: #FFFF00;
  font-size: 20px;
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
h3{
  color: #C6FF00;
}
#contact{
  color: #90CAF9;
  font-family: 'Didact Gothic';
}
#conhead{
  font-family: 'Concert One';
  font-size: 20px;
}
.contactop{
  color: #212121;
}
</style>
