<template>
  <div>{{title}}</div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        msg: 'heder'
      };
    }
  };
</script>

<style>
</style>
