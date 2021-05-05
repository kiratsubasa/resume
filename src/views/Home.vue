<template lang='pug'>
.homeBody
  .home
    //- img(alt="Vue logo" src="../assets/logo.png")
    //- HelloWorld(msg="Welcome to Your Vue.js App")
    .homeTextContainer
      .homeTextBgc
      .homeTextFlex
        a.homeText(v-for="item in text" :href="item.url" target="_blank")
          //- .homeIcon(:style="{'background-image': 'url(' + item.img + ')'}")
          img.homeIcon(:src="item.img")
          .homeContent {{item.text}}
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
      text: [
        {img: 'https://www.flaticon.com/svg/vstatic/svg/684/684872.svg?token=exp=1620183991~hmac=555ccc41bb3cb65b21e094c2da743aaa',text: 'resume',url: ''},
        {img: 'https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1620182693~hmac=327787652ff2bd46ac92900b230c0ecf',text: 'GitHub',url: 'https://github.com/kiratsubasa'},
        {img: 'https://www.flaticon.com/svg/vstatic/svg/1400/1400829.svg?token=exp=1620182710~hmac=a332c3e36d7bf141115b2c7f0005f7e6',text: 'kira173_36',url: 'https://www.instagram.com/kira173_36/?igshid=15e4vp5ffpr'},
        {img: 'https://www.flaticon.com/svg/vstatic/svg/95/95645.svg?token=exp=1620182727~hmac=e8316f1f7f46e96675f06ccf9a0c9030',text: 'love.ryosuke.yuri@gmail.com',url: 'mailto:love.ryosuke.yuri@gmail.com'},
        {img: 'https://www.flaticon.com/svg/vstatic/svg/597/597177.svg?token=exp=1620182746~hmac=06a01cf1d72fe8846d3f71cf8e340d11',text: '0921338504',url: 'tel:+886-921338504'},
      ]
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
  top: 50%
  margin-top: -29vw
.homeTextContainer
  width: 45vw
  height: 28vw
  // margin-bottom: 20vh 
  position: absolute
  top: 50%
  margin-top: -14vw
  margin-left: 5vw
.homeTextBgc
  position: absolute
  width: 100%
  height: 100%
  top: 0px
  left: 0px
  background-color: #E0D8CC
  opacity: 0.6
.homeTextFlex
  position: absolute
  padding: 3vw
  top: 0px
  left: 0px
  color: #40414F
.homeText
  font-size: 1.8vw
  display: flex
  flex-direction: row
  margin-bottom: 1.8vw
  align-items: center
  color: #000
  text-decoration: none
.homeIcon
  width: 2vw
  margin-right: 1vw
@media only screen and (min-width: 900px)
  // .homeText
  //   font-size: 16vh
@media only screen and (max-width: 800px)
  // .homeText
  //   font-size: 3vh
  //   width: 50vw
</style>
