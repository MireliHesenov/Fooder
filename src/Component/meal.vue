<template>
  <div class="meal">
    <div class="meal-info">
      <div class="meal-img">
        <img :src="meal.menu_photo" alt="" />
        <span>5 left</span>
      </div>

      <div class="content">
        <p>{{meal.menu_name}}</p>
        <span class="new-price">{{meal.menu_price}} AZN</span>
      </div>
      <div class="like-btn">
        <i class="fas fa-heart"></i>
      </div>
      <div class="order-btn">
        <div class="add-btn" v-if="count==0" @click="increase">+ Add</div>
        <div class="order-btn-group" v-if="count > 0">
          <div class="minus-btn" @click="decrease">-</div>
          <div class="count-screen">{{count}}</div>
          <div class="add-btn2" @click="increase">+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'; 
export default {
  props:['meal'],
  data : function(){
    return{
      count : 0
    }
  },
  methods:{
    
    increase(){
      this.count ++ ;
      this.$store.dispatch("addOrder", this.$props.meal.menu_price)
    },
    decrease(){
      this.count -- ;
      this.$store.dispatch("removeOrder", this.$props.meal.menu_price)
    }
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
.meal {
  position: relative;
  min-height: 7.875rem;
  .meal-info {
    display: flex;
    .meal-img {
      position: relative;
      height: 5.125em;
      width: 4.5em;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.25em ;
      }
      span {
        width: 3em;
        height: 1.75em;
        background: $brand-secondary;
        border: 2px solid #fff;
        border-radius: 0.25em;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 0.75em;
        font-weight: 400;
        letter-spacing: -0.24px;
      }
    }
    .content {
      margin-left: 1.5em;
      p {
        color: $text-primary;
        font-size: 1em;
        font-weight: 500;
        letter-spacing: -0.24px;
        margin-bottom: 0.5em;
      }
      span {
        font-size: 0.875em;
        font-weight: 500;
        line-height: 1.25em;
        letter-spacing: -0.24px;
      }
      .new-price {
        color: $text-secondary;
      }
      .old-price {
        color: $text-tertiary;
        margin-left: 0.75em;
      }
    }
  }
  .like-btn {
    position: absolute;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    box-shadow: 0 0.25em 0.25em rgba($color: #000000, $alpha: 0.25);
    i {
      color: $brand-primary;
    }
  }
  .order-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    .add-btn {
      background: $brand-primary;
      color: #fff;
      width: 5.125em;
      height: 2.25em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.25em;
    }
    .order-btn-group {
      display: flex;
      width: 6.75em;
      %btn {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 2.25em;
        height: 2.25em;
        border-radius: 0.25em;
        color: #fff;
        font-size: 1em;
      }
      .minus-btn {
        @extend %btn;
        background: #e1e1e1;
      }
      .count-screen {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $background;
        color: $text-primary;
        font-size: 0.75em;
      }
      .add-btn2 {
        @extend %btn;
        background: $brand-primary;
      }
    }
  }
}
</style>