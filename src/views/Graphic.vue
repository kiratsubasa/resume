<template lang="pug">
    .grahpic
        .graphicContainer
            .graphicPageTitle.pageTitle {{title}}
            .graphicFlex
                .graphicItem(v-for="item in graphic")
                    img.graphicPic(v-bind:src="item.src")
                    .graphicText
</template>
<script>
export default {
    data(){
        return {
            title: 'Graphic',
            graphic: [
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/175707129_2210336005762976_2763890902605097702_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=bsoT_j9NLJUAX8X2PfA&_nc_ht=scontent-hkt1-1.xx&oh=c4c4441fc8ce7d127fb5e259940d0f87&oe=60A98959'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/175875907_2210336062429637_6244722403093011135_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=JwYa_tA1VHkAX_DNGXR&_nc_ht=scontent-hkt1-1.xx&oh=f7da32629e2c744c0b9292bdd9f69832&oe=60AAE666'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/175909305_2210336139096296_8527069655461041901_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=0FTiKjw8i-EAX92efdc&_nc_ht=scontent-hkt1-1.xx&oh=d9a4536baf1eb7b170ce51e31586df37&oe=60A9FF4C'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/176835783_2210336202429623_2329456582648651206_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=fKQBIeKpG8YAX9BrpeA&_nc_ht=scontent-hkt1-1.xx&oh=b75b4e188b961d922e99802718855cd5&oe=60AAD0AE'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/176089564_2211658622297381_7470263951044126708_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=YRQQZsf3RwgAX9tipum&_nc_ht=scontent-hkt1-1.xx&oh=972735d8a9088d8dd9cd2bf6fe7b7e08&oe=60AD1038'},
                {src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/178038287_2211658608964049_968601728362434779_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=jlfDnHZqbeAAX9VS2SW&_nc_ht=scontent-hkt1-1.xx&oh=b8bf206a7e27144add3ac874ec115bbc&oe=60AB9149'}
            ]
        }
    }
}
</script>
<style lang="sass">
.graphic
    width: 100%
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
.graphicText
    width: 100%
    height: 0%
    position: absolute
    bottom: 0px
    background-color: #E0D8CC
.graphicItem:hover
    .graphicText
        height: 100%
        transition-duration: 0.5s
        opacity: 0.8
</style>