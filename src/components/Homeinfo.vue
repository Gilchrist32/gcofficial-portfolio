<template>
  <div class="bg">
      <v-mask class="gradient d-flex justify-content-center align-items-center">
          <v-container>
              <v-row>
                  <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-6 mt-3  ">
                    <h6 id="twel" class="h6-responsive font-weight-bold mt-sm-3">Wellcome! I'm</h6>
                    <h1 id="mname" class="h6-responsive font-weight-bold">GILCHRIST CALUNIA</h1>
                    <h6 id="quo" class="mb-4 font-weight-bold">Information Technology, Front-end Web Developer.</h6>
                      <hr class="my-4"> 
                  </div>
                   <v-col class="mt-xl-1 ml-3">
                      <v-img src="../assets/photo/home.png" width="320px" height="300px"></v-img>
                   </v-col>
              </v-row>
          </v-container>
    </v-mask> 
  </div>
</template>

<script>

export default {
  name: 'Homeinfo',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Righteous&family=Lobster&family=Balsamiq+Sans&display=swap');
.bg{
    background: url('../assets/photo/background.jpg');
}
 #twel{
    font-family: 'Kaushan Script';
    font-size: 23px;
    color: #ffffff;
    padding-top: 25px;
  }
#mname{
    font-family: 'Righteous';
    color: #FFC400;
    font-size: 45px;
  }
#quo{
    font-family: 'Lobster';
    font-size: 23px;
    font-weight: bolder;
    color: #ffffff;
    }

</style>