<template>
  <div class='zhezhao'  @click='zhezhaoclick'></div>
</template>

<script>
export default {
  methods:{
    zhezhaoclick(){
      this.$store.state.loginshow=false
    }
    
  }
}
</script>

<style>

.zhezhao{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 99999999;
        /* border:1px solid red; */
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>