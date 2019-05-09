<template>
    <div class="detail-list">
        <div  v-for="(item,index) of list" :key="index">
            <div class="list-item">
                <span class="mp-ticketype-ticket"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>
<style lang="stylus" scoped>
    .list-item
        line-height .5rem
        border-bottom 1px solid #eee
        position relative
        text-indent .6rem
        .mp-ticketype-ticket
            display: inline-block;
            position absolute
            width: .36rem;
            height: .36rem;
            top .08rem 
            left 0.2rem
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem
    .item-children
        padding 0 .2rem
</style>
