<template>
  <div>
    <!--<XHeader :left-options={showBack:true} style="background-color: #0398ff" title="项目详情"></XHeader>-->
    <scroller lock-x height="-26" ref="scrollerBottom"
              :scroll-bottom-offst="200">
      <div class="box2">
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
        <cell title="内容1" value="标题1" is-link></cell>
      </div>
    </Scroller>
  </div>
</template>

<script>
  import projectList from '../../../projectList.json';
  import Item from '../../components/item/Item.vue';
  import {
    XHeader, Scroller, Group, Cell
  } from 'vux';
  export default {
    data() {
      return {
        title: '项目详情',
        projectList,
        id: ''
      };
    },
    components: {
      XHeader,
      Scroller,
      Group,
      Cell,
      Item
    },
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
    }
  };
</script>

<style>
</style>
