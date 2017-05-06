<template>
  <div>
    <XHeader :left-options={showBack:false} :title="title"></XHeader>
    <MySwiper></MySwiper>
    <div>{{$route.query.code}}</div>
    <div>{{$route.query.state}}</div>
    <MyCaption title="最新消息" @click.native="gotoTop"></MyCaption>
    <div class="gototop" @click="gotoTop" v-show="scrollTop >330"/>
    <scroller lock-x height="-320" @on-scroll-bottom="onScrollBottom" @on-scroll="onscroll" ref="scrollerBottom"
              :scroll-bottom-offst="200">
      <div class="box2">
        <Item v-for="(data,index) in list" key="index" :title="data.title" :time="data.date"
              :author="data.author"></Item>
      </div>
    </Scroller>


  </div>
</template>

<script>
  import MySwiper from '../../components/swiper/MySwiper.vue';
  import MyHeader from '../../components/header/MyHeader.vue';
  import Item from '../../components/item/Item.vue';
  import Icon from 'vue-awesome/components/Icon';
  import {Divider, XHeader, Scroller, AjaxPlugin} from 'vux';
  import MyCaption from '../caption/MyCaption.vue';
  import homeData from '../../../data.json';
  import {serverUrl, isDebug} from '../../config/config';
  export default {
    data() {
      return {
        image: '../../../../assets/logo.png',
        title: '银川苗木场欢迎您',
        list: homeData,
        onFetching: false,
        isShowTopDiv: false,
        scrollTop: 0
      };
    },
    created: function () {
      let inData = this.$route.query;
      if (inData.state === '123') {
        // 获取微信用户;
        let code = inData.code;
        console.log(code);
        console.log(serverUrl);
        let selfUrl = serverUrl + 'mmc/index/getWeiXinUserInfo';
        if (isDebug === true) {
          let weixinUserInfo = '{"openid":"oA3LhwEfavbAK-4NBYqFkTK2SE74","nickname":"dl123456","sex":1,"language":"zh_CN","city":"银川","province":"宁夏","country":"中国","headimgurl":"http://wx.qlogo.cn/mmopen/Q3auHgzwzM5zdy62JK9C21aRpHHuJug7Nia1UkiaMQzXDbTwn5Nxaich5Tas99HXEPrbuiaiaKnzoOHCictdxibFSh5gQ/0","privilege":[]}';
          localStorage.setItem('weixinUserInfo', window.JSON.stringify(weixinUserInfo));
        } else {
          AjaxPlugin.$http.post(selfUrl, {code: code}).then((response) => {
            if (response.status === 200 && response.data.success === true) {
              let weixinUserInfo = response.data.data;
              localStorage.setItem('weixinUserInfo', window.JSON.stringify(weixinUserInfo));
            }
          });
        }
      }
      ;
    },
    components: {
      MySwiper,
      MyHeader,
      Divider,
      XHeader,
      Item,
      Icon,
      MyCaption,
      Scroller
    },
    methods: {
      gotoTop() {
        console.log('gotoTop');
        this.$refs.scrollerBottom.reset({top: 0});
      },
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true;
          setTimeout(() => {
            // this.bottomCount += 10
            this.$nextTick(() => {
              // this.$refs.scrollerBottom.reset();
            });
            this.onFetching = false;
          }, 2000);
        }
      },
      onscroll(pos) {
        this.scrollTop = pos.top;
      }
    }
  }
  ;
</script>

<style>
  @import "Home.styl";
</style>
