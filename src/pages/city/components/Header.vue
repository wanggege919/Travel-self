<template>
    <div class="header">
        <div class="header-title">
            <router-link to="/">
                <span class="iconfont back-icon">&#xe63b;</span>
            </router-link>
            选择城市
        </div>
        <div class="header-input">
            <input type="text" placeholder="输入城市名或拼音">
        </div>
    
    </div>
    
</template>
<script>
export default {
    name: "CityHeader",
    
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header-title
        height .56rem
        background $bgColor
        display flex
        align-items center
        justify-content center
        color #ffffff
        position relative
        .back-icon
            position absolute
            left .12rem
            bottom .13rem
            font-size .3rem
            color #fff
    .header-input
        height .46rem
        background $bgColor
        display flex
        align-items center
        justify-content center
        input 
            box-sizing border-box
            width 98%
            height 76%
            border-radius .04rem
            text-align center
            color #666666
            padding 0 .1rem
</style>
