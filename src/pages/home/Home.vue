<template>
    <div class="home">
        <Header></Header>
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
import { mapState } from 'vuex'
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
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
      getHomeInfo(){
        axios.get('/api/index.json?city=' +this.city )
        .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res = res.data
        if(res.ret && res.data){
          this.swiperList = res.data.swiperList
          this.iconList = res.data.iconList
          this.recommendList = res.data.recommendList
          this.weekendList = res.data.weekendList
        }
      }
    },
    mounted () {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }

}
</script>
<style>

</style>
