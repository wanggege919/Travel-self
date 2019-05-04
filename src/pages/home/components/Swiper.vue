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
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true, 
          autoplay: 3000,
          autoplayDisableOnInteraction: false, 
        },
        swiperList: [{
            id: '0001',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/f31e841aa64b60e5f5e8b14b8ba92825.jpg_750x200_0baeb58b.jpg'

        },{
            id: '0002',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/eb47a432471be6ac40b69828676479dd.jpg_750x200_207de9c6.jpg'
        },{
            id: '0003',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/d34604519146db28dbf45c5df191e290.jpg_750x200_5974a3a5.jpg'
        },{
            id: '0004',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5daa78ddf9a3e3aca32195e079b9545d.jpg_750x200_3aeaa5c2.jpg'
        }]
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
        padding-bottom 26.67%
        background #eee
        .swiper-img
            width 100%
</style>
