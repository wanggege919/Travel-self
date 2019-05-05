<template>
    <div class="homeSwiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>

export default {
    name: 'HomeSwiper',
    props: ['swiperList'],
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true, 
          autoplay: 3000,
          autoplayDisableOnInteraction: false, 
        },
        // swiperList: []
      }
    },
    
}
</script>
<style lang="stylus" scoped>
    .homeSwiper >>> .swiper-pagination-bullet-active
        background #fff
    .homeSwiper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.2%
        background #eee
        .swiper-img
            width 100%
</style>
