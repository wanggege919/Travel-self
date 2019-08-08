<template>
    <div class="city-alphabet">
        <ul class="alphabetList">
            <li 
            v-for="item of letters" 
            :key="item"
            @touchstart.prevent = 'handleTouchStart'
            @touchmove = 'handleTouchMove'
            @touchend = 'handleTouchEnd'
            @click="handlelocation"
            :ref = "item"
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    props: ["cities"],
    data () {
        return {
            touchStatus: false,
            startY: 0
        }
    },
    computed: {
        letters () {
           const letters = []
           for(let key in this.cities){
               letters.push(key)
           } 
           return letters
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop //这样这个操作就不会重复执行啦，提高性能
    },
    methods: {
        handlelocation (e) {
            let location = e.currentTarget.innerText
            this.bus.$emit('change',location)
        },
        handleTouchStart (e) {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if(this.touchStatus){
                //通过添加计时器对函数进行节流，提高性能
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    //const startY = this.$refs['A'][0].offsetTop
                    const touchY = e.touches[0].clientY - 74
                    const index = Math.floor((touchY - this.startY) / 23)
                    if(index >= 0 && index <= this.letters.length){
                        this.bus.$emit('change',this.letters[index])
                    }
                },16)
                
                
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .city-alphabet
        .alphabetList
            position absolute
            right .05rem
            top 1rem
            bottom 0
            display flex
            flex-direction column
            justify-content center
            align-items center
            li
                width .28rem
                line-height .28rem
                text-align center
                color $bgColor
</style>
