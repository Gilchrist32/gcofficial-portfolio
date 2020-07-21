<template>
<footer class="white--text pt-0 mt-auto">
    <div class="footer-above">
        <div class="container">
            <div class="row">
                <div class="footer-col col-md-4">
                    <v-img src="../assets/photo/logogc1.png" alt="logogc1" width="250px" height="50px"></v-img>
                     <p class="name">GC Website & Portfolio</p>
                     <span class="name">
                      I'm a Web Developer and Freelance Designer based Philippines. I create innovative solutions that make your product or
                      service more effective in the marketplace.
                    </span>
                </div>
                <div class="footer-col col-md-4">
                   <h5 class="ttitle">CONTACT INFO</h5>
                   <hr class="yellow accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px" /><br>
                  <v-icon dark >email</v-icon><span>  calunia32@gmail.com</span><br>
                  <v-icon dark >call</v-icon><span>  Call Me: 09365657801 / 09334371899</span><br>
                    <v-icon dark>location_on</v-icon><span>  Tomas Oppus, Southern Leyte, Philippines</span>
                </div>
                <div class="footer-col col-md-4">
                    <h5 class="ttitle">STAY CONNECTED & FOLLOW</h5>
                    <hr class="yellow accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px" /><br>
                <span class="name">
                    Subscribe to our WT Email Mailing List and Please Follow us on our Social Media Profile in order to keep updated.
                </span><br><br>
                 <v-layout row wrap mb-1 align-baseline>
                 <v-text-field solo dense placeholder="Your Email" class="rounded"></v-text-field>
                 <v-btn id="subs" color="primary" class="rounded-r-xl"><v-icon left>add_alert</v-icon> Subscribe</v-btn>
                </v-layout>
                </div>
            </div>
        </div>
    </div>
    <div class="white--text pt-0 mt-auto">
      <div class="footer-copyright text-center py-0">
        <v-container fluid>
        Created By: GC Personal Web Developed | &copy; {{ new Date().getFullYear() }}  All Right Reserved
        </v-container>
      </div>
    </div>
    </footer>
</template>

<style lang="scss" scoped>
footer{
  background-color: #0e152c;
}
.name {
  color: #fff;
  font-size: 15px;
}

.ttitle {
  font-family: 'Didact Gothic';
  color: #FFC400;
  font-size: 25px;
  font-weight: bolder;
}

#subs{
  font-size: 12px;
  padding-right: 5px ;
  padding-left: 5px;
}
.footer-copyright{
  font-size: 10px;
   padding: 10px 0;
   cursor: default;
   background: #080d1d;
}
span{
  font-family: 'Didact Gothic';
}

</style>