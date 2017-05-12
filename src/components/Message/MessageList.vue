<template>
  <panel header="" :footer="footer" :list="list" type="2"></panel>
</template>

<script>
  import {Panel, Group, Radio} from 'vux';
  export default {
    data() {
      return {
        title: '我的消息',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '领取防暑费',
          desc: '请到3楼领取防暑费',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '五一放假通知',
          desc: '五一放假1天，请大家关好门窗，关闭电源！',
          url: {
            path: '/component/radio',
            replace: false
          }
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '领导视察',
          desc: '下午领导视察工作，请保持桌面整洁！',
          url: {
            path: '/component/radio',
            replace: false
          }
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '会议室占用通知',
          desc: '明天下午领导开会，请其他不要占用5楼会议室',
          url: {
            path: '/component/radio',
            replace: false
          }
        }],
        footer: {
          title: '查看更多',
          url: ''
        }
      };
    },
    components: {
      Panel,
      Group,
      Radio
    },
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
    }
  }
  ;
</script>

<style>
</style>
