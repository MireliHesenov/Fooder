<template>
  <div class="container">
    <header class="header page-wrap">
      <select name="" id="">
        <option value="">Jl . Jayakatwang no 301</option>
      </select>
      <div class="circle">
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1C5.23858 1 3 3.23858 3 6V8.94591C3 9.5754 2.59719 10.1343 2 10.3333C1.7014 10.4329 1.5 10.7123 1.5 11.027V11.7C1.5 11.98 1.5 12.12 1.5545 12.227C1.60243 12.3211 1.67892 12.3976 1.773 12.4455C1.87996 12.5 2.01997 12.5 2.3 12.5H13.7C13.98 12.5 14.12 12.5 14.227 12.4455C14.3211 12.3976 14.3976 12.3211 14.4455 12.227C14.5 12.12 14.5 11.98 14.5 11.7V11.027C14.5 10.7123 14.2986 10.4329 14 10.3333C13.4028 10.1343 13 9.5754 13 8.94591V6C13 3.23858 10.7614 1 8 1Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </header>
    <main>
      <div class="greeting page-wrap">
        <h1>Hello, Yahya</h1>
        <span>What do yo want to eat?</span>
      </div>

      <ul class="categories page-wrap">
        <category
          v-for="category in categories"
          :key="category"
          :category="category"
        >
        </category>
      </ul>
      
      <menuSlider 
      v-for="(restaurant,index) in restaurants"
      :key="index"
      :restaurant="restaurant"></menuSlider>
    </main>
    <footerEl></footerEl>
  </div>
</template>
<script>
import ApiService from '../services/ApiService'
import footerEl from "../Component/footer";
import menuSlider from "../Component/MenuSlider/MenusSlider";
import category from "../Component/category";
export default {
  components: {
    category,
    menuSlider,
    footerEl,
  },
  data: function () {
    return {
      categories: ["Favorite", "Cheap", "Trend", "More"],
      restaurants:[]
    }
  },
  created(){
      ApiService.getRestaturants()
      .then(response=>{
          this.$data.restaurants = response.data
      })
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

  .page-wrap {
    padding: 0 1em;
  }

  .header {
    padding-top: 2em;
    display: flex;
    justify-content: space-between;

    select {
      height: 2.25em;
      width: 14.875em;
      background: rgba($color: $brand-primary, $alpha: 0.08);
      color: $text-secondary;
      border-radius: 2.125em;
      outline: none;
    }
    .circle {
      width: 2em;
      height: 2em;
      border-radius: 50%;
      background: $brand-primary;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 0.625em;
        height: 0.625em;
        border-radius: 50%;
        background-color: $brand-secondary;
        border: 0.125em solid #fff;
        bottom: 0;
        right: 0;
        transform: translate(30%, 30%);
      }
    }
  }

  main {
    .greeting {
      padding-top: 1.5em;
      padding-bottom: 1.5rem;
      h1 {
        color: $text-primary;
        font-size: 1.75em;
        line-height: 2.375rem;
        letter-spacing: -0.24px;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      span {
        font-size: 1em;
        line-height: 1.25em;
        font-weight: 400;
        color: $text-secondary;
        letter-spacing: -0.24px;
      }
    }
    .categories {
      display: flex;
      justify-content: space-between;
      padding-bottom: 2em;
    }
    
  }
}
</style>