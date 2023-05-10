<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/myApp">myApp</router-link>
  </nav>

  <button class="border rounded-lg bg-slate-700 text-white font-bold hover:bg-slate-500 hover:bg-opacity-90 focus:ring-gray-950" @click="redirect">Redirect</button>
  <button class="border rounded-lg bg-slate-700 text-white font-bold hover:bg-slate-500 hover:bg-opacity-90 focus:ring-gray-950" @click="back">Go back</button>
  <button class="border rounded-lg bg-slate-700 text-white font-bold hover:bg-slate-500 hover:bg-opacity-90 focus:ring-gray-950" @click="forward">Go forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name: 'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  padding-bottom: 700px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: rgb(128, 128, 128);
}

button {
  margin: 0 10px;
  padding:  10px;
  border: none;
  border-radius: 4px;
  border-color: black;
}
</style>