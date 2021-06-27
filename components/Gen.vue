<template>
<div class="container">

    <button v-on:click="refresh">Générer un autre nom</button>
    
    <span class="name">{{name}}</span>
    <img :src="imageUrl" alt="Licorne" />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@nuxt/http'
export default Vue.extend({
    data() {
        return {
            name: '',
            imageUrl: ''
        }
    },
    methods: {
        refresh(event: Event) {
            event.preventDefault()
            window.location.reload()
        }
    },
    async fetch() {
        const genData = await this.$http.$get('/pour-vero/new-unicorn') as {name: string, imageUrl: string}
        this.name = genData.name
        this.imageUrl = '/pour-vero/images/unicorns/' + genData.imageUrl
    }
})
</script>

<style lang="css" scoped>

.container {
    display: flex;
    flex-direction: column;
}

button {
  background-color: #9e76e8;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #9e76e8), color-stop(50%, #7038e0), color-stop(50%, #6021de), color-stop(100%, #6224de));
  background-image: -webkit-linear-gradient(top, #9e76e8 0%, #7038e0 50%, #6021de 50%, #6224de 100%);
  background-image: -moz-linear-gradient(top, #9e76e8 0%, #7038e0 50%, #6021de 50%, #6224de 100%);
  background-image: -ms-linear-gradient(top, #9e76e8 0%, #7038e0 50%, #6021de 50%, #6224de 100%);
  background-image: -o-linear-gradient(top, #9e76e8 0%, #7038e0 50%, #6021de 50%, #6224de 100%);
  background-image: linear-gradient(top, #9e76e8 0%, #7038e0 50%, #6021de 50%, #6224de 100%);
  border-radius: 3px;
  color: #fff;
  font: bold 12px/1 "helvetica neue", helvetica, arial, sans-serif;
  padding: 10px 0 12px 0;
  text-align: center;
  text-shadow: 0 -1px 1px #473569;
  width: 150px;
  -webkit-background-clip: padding-box; }
  button:hover {
    background-color: #8d69cf;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #8d69cf), color-stop(50%, #6332c7), color-stop(50%, #551dc4), color-stop(100%, #561fc4));
    background-image: -webkit-linear-gradient(top, #8d69cf 0%, #6332c7 50%, #551dc4 50%, #561fc4 100%);
    background-image: -moz-linear-gradient(top, #8d69cf 0%, #6332c7 50%, #551dc4 50%, #561fc4 100%);
    background-image: -ms-linear-gradient(top, #8d69cf 0%, #6332c7 50%, #551dc4 50%, #561fc4 100%);
    background-image: -o-linear-gradient(top, #8d69cf 0%, #6332c7 50%, #551dc4 50%, #561fc4 100%);
    background-image: linear-gradient(top, #8d69cf 0%, #6332c7 50%, #551dc4 50%, #561fc4 100%);
    -webkit-background-clip: padding-box;
    cursor: pointer; }
  button:active {
    background: #4a1aab;
    background: -moz-radial-gradient(50% 31% 0deg, circle cover, rgba(38, 76, 153, 0.4), rgba(11, 23, 46, 0.4)), -moz-linear-gradient(top, #7b5cb5 0%, #572bad 50%, #4a1aab 50%, #4b1bab 100%);
    background: -webkit-gradient(radial, 50% 20%, 75, 50% 50%, 0, from(rgba(38, 76, 153, 0.4)), to(rgba(11, 23, 46, 0.4))), -webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #7b5cb5), color-stop(0.5, #572bad), color-stop(0.5, #4a1aab), color-stop(1, #4b1bab));
    color: #ddd;
    -webkit-background-clip: padding-box; }

img {
    border: 4px solid purple;
    border-radius: 5vw;
    border-top-width: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    display: block;
    height: auto;
    margin: 0px;
    max-width: min(480px, 90vw);
    min-width: 480px;
}
span {
    margin-top: 16px;
    border: 4px solid purple;
    border-radius: 5vw;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-width: 0px;
    min-width: 480px;
    max-width: min(480px, 90vw);
    color: white;
    font-size: 2em;
    padding: 32px;
    background: #9e76e8;

}

</style>