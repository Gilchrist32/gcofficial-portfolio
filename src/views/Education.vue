<template>
    <div class="education">
       <v-container fluid fill-height pa-0 ma-0>
              <v-layout column>
                <v-flex class="justify-content-center text-center">
                  <v-tabs grow v-model="tab" background-color="#424242" dark color="#FFFF00">
                  <v-tab v-for="tabname in tabnames" :key="tabname" id="ed"> {{ tabname }} </v-tab>
                </v-tabs>
                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="tabname in tabnames" :key="tabname">
                      <v-flex id="flex" v-if="tabname == 'College'">
                          <v-img id="image" src="../assets/photo/slsu.png" alt="slsu"  width="250" ></v-img>
                          <p id="schoolname" class="pt-auto mb-0">Southern Leyte State University</p>
                          <p id="address">Sogod, Southern Leyte, Philippines</p>
                          <p id="course" class="mt-3 mb-0">Bachelor of Science in Information Technology <span id="major">Major in Networking</span></p>
                          <p id="year">2015-2019</p><span id="address">Website:  </span>
                          <a href="http://slsuonline.edu.ph/index.php/en/" target="_blank" id="schoolink">www.slsuonline.edu.ph</a>
                      </v-flex>
                      <v-flex id="flex" v-if="tabname == 'High School'">
                         <v-img id="image" class="rounded-circle" src="../assets/photo/dafenhs.png" alt="dafenhs" width="250"></v-img>
                         <p id="schoolname" class="pt-auto mb-0">Don Agustin F. Escaño National High School</p>
                         <p id="address">Bogo, Tomas Oppus, Southern Leyte, Philippines</p>
                         <p id="course" class="mt-3 mb-0">High School Student</p>
                         <p id="year">2010-2014</p><span id="address">Website:  </span>
                         <a href="http://www.facebook.com/dafenhs.page.shs.jhs/" target="_blank" id="schoolink">www.facebook.com/dafenhs.page</a>
                      </v-flex>
                      <v-flex id="flex" v-if="tabname == 'Elementary'">
                          <v-img id="image" src="../assets/photo/tocs.png" akt="tocs" width="250"></v-img>
                          <p id="schoolname" class="pt-auto mb-0">Tomas Oppus Central School</p>
                          <p id="address">Bogo, Tomas Oppus, Southern Leyte, Philippines</p>
                          <p id="course" class="mt-3 mb-0">Elementary Student</p>
                          <p id="year">2003-2009</p><span id="address">Website:  </span>
                          <a href="https://www.facebook.com/tomasoppus.central" target="_blank" id="schoolink">  www.facebook.com/tomasoppus.central</a>
                      </v-flex>
                    </v-tab-item>
                  </v-tabs-items>
                </v-flex>
              </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
     data: () => ({
    tab: null,
    tabnames: ['College', 'High School', 'Elementary']
  })
     
        }
 
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Oleo+Script&family=Squada+One&family=Teko&display=swap');

#ed{
  font-size: 12px;
}
#flex{
    background: url('../assets/background/back.png');
    padding-bottom: 45px;
}

#image{
    margin-left: auto;
    margin-right: auto;
}
#schoolname { 
    font-family: 'Squada One';
    font-size: 35px;
    font-weight: bolder;
    color: #fff;
}
#address{
    font-family: 'Teko';
    font-size: 20px;
    font-weight: lighter;
    color: #fff;
}
 #course{
    font-family: 'Hammersmith One';
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
  }
  #major{
    font-family: 'Hammersmith One';
    font-size: 16px;
    font-weight: lighter;
    color: #72AECB;
  }
  #year{
      font-family: 'Oleo Script';
      font-size: 30px;
      font-weight: bolder;
      color: #C6FF00;
  }
  #schoolink{
      font-family: 'Oleo Script';
      font-size: 20px;
      color: #C6FF00;
  }
</style>