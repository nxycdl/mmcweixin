<template>
  <div>
    <div class="header">
      <div class="leftIcon" v-show="leftIconPro?leftIconPro.showleftIcon:false" style="line-height: 1.6">
        <icon name="beer" scale="1" :style="leftIconStyle"></icon>
      </div>
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="rightIcon" v-show="leftIconPro?leftIconPro.showleftIcon:false">
        <icon name="beer"></icon>
      </div>
    </div>
    <Divider></Divider>
    <div class="subtext">
      <div class="author" :style="authorStyle">
        <span>{{author}}</span>
      </div>
      <div class="time" :style="timeStyle">
        <span>{{time}}</span>
      </div>
    </div>
    <div class="itemfooter">
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/flag';
  import 'vue-awesome/icons';
  import Icon from 'vue-awesome/components/Icon';
  import {Divider} from 'vux';
  export default {
    props: {
      title: {
        type: String
      },
      author: {
        type: String
      },
      authorStyle: {
        type: Object
      },
      timeStyle: {
        type: Object
      },
      time: {
        type: String
      },
      leftIconPro: {
        type: Object
      },
      rightIconPro: {
        type: Object
      }
    },
    data() {
      return {
        leftIconStyle: {
          color: 'red',
          lineHeight: 1.6
        }
      };
    },
    components: {
      Icon,
      Divider
    }
  };
</script>

<style>
  @import "item.styl";
</style>
