<template>
    <div class="homeIcons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index" class="iconList"> 
                <div v-for="item of page" :key="item.id" class="iconItem">
                     <img :src="item.imgUrl" alt="">
                     <div>{{item.title}}</div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="iconFooter">
            <span class="left">定位失败</span>
            <span class="right">必游榜单</span>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'homeIcons',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination'
            },
            pages: [[
               {
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                title: '景点门票'
            },{
                id: '0002',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e98eea7ed037b04a5af0250ca8a1abd7.png',
                title: '少林寺'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                title: '郑州必游'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                title: '郑州方特'
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/85/77241e9427222b02.png',
                title: '郑州园博园'
            },{
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
                title: '冰雪世界'
            },{
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
                title: '郑州动物园'
            },{
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                title: '实景演出'
            }, 
            ],[{
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                title: '海洋馆'
            },]]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .homeIcons >>> .swiper-pagination
        left 0
        bottom 0 
    .homeIcons >>> .swiper-pagination-bullet-active
        background $bgColor
    .homeIcons
        // overflow hidden
        // width 100%
        // height 0
        // padding-bottom 51%
        border-bottom 1px solid #eaeaea
        .iconList
            display flex
            flex-wrap wrap
            padding-top .12rem
            padding-bottom .25rem
            .iconItem
                width 25%
                height 1rem
                display flex 
                flex-direction column
                align-items center
                justify-content space-around
                img
                    width 59%
        .iconFooter
            display flex
            justify-content center
            margin-top .1rem
            .left,.right
                width 50%
                text-align center
                line-height .625rem
                border-top 1px solid #eaeaea
            .left
                border-right 1px solid #eaeaea
</style>
