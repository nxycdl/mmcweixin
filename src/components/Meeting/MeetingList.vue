<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">即将开始</tab-item>
      <tab-item @on-item-click="onItemClick">已完成会议</tab-item>

    </tab>
  </div>
</template>

<script>
  import {Tab, TabItem} from 'vux';
  export default {
    data() {
      return {
        title: '我的会议'
      };
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index);
      }
    },
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
    },
    components: {
      Tab,
      TabItem
    }
  };
</script>

<style>
</style>
