<template>
  <div class="bg">

    <div class="avatar" :style="{backgroundImage:'url(' + avatar+')'}">

    </div>

    <div class="info">
      <div>
        <span>{name}</span>
      </div>
      <div class="tel">
        <icon name="tablet" style="line-height: 1.6;margin-top: 4px" color="#fff" class="alert"
              scale="1"></icon>
        <span>13895652926</span>
      </div>
    </div>
    <div class="left" @click="gotoSetting">
      <icon name="angle-right"></icon>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/flag';
  import 'vue-awesome/icons';
  import Icon from 'vue-awesome/components/Icon';
  export default {
    props: {
      avatar: {
        type: String
      },
      avatarbgimage: {
        type: Object
      },
      color: {
        type: String
      },
      name: {
        type: String
      }
    },
    created() {
      console.log('avatar' + this.avatar);
      console.log('name' + this.name);
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
    border-radius: 50%;
  / / background-color: red;
  / / background-image: url("http://dummyimage.com/100X100/f279d4)");
  }

  .info {
    margin-left: 5px;
    flex: 1
  }

  .left {
    width: 16px;
    margin-top: 16px;
  }
</style>
