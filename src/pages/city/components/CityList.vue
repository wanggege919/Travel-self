<template>
    <div class="city-list wrapper" ref="wrapper" >
        <div>
            <div class="area">
                <div class="title">您的位置</div>
                <ul>
                    <li>{{ this.currentCity }}</li>
                </ul>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <ul>
                    <li
                    v-for="item of hotCities" 
                    :key="item.id"
                    @click="handleCityChange(item.name)"
                    >
                        {{item.name}}
                    </li>
                    
                </ul>
            </div>
        
            <div class="area" v-for="(city,key) of cities" :key="key">
                <div class="title" :ref="key">{{key}}</div>
                <div class="list" 
                v-for="item of city" 
                :key="item.id"
                @click="handleCityChange(item.name)"
                >
                    <div>{{item.name}}</div>
                </div>
            </div>
        </div>
         
    </div>
</template>
<script>

import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        letter: String,
        
    },
    computed: {
        ...mapState({
            currentCity: 'city'//把state中的city属性值映射到该组件计算属性的currentCity上
        })
    },
    methods: {
        handleCityChange (city) {
            // this.$store.commit('cityChange',city)
            this.cityChange(city)
            this.$router.push('/')
        },
        ...mapMutations(['cityChange'])//把mutations中的cityChange方法映射到该组件cityChange方法上
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
        this.bus.$on('change',(location)=>{
            const element = this.$refs[location][0]
            // console.log(element)
            this.scroll.scrollToElement(element)
        }) 
        
    },
    
}
</script>
<style lang="stylus" scoped>
    .city-list
        position absolute
        top 1.02rem
        left 0
        right 0
        bottom 0
        overflow hidden
        .area
            .title
                line-height .44rem
                background #eee
                font-size .18rem
                text-indent .2rem
            ul
                display flex
                flex-wrap wrap
                padding .16rem .4rem .06rem .1rem
                li
                    border 1px solid #ccc
                    text-align center
                    padding .08rem .4rem
                    border-radius .05rem
                    margin-right .1rem
                    margin-bottom .1rem
            .list
                line-height .44rem
                text-indent .2rem
                border-bottom 1px solid #ccc         
</style>
