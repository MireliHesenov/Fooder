<template>
  <div
    class="menu"
    :style="{
      background: ' url(' + menu.menu_photo + ') no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <div class="circle" @click="like(menu)">
      <i class="fas fa-heart"></i>
    </div>
    <div class="menu-detail">
      <h3>{{ menu.menu_name }}</h3>
      <p>{{ menu.menu_desc }}</p>
      <span class="new-price">{{ menu.menu_price }} AZN</span>
      <span class="stock">10 left</span>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  props: ["menu"],

  methods:{
    ...mapMutations(['like'])
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
.menu {
  width: 18.75em;
  height: 20.25em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  margin-left: 1rem;
  background-size: cover;
  .circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #fff;
    color: $brand-primary;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    box-shadow: 0 0.25em 0.25em rgba($color: #000000, $alpha: .3);
  }
  .menu-detail {
    width: 16.625em;
    height: 6.25em;
    padding: 1em 0.5em 1em 1em;
    background: #fff;
    margin-top: auto;
    border-radius: 0.5em;
    position: relative;
    box-shadow: 0 0.25em 0.25em rgba($color: #000000, $alpha: .2);

    h3 {
      color: $text-primary;
      font-size: 1em;
      line-height: 1.4em;
      font-weight: 500;
      letter-spacing: -0.24px;
    }
    p {
      max-height: 2.5em;
      overflow: hidden;
      margin: 0.25em 0;
      font-size: 0.75em;
      color: $text-secondary;
      line-height: 1.4em;
      letter-spacing: -0.24px;
    }
    span.new-price {
      color: $text-primary;
      font-weight: 500;
      font-size: 0.875em;
      line-height: 1.25em;
      letter-spacing: -0.24px;
    }
    span.old-price {
      color: $text-tertiary;
      font-weight: 400;
      font-size: 0.75em;
      line-height: 1.25em;
      letter-spacing: -0.24px;
      margin-left: 0.75em;
    }
    span.stock {
      width: 3em;
      height: 1.75em;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $brand-secondary;
      color: #fff;
      border-radius: 0.25em;
      position: absolute;
      right: 0.5em;
      bottom: 0.5em;
      font-size: 0.75em;
      font-weight: 400;
      letter-spacing: -0.24px;
    }
  }
}
</style>