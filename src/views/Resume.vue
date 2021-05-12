<template lang="pug">
    #resume.resume
        .resumeContainer 
            .resumeLeft
                .resumeSchool(v-html="school")
                .resumePhoto(:style="{'background-image': 'url(' + img + ')'}")
                .resumeAbility
                    .resumeSkills(v-for="item in ability") 
                        .resumeSkill(v-for="i in item") 
                            .resumeTitle {{i.title}}
                            .resumeContent(v-html="i.content")
            .resumeRight
                .resumeRightFlex
                    .resumeRightTitleBgc
                        .resumeRightTitle 經歷
                    .resumeRightContent(v-html="experience")
                .resumeRightFlex
                    .resumeRightTitleBgc
                        .resumeRightTitle 自我介紹
                    .resumeRightContent(v-html="self")
</template>
<script>
export default {
    data(){
        return {
            school: '畢業於國立嘉義女中<br/>現就讀國立清華大學<br/>藝術學院學士班大三',
            img: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/182366857_2220128331450410_7869236109202614909_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=frEKONP8fz0AX8wCTQW&_nc_ht=scontent-hkt1-2.xx&oh=ae73532a1a4ad04959c38fd1dd9593a0&oe=60B911AA',
            ability: [
                [{title: '程式語言', content: 'C、C++、Javascript、<br/>Pytjon'}, {title: '自造', content: '3D列印、雷射切割、<br/>鉅台、銑床等等'}, {title: '遊戲引擎', content: 'Unity、Unreal'}, {title: '互動影像', content: 'Processing'}],
                [{title: '語言', content: '日文（日檢N1)<br>英文（多益945分）'},{title: '其他', content: '電繪、表演活動'}],
            ],
            experience: '2019年參與製作「印象清華」展覽裝置作品「躍動彈珠」、「花語清華」。<br/>2019年參與製作「白晝之夜」影像作品「眾幻之門」。<br/>2020年參加清華藝術學院科技藝術展《那顆Ｇ1咻！》，作品「Senses」入選複審。',
            self: '我是余曉沁，現就讀清大的跨領域科系學習「科技藝術」，所學的內容包括程式設計、動力裝置、互動影像、音像創作、微電子及微電腦互動創作等等。<br/>因為本身有在從事表演活動，對於演唱會、劇場的表演視覺設計、裝置等格外的有興趣，希望能運用所學並透過這次的實習機會更加的精進相關能力。<br/>雖然平時很ㄎㄧㄤ，但做正事時還是會好好的在團隊中調和、適時表達想法、建議，也喜歡學習新知。另外，因為前述的表演活動，與人互動、溝通方面可以說是頗為擅長，因此我認為能夠協助團隊合作順利進行。'
        }
    }
}
</script>
<style lang="sass">
.resume
    min-height: 100vh
    width: 100%
    // position: relative
    margin: auto
    display: flex
    flex-direction: column
    // align-items: center
    color: #515151
    padding-bottom: 15vh
.resumeContainer
    width: 60vw
    height: 90vw
    background-color: #F8F5EE
    display: flex
    flex-direction: row
    // justify-content: space-between
    margin: 0 auto
    margin-top: 15vh
.resumeLeft
    width: 40%
    background-color: #CBDDD3
    position: relative
    // padding-top: 39vw
.resumeSchool
    width: 18vw
    background-color: #D7CDC2
    padding: 27vw 3vw 2vw 3vw
    position: absolute
    left: 6vw
    font-size: 2vw 
    line-height: 4vw
.resumePhoto
    position: absolute
    left: 0px
    top: 4vw
    width: 29.95vw
    height: 21vw
    background-size: cover
.resumeAbility
    position: absolute
    top: 41vw
    font-size: 1.64vw 
    padding: 4vw 1vw 4vw 2.5vw
    word-break: break-all
    display: flex
    flex-direction: column
    text-align: left
.resumeSkills
    margin-bottom: 2.5vw
    padding-left: 1.5vw
    border-left: 1vw solid #D7CDC2
.resumeTitle
    font-weight: 800
.resumeContent
    margin-bottom: 1vw
.resumeRight
    width: 60%
    padding-top: 7vw
    text-align: left
.resumeRightFlex
    padding-left: 8vw
    margin-bottom: 3vw
.resumeRightTitleBgc
    height: 1.64vw
    background-color: #CBDDD3
    position: relative
    margin-bottom: 3vw
.resumeRightTitle
    font-weight: 800
    font-size: 2.2vw
    position: absolute
    bottom: 0px
.resumeRightContent
    font-size: 1.64vw
    padding-right: 5vw
@media only screen and (max-width: 900px)
    .resumeContainer
        margin-top: 10vh
    .resumeSchool
        width: 35vw
        font-size: 1vw 
        line-height: 5vw
@media only screen and (max-width: 700px)
    .resumeContainer
        width: 90vw
    .resumeSchool
        width: 30vw
@media only screen and (max-width: 690px)
    .resumeContainer
        height: 120vw
@media only screen and (max-width: 450px)
    .resumeContainer
        width: 100vw
    .resumeSchool
        // width: 40vw
        padding: 27vw 1.5vw 2vw 1.5vw
@media only screen and (max-width: 380px)
    .resumeContainer
        height: 140vw
    .resumeSchool
        width: 35vw
    .resumeRightFlex
        padding-left: 6vw
        margin-bottom: 3vw
@media only screen and (max-width: 350px)
    .resumeRightFlex
        line-height: 4.3vw
</style>