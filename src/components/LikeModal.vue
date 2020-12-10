<template>
    <div class="modal fade" :id="`LikeModal-${project_id}`" aria-hidden="true">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="#0e152c"
                v-bind="attrs"
                v-on="on"
                @click="handleClickLike">
                    <v-icon color="lime accent-4">mdi-thumb-up</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span style="font-size: 18px">Please Input your name to like</span>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        <v-icon>clear</v-icon>
                    </v-btn>
                </v-card-title>
                <v-container>
                   <v-form :disabled="loading" ref="form" v-model="valid" @submit.prevent="handleClickLike">
                 <v-text-field solo dense label="Name" rounded 
                     v-model.trim="$v.name.$model"
                    :class="{ 'is-invalid' : $v.name.$error, 'is-valid' : !$v.name.$invalid }">
                </v-text-field>
                 <div class="invalid-feedback feedback">
                      <span v-if="!$v.name.required">Name is required</span>
                      <span v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} letters. </span>
                      <span v-if="!$v.name.maxLength">Name must have at most {{ $v.name.$params.maxLength.max }} letters.</span>
                  </div>
                    <v-btn id="subs" class="white--text" color="#0e152c" :loading="loading" 
                    block @click="handleClickLike" rounded >
                    <v-icon left>mdi-thumb-up</v-icon>Like</v-btn>
                </v-form>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { ADD_LIKE_MUTATION } from '@/graphql/mutations/subscriber'
export default {
    name: 'LikeModal',

    data() {
        return {
            name: '',
            valid: true,
            loading: false,
            dialog: false,
        }
    },

    props: ['project_id'],

      validations: {
        name: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(25)
        }
    },
      methods: {
        handleClickLike() {
           this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true
                const { name } = this.$data
                this.$apollo.mutate({
                    mutation: ADD_LIKE_MUTATION,
                     variables: {
                        project_id: this.project_id,
                        name: name
                    }
                })
                .then(() => {
                  this.loading = false
                  this.$refs.form.reset()
                })
                .catch(error => console.log(error))
            }
        }
    }
}
</script>
<style scoped>
</style>