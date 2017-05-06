<template>
  <div>
    <XHeader :left-options={showBack:false} style="background-color: #0398ff" title="我的"></XHeader>
    <MyHeader :avatar="avatar" :id="avatar" :name="avatar" color="red"></MyHeader>
  </div>
</template>

<script>
  import MyHeader from '../../components/my/MyHeader.vue';
  import Mock from 'mockjs';
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
        avatar: '',
        avatarbgimage: {
          backgroundImage: 'http://dummyimage.com/100X100/f279d4)'
        }
      };
    },
    components: {
      XHeader,
      MyHeader
    },
    created() {
      this.$http.post('http://rapapi.org/mockjs/16792/api/changeAvatar').then((response) => {
        this.$nextTick(function () {
          this.avatar = (Mock.mock(response)).data.result[0].uri;
          console.log(this.avatar);
          console.log('y');
        });
      });
    }
  };
</script>

<style>
</style>
