<template>
    <no-ssr placeholder="loading...">
        <carousel-3d :height="350" :width="400" :border="1" :autoplay="true" :autoplay-timeout="2400">
            <slide v-for="(slide, i) in slides" :index="i" :key="i">
                <img v-bind:src="slide.src" />
            </slide>
        </carousel-3d>
    </no-ssr>
</template>
<script>
export default {
    data() {
        return {
            slides: [
            {src: require('../assets/Profile/01.jpg')},
            {src: require('../assets/Profile/03.jpg')},
            {src: require('../assets/Profile/05.jpeg')},
            {src: require('../assets/Profile/06.jpg')},
            {src: require('../assets/Profile/07.jpg')},
            ]
        }
    }
}
</script>
<style scoped>
.carousel-3d-slide{
    height: 200% !important;
}
</style>