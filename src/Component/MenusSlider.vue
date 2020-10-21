<template>
    <div class="menus">
        <menuEl v-for="(menu,index) in menus" :key="index" :menu="menu"></menuEl>
    </div>
</template>

<script>
import menuEl from './menu'
export default {
    components:{
        menuEl 
    },
    data : function(){
        return{
           menus : []
        }
    },
    created(){
        console.log(this.$data)
        this.$store.state.restaurants.forEach(element => {
            console.log(element.restaurant_menu)
            console.log(this.$data)
            this.$data.menus = element.restaurant_menu
            
        });
    }
}
</script>

<style lang="scss" scoped>
    .menus{
        display:flex;
        overflow: scroll;
        padding:4em 0;
    }
</style>