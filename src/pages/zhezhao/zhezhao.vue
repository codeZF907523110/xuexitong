<template>
  <div class='zhezhao' @click='$store.state.loginshow=false'></div>
</template>

<script>
export default {

}
</script>

<style>
.zhezhao{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 99999999;
        /* border:1px solid red; */
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>