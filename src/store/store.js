import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {favorites} from './modules/favorites'
import {setOrder} from './modules/setOrder'
Vue.use(Vuex);


export const store = new Vuex.Store({
    modules:{
        favorites,
        setOrder
    },

    plugins:[createPersistedState({
        paths:['favorites']
    })]
   


})