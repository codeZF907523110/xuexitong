<template>
  <div class='discussitem'>
    <div class='disitemtop'>
      <div class='distouxiang'><img src="../../../assets/img/touxiang.jpg" alt=""></div>
      <span class='disname'>张峰</span>
      <span class='distype'>老师</span>
      <span class='disdate'>03-26 17:55</span>
       
      <div class='disright '>
          <el-dropdown>
        <span class="el-dropdown-link el-icon-more">
          <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </span>
        <div class='ellink'>
          <el-dropdown-menu  slot="dropdown">
          <el-dropdown-item>置顶</el-dropdown-item>
          <el-dropdown-item>编辑</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
        </div>
        
      </el-dropdown>
        
      </div>
    </div>
    <div class='distitle'>
        <span>Vue</span>
    </div>
    <div class='discontend'>
      <p>
        	云计算（cloud computing）是分布式计算的一种，指的是通过网络“云”将巨大的数据计算处理程序分解成无数个小程序，然后，通过多部服务器组成的系统进行处理和分析这些小程序得到结果并返回给用户。云计算早期，简单地说，就是简单的分布式计算，解决任务分发，并进行计算结果的合并。因而，云计算又称为网格计算。通过这项技术，可以在很短的时间内（几秒钟）完成对数以万计的数据的处理，从而达到强大的网络服务。
      </p>
    </div>
    <div class='disactive'>
      <div class='el-icon-thumb'></div>
     
      <div class='el-icon-chat-dot-square'></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.ellink{
  margin-top: -25px;
  margin-left: 50px;
}
.disactive div{
  cursor: pointer;
}
.disactive div:hover{
  color: #00a1d6;
  transition: all 0.5s;
}
.disactive{
  float: right;
  margin-right:30px;
  font-size: 20px;
  margin-top:-10px;
  color:#c2c2c2;
}
.el-icon-thumb{
  margin-right: 20px;
}
.discontend p{
    margin-top: 3px;
    width: 80%;
    max-height: 100px;
    font-size:16px;
    line-height:1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    margin-left: 65px;
    cursor: pointer;
}
.distitle{
    font-size: 16px;
    color: #131B26;
    margin-left:65px ;
    cursor: pointer;
}
.distitle:hover{
  color: #00a1d6;
  transition: all 0.5s;
}
.disright{
  color: #8A8B99;
  margin-top: 20px;
  font-size: 20px;
  cursor: pointer;
  float: right;
}
.disright:hover{
  color:#00a1d6 ;
  transition: all 0.5s;
}
.distype,.disdate.distouxiang,.disname{
  float: left;
}
.disdate{
    margin-left: 75px;
    font-size: 12px;
    color: #8A8B99;
}
.distype{
    height: 16px;
    line-height: 16px;
    padding: 0 8px;
    font-size: 10px;
    color: #DA7F1B;
    border: 1px solid #EDAF69;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 85px;
}
.distouxiang{
  width: 30px;
  height: 30px;
  float: left;
}
.disname{
  color: #8A8B99;
  font-size: 14px;
  margin-left: 10px;
}
.distouxiang img{
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
}
.discussitem{
    width: 100%;
    height: 165.6px;
    border-bottom: 1px solid rgb(238, 238, 238);
}
.disitemtop{
  height: 60px;
  width: 95%;
  margin: 0 auto;
  line-height: 60px;
  position: relative;
}
</style>