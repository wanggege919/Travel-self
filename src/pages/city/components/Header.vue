<template>
    <div class="header">
        <div class="header-title">
            <router-link to="/">
                <span class="iconfont back-icon">&#xe63b;</span>
            </router-link>
            选择城市
        </div>
        <div class="header-input">
            <input v-model="keyWord" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-list" v-show = 'keyWord' ref="searchList">
            <ul>
                <li class="search-item" v-for="item of list" :key="item.id">
                    {{item.name}}
                </li>
                <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
    
</template>
<script>
import BScroll from 'better-scroll'

export default {
    name: "CityHeader",
    props: {
        cities: Object
    },
    data () {
        return {
            keyWord: '',
            list: []
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: {
       keyWord () {
           if(this.timer){
               clearTimeout(this.timer)
           }
           if(!this.keyWord){
               this.list = []
               return
           }
           this.timer = setTimeout(()=>{
               const result = []
               for(let i in this.cities){
                    this.cities[i].map((value)=>{
                        if(value.spell.indexOf(this.keyWord) > -1 || 
                        value.name.indexOf(this.keyWord) > -1){
                           result.push(value)
                        }
                    })
                }
                this.list = result
           },100)
           
       } 
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.searchList)
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
    .search-list
        position absolute
        top 1.02rem
        left 0
        right 0 
        bottom 0 
        background #fff
        z-index 1
        overflow hidden
        .search-item  
            line-height .44rem
            border-bottom 1px solid #ccc    
            text-indent .2rem
</style>
