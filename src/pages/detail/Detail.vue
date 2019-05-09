<template>
    <div class="detail">
        <detail-banner :detailData = "detailData"></detail-banner>
        <DetailHeader></DetailHeader>
        <DetailList :list = "list"></DetailList>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    data () {
        return {
            list: [],
            detailData: {}
        }
    },
    methods: {
        getInfo () {
            axios.get('/api/detail.json',{
                params: {
                    id: this.$route.params.id
                }
            })
            .then(this.getInfocc)
        },
        getInfocc (res) {
            res = res.data
            if(res.ret && res.data){
                this.detailData = res.data
                this.list = res.data.categoryList
            }
            
        }
    },
    created () {
        this.getInfo()
    }
}
</script>
<style lang="stylus" scoped>
    .content
        height 50rem
</style>
