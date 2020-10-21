<template>
    <li class="category">
        <a href="">
            <i :class="icons[category]" ></i>
        </a>

        <span>{{category}}</span>
    </li>
</template>
<script>
export default {
    props:['category'],
    data:function(){
        return{
            icons:{
                'Favorite': 'fas fa-heart',
                'Cheap':'fas fa-tag',
                'Trend':'fas fa-chart-line',
                'More':'fas fa-bars'
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>
$text-secondary:#7E7E7E;
$brand-primary:#E84C4F;
    .category{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        a{
            width: 4.625em ;
            height: 4.625em;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius:0.5em; 
            text-decoration-style: none !important;
            color: $brand-primary;        
            }
        span{
            margin-top: 0.5em;
            font-size: 0.875em;
            line-height: 1.25em;
            letter-spacing: -0.24px;
            color: $text-secondary;
        }   
    }
</style>