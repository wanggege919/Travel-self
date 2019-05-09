<template>
    <div>
         <div class="detail-header" v-show="headerShow">
            <div class="header-title" :style="styleOpacity">
                 <router-link to="/">
                    <span class="iconfont back-fixed-icon">&#xe63b;</span>
                </router-link>
                少林寺
            </div>
        </div>
        <router-link to="/" v-show="!headerShow">
            <span class="iconfont back-icon">&#xe63b;</span>
        </router-link>
    </div>
   
</template>
<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            headerShow: false,
            styleOpacity: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            console.log('scroll')
            const top = document.documentElement.scrollTop
            if(top >= 45){
                this.headerShow = true
                const opacity = top / 120
                this.styleOpacity = {opacity: opacity}
            }else{
                this.headerShow = false
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }

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
        position fixed
        top 0 
        left 0
        width 100%
        z-index 2
        .back-fixed-icon
            position absolute
            left .12rem
            top .03rem
            font-size .3rem
            color #fff
            width .5rem
            line-height .5rem
            text-align center
    .back-icon
        position absolute
        left .12rem
        top .03rem
        font-size .3rem
        color #fff
        background rgba(0 0 0 .5)
        width .5rem
        line-height .5rem
        text-align center
        border-radius 50%
            
</style>
