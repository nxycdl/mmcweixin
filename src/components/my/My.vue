<template>
  <div>
    <XHeader :left-options={showBack:false} style="background-color: #0398ff" title="我的"></XHeader>
    <MyHeader :weixinUserInfo="weixinUserInfo" color="red"></MyHeader>
  </div>
</template>

<script>
  import MyHeader from '../../components/my/MyHeader.vue';
  // import Mock from 'mockjs';
  import {
    XHeader
  } from 'vux';
  export default {
    props: {
      id: {
        type: String
      }
    },
    data() {
      return {
        avatar: 'http://dummyimage.com/100X100/f279d4)',
        avatarbgimage: {
          backgroundImage: 'http://dummyimage.com/100X100/f279d4)'
        },
        weixinUserInfo: {}
      };
    },
    components: {
      XHeader,
      MyHeader
    },
    created() {
      let weixinUserInfo = window.JSON.parse(localStorage.getItem('weixinUserInfo'));
      console.log('my getItem ', weixinUserInfo);
      weixinUserInfo = window.JSON.parse(weixinUserInfo);
      this.weixinUserInfo = weixinUserInfo;
    }
  };
</script>

<style>
</style>
