<template>
  <div class="container">
    <header>
      <div class="header-top">
        <router-link tag="i" class="fas fa-arrow-left" to="/"></router-link>
        <h1>Today's Promo</h1>
      </div>
      <div class="filters">
        <div class="filter active">
          <i class="fas fa-filter"></i><span>Filters</span>
        </div>
        <div class="filter">
          <i class="fas fa-location-arrow"></i> <span>Nearby</span>
        </div>
        <div class="filter">
          <i class="far fa-star"></i><span>Above 4.5</span>
        </div>
        <div class="filter"><i class="fas fa-tag"></i><span>Cheap</span></div>
      </div>
    </header>
    <main>
      <menuList 
      v-for="(restaurant,index) in restaurants"
      :key="index"
      :restaurant="restaurant" ></menuList>
    </main>
    <checkoutBtn></checkoutBtn>
  </div>
</template>

<script>
import ApiService from '../services/ApiService';
import checkoutBtn from '../Component/checkoutBtn'
import menuList from "../Component/mealList";
export default {
  components: {
    menuList,
    checkoutBtn
  },
  data(){
    return{
    restaurants:[],
    }
  },
  created(){
    ApiService.getRestaturants()
    .then(response =>{
      this.$data.restaurants = response.data
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
  header {
    background: #fff;
    padding: 0 1rem;

    .header-top {
      padding: 1em 0;
      position: relative;
      i {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        font-size: 1.5em;
        color: $brand-primary;
      }
      h1 {
        text-align: center;
        color: $text-primary;
        font-size: 1.5em;
        line-height: 1.625em;
        font-weight: 500;
        letter-spacing: -0.24px;
      }
    }
    .filters {
      display: flex;
      justify-content: space-between;
      padding-bottom: 1em;
      .filter {
        width: 25%;
        max-width: 6em;
        height: 2.5em;
        padding: 0.5em 0 0.5em 0;
        display: flex;
        justify-content: space-around;
        border-radius: 0.25em;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        align-items: center;
        &.active {
          background: $brand-primary;
          i,
          span {
            color: #fff;
          }
        }
        i {
          color: $brand-primary;
        }
        span {
          color: $text-primary;
          font-size: 0.75em;
          letter-spacing: -0.24px;
        }
      }
    }
  }
  main {
    background: $background;
    padding: 1.5em 1em;
  }
}
</style>