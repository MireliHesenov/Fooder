<template>
    <footer>
    <div class="checkout-btn">
    <span>{{totalOrderItem}} item</span>
    <p>Checkout</p>
    <span>{{totalOrderAmount.toFixed(2)}} $</span>
    </div>
    </footer>
       
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    
    computed:{
        ...mapGetters(['totalOrderItem','totalOrderAmount'])
    }
}
</script>
<style lang="scss" scoped>
$brand-primary: #e84c4f;
footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1.125em 1em;
    background: #fff;
    .checkout-btn{
        width:100% ;
        height: 3.25em;
        padding: 1em;
        background: $brand-primary;
        color: #fff;
        display: flex;
        justify-content: space-between;
        border-radius: 0.25em;
    }
}
</style>