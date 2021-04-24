<template lang="pug">
  .installation
    .installationContainer
        .installationPageTitle.pageTitle {{title}}
        el-carousel(indicator-position="outside")
            el-carousel-item(v-for="item in 4" :key="item")
                h3 {{ item }}
</template>
<script>
export default {
    data(){
        return {
            title: "Installation",
        }
    }
}
</script>
<style lang="sass">
.installation
    width: 100%
    height: 100vh
.installationContainer
    position: relative
    width: 80%
    margin: auto
    padding-top: 160px
.installationPageTitle
    text-align: left
    position: absolute
    // top: 0px
el-carousel
    height: 70vh
.el-carousel__item h3 
    color: #475669
    font-size: 18px
    opacity: 0.75
    line-height: 300px
    margin: 0
    height: 70vh
.el-carousel__item:nth-child(2n) 
    background-color: #99a9bf
    opacity: 0.5
    height: 70vh

.el-carousel__item:nth-child(2n+1) 
    background-color: #d3dce6
    opacity: 0.5
    height: 70vh
</style>