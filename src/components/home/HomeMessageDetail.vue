<template>
  <div>
    <div class="myheader">
      <div class="avatar">
        <img :src="avatar" alt="" width="60px" height="60px">
      </div>
      <div class="info">
        <span class="name">{{name}}</span>
        <span class="time">{{time}}</span>
      </div>
    </div>
    <div v-html="content" class="content" id="content"></div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        id: '',
        title: '最新消息',
        content: '',
        avatar: '',
        caption: '',
        name: '',
        time: '2017-01-09'
      };
    },
    methods: {
      fetchData(id) {
        let url = 'http://www.ihealthyun.com:3343//htgl/app/getjournaldetails.do?aan001=' + id;
        this.$http.get(url).then(res => {
          let data = (res.data.data)[0];
          console.log(data);
          this.content = data[5];
          this.avatar = data[2];
          this.caption = data[1];
          this.name = data[4];
          this.$nextTick(() => {
            this.reSetImageSize();
          });
        });
      },
      reSetImageSize() {
        let _imgDiv = document.getElementById('content').getElementsByTagName('img');
        if (_imgDiv.length > 0) {
          for (var i = 0; i < _imgDiv.length; i++) {
            _imgDiv[i].setAttribute('style', 'max-width:100%');
          }
        }
        // document.getElementById('content').setAttribute('style', 'top:20px;left:20px;color:red;');
      }
    },
    created() {
      this.reSetTitleUtil.reSetTitle(this.title);
      // console.log('xxxxx', this.$route);
      // console.log('这里根据后台请求ID=' + this.$route.query.params.id);
      console.log('loadData start');
      this.fetchData(1);
      console.log('loadData end');
    }
  };
</script>

<style lang="less">
  .myheader {
    display: flex;
    margin-top: 5px;
    & > .info > span {
      display: block;
      margin-left: 5px;
      font-size: 16px;
    }

  }

  .content {
    width: 100%;
  }
</style>
