<template>
    <div class="city">
        <Header></Header>
        <CityList :hotCities = "hotCities" :cities = "cities"></CityList>
    </div>
</template>
<script>
import Header from '@/pages/city/components/Header'
import CityList from '@/pages/city/components/CityList'
import axios from 'axios'
export default {
    name: 'City',
    components: {
        Header,
        CityList,
    },
    data () {
        return {
            hotCities: [],
            cities: {}
        }
    },
    created () {
        axios.get('/api/city.json').then((res)=>{
            console.log(res)
            this.hotCities = res.data.data.hotCities
            this.cities = res.data.data.cities
        })
    }
}
</script>
<style lang="stylus" scoped>

</style>
