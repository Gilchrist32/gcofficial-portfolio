<template>
  <div class="project">
    <v-container fluid fill-height pt-0 >
    <v-row > 
      <v-col v-for="proj in project" :key="proj.id" >
        <v-card mt-4 max-width="500" class="mx-auto mt-4" id="card-project">
<!--v-for="proj in project" :key="proj.id"-->
          <v-img :src="proj.image_url" height="194" ></v-img>

          <v-card-text id="comment">
           <h3>{{ proj.title }}</h3>
           <hr class="lime accent-4 mb-2 mt-0 d-inline-block mx-auto" style="width: 150px" /> <br>
           <p>{{ proj.description }}</p>
         </v-card-text>
         
         <v-card-actions>
           <LikeModal />
          
           <v-spacer></v-spacer>
           <v-btn class="white--text" color="#0e152c" :href="proj.source_code" target="_blank">
           <v-icon left>folder_open</v-icon><span>View Github</span></v-btn>
          </v-card-actions>
          <div class="ml-5">
              <i 
                class="fa fa-thumbs-up mr-1 ml-2"
                data-toggle="modal" 
                :data-target="`#likeUserModal-${proj.id}`">
              </i> 
                {{ proj.likeCount ? proj.likeCount.aggregate.count : 0 }}
              <list-likes-modal 
                  :project_id="proj.id"/> <!-- List likes Modal component -->
              <i 
                class="fa fa-comments mr-1 ml-5"></i> 
                {{ proj.commentCount ? proj.commentCount.aggregate.count : 0 }}
            </div>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>
<script>
import LikeModal from '../components/LikeModal.vue'
import { PROJECT_QUERYS } from '../graphql/queries'
import { PROJECT_SUBSCRIPTION } from '../graphql/subscriptions'

export default {
  components: {
    LikeModal
  },

  data(){
    return {
      project: [],
      project_id: this.$route.params.id
    }
  },

  apollo: {
    project: {
      query:  PROJECT_QUERYS,
      variables() {
                return {
                    project_id: this.project_id
                }
            },
      subscribeToMore: {
        document: PROJECT_SUBSCRIPTION,
        variables() {
                    return {
                        project_id: this.project_id
                    }
                },
        updateQuery(previousResult, { subscriptionData }) {
          if (previousResult) {
            return {
              project: [
                ...subscriptionData.data.project
              ]
            }
          }
        }
      },
      result ({ data }) {
        this.project = data.project
      }
    }
  }
}
</script>>
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