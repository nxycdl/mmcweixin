<template>
  <div>
    <Swiper direction="horizontal"
            :list="imageList"
            auto
            style="width: 100%;margin:0 auto;"
            height="180px"
            dots-position="center"
    />
  </div>
</template>

<script>
  import {Swiper} from 'vux';
  import banner01 from '../../assets/images/banner/banner01.png';
  import banner02 from '../../assets/images/banner/banner02.png';
  import banner03 from '../../assets/images/banner/banner03.png';
  let list = [banner01, banner02, banner03];
  const imageList = list.map((one, index) => ({
    url: 'javascript:',
    img: one
  }));
  console.log(imageList);
  export default {
    data() {
      return {
        imageList
      };
    },
    components: {
      Swiper
    }
  };
</script>

<style>
</style>
