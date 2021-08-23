<template>
  <div class="common-title">
            
          {{tilename}}
          <span class="title-tips" v-show='successshow'>完成 <b class="color-red">{{fraction}}/4</b></span>
          <a  class="pull-right" v-show='successshow'><i class="icon-ques-revert"></i>常见问题</a>
        </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        tilename:String,
        fraction:Number,
        fraction:Number,
        successshow:Boolean,
    }
}
</script>

<style>
.common-title .title-tips {
    font-size: 12px;
    color: #93999f;
    margin-left: 18px;
    font-weight: 400;
}
.pull-right{
  float: right;
  color: #93999f;
  cursor: pointer;
}
.color-red {
    color: #00a1d6!important;
}
.common-title a {
    font-size: 12px;
}
.common-title {
  height: 60px;
    line-height: 60px;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    border-bottom: 2px solid #d9dde1;
}
@media screen and (max-width: 768px){
    .common-title{
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        height: 40px;
        line-height: 40px;
    }
}
</style>