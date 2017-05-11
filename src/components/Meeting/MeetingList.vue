<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">即将开始</tab-item>
      <tab-item @on-item-click="onItemClick">已完成会议</tab-item>
    </tab>
    <Scroller lock-x height="-100" @on-scroll="onscroll" ref="scrollerBottom">
      <div>
        <form-preview header-label="第十二届中国苗木交易会" header-value=" *" :body-items="list"
                      :footer-buttons="buttons2"></form-preview>
        <br>
        <form-preview header-label="春季防风固沙动员会" header-value=" *" :body-items="list2"
                      :footer-buttons="buttons2"></form-preview>
      </div>
    </Scroller>
  </div>
</template>

<script>
  import {Tab, TabItem, FormPreview, Scroller} from 'vux';
  export default {
    data() {
      return {
        title: '我的会议',
        list: [
          {
            label: '会议主题',
            value: '讨论参加交易会的事项'
          },
          {
            label: '会议时间',
            value: '20**年1月1日上午'
          },
          {
            label: '会议地点',
            value: '党支部办公室'
          },
          {
            label: '主持人',
            value: '竺尔冬'
          },
          {
            label: '参会人员',
            value: '车采梦、操俊爽、环韵诗、年昌黎、圣香蝶、茅红英、声静涵、逢清芬、竺尔冬、大阳阳、傅问雁、衅绿兰'
          }],
        list2: [
          {
            label: '会议主题',
            value: '春季防风固沙动员会'
          },
          {
            label: '会议时间',
            value: '20**年1月1日上午'
          },
          {
            label: '会议地点',
            value: '党支部办公室'
          },
          {
            label: '主持人',
            value: '竺尔冬'
          },
          {
            label: '参会人员',
            value: '臧冷荷、丑项明、进雨石、有凝梦、衡望舒、芮雁荷、保景澄、胥曼安、卜建弼、郎忆霜、穰夏瑶、节语梦、鄂初瑶、谢雨南、刀孤容、红宏博、恭凝雪、礼含之、惠明旭、诸曼珍、稽夏兰、慎千凡、次晏如、喜浩丽、卢欣嘉、蹉若芳、忻香馨'
          }],
        buttons2: [{
          style: 'primary',
          text: '签到',
          onButtonClick: (name) => {
            alert(`clicking ${name}`);
          }
        }]
      };
    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index);
      },
      onscroll (pos) {
        this.scrollTop = pos.top;
      }
    },
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
    },
    components: {
      Tab,
      TabItem,
      FormPreview,
      Scroller
    }
  };
</script>

<style>
  .weui-form-preview__hd > .weui-form-preview__value {
    color: red;
  }
</style>
