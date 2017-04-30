<template>
  <div>
    <div class="add"></div>
    <tabbar style="position: fixed">
      <tabbar-item select link="/">
        <img class="add" src="../../assets/logo.png" alt="" slot="icon">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/land">
        <img class="add" src="../../assets/logo.png" alt="" slot="icon">
        <span slot="label">林地</span>
      </tabbar-item>
      <tabbar-item link="/project">
        <img class="add" src="../../assets/logo.png" alt="" slot="icon">
        <span slot="label">项目</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <img class="add" src="../../assets/logo.png" alt="" slot="icon">
        <span slot="label">我的1</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux';

  export default {
    name: 'Footer',
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      };
    }
  };
</script>

<style>
  @import "Myfooter.styl";
</style>
