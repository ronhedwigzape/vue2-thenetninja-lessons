<template>
    <div>
<!--      <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>-->
<!--      <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>-->
<!--      <app-footer v-bind:title="title"></app-footer>-->
<!--      <form-helper>-->
<!--        <div slot="form-header">-->
<!--          <h3>This is the title of the form</h3>-->
<!--          <p>Information about the form</p>-->
<!--        </div>-->
<!--        <div slot="form-fields">-->
<!--          <input type="text" placeholder="name" required>-->
<!--          <input type="password" placeholder="password" required>-->
<!--        </div>-->
<!--        <div slot="form-controls">-->
<!--          <button v-on:click="handleSubmit">Submit</button>-->
<!--        </div>-->
<!--     </form-helper>-->
<!--      <keep-alive>-->
<!--        <component v-bind:is="component"></component>-->
<!--      </keep-alive>-->
<!--      <button v-on:click="component = 'form-one'">Show Form One</button>-->
<!--      <button v-on:click="component = 'form-two'">Show Form Two</button>-->
<!--   <add-blog></add-blog>-->
      <show-blogs></show-blogs>
    </div>
</template>

<script>
// import Header from './components/Header.vue';
// import Footer from './components/Footer.vue';
// import Ninjas from './components/Ninjas.vue';
// import formOne from "./components/formOne.vue";
// import formTwo from "./components/formTwo.vue";
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";

export default {
    components: {
      'add-blog': addBlog,
      'show-blogs': showBlogs

      // 'app-header': Header,
      // 'app-footer': Footer,
      // 'app-ninjas': Ninjas
      // 'form-one': formOne,
      // 'form-two': formTwo
    },
    data() {
        return {
          // component: 'form-two'
          // ninjas: [
          //   {name: 'Ryu',specialty: 'Vue Components', show: false},
          //   {name: 'Crystal',specialty: 'HTML Wizardry', show: false},
          //   {name: 'Hitoshi',specialty: 'Click Events', show: false},
          //   {name: 'Tango',specialty: 'Conditionals', show: false},
          //   {name: 'Kami',specialty: 'Webpack', show: false},
          //   {name: 'Yoshi',specialty: 'Data Diggin', show: false}
          // ],
          // title: 'Vue Ninjas'
        }
    },
    methods: {
        // updateTitle: function(updatedTitle) {
        //   this.title = updatedTitle;
        // }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
