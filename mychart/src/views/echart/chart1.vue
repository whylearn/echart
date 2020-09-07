<template>
  <div>

    <div ref="box" style="width: 600px;height:400px;">
      
    </div>
  </div>
</template>

<script type="text/javascript">
import {chart} from './chart.js'
export default {
  
  data() {
    return {

    }
  },
  components: {
  },
  mounted(){
    if (this.$refs.box != null){
     
      chart(this.$refs.box);
    }
   
  }
}
</script>

<style scoped>
  
</style>
