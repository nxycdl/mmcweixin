<template>
  <div>
    <!--<XHeader :left-options={showBack:false} :title="title"></XHeader>-->
    <scroller lock-x height="-100" @on-scroll="onScroll" ref="scrollerEvent">
      <group>
        <!--<cell title="一号林地" is-link></cell>-->
        <div v-for="list in mianList" is-link>
          <cell-box is-link :link="{path: '/landdetail',query: {id: list.id} }">{{list.name}}
          </cell-box>
          <Split/>
        </div>
      </group>
    </scroller>

  </div>
</template>

<script>
  import {Divider, XHeader, Group, Cell, CellBox, Scroller} from 'vux';
  import Split from '../split/Split.vue';
  export default {
    data() {
      return {
        title: '林地信息',
        mianList: [{name: '一号林地', id: '1'},
          {name: '二号林地', id: '2'},
          {name: '三号林地', id: '3'},
          {name: '四号林地', id: '4'},
          {name: '五号林地', id: '5'},
          {name: '六号林地', id: '6'},
          {name: '七号林地', id: '7'},
          {name: '八号林地', id: '8'}]
      }
        ;
    },
    components: {
      Divider,
      XHeader,
      Group,
      Cell,
      CellBox,
      Split,
      Scroller
    },
    methods: {
      gotoLandDetail(_id) {
        console.log(_id);
        let params = {id: _id};
        this.$router.push({path: '/land/landdetail', params: params});
      },
      test() {
        console.log('xxxx');
      },
      onScroll (pos) {
        this.scrollTop = pos.top;
      }
    },
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
    }
  }
  ;
</script>

<style>
</style>
