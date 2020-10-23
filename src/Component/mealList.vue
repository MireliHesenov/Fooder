<template>
  <div class="restaurant">
    <div class="restaurant-info">
      <router-link
      tag="h3"
      :to="{name:'restaurant' , params:{id:restaurant.restaurant_name }}">
      {{restaurant.restaurant_name}}
      </router-link>
      <span><i class="far fa-star"></i> {{restaurant.restaurant_rating}}</span>
      <div class="address">
        <span>{{restaurant.restaurant_address}}</span>
        <span>1km</span>
      </div>
      <hr />
    </div>
    <ul class="meal-list">
      <meal 
      v-for="(meal,index) in restaurant.restaurant_menu"
      :key="index"
      :meal="meal"></meal>
    </ul>
  </div>
</template>

<script>
import meal from "./meal";
export default {
  props:['restaurant'],
  components: {
    meal,
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
.restaurant {
  background: #ffff;
  padding: 1em 0.5em;
  border-radius: 0.5em;
  .restaurant-info {
    h3 {
      display: inline-block;
      color: $text-primary;
      font-size: 1.125em;
      line-height: 1.25em;
      font-weight: 500;
      letter-spacing: -0.24px;
    }
    h3 + span {
      float: right;
      font-size: 0.875em;
      font-weight: 400;
      line-height: 1.25em;
      letter-spacing: -0.24px;
      color: $text-primary;
      i {
        color: $brand-secondary;
        margin-right: 0.5em;
      }
    }
    .address {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5em;
      span {
        color: $text-secondary;
        font-size: 0.875em;
        font-weight: 400;
        line-height: 1.25em;
      }
    }
    hr {
      width: 100%;
      height: 0.25em;
      border-radius: 0.125em;
      background-color: #efeff2;
      margin-top: 1em;
    }
  }
  .meal-list {
    padding: 1em 0 4em;

    > :not(:first-child) {
      margin-top: 2em;
    }
  }
}
</style>