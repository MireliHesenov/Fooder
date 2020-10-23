<template>
    <div class="restaurant">
        <router-link tag="h2" to="/promopage">{{restaurant.restaurant_name}}</router-link>
        <router-link tag="span" to="/promopage">See all </router-link>
        <ul class="menus">
            <menuEl v-for="(menu,index) in menus" :key="index" :menu="menu"></menuEl>
        </ul>
        
    </div>
</template>

<script>
import ApiService from '../../services/ApiService';
import menuEl from './menu'
export default {
    props:['restaurant'],
    components:{
        menuEl 
    },
    data : function(){
        return{
           menus : this.$props.restaurant.restaurant_menu
        }
    },
    
}
</script>

<style lang="scss" scoped>
$brand-primary: #e84c4f;
$brand-secondary: #eda345;
$brand-tertiary: #645daf;
$text-primary: #3e4462;
.restaurant{
     .menus{
        display:flex;
        overflow: scroll;
        padding:1em 0 4em;
    }
    h2 {
      display: inline-block;
      font-size: 1.5rem;
      line-height: 1.625rem;
      color: $text-primary;
      font-weight: 500;
      padding-left: 1em;
      cursor: pointer;
    }
    h2 + span {
      float: right;
      vertical-align: middle;
      line-height: 1.625em;
      font-size: 0.875rem;
      color: $brand-secondary;
      padding-right: 1em;
      cursor: pointer;
    }
}
   
</style>