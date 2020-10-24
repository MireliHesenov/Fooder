<template>
    <div class="favorites">
     <div class="header">
         
             <router-link
              tag="i"
              class="fas fa-arrow-left"
              to="/"></router-link>
             <h3>My Favorites</h3>
     </div>
        <ul class="favorites-list">
            <span v-if="favorites == '' "> Haven't any favorite meal </span>
            <meal
            v-for="(favorite,index) in favorites"
            :key="index"
             :meal="favorite">
             <i class="fas fa-trash-alt" @click="removeFavorite(favorite)"></i>
             </meal>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import meal from '../Component/meal';
export default {
    components:{
        meal
    },
    computed:{
        ...mapGetters(['favorites'])
    },
    methods:{
        ...mapMutations(['removeFavorite'])
    }
}
</script>

<style lang="scss" scoped>
$brand-primary: #e84c4f;
$brand-secondary: #eda345;
$brand-tertiary: #645daf;
$text-primary: #3e4462;
$text-secondary: #7e7e7e;
$text-tertiary: #cacaca;
$background: #f8f5f2;
    .favorites{
        background: $background;
        height: 100%;
        .header{
            position: relative;
            padding: 2em 1em;
            i{
                color: $brand-primary;
            }
            h3{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                color: $text-primary;
                font-size: 1.25em;
                font-weight: 500;
            }
        }
        .favorites-list{
            height: 100%;
            padding: 1em;
            &>:not(:first-child){
                margin-top: 1em;
            }
        }
    }
</style>