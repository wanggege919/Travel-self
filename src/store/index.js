import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try {
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch (e) {}
export default new Vuex.Store({
    state: {
        city: defaultCity
    },
    // actions: {
    //     cityChange (ctx,city) {
    //         // console.log(city)
    //         ctx.commit('change',city)
    //     }
    // },
    mutations: {
        cityChange (state,city) {
            state.city = city
            try{
                localStorage.city = city
            }catch (e) {} 
        }
    }
})


