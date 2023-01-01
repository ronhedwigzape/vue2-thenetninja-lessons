<template>
    <div>
      <app-header></app-header>
<!--      <h1>{{ title }}</h1>-->
      <ninjas></ninjas>
    </div>
</template>

<script>
// import Ninjas from './Ninjas.vue'

import Header from './components/Header.vue'

export default {
    components: {
      // 'ninjas': Ninjas,
      'app-header': Header
    },
    data() {
        return {
           // title: 'Ninja App'
        }
    }
}
</script>

<style scoped>
h1 {
  color: aqua;
}
</style>
