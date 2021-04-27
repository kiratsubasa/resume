<template lang='pug'>
.homeBody
  .home
    //- img(alt="Vue logo" src="../assets/logo.png")
    //- HelloWorld(msg="Welcome to Your Vue.js App")
  .homeText {{homeText}}
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      homeText: 'HSIAO CHIN Works'
    }
  }
}
</script>
<style lang="sass">
.homeBody
  background-color: #40414F
  height: 100vh
  overflow: hidden
  position: relative
.home
  height: 58vw
  width: 100%
  background-image: url("../assets/header.png")
  background-size: cover
  opacity: 0.6
  position: absolute
.homeText
  width: 60vw
  padding: 0vw 5vw 0vw 5vw
  position: absolute
  font-size: 20vh
  top: 39vh
  text-align: left
  font-weight: bold
  color: #E0D8CC
@media only screen and (max-width: 1500px)
  .homeBody
    position: relative
  .home
    position: absolute
    // height: 56vh
    // top: 22vh
@media only screen and (min-width: 900px)
  .home
    // height: 46vh
    // top: 27vh
  .homeText
    font-size: 16vh
@media only screen and (max-width: 800px)
  .home
    // height: 36vh
    // top: 32vh
    top: 30vh
  .homeText
    font-size: 3vh
    width: 50vw
</style>
