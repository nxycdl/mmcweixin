<template>
  <div class="bg">

    <div class="avatar">
      <img :src=weixinUserInfo.headimgurl width="60px" height="60px" style="border-radius:50%">
    </div>

    <div class="info">
      <div>
        <icon name="user-circle" style="line-height: 1.6;margin-top: 4px" color="#fff" class="alert"
              scale="1"></icon>
        <span>{{weixinUserInfo.nickname}}</span>
      </div>
      <div class="tel">
        <icon name="tablet" style="line-height: 1.6;margin-top: 4px" color="#fff" class="alert"
              scale="1"></icon>
        <span>13895652926</span>
      </div>
    </div>
    <!--<div class="left" @click="gotoSetting">
      <icon name="angle-right"></icon>
    </div>-->
  </div>
</template>

<script>
  import 'vue-awesome/icons/flag';
  import 'vue-awesome/icons';
  import Icon from 'vue-awesome/components/Icon';
  export default {
    props: {
      weixinUserInfo: {
        type: Object
      },
      color: {
        type: String
      }
    },
    data() {
      return {};
    },
    created() {
      console.log(this.weixinUserInfo);
    },
    components: {
      Icon
    },
    methods: {
      gotoSetting() {
        alert('x');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .bg {
    background-color: #0398ff;
    display: flex;
  }

  .avatar {
    width: 60px;
    height: 60px;
    margin-left: 10px;

  / / background-color: red;
  / / background-image: url("http://dummyimage.com/100X100/f279d4)");
  }

  .info {
    margin-top: 5px;
    margin-left: 5px;
    flex: 1
  }

  .left {
    width: 16px;
    margin-top: 16px;
  }
</style>
