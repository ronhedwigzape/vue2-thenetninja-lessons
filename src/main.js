import Vue from 'vue'
import App from './App.vue'


//Globally registered component
Vue.component('ninjas',Ninjas)

new Vue({
    el: '#app',
    render: h => h(App)
});
