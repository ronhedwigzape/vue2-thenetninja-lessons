<template>
<div>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <!--      Route Parameters     -->
      <router-link v-bind:to="`/blog/${blog.id}`"><h2>{{ blog.title | to-uppercase }} ID: {{ blog.userId }}</h2></router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</div>
</template>

<script>
import searchMixin from "../mixins/searchMixin.js";

export default {
  name: "showBlogs",
  created(){
    this.$http.get('https://vue-thenetninja-lessons-default-rtdb.firebaseio.com/posts.json').then(function (data){
      return data.json()
    }).then((data) => {
      let blogsArray = []
      for (let key in data) {
        data[key].id = key
        blogsArray.push(data[key])
      }
      this.blogs = blogsArray
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