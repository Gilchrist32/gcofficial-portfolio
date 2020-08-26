<template>
    <div class="fab">
         <v-tooltip bottom>  
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="mr-1" href="https://www.facebook.com/gilchrist.calunia" target="_blank" id="facebooklink" fab x-small dark color="#1E88E5"  v-bind="attrs" v-on="on"><v-icon>mdi-facebook</v-icon></v-btn>
            </template>
            <span>Add or Follow me on Facebook</span> 
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs}">
                <v-btn class="mr-1" href="https://www.instagram.com/gilchristcalunia" target="_blank" id="instagramlnk" color="#F50057" fab x-small dark v-bind="attrs" v-on="on"><v-icon>mdi-instagram</v-icon></v-btn>
            </template>
            <span>Follow me on Instagram</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="mr-1" href="https://github.com/Gilchrist32" target="_blank" id="githublink" color="#424242" fab x-small dark v-bind="attrs" v-on="on"><v-icon>mdi-github</v-icon></v-btn>
            </template>
            <span>Follow me on Github and give a star for my repositories</span>
        </v-tooltip>
    </div>
</template>
<script>
export default {
    name: 'fab',
}
</script>
