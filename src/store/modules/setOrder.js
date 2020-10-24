export const setOrder = {
    state:()=>({
        totalOrderItem:0,
        totalOrderAmount:0
    }),
    getters:{
        totalOrderItem(state){
            return state.totalOrderItem
        },
        totalOrderAmount(state){
            return state.totalOrderAmount
        }
    },
    mutations:{
        increment(state,price){
            state.totalOrderItem ++;
            state.totalOrderAmount +=price
            console.log(state.totalOrderAmount);
        },
        decrement(state,price){
           state.totalOrderItem --;
           state.totalOrderAmount -=price
       }
    },
    actions:{
        addOrder({commit},price){
            commit('increment',price)
        },
        removeOrder({commit},price){
            commit('decrement',price)
        }
    }
}