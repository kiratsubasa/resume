<template lang='pug'>
.homeBody
  .home
    //- img(alt="Vue logo" src="../assets/logo.png")
    //- HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="sass">
.home
  height: 58vw
  width: 100%
  background-image: url("../assets/header.png")
  background-size: cover
  opacity: 0.6
.homeBody
  background-color: #40414F
  height: 100vh
  overflow: hidden
@media only screen and (max-width: 1500px)
  .homeBody
    position: relative
  .home
    position: absolute
    // height: 56vh
    // top: 22vh
@media only screen and (max-width: 1100px)
  .home
    // height: 46vh
    // top: 27vh
@media only screen and (max-width: 800px)
  .home
    // height: 36vh
    // top: 32vh
</style>
