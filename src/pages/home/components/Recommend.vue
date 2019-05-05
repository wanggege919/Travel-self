<template>
    <div class="homeRecommend">
        <header>猜你喜欢</header>
        <ul class="recommendList">
            <li class="recommendItem" v-for='item of itemList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <div class="item-text">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">{{item.button}}</button>
                </div>
            </li>
        </ul>
    </div>    
</template>
<script>
export default {
    name: "HomeRecommend",
    data () {
        return {
            itemList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_200x200_bf985a3d.jpg',
                title: '少林寺',
                desc: '中国第一古刹，拥有上千年的历史，驰名国内外',
                button: '查看详情'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/9b/9bebb56764678a58.water.jpg_200x200_0aac53dc.jpg',
                title: '黄河风景名胜区',
                desc: '黄河上的璀璨明珠，景色美不胜收',
                button: '查看详情'
            },]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .homeRecommend
        header 
            width 100%
            line-height .5rem
            text-indent .15rem
            background #eaeaea
        .recommendList
            .recommendItem
                display flex
                padding .15rem
                border-bottom 1px solid #eaeaea
                img 
                    width 1.25rem
                    height 1.25rem
                    margin-right .2rem
                .item-text
                    display flex
                    flex-direction column
                    justify-content space-around
                    align-items flex-start
                    .item-title
                        font-weight 700
                        ellipsis()
                    .item-desc
                        color #bebdbf 
                        ellipsis()
                    .item-button
                        background #e2a157
                        color white   
</style>
