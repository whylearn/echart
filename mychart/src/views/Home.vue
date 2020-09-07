<template>
  <div class="home">
    <div>home</div>
     <img srcset="../assets/img/01.jpg 100w, ../assets/img/02.jpg 300w, ../assets/img/03.jpg 600w" src="../assets/img/01.jpg" alt="">
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
