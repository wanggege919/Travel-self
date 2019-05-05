<template>
    <div class="home">
        <Header :city = "city"></Header>
        <Swiper :swiperList = 'swiperList'></Swiper>
        <Icons :iconList = 'iconList'></Icons>
        <Recommend :recommendList = 'recommendList'></Recommend>
        <Weekend :weekendList = 'weekendList'></Weekend>
    </div>
</template>
<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
export default {
    components: {
        Header,
        Swiper,
        Icons,
        Recommend,
        Weekend
    },
    data () {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    mounted () {
        axios.get('/api/index.json').then((res)=>{
            this.city = res.data.data.city
            this.swiperList = res.data.data.swiperList
            this.iconList=res.data.data.iconList
            this.recommendList=res.data.data.recommendList
            this.weekendList=res.data.data.weekendList
        })
    }
}
</script>
<style>

</style>
