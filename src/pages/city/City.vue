<template>
    <div class="city">
        <CityHeader :cities = "cities"></CityHeader>
        <CityList :hotCities = "hotCities" :cities = "cities"></CityList>
        <CityAlphabet :cities = "cities"></CityAlphabet>
    </div>
</template>
<script>
import CityHeader from '@/pages/city/components/CityHeader'
import CityList from '@/pages/city/components/CityList'
import CityAlphabet from '@/pages/city/components/CityAlphabet'
import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader,
        CityList,
        CityAlphabet,
    },
    data () {
        return {
            hotCities: [],
            cities: {},
        }
    },
   
    created () {
        axios.get('/api/city.json').then((res)=>{
            this.hotCities = res.data.data.hotCities
            this.cities = res.data.data.cities
        })
    }
}
</script>
<style lang="stylus" scoped>

</style>
