<template>
  <div>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text=toastText></toast>
    <!--<XHeader :left-options={showBack:true} style="background-color: #0398ff" title="项目详情"></XHeader>-->
    <scroller lock-x height="-53" ref="scrollerBottom"
              :scroll-bottom-offst="200">
      <div class="box2">

        <cell title="项目名称" :value=detail.AA01></cell>
        <cell title="建设内容" style="margin-right: 20px;" primary="content" value-align="right">
          <div slot="value">
            <span>{{detail.AA02}}</span>
          </div>
        </cell>

        <cell title="实施时间" :value=detail.AA03></cell>
        <cell title="施工单位" :value=detail.AA04></cell>
        <cell title="负责人" :value=detail.AA05></cell>
        <cell title="联系电话" :value=detail.AA06></cell>
        <cell title="投资余额">
          <div slot="value">
            <span style="color: green">{{detail.AA07}}</span>
          </div>
        </cell>
        <cell title="设计图纸" is-link @click.native="gotoMap(0)"></cell>
        <cell title="施工图纸" is-link @click.native="gotoMap(1)"></cell>
        <cell title="验收报告" is-link @click.native="gotoMap(2)"></cell>
        <cell title="监理单位" :value=detail.AA11></cell>
        <cell title="" ></cell>
      </div>

    </Scroller>
  </div>
</template>

<script>
  import projectList from '../../../projectList.json';
  import Item from '../../components/item/Item.vue';

  import {
    XHeader, Scroller, Group, Cell, Toast
  } from 'vux';
  export default {
    data() {
      return {
        title: '项目详情',
        projectList,
        id: '',
        detail: {
          AA01: '111',
          AA02: ''
        },
        showPositionValue: false,
        toastText: ''
      };
    },
    components: {
      XHeader,
      Scroller,
      Group,
      Cell,
      Item,
      Toast
    },
    methods: {
      query() {
        this.detail = {
          AA01: '葫芦岛高新区污水处理厂项目',
          AA02: '本工程起于滨海公路月亮河中桥北80米处，路线沿龙湾cbd规划区的规划道路向西北方向走行，之后路线从东窑村中间穿过，在东窑站西北山与东北山之间通过，路线在双树乡处修建跨线桥连续跨越国铁沈山铁路及国道京哈线，之后路线沿高新园区规划道路中线布设，由兴北村东北侧通过，与已建秦沈铁路葫芦岛北客站出口路顺势相接，垂直相交规划区内已建高新九路处为本项目路线方案终点。路线全长7.14km，设计标准一级公路，设计时速80km/h,路面宽度21.5m,路基宽度23m，总投资约3亿元。建设期为两年',
          AA03: '2016-8-30',
          AA04: '2017-10-10',
          AA05: '李主任',
          AA06: '024-89166460 ',
          AA07: '960万',
          AA08: '设计图纸',
          AA09: '施工图纸',
          AA10: '验收报告',
          AA11: '天地方圆监理公司'
        };
      },
      gotoMap(id) {
        console.log(id);
        this.showToast('系统升级中,请稍后再试');
      },
      showToast (toastText) {
        this.toastText = toastText;
        this.showPositionValue = true;
      }
    },
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
      this.query();
    }
  };
</script>

<style>
</style>
