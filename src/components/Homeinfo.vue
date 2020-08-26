<template>
  <div class="bg" id="wrap-banner">
      <v-mask class="gradient d-flex justify-content-center align-items-center mb-12 mt-5">
          <v-container>
              <v-row>
                  <div class="white-text text-center col-md-12 mt-xl-5 mb-12">
                    <h2 id="mname" class="text-uppercase">GILCHRIST CALUNIA</h2>
                    <h6 id="quo" class="mb-4 font-weight-bold">Information Technology, Front-end Web Developer.</h6>
                      <hr class="my-4"> 
                      <h3 class="ttitle" v-for=" i in cal_subscriber.slice(-1)" :key="i"> {{ i.id }} <span id="n">Subscribers</span></h3>
                       <br>
                   <v-btn depressed dark color="primary" class="mt-5" x-large @click.prevent="scroll" rounded>
                      Show more <v-icon right>mdi-arrow-right</v-icon>
                   </v-btn>
                  </div>
                   <!--<v-col class="mt-xl-1 ml-3">
                      <v-img src="../assets/photo/home.png" width="320px" height="300px"></v-img>
                   </v-col>-->
              </v-row>
          </v-container>
    </v-mask> 
  </div>
</template>

<script>
import { GET_ALL_SUBSCRIBER_QUERY } from '../graphql/queries'
import { GET_ALL_SUBSCRIBER_QUERY_SUBSCRIPTION } from '../graphql/subscriptions'
import { mapState } from 'vuex'

export default {
  name: 'Homeinfo',

  methods: {
        scroll() {
            document.querySelector('#about')
                    .scrollIntoView({ behavior: 'smooth' })            
        }
    },
    computed: {
        ...mapState(['mode'])
    },

  data () {
    return {
        cal_subscriber: []
    }
  },

   apollo: {
    cal_subscriber: {
      query: GET_ALL_SUBSCRIBER_QUERY,
      subscribeToMore: {
        document: GET_ALL_SUBSCRIBER_QUERY_SUBSCRIPTION,
        updateQuery(previousResult, { subscriptionData }) {
          if (previousResult) {
            return {
              subscribers: [
                ...subscriptionData.data.cal_subscriber
              ]
            }
          }
        }
      },
      result ({ data }) {
        this.counter = data.cal_subscriber
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Righteous&family=Lobster&family=Balsamiq+Sans&display=swap');
.bg{
    background: url('../assets/photo/backstyle.jpeg');
}
 #twel{
    font-family: 'Lobster';
    font-size: 23px;
    color: #ffffff;
    padding-top: 25px;
  }
  .v-mask{
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    min-height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
}

  #wrap-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
 
 h2 {
            font-size: 4rem !important;
            font-family: 'Teko', sans-serif !important;
            text-shadow: 2px 3px #000000;
            text-transform: uppercase;
            margin: 0 !important; 
            padding-top: 50px;
            @media (max-width: 767px) {
                font-size: 3rem !important;
            }
 }

#quo{
    font-family: 'Lobster';
    font-size: 23px;
    font-weight: bolder;
    color: #ffffff;
    }
#n{
  font-size: 35px;
  color: #fff;
}
.ttitle {
  font-family: 'Didact Gothic';
  color: #FFC400;
  font-size: 35px;
  font-weight: bolder;
}
</style>