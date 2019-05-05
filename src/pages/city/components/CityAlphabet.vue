<template>
    <div class="city-alphabet">
        <ul class="alphabetList">
            <li v-for="(item,key) of cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ["cities"]
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .city-alphabet
        position relative
        .alphabetList
            position absolute
            right .05rem
            top 1rem
            li
                width .28rem
                line-height .28rem
                text-align center
                color $bgColor
</style>
