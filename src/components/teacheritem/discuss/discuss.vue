<template>
<div>
  <div class='discuss'>
    <div>
      <classtop :buttonnumber="3" :buttontext="'新建话题'"></classtop>
      
    </div>
    <div class='discusstop'>
        <span>全部话题</span>
        <a>共5条话题</a>
    </div>
    <discussitem></discussitem>
    
    
  </div>
  <div class='disbottom'>
      <creaddiscuss></creaddiscuss>
    </div>
</div>
  
</template>

<script>
import classtop from '../task/classtop.vue'
import Creaddiscuss from './creaddiscuss.vue'
import Discussitem from './discussitem.vue'
export default {
  components: { classtop, Discussitem,Creaddiscuss },

}
</script>


<style>


*{
  box-sizing:initial;
}
.discusstop{
  width: 100%;
  height: 35px;
  border-bottom: 1px solid rgb(238, 238, 238);
  line-height: 35px;
}
.discusstop span{
    color: #8A8B99;
    font-size: 12px;
    margin-left: 20px;
  }
  .discusstop a{
    float: right;
    margin-right: 20px;
    text-decoration: none;
    color: black;
    color: #8A8B99;
    font-size: 12px;
  }
.discuss{
  background-color: white;
  position: relative;
  width: 1150px;
  min-height:594px ;
  margin: 0 auto;
  /* border:1px solid red; */
  border-radius: 8px;
  margin-top: 10px;
}
</style>