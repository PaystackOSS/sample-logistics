<script setup>
import Layout from './components/Layout.vue';
</script>

<template>
  <Layout />
</template>

<style>
:root {
  --background-color: #fbfbfb;
  --text-color: #214C2E;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  margin: 30px;
  background-color: var(--background-color);
  color: var(--text-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
