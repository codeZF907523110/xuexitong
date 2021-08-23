<template>
  <div class='sign'>
          <div>
            <classtop :buttonnumber="2" :buttontext="'新建课程'"></classtop>
          </div>
          <div>
            <classitem></classitem>
          </div>
  </div>
</template>

<script>
import classitem from '../task/classitem.vue'
import Classtop from '../task/classtop.vue'
export default {
  components: { classitem,  Classtop },
  data(){
    return{
      classsearch:''
    }
  }
}
</script>

<style>
.addclassbtn button{
  line-height: 0!important;
}
.inputsearch{
   width: 20px;
  background-color: white;
  /* border:1px solid red; */
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  
}
.inputsearch:hover{
  color:#00a1d6 ;
  transition: all 0.4s;
}
.classsearch{
  position: relative;
  width: 240px;
  float: right;
  margin-right:20px
}
.classsearch input{
  width: 240px;
  border-radius: 20px;
  
}
.addclassbtn{
  margin-left: 20px;
  float: left;
  
}
.addclasstop{
  font-size:16px;
  height: 80px;
  border:1px solid red;
  width: 100%;
  line-height: 80px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.el-icon-plus{
  display: block;
  float: left;
  margin-left: -7px;
  font-size: 15px;
  font-weight: 600;
  margin-top: -1px;
  margin-right: 2px;
  
}
.sign{
  background-color: white;
  position: relative;
  width: 1150px;
  min-height:594px ;
  margin: 0 auto;
  border:1px solid red;
  border-radius: 8px;
  margin-top: 10px;
}
</style>