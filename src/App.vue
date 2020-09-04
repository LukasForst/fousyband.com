<template>
  <div id="app">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="//fonts.googleapis.com/css?family=Long Cang:300,400,500,700,400italic" rel="stylesheet">
    <Container/>
  </div>
</template>

<script>

import Container from "@/components/Container";

export default {
  name: 'App',
  components: {Container}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Phorssa";
  src: local("Phorssa"),
  url(./fonts/Phorssa.ttf) format("truetype");
}
</style>
