<template>
  <div>
    <div>Landdetail  {{id}}</div>
    <div>Landdetail  {{$route.query.id}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: {
          type: String
        }
      };
    }
  };
</script>

<style>
</style>
