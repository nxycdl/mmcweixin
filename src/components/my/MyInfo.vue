<template>
  <div>
    <!--<XHeader :left-options={showBack:true} style="background-color: #0398ff" title="我的信息"></XHeader>-->
    <MyHeader :weixinUserInfo="weixinUserInfo" color="red"></MyHeader>
    <scroller lock-x height="-166" @on-scroll="onScroll" ref="scrollerEvent">
      <div class="box1">
        <Group>
          <cell title="姓名" :value=myInfo.name></cell>
          <cell title="性别" :value=myInfo.sex></cell>
          <cell title="身份证" :value=myInfo.sfzh></cell>
          <cell title="民族" :value=myInfo.mz></cell>
          <cell title="籍贯" :value=myInfo.jg></cell>
          <cell title="出生日期" :value=myInfo.csrq></cell>
          <cell title="参加工作时间" :value=myInfo.cjgzsj></cell>
          <cell title="进入本单位时间" :value=myInfo.jrbdwsj></cell>
          <cell title="入党时间" :value=myInfo.rdsj></cell>
          <cell title="个人身份" :value=myInfo.grsf></cell>
          <cell title="现任职务" :value=myInfo.xrzw></cell>
          <cell title="现任职务时间" :value=myInfo.xrzwsj></cell>
          <cell title="上任职务" :value=myInfo.srzw></cell>
          <cell title="上任职务时间" :value=myInfo.srzwsj></cell>
          <cell title="全日制学历" :value=myInfo.qrzxl></cell>
          <cell title="在职" :value=myInfo.zzxl></cell>
          <cell title="专业技术等级" :value=myInfo.zyjsdj></cell>
          <cell title="聘任时间" :value=myInfo.pzsj></cell>
          <cell title="手机号" :value=myInfo.mobile></cell>
          <cell title="联系电话" :value=myInfo.tel></cell>
          <cell title="备注" :value=myInfo.bz></cell>
        </Group>
        <Split/>
      </div>
    </scroller>
  </div>
</template>

<script>
  import MyHeader from '../../components/my/MyHeader.vue';
  import Split from '../split/Split.vue';
  import {
    XHeader,
    XButton,
    Group,
    Cell,
    Scroller
  } from 'vux';
  export default {
    data() {
      return {
        title: '我的信息',
        myInfo: {
          'name': '张三',
          'sex': '男',
          'sfzh': '64011119******0633',
          'mz': '汉',
          'jg': '宁夏',
          'csrq': '19******',
          'cjgzsj': '20070314',
          'jrbdwsj': '20070314',
          'rdsj': '2009',
          'grsf': '职工',
          'xrzw': '现任职务',
          'xrzwsj': '现任职务时间',
          'srzw': '上任职务',
          'srzwsj': '上任职务时间',
          'qrzxl': '全日制学历',
          'zzxl': '在职',
          'zyjsdj': '专业技术等级',
          'pzsj': '聘任时间',
          'mobile': '手机号',
          'tel': '联系电话',
          'bz': '备注'
        }
      };
    },
    components: {MyHeader, XHeader, XButton, Group, Cell, Split, Scroller},
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
      this.getDefaultWeiXinUser();
    },
    methods: {
      myinfo (pos) {
        this.scrollTop = pos.top;
      },
      getDefaultWeiXinUser() {
        let weixinUserInfo = window.JSON.parse(localStorage.getItem('weixinUserInfo'));
        console.log('my getItem ', weixinUserInfo);
        this.weixinUserInfo = weixinUserInfo;
      }
    }
  }
  ;
</script>

<style>
</style>
