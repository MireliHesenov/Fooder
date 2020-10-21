<template>
  <div id="app">
    <homePage></homePage>
  </div>
</template>

<script>
import homePage from './Page/HomePage'
export default {
  components:{
    homePage
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
$brand-primary:#E84C4F;
$brand-secondary:#EDA345;
$brand-tertiary:#645DAF;
$text-primary:#3E4462;
$text-secondary:#7E7E7E;
$text-tertiary:#CACACA;
$background:#F8F5F2;

*{
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
  font-size: 16px;
  
}



</style>
