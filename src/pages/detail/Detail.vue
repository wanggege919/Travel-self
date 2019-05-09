<template>
    <div>
        <detail-banner></detail-banner>
        <DetailHeader></DetailHeader>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
    name: 'Banner',
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>
<style lang="stylus" scoped>
    .content
        height 50rem
</style>
