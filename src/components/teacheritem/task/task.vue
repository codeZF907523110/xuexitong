<template>
  <div class='task'>
      <classtop :buttontext="'新建作业'" :buttonnumber="4"></classtop>
      <div class='tasktop'>
        <div class='xiala'>
          <el-dropdown trigger="click">
        <span class="el-dropdown-link allclass">
          全部班级<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >全部班级</el-dropdown-item>
          <el-dropdown-item >18计科甲</el-dropdown-item>
          <el-dropdown-item >默认班级</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
        </div>
        
        <div class='zhuangtai'>
          <span class='zhuangtaitext'>状态</span>
          <div class='zhuangtairadio'>
            <el-radio v-model="radio" label="0">全部</el-radio>
           <el-radio v-model="radio" label="1">未开始</el-radio>
           <el-radio v-model="radio" label="2">进行中</el-radio>
           <el-radio v-model="radio" label="3">已结束</el-radio>
          </div>
        </div>
      </div>
      <taskitem></taskitem>
  </div>
</template>

<script>
import classtop from './classtop.vue'
import Taskitem from './taskitem.vue'
export default {
  data(){
    return{
      radio:'0'
    }
  },
  components: { classtop, Taskitem },

}
</script>

<style>
.el-dropdown-menu{
  width: 208px;
  text-align: center;
}
.zhuangtairadio{
  width:700px;
  margin-left: 80px;
  float: left;
  margin-top:7px;
}
.xiala{
  float: left;
}
.zhuangtaitext{
  float: left;
  color: #8A8B99;
  line-height: 34px;
  margin-left: 80px;
}
.tasktop{
  height: 54px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.el-icon--right{
  text-align: right!important;
  margin-left: 110px!important;
}
.allclass{
    display: block;
    width: 180px;
    height: 32px;
    padding: 0 13px;
    background: #FFFFFF;
    border-radius: 4px;
    position: relative;
    border: 1px solid #D5D7D9;
    line-height: 32px;
    text-align: left;
    color: #474C59;
}
.task{
  width: 1150px;
  min-height:660px ;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  margin-top: 10px;
  
}
</style>