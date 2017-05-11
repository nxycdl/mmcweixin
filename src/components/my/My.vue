<template>
  <div>
    <!--<XHeader :left-options={showBack:false} style="background-color: #0398ff" title="我的"></XHeader>-->
    <MyHeader :weixinUserInfo="weixinUserInfo" color="red"></MyHeader>
    <Group>
      <cell title="我的信息" is-link :link="{path: '/myinfo'}"></cell>
      <cell title="我的消息" value="未读消息" is-link :link="{path:'/mettingList'}">
        <badge text="8"></badge>
      </cell>
      <cell title="我的会议" value="未读消息" is-link :link="{path:'/mettingList'}">
        <badge text="8"></badge>
      </cell>
      <cell title="修改密码" is-link></cell>
    </Group>
    <x-button type="primary" action-type="button" @click.native="logout" style="background-color: #0398ff">退出</x-button>
  </div>
</template>

<script>
  import MyHeader from '../../components/my/MyHeader.vue';
  import {
    XHeader,
    XButton,
    Group,
    Cell,
    Badge
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
      MyHeader,
      XButton,
      Group,
      Cell,
      Badge
    },
    created() {
      this.reSetTitleUtil.reSetTitle('我的');
      let weixinUserInfo = window.JSON.parse(localStorage.getItem('weixinUserInfo'));
      console.log('my getItem ', weixinUserInfo);
      // weixinUserInfo = window.JSON.parse(weixinUserInfo);
      this.weixinUserInfo = weixinUserInfo;
    },
    methods: {
      logout() {
        console.log('这里实现退出的操作');
      }
    }
  };
</script>

<style lang="less">

</style>
