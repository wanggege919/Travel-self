<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <DetailHeader></DetailHeader>
        <DetailList :list = 'list'></DetailList>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name: 'Banner',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    data () {
        return {
            list: [{
                title: '成人票',
                children: [{
                    title: '成人三馆联票',
                    children: [{
                        title: '成人三馆联票 - 清明上河园'
                    }]
                },{
                    title: '成人五馆联票'
                },]
            },{
                title: '学生票'
            },{
                title: '儿童票'
            },{
                title: '特惠票'
            },]
        }
    },
}
</script>
<style lang="stylus" scoped>
    .content
        height 50rem
</style>
