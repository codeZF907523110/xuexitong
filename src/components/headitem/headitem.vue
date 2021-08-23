<template>
  <div class='headitem'>
      <img :src="headitemimg" alt="">
      <span>{{itemtext}}</span>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        headitemimg:String,
        itemtext:String
    }
}
</script>

<style>
    .headitem{
        height: 65px;
        line-height: 65px;
        width: 50px;
        /* border:1px solid red; */
        cursor: pointer;
        font-size: 13px;
        position: relative;
    }
    .headitem img{
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-95%);
        width: 23px;
        height:23px;
        margin-top: 10px;
    }
    
    .headitem span{
        float: right;
    }
</style>