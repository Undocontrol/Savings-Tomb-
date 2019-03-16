<template>
  <div id="app">
    <div id="nav">
      <!--router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link-->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  background-image: url('/assets/background.png');
	background-repeat: no-repeat;
	background-size: 100%;
  background-position: center top;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position:relative;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
