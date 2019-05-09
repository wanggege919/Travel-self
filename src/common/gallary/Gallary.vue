<template>
    <div class="common-gallary" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options='swiperOption'>
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOption: {
                autoplay: false,
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true,
                
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }

}
</script>
<style lang="stylus" scoped>
    .common-gallary >>> .swiper-container
        overflow inherit
        // border 1px solid green
    .common-gallary >>> .swiper-wrapper
        // display flex
        // justify-content center
        // align-items center
        // border 1px solid red
    .common-gallary
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        background #000
        display flex
        flex-direction column
        justify-content center
        align-items center
        .wrapper
            height 0
            width 100%
            padding-bottom 71%
        img 
            width 100%
        .swiper-pagination
            bottom -1.6rem
            color #fff
                    
</style>
