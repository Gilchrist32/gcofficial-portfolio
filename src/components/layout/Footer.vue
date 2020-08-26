<template>
<footer class="white--text pt-0 mt-auto">
    <div class="footer-above">
        <div class="container">
            <div class="row">
                <div class="footer-col col-md-4">
                    <v-img src="@/assets/photo/gc.png" alt="logogc1" width="100px"></v-img>
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
                <v-form :disabled="loading" ref="form" v-model="valid">
                 <v-layout row wrap mb-1 align-baseline>
                 <v-text-field solo dense v-model="email" :rules="emailRules" required prepend-icon="mdi-email" label="Email Address" rounded class="e"></v-text-field>
                 <v-btn id="subs" color="primary" :loading="loading" @click="subscribe" rounded><v-icon left>add_alert</v-icon>Subscribe</v-btn>
                 <!--<v-btn id="subs" fab dark color="cyan" @click="$refs.form.reset()" height="30" width="30"><v-icon>autorenew</v-icon></v-btn>-->
                 <v-spacer></v-spacer>
                   <h3 id="number" class="mx-auto" v-for=" i in cal_subscriber.slice(-1)" :key="i"> {{ i.id }} <span id="n">Subscribers</span></h3>
                </v-layout>
                </v-form>
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
<script>
import { toastAlertStatus } from '@/utils/toastAlert'
import { ADD_SUBSCRIBER_MUTATION } from '@/graphql/mutations/subscriber'
import { GET_ALL_SUBSCRIBER_QUERY } from '@/graphql/queries'
import { GET_ALL_SUBSCRIBER_QUERY_SUBSCRIPTION } from '@/graphql/subscriptions'
import { required, email } from 'vuelidate/lib/validators'

export default {
  props: ['visible', 'modalType'],
  name: 'Footer',

   data () {
        return {
            valid: true,
            loading: false,
            email: '',
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
             ]
        }
    },

    validations: {
    email: {
        required,
        email
    }
  },

  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },

    methods: {
      subscribe() {
          if (this.$refs.form.validate()) {
            this.loading = true;
            this.$apollo
                .mutate({
                  mutation: ADD_SUBSCRIBER_MUTATION,
                  variables: {
                email: this.email
              },
              refetchQueries: ['getCountSubscriber', 'getAllSubscriber']
                })
                .then(() => {
                  this.loading = false;
                  this.show = !this.show
                  toastAlertStatus('success', `SUCCESS!!! You are now offically subscribe ${this.email} `)
                  this.$refs.form.reset()
                })
                .catch(error => {
                            toastAlertStatus('error', error)
                        })
          }
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
              cal_subscriber: [
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
.e{
  width: 250px !important;
}
#subs{
  font-size: 10px;
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
#n{
  font-size: 25px;
  color: #fff;
}
#number{
  font-family: 'Didact Gothic';
  color: #FFC400;
  font-size: 25px;
  font-weight: bolder;
}


</style>