<template lang="pug">
    .graphic
        .graphicContainer
            .graphicPageTitle.pageTitle {{title}}
            .graphicFlex
                .graphicItem(v-for="item in graphic")
                    img.graphicPic(v-bind:src="item.src")
                    .graphicTextContainer
                        .graphicText {{item.content}}
</template>
<script>
export default {
    data(){
        return {
            title: 'Graphic',
            graphic: [
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/175707129_2210336005762976_2763890902605097702_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=bsoT_j9NLJUAX8X2PfA&_nc_ht=scontent-hkt1-1.xx&oh=c4c4441fc8ce7d127fb5e259940d0f87&oe=60A98959', content: '數位平面創作作業。發想自巴哈姆特場外著名的「哈士企」，隔壁的貓？驚訝地看著哈士企，殊不知自己也是混種，一旁的那位看似正常、事不關己，然而他也擁有其他生物的腳。'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/175875907_2210336062429637_6244722403093011135_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=JwYa_tA1VHkAX_DNGXR&_nc_ht=scontent-hkt1-1.xx&oh=f7da32629e2c744c0b9292bdd9f69832&oe=60AAE666', content: '數位平面創作作業。看似平常的無障礙標示，其實來自於校內各個標示牌，透過影像拼貼將這些地點拼湊起來，形成一幅跨越多個空間的畫面。'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/175909305_2210336139096296_8527069655461041901_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=0FTiKjw8i-EAX92efdc&_nc_ht=scontent-hkt1-1.xx&oh=d9a4536baf1eb7b170ce51e31586df37&oe=60A9FF4C', content: '數位平面創作作業。「我老婆美如畫。」如果只會說這句話就是腦粉，但當將他實現的話就不一樣了。調整照片的臨界值再將各區域上色，我就不是一個單純的腦粉了！'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/176835783_2210336202429623_2329456582648651206_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=fKQBIeKpG8YAX9BrpeA&_nc_ht=scontent-hkt1-1.xx&oh=b75b4e188b961d922e99802718855cd5&oe=60AAD0AE', content: '數位平面創作作業。主題是裝扮與角色，於是就找了原有的衣服做搭配，以馬力歐、路易吉的姿態在校園中不害臊的上演馬力歐跳，再將遊戲中的各個元件現實化。登 登 登 登登登 登。'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/176089564_2211658622297381_7470263951044126708_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=YRQQZsf3RwgAX9tipum&_nc_ht=scontent-hkt1-1.xx&oh=972735d8a9088d8dd9cd2bf6fe7b7e08&oe=60AD1038', content: '為了偶像的花籃而電繪。圖中主角是日團JO1的白岩瑠姫，JO1的粉絲名稱叫做「JAM」，於是就以JO1 x JAM為主題做了這次花籃立牌的創作。'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/178038287_2211658608964049_968601728362434779_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=jlfDnHZqbeAAX9VS2SW&_nc_ht=scontent-hkt1-1.xx&oh=b8bf206a7e27144add3ac874ec115bbc&oe=60AB9149', content: '朋友的卡片。途中雙馬尾的女生是個不折不扣的暈船仔，即使他們倆個不認識，她仍在收到卡片後開心了很久。有件事情只在這裡講，這個男生後來死會了。'}
            ]
        }
    }
}
</script>
<style lang="sass">
.graphic
    width: 100%
    min-height: 100vh
    height: 100%
.graphicContainer
    padding-top: 15vh
.graphicFlex
    display: flex
    flex-direction: row
    flex-wrap: wrap
    width: 86vw
    margin: auto
.graphicItem
    width: 24vw
    margin: 2.3vw
    position: relative
.graphicPic
    width: 100%
.graphicTextContainer
    width: 100%
    height: 0%
    position: absolute
    bottom: 0px
    background-color: #E0D8CC
    color: #40414F
    text-align: left
    line-height: 1.5
    overflow: hidden
.graphicText
    margin: 10px
.graphicItem:hover
    .graphicTextContainer
        height: 100%
        transition-duration: 0.5s
        opacity: 0.8
@media only screen and (max-width: 1100px)
    .graphicItem
        width: 100%
</style>