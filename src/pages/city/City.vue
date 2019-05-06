<template>
    <div class="city">
        <Header :cities = "cities"></Header>
        <CityList :hotCities = "hotCities" :cities = "cities"></CityList>
        <CityAlphabet :cities = "cities"></CityAlphabet>
    </div>
</template>
<script>
import Header from '@/pages/city/components/Header'
import CityList from '@/pages/city/components/CityList'
import CityAlphabet from '@/pages/city/components/CityAlphabet'
import axios from 'axios'
export default {
    name: 'City',
    components: {
        Header,
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
            console.log(res)
            this.hotCities = res.data.data.hotCities
            this.cities = res.data.data.cities
        })
    }
}
</script>
<style lang="stylus" scoped>

</style>
