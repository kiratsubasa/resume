<template lang="pug">
#app
  #nav
    router-link.menu(to="/") Home 
    router-link.menu(to="/website") Website
    router-link.menu(to="/installation") Installation
    router-link.menu(to="/graphic") Graphic
    //- router-link.menu(to="/about") About
    //- router-link.menu(to="/about") About
  //- .menu
  router-view
</template>
<style lang="sass">
*
  margin: 0
  padding:0
#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background-color: #40414F
#nav 
  width: 100vw
  height: 10vh
  // background-color: #aaa
  position: fixed
  display: flex
  align-items: center
  justify-content: left
  z-index: 100
#nav a 
  font-weight: bold
  color: #E0D8CC
  text-decoration: none
#nav a.router-link-exact-active 
  color: #DEBB87
.menu
  font-size: 1.8vw
  height: 36px
  padding-left: 3.6vw
  // line-height: 10vh
</style>