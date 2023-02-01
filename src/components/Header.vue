<template>
<!--<header>-->
<!--  <h1 v-on:click="changeTitle"> {{ title }} </h1>-->
<!--</header>-->
  <nav>
    <ul>
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a New Blog</router-link></li>
    </ul>
  </nav>
</template>

<script>
// import { bus } from '../main.ts';

export default {
  // props: {
  //   title: {
  //     type: String
  //   }
  // },
  data() {
    return {

    }
  },
  methods: {
    // changeTitle: function () {
    //   // this.$emit('changeTitle', 'Vue Wizards');
    //   // this.title = 'Vue Wizards';
    //   bus.$emit('titleChanged','Vue Wizards');
    // }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
</style>