<template>
  <div class="inner-i-box" >   
              
              <img v-if="!isbangding" :src="bangdingimg" alt="">
              <img v-else :src="bangdingimgs" alt="">
            <div class='inner-right'>
              <span class="bind-name">{{bindname}}</span>
              <a class="red" v-if="!isbangding">未绑定</a>
              <a class="red2" v-else>已绑定</a>
              <div aria-role="button" v-if="!isbangding" class="tianjiabtn">添加绑定</div>
              <div aria-role="button" v-else  class="tianjiabtn">解除绑定</div>
            </div>
    </div>
</template>

<script>
export default {
  props:{
    bangdingimg:String,
    bindname:String,
    isbangding:Boolean,
    bangdingimg:true,
    bangdingimgs:String
  }
}
</script>

<style>
.inner-i-box img{
  width: 75px;
  height: 75px;
  float: left;
}
.bind-name {
    font-size: 16px;
    font-weight: 700;
}

.red {
  margin-top: 5px;
  display: block;
  color: #f01414;
  /* border:1px solid red; */
  width: 80px;
}
.red2 {
  margin-top: 5px;
  display: block;
  color: #71777d;
  /* border:1px solid red; */
  width: 80px;
}
.tianjiabtn {
    /* border:1px solid red; */
    display: block;
    width: 62px;
    height: 25px;
    color: #07111b;
    line-height: 25px;
    font-size: 13px;
    border: 1px solid #d9dde1;
    text-align: center;
    margin-top: 5px;
    cursor: pointer;
}
.inner-right{
  width:120px;
  height: 100%;
  float: left;
  margin-left: 5px;
}
</style>