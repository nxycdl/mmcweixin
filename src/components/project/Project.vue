<template>
  <div>
  <ul>
    <li v-for="project in projectList">
      <span>{{project.id}}</span>
      <span>{{project.title}}</span>
      <span>{{project.date}}</span>
      <span>{{project.auth}}</span>
    </li>
    <li v-for="project in projectList">
      <span>{{project.id}}</span>
      <span>{{project.title}}</span>
      <span>{{project.date}}</span>
      <span>{{project.auth}}</span>
    </li>
  </ul>
  </div>
</template>

<script>
  import projectList from '../../../projectList.json';
  export default {
    data() {
      return {
        projectList
      };
    }
  };
</script>

<style>
</style>
