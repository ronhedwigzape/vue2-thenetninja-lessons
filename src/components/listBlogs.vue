<template>
  <div>
    <div v-theme:column="'narrow'" id="show-blogs">
      <h1>List Blog Titles</h1>
      <input type="text" v-model="search" placeholder="search blogs">
      <div v-for="blog in filteredBlogs" class="single-blog">
        <h2 v-rainbow>{{ blog.title | to-uppercase }} ID: {{ blog.userId }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin.js";

export default {
  name: "listBlogs",
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data){
      this.blogs = data.body.slice(0,10)
    })
  },
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  computed:{

  },
  // Registering custom filter locally
  filters: {
    toUppercase(value) {
      return value.toUpperCase()
    }
  },
  // Registering custom directives locally
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>