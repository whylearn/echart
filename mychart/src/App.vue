<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
body {

background: white;

}



@media screen and (max-width: 800px) {

body{

    background: black;

}

}
@media screen and (max-width: 1200px) and (min-width: 800px){

body{

    background: rgb(6, 199, 233);

}

}
</style>
