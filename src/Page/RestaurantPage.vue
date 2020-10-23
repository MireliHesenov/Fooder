<template>
  <div class="container">
    <div class="header" :style="{background:'url('+restaurant.restaurant_photo+')top/cover '}">
      <router-link tag="div" class="back-btn" to="/promopage">
        <i class="fas fa-arrow-left"></i>
      </router-link>
      <div class="like-btn">
        <i class="fas fa-heart"></i>
      </div>

      <div class="restaurant-detail" >
        <h1>{{restaurant.restaurant_name}}</h1>
        <span>{{restaurant.restaurant_address}}</span>
        <p>Open <span>8 am - 8 pm</span></p>
        <div class="info">
          <div class="distance">
            <i class="fas fa-location"></i>
            <span>1 km</span>
          </div>
          <div class="rating">
            <i class="fas fa-star"></i>
            <span>{{restaurant.restaurant_rating}}</span>
          </div>

          <div class="status">
            <i class="fas fa-verified"></i>
            <span>Verified</span>
          </div>
        </div>
      </div>

    </div>
         <ul class="nav">
            <li> <a href="#" class="active">Menu items</a>
            </li>
            <li>
                <a href="#">Reviews</a>
            </li>
            <li>
                <a href="#">Info</a>
            </li>
        </ul>
        <ul class="food-list">
            <meal
            v-for="(meal,index) in restaurant.restaurant_menu"
            :key="index"
            :meal="meal"
            ></meal>
        </ul>
        <checkoutBtn></checkoutBtn>
  </div>
</template>
<script>
import meal from '../Component/meal'
import checkoutBtn from '../Component/checkoutBtn'
import ApiService from '../services/ApiService'
export default {
    components:{
        meal,
        checkoutBtn
    },
    data:function(){
        return{
            restaurant:{}
        }
    },
    created(){
        ApiService.findRestaurant(this.$route.params.id)
        .then(response =>{
            this.$data.restaurant = response.data[0]
            console.log(this.$data.restaurant)
        })
        .catch(error => console.error())
    }
};
</script>
<style lang="scss" scoped>
$brand-primary: #e84c4f;
$brand-secondary: #eda345;
$brand-tertiary: #645daf;
$text-primary: #3e4462;
$text-secondary: #7e7e7e;
$text-tertiary: #cacaca;
$background: #f8f5f2;
.container {
    background: $background;
  .header {
    width: 100%;
    height: 23.5em;
    padding: 1em;
    position: relative;
    %btn {
      display: inline-flex;
      width: 2em;
      height: 2em;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 0.25em 0.25em rgba($color: #000000, $alpha: 0.3);
      justify-content: center;
      align-items: center;
      i {
        color: $brand-primary;
      }
    }
    .back-btn {
      @extend %btn;
    }
    .like-btn {
      @extend %btn;
      float: right;
    }
    .restaurant-detail {
      width: 90% ;
      background: #fff;
      position: absolute;
      padding: 1.5em 0;
      border-radius: 0.5em;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 66.6%);
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
    font-weight: 500;
    font-size: 1.125em;
    line-height: 1.25em;
    color: $text-primary;
    letter-spacing: -0.24px;
    }
    span {
    font-size: 1em;
    line-height: 1.25em;
    color: $text-secondary;
    letter-spacing: -0.24px;
    margin-top: 0.5em;

    }
     p:not( :last-child) {
    font-size: 0.875em;
    color: $text-primary;
    margin-top: 0.5em;
    }
    .info {
    display: flex;
    margin-top: 1.5em;
    }
    }
  }
  .nav {
    margin-top: 8.5em ;
    display: flex;
    padding: 2.5em 5%;
    justify-content: space-between;
    list-style-type: none;
    background: #fff;
    
     li a {
    font-weight: 500;
    font-size: 1.125em;
    line-height: 1.25em;
    color: $text-secondary;
    position: relative;
    text-decoration: none ;
    &.active::after {
    content: '';
    width: 2.5em;
    height: 0.25em;
    background: #E84C4F;
    border-radius: 1.25em;
    position: absolute;
    top: 1.5em;
    left: 50%;
    transform: translateX(-50%);
}
}
}
.food-list{
    padding: 1.5em 1em 5.7em;
     > :not(:first-child) {
      margin-top: 2em;
    }
}
}
</style>
