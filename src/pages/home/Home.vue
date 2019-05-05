<template>
    <div class="home">
        <Header></Header>
        <Swiper></Swiper>
        <Icons></Icons>
        <Recommend></Recommend>
        <Weekend></Weekend>
    </div>
</template>
<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
export default {
    components: {
        Header,
        Swiper,
        Icons,
        Recommend,
        Weekend
    }
}
</script>
<style>

</style>
