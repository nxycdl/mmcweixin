<template>
  <div>
    <XHeader :left-options={showBack:false} :title="title"></XHeader>
    <MySwiper></MySwiper>
    <MyCaption title="最新消息" @click.native="gotoTop"></MyCaption>
    <div class="gototop" @click="gotoTop" v-show="scrollTop >330"/>
    <scroller lock-x height="-320" @on-scroll-bottom="onScrollBottom" @on-scroll="onscroll" ref="scrollerBottom"
              :scroll-bottom-offst="200">
      <div class="box2">
        <Item v-for="(data,index) in list" key="index" :title="data.title"></Item>
      </div>
    </Scroller>


  </div>
</template>

<script>
  import MySwiper from '../../components/swiper/MySwiper.vue';
  import MyHeader from '../../components/header/MyHeader.vue';
  import Item from '../../components/item/Item.vue';
  import Icon from 'vue-awesome/components/Icon';
  import {Divider, XHeader, Scroller} from 'vux';
  import MyCaption from '../caption/MyCaption.vue';
  import homeData from '../../../data.json';
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
