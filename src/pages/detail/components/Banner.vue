<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" 
            :src="this.detailData.bannerImg" alt="">
            <div class="banner-info">
                <p class="banner-number">
                    <span class="iconfont">&#xe658;</span>
                    {{this.detailData.gallaryImgs.length}}
                </p>
                <p class="banner-title">{{this.detailData.sightName}}</p>
            </div>
        </div>
        <fade-animation>
             <CommonGallary 
            :imgs = 'this.detailData.gallaryImgs' 
            v-show="showGallary"
            @close="close"
            ></CommonGallary>
        </fade-animation>

       
    </div>
    
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name: 'DetailBanner',
    props: {
        detailData: Object
    },
    data () {
        return {
            showGallary: false,
           
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
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
