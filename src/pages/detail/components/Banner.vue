<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" 
            src="//img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_600x330_339bdee5.jpg" alt="">
            <div class="banner-info">
                <p class="banner-number"><span class="iconfont">&#xe658;</span>8</p>
                <p class="banner-title">少林寺（AAAAA景区）</p>
            </div>
        </div>
        <CommonGallary 
        :imgs = 'imgs' 
        v-show="showGallary"
        @close="close"
        ></CommonGallary>
    </div>
    
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_r_800x800_07570307.jpg',
                'http://img1.qunarzz.com/sight/p0/1709/27/2779d093cfdbff30a3.img.jpg_r_800x800_196c6751.jpg',
                'http://img1.qunarzz.com/sight/p0/1709/8c/8c90d360e818ed38a3.img.jpg_r_800x800_bcee8771.jpg',]
        }
    },
    components: {
        CommonGallary,
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        close () {
            this.showGallary = false
        }
        
    }
}
</script>
<style lang="stylus" scoped>
    .banner
        overflow hidden
        width 100%
        height 0
        padding-bottom 55%
        position relative
        .banner-img
            width 100%
        .banner-info
            position absolute
            bottom .2rem
            left .2rem
            color #fff
            .banner-title
                padding-top .1rem
                font-size .22rem
            .banner-number
                width .75rem
                height .25rem
                background rgba(0 0 0 .5)
                border-radius .125rem 
                display flex
                justify-content center
                align-items center  
                .iconfont
                    margin-right .03rem
                    font-size .12rem
</style>
