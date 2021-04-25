<template lang="pug">
  .installation
    .installationContainer
        .installationPageTitle.pageTitle {{title}}
        .block
            el-carousel(indicator-position="outside" trigger="click" height="70vh" )
                el-carousel-item(v-for="item in works" :key="item")
                    a.sliderFlex(v-bind:href="item.url" target= '_blank'  style="text-decoration:none")
                        #sliderText
                            .titleAndDescribe
                                .sliderTitle {{item.title}}
                                .sliderDescribe {{item.describe}}
                            .sliderContent {{item.content}}
                        //- a.sliderLink(v-bind:href="item.url" target= '_blank')
                        img.sliderPic(v-bind:src="item.src")
</template>
<script>
export default {
    data(){
        return {
            title: "Installation",
            works: [
                {title: 'Senses', describe: '入選第一屆清華藝術學院科技藝術展《那顆Ｇ1咻！》作品', content: 'Senses，即感官，在此空間內，人們可以獲得各種感官交錯的體驗。一個靜態物品映入眼簾時，第一個接收到的應該是視覺感受，而聽覺、觸覺等等則是要接近物品，甚至是接觸到它時才能感覺到。這樣的時序性造成了各種感官發生的時間差，若是能縮短、消除感官的間隔，或許又可以成為一種截然不同的新感受。', src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/178071511_2211148352348408_2492291336796599046_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=sYcIQw2mFj8AX9qBARg&_nc_ht=scontent-hkt1-1.xx&oh=94b8676d2f179baa1acd51e3091aee90&oe=60AAFF1D', url: ''},
                {title: '我4魔法師', describe: '互動科技與藝術專題作品', content: '「我4魔法師。」一句我經常掛在嘴邊的話，有時是因為完成了一件他人覺得不可思議的是，有時是因為我選擇將隔天的早八變不見。這個魔法陣會在手靠近的區域亮起，且當我們以不同的電子標籤感應它時，會產生不同顏色、效果的魔法。', src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/177594479_2211148332348410_6642485314712902961_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=RxofhZXrGXEAX8O8MBk&_nc_ht=scontent-hkt1-1.xx&oh=72721c49dcf27936fc4876fd84bf10ac&oe=60AC1E62'},
                {title: 'L y t h rn a s k', describe: '動力裝置藝術期末作品', content: 'Lythraceae x Mask，千屈菜 x 口罩。不是人人都善於社交，有時面對他人會使我們惶恐、不安，但又基於禮貌而無法拒絕他人，造成了我們極大的壓力。當人感受到緊張時心跳加速，感測器會自動啟動口罩。同時使用者也可以自行透過按鈕的方式將口罩戴上。', src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/175707142_2211166815679895_5489161844131566457_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=uNe1YOyG4roAX9kkO9V&_nc_ht=scontent-hkt1-1.xx&oh=3d324af81bb11fa8ff1ba33c0752d04c&oe=60AB6828'}
            ]
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
    padding-top: 15vh
.installationPageTitle
    text-align: left
    position: absolute
    // top: 0px
.block
    color: #E0D8CC
.el-carousel__item h3 
    color: #475669
    font-size: 14px
    opacity: 0.75
    // line-height: 150px
    margin: 0
.el-carousel__item:nth-child(2n) 
    // background-color: #99a9bf
    // opacity: 0.5
.el-carousel__item:nth-child(2n+1) 
    // background-color: #d3dce6
    // opacity: 0.5
.sliderFlex
    display: flex
    flex-direction: row
    justify-content: space-between
    height: 100%
    align-items: center
#sliderText
    text-decoration: none
    color: #E0D8CC
    text-align: left
    margin-top: 15vh
    width: 50vh
    display: flex
    flex-direction: column
    justify-content: flex-end
.sliderTitle
    font-size: 36px
    // margin-bottom: 5px
.titleAndDescribe
    margin-bottom: 15px
.sliderDescribe.sliderContent
    font-size: 30px
    line-height: 45px
.sliderPic
    height: 100%
.sliderLink:visit
    text-decoration: none
    
</style>