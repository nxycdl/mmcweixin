<template>
  <div id="app">
    <router-view></router-view>
    <Myfooter/>
  </div>
</template>

<script>
  import Myfooter from './components/myfooter/Myfooter.vue';

  export default {
    name: 'app',
    data() {
      return {
        title: 'This is header'
      };
    },
    components: {
      Myfooter
    }
  };
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
