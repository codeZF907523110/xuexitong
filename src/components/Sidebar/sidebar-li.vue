<template>
  <div class='sidebar-li'>
      <div class='tubiaoimg'>
          <img :src="tubiaosrc" alt="">
      </div>
      <div class='tubiaotext'>
          {{tubiaotext}}
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        tubiaosrc:String,
        tubiaotext:String
    }
}
</script>

<style>
.tubiaotext{
    /* float: left; */
    font-size: 15px;
    line-height:50px;
    color: black;
    margin-left:60px;
    height: 100%;
    /* line-height:36px ; */
}
.tubiaoimg{
    float: left;
    height: 100%;
    /* margin-left: 10px; */
    
}
.tubiaoimg img{
    position: absolute;
    vertical-align:middle;
    width: 10%;
    top: 50%;
    transform: translate(0,-50%);
    left: 18px;
}
.sidebar-li{
    height: 50px;
    width: 100%;
    border-bottom: 1px solid rgb(221, 221, 221);
    position: relative;
}
</style>