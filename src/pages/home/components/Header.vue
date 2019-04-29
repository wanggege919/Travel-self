<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe63b;</span>
        </div>
        <div class="header-input">
            <div class="header-input-content">
                <span class="iconfont">&#xe600;</span>
                输入城市/景点/游玩主题
            </div>
        </div>
        <div class="header-right">
            <span>城市</span>
            <span class="iconfont arrow-icon">&#xe6aa;</span>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .header 
        height .56rem
        background #00bcd4
        display flex
        align-items center
        justify-content center
        .header-input
            height .38rem
            width 3.28rem
            border-radius .05rem
            background #fff
            padding-left .1rem
            .header-input-content
                line-height .38rem
                color #ddd
        .header-left
            width .5rem
            text-align center
            color #fff
            .back-icon
                font-size .3rem
        .header-right
            width .78rem
            text-align center
            color #fff 
            .arrow-icon
                margin-left -.06rem    
</style>
