<template>
  <div>
    <XHeader :left-options={showBack:false} :title="title"></XHeader>
    <router-view></router-view>
    <group>
      <cell title="一号林地" value="已绘制" is-link></cell>
      <Split/>
      <cell-box is-link>
        二号林地







      </cell-box>
      <Split/>
      <cell-box is-link>
        三号林地







      </cell-box>
      <Split/>
      <cell-box is-link>
        四号林地







      </cell-box>
      <Split/>
      <cell-box is-link link="https://vux.li">
        五号林地







      </cell-box>
      <Split/>
      <cell-box title="七号林地" is-link :link="{path: '/landdetail',params: '{userId: 1}'}">
        六号林地







      </cell-box>
      <Split/>
      <cell title="七号林地" is-link link="/landdetail?id=8">
        <img slot="icon" width="20" style="display:block;margin-right:5px;"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
    </group>

  </div>
</template>

<script>
  import {Divider, XHeader, Group, Cell, CellBox} from 'vux';
  import Split from '../split/Split.vue';
  export default {
    data() {
      return {
        title: '林地信息'
      };
    },
    components: {
      Divider,
      XHeader,
      Group,
      Cell,
      CellBox,
      Split
    },
    methods: {
      gotoLandDetail(_id) {
        console.log(_id);
        let params = {id: _id};
        this.$router.push({path: '/land/landdetail', params: params});
      },
      test() {
        console.log('xxxx');
      }
    }
  }
  ;
</script>

<style>
</style>
