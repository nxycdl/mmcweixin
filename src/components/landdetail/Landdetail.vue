<template>
  <div>
    <!--<XHeader :left-options={showBack:true} :title="title"></XHeader>-->
    <router-view></router-view>
    <scroller lock-x height="-48" @on-scroll="onScroll" ref="scrollerEvent">
      <group>
        <cell title="地图" value='已绘制' is-link link="https://mmc.mys.tech">
          <img slot="icon" width="20" style="display:block;margin-right:5px;"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
        </cell>
        <cell title="林班号" :value=landinfo.BAA001></cell>
        <cell title="小班号" :value=landinfo.BAA002></cell>
        <cell title="村民组" :value=landinfo.BAA003></cell>
        <cell title="管理级别" :value=landinfo.BAA004></cell>
        <cell title="权属者名称" :value=landinfo.BAA005></cell>
        <cell title="单位性质" :value=landinfo.BAA006></cell>
        <cell title="保护等级" :value=landinfo.BAA007></cell>
        <cell title="小地名" :value=landinfo.BAA008></cell>
        <cell title="界定书号" :value=landinfo.BAA009></cell>
        <cell title="小班面积" :value=landinfo.BAA010></cell>
        <cell title="坡度" :value=landinfo.BAA011></cell>
        <cell title="海拔" :value=landinfo.BAA012></cell>
        <cell title="林地权属" :value=landinfo.BAA013></cell>
        <cell title="林地使用权" :value=landinfo.BAA014></cell>
        <cell title="林木权属" :value=landinfo.BAA015></cell>
        <cell title="林木使用权" :value=landinfo.BAA016></cell>
        <cell title="林权证号" :value=landinfo.BAA017></cell>
        <cell title="地类" :value=landinfo.BAA018></cell>
        <cell title="亚林种" :value=landinfo.BAA019></cell>
        <cell title="林龄" :value=landinfo.BAA020></cell>
        <cell title="起源" :value=landinfo.BAA021></cell>
        <cell title="树林组成" :value=landinfo.BAA022></cell>
        <cell title="平均数高" :value=landinfo.BAA023></cell>
        <cell title="龄组" :value=landinfo.BAA024></cell>
        <cell title="平均胸径" :value=landinfo.BAA025></cell>
        <cell title="郁闭度" :value=landinfo.BAA026></cell>
        <cell title="森林健康等级" :value=landinfo.BAA027></cell>
        <cell title="群落结构" :value=landinfo.BAA028></cell>
        <cell title="优势树种" :value=landinfo.BAA029></cell>
        <cell title="植被盖度" :value=landinfo.BAA030></cell>
        <cell title="每亩蓄积" :value=landinfo.BAA031></cell>
        <cell title="生态区位" :value=landinfo.BAA032></cell>
        <cell title="所属区位" :value=landinfo.BAA033></cell>
        <cell title="具体区位名称" :value=landinfo.BAA034></cell>
        <cell title="区位描述" :value=landinfo.BAA035></cell>
        <cell title="工程区" :value=landinfo.BAA036></cell>
        <cell title="荒漠化和沙化程度" :value=landinfo.BAA037></cell>
        <cell title="石漠化程度" :value=landinfo.BAA038></cell>
        <cell title="生态功能等级" :value=landinfo.BAA039></cell>
        <cell title="管护形式" :value=landinfo.BAA040></cell>
        <cell title="公里网络坐标X" :value=landinfo.BAA041></cell>
        <cell title="公里网络坐标Y" :value=landinfo.BAA042></cell>
        <cell title="补偿起始年度" :value="landinfo.BAA043"></cell>
        <Split></Split>
      </group>
    </scroller>
  </div>

</template>

<script>
  // import Item from '../../components/item/item';
  import {XHeader, Group, Cell, Scroller} from 'vux';
  import Split from '../split/Split.vue';
  export default {
    data() {
      return {
        id: 0,
        title: '林地信息',
        landinfo: {}
      };
    },
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
      console.log('这里根据后台请求ID=' + this.$route.query.id);
      this.landinfo = {
        'BAA001': '林班号21',
        'BAA002': '小班号1',
        'BAA003': '村民1组',
        'BAA004': '重点',
        'BAA005': '金沙林场',
        'BAA006': '国营',
        'BAA007': '三级',
        'BAA008': '金沙渠',
        'BAA009': '界定书号',
        'BAA010': '233平米',
        'BAA011': '5',
        'BAA012': '2331',
        'BAA013': '国有',
        'BAA014': '国有',
        'BAA015': '国有',
        'BAA016': '国有',
        'BAA017': '123456',
        'BAA018': '林地',
        'BAA019': '亚林种',
        'BAA020': '3年',
        'BAA021': '起源',
        'BAA022': '葡萄，杨树',
        'BAA023': '1.5',
        'BAA024': '2',
        'BAA025': '2',
        'BAA026': '郁闭度',
        'BAA027': '健康',
        'BAA028': '群落结构',
        'BAA029': '优势树种',
        'BAA030': '植被盖度',
        'BAA031': '每亩蓄积',
        'BAA032': '生态区位',
        'BAA033': '所属区位',
        'BAA034': '具体区位名称',
        'BAA035': '区位描述',
        'BAA036': '工程区',
        'BAA037': '荒漠化和沙化程度',
        'BAA038': '石漠化程度',
        'BAA039': '生态功能等级',
        'BAA040': '管护形式',
        'BAA041': '公里网络坐标X',
        'BAA042': '公里网络坐标Y',
        'BAA043': '补偿起始年度'
      };
    },
    components: {
      XHeader,
      Group,
      Cell,
      Scroller,
      Split
    },
    methods: {
      onScroll (pos) {
        this.scrollTop = pos.top;
      }
    }

  };
</script>

<style>
</style>
