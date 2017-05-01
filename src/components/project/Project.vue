<template>
  <div>
    <XHeader :left-options={showBack:false} style="background-color: #0398ff" title="项目"></XHeader>
    <scroller lock-x height="-90" ref="scrollerBottom"
              :scroll-bottom-offst="200">
      <div class="box2">
        <Item v-for="(data,index) in projectList" key="index" :title="data.title" :time="data.date"
              :author="data.fzr" :authorStyle="{color:'#AEB1FF'}" @click.native="gotoDetail(index)"
              ></Item>
      </div>
    </Scroller>
  </div>
</template>

<script>
  import projectList from '../../../projectList.json';
  import Item from '../../components/item/Item.vue';
  import {
    XHeader, Scroller, CellFormPreview, Group, Cell
  } from 'vux';
  export default {
    data() {
      return {
        projectList
      };
    },
    components: {
      XHeader,
      Scroller,
      CellFormPreview,
      Group,
      Cell,
      Item
    },
    methods: {
      gotoDetail(id) {
        console.log(id);
        console.log(this.$route);
        this.$router.push({path: '/projectDetail', query: {id: id}});
      }
    }
  };
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
