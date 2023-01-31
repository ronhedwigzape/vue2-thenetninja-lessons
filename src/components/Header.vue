<template>
<!--<header>-->
<!--  <h1 v-on:click="changeTitle"> {{ title }} </h1>-->
<!--</header>-->
  <nav>
    <ul>
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/add">Add a New Blog</router-link></li>
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

</style>