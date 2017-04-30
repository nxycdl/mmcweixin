<template>
  <div class="caption">{{title}}</div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  };
</script>

<style>
  .caption {
    text-align: center;
    padding-left: 14px;
    height: 28px;
    line-height: 28px;
    border-left: 1px solid #d9dde1;
    font-size: 20px;
    color: #0398ff;
    background: #f3f5f7;
  }
</style>
