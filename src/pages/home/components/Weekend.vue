<template>
    <div class="HomeWeekend">
        <header>周末去哪儿</header>
        <ul class="weekendList">
            <li class="weekendItem" v-for="item of weekendList" :key="item.id">
                <div class="img-wrapper">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="text-wrapper">
                    <p>{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>
                </div>
                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            weekendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg',
                title: '郑州打卡',
                desc: '日月轮回，孕育出新的美丽',
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1811/d2/017059dd59b0ee.jpg_r_640x214_497664a4.jpg',
                title: '万仙山',
                desc: '清幽山乡，人间仙境，世外桃源，雄壮而苍茫的红崖绝壁，妙曼而秀雅的山乡风韵，太行风光的典型代表',
            },]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .HomeWeekend
        header 
            width 100%
            line-height .5rem
            text-indent .15rem
            background #eaeaea
        .weekendList
            .weekendItem
                .img-wrapper
                    overflow hidden 
                    width 100%
                    height 0
                    padding-bottom 37.3%
                    img 
                        width 100%
                .text-wrapper
                    padding .2rem 0
                    p
                        text-indent .15rem
                        margin-bottom .12rem
                    .desc
                        font-size .16rem  
                        ellipsis()
</style>
