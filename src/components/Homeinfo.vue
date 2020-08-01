<template>
  <div class="bg">
      <v-mask class="gradient d-flex justify-content-center align-items-center">
          <v-container>
              <v-row>
                  <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-6 mt-3  ">
                    <h1 id="mname" class="h6-responsive font-weight-bold">GILCHRIST CALUNIA</h1>
                    <h6 id="quo" class="mb-4 font-weight-bold">Information Technology, Front-end Web Developer.</h6>
                      <hr class="my-4"> 
                      <h3 class="ttitle" v-for=" i in cal_subscriber.slice(-1)" :key="i"> {{ i.id }} <span id="n">Subscribers</span></h3>
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
import { GET_ALL_SUBSCRIBER_QUERY } from '../graphql/queries'
import { GET_ALL_SUBSCRIBER_QUERY_SUBSCRIPTION } from '../graphql/subscriptions'

export default {
  name: 'Homeinfo',

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
    background: url('../assets/photo/background.jpg');
}
 #twel{
    font-family: 'Lobster';
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