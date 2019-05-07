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
        <router-link to="/city">
            <div class="header-right">           
                <span class="city">{{this.city}}</span>
                <span class="iconfont arrow-icon">&#xe6aa;</span>             
            </div>
        </router-link>  
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['city'])
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header 
        height .56rem
        background $bgColor
        display flex
        align-items center
        justify-content center
        .header-input
            height .4rem
            flex-grow 1
            border-radius .05rem
            background #fff
            padding-left .1rem
            .header-input-content
                line-height .4rem
                color #ddd
        .header-left
            width .5rem
            text-align center
            color #fff
            .back-icon
                font-size .3rem
        .header-right
            min-width .88rem
            padding .08rem
            text-align center
            color #fff 
            .arrow-icon
                margin-left -.06rem  
                
</style>
