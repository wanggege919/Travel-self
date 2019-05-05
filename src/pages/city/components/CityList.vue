<template>
    <div class="city-list">
        <div class="area">
            <div class="title">您的位置</div>
            <ul>
                <li>北京</li>
            </ul>
        </div>
        <div class="area">
            <div class="title">热门城市</div>
            <ul>
                <li v-for="item of hotCities" :key="item.id">
                    {{item.name}}
                </li>
                
            </ul>
        </div>
        <div class="area" v-for="(city,key) of cities" :key="key">
            <div class="title">{{key}}</div>
            <div class="list" v-for="item of city" :key="item.id">
                <div>{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object
    }
}
</script>
<style lang="stylus" scoped>
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
                padding .06rem .44rem
                border-radius .05rem
                margin-right .1rem
                margin-bottom .1rem
        .list
           line-height .44rem
           text-indent .2rem
           border-bottom 1px solid #ccc         
</style>
