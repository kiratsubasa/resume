<template lang="pug">
    .website
        .webFlex
            .webText
                .webPageTitle.pageTitle {{title}}
                .pageContent {{content}}
            .webPics
                a.webPic(v-for="item in image" v-bind:href="item.url" target= '_blank')
                    img.web(v-bind:src="item.src")
</template>
<script>
export default {
    data(){
        return {
            title: "Website",
            content: "這些都是之前專案的網站，但由於都是使用有限流量的aws雲端主機，負責後端的同學在階段完成後將它關掉了，所以現在只能提供GitHub連結。",
            image: [
                {src: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/177930115_2210336089096301_1435115749346906375_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=buRxD7MXBOEAX8m51Dg&_nc_ht=scontent-hkt1-1.xx&oh=67785eb1344065570920dcc5713c038b&oe=60A80F47",url: "https://github.com/kiratsubasa/scratch3"},
                {src: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/176117817_2210336335762943_1528263860910567027_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=VSu69vvnx-EAX9JLV3k&tn=71XRl1kfTDhz5G1c&_nc_ht=scontent-hkt1-1.xx&oh=e5b12df94ce54f3542e8fd1696950384&oe=60AAB1E5",url: "https://github.com/kiratsubasa/max-final"},
                {src: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/176117814_2210336072429636_9214481011827147839_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=qzCL3Sx6qMgAX-3hX14&_nc_ht=scontent-hkt1-1.xx&oh=322dd52edb89209442b762743c157bf6&oe=60A77586",url: "https://github.com/jerry914/dooperation"},
            ]
        }
    }
}
</script>
<style lang="sass">
.website
    // height: 100%
    width: 100%
    // position: relative
    margin: auto
    display: flex
    flex-direction: column
    align-items: center
.webFlex
    width: 92%
    display: flex
    flex-direction: row-reverse
    justify-content: space-between
    margin: 0 auto
    margin-top: 15vh
.webText
    // right: 8vw
    margin-top: 250px
    display: flex
    flex-direction: column
    // justify-content: flex-
    width: 40vw
.pageTitle
    font-size: 6vw
    color: #DEBB87
    font-weight: 1000
    // padding-top: 30vh
    // padding-right: 8vw
    // opacity: 0.5
.webPageTitle
    text-align: right
.pageContent
    font-size: 30px
    color: #E0D8CC
    float: right
    text-align: right
    // margin-right: 8vw
    margin-top: 10px
.webPics
    width: 48vw
    height: 72vh
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: center
.web
    width: 20vw
    margin-bottom: 30px
@media only screen and (min-width: 1350px)
    .website
        height: 100vh
@media only screen and (min-width: 1940px)
    .webPics
        height: 80vh
@media only screen and (max-width: 1350px)
    .webFlex
        width: 60vw
        flex-direction: column
        margin-top: 100px
    .webText
        width: 60vw
        margin-top: 0px
        margin-bottom: 25px
    .webPics
        width: 60vw
        height: auto
    .web
        width: 100%
        // height: 80vh
    .pageContent
        font-size: 18px
@media only screen and (max-width: 500px)
    .webFlex 
        width: 80vw
        align-items: flex-end
    .webText
        width: 60vw 
    .webPics
        width: 80vw
</style>