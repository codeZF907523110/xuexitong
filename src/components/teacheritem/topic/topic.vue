<template>
  <div class="topic">
    <classtop :buttonnumber="4" :buttontext="'新建课程'"></classtop>
    <div class="classtype">
      <div class="classtypeli">
        <div class='classtypelii' v-for="(item1,index1) in titletext1">
          <span class="classtypespan">{{item1}}</span>
          <div class="optioncheck" @click="showoptionbo(index1)">
            {{titletext3[index1]}}
            
            <div class="optioncheckbo" :style="opcheckheight" @click.stop v-if="index1==showit">
              <div class="optioncheckbo1" v-for="item2 in titletext2[index1]">
                <input type="checkbox" />
                <span>{{item2}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='alltask'>
      <span class='alltaskspan1'>全部课程</span>
      <span class='alltaskspan2'>共14题</span>
    </div>
    <div class='tasktitlea'>
        <input type="checkbox">
        <span class='tasktasspan1'>题目</span>
        <span class='tasktasspan2'>题型</span>
        <span class='tasktasspan3'>难易</span>
        <span class='tasktasspan4'>创建者</span>
        <span class='tasktasspan5'>创建时间</span>
    </div>
    <div class='alltaskbott'>
        <div class='alltaskonea'>
            <input type="checkbox">
            <p class='alltaskonespan1'>有5位老师和42位同学去看表演,其中有30名男生,女生有多少名?怎样列式( ) (本题分数:2分)</p>
            <span class='alltaskonespan2'>完形填空</span>
            <span class='alltaskonespan3'>难</span>
            <span class='alltaskonespan4'>张峰水水水水</span>
            <span class='alltaskonespan5'>04-05</span>
            <div class='alltaskoneadian'>
              <el-dropdown trigger="click">
              <span class="alltaskdele el-dropdown-link el-icon-more">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >编辑</el-dropdown-item>
                <el-dropdown-item >删除</el-dropdown-item>
                
              </el-dropdown-menu>
            </el-dropdown>
            </div>
            
        </div>
        <div class='alltaskonea'>
            <input type="checkbox">
            <p class='alltaskonespan1'>有5位老师和42位同学去看表演,其中有30名男生,女生有多少名?怎样列式( ) (本题分数:2分)</p>
            <span class='alltaskonespan2'>完形填空</span>
            <span class='alltaskonespan3'>难</span>
            <span class='alltaskonespan4'>张峰水水水水</span>
            <span class='alltaskonespan5'>04-05</span>
            <div class='alltaskoneadian'>
              <el-dropdown trigger="click">
              <span class="alltaskdele el-dropdown-link el-icon-more">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >编辑</el-dropdown-item>
                <el-dropdown-item >删除</el-dropdown-item>
                
              </el-dropdown-menu>
            </el-dropdown>
            </div>
            
        </div>
        
    </div>
  </div>
</template>

<script>
import classtop from "../task/classtop.vue";
export default {
  data() {
    return {
      opcheckheight: "",
      isshowopcheck: false,
      titletext1:['课程','题型','知识点','难度'],
      titletext2:[['汇编语言','汇编'],['单选题','多选题','填空题','判断题','简答题','名词解释','论述题','计算题','分录题','资料题','排序题','完型填空','阅读理解','口语题','听力题','其它'],['知识点1','知识点2'],['难','中','易']],
      titletext3:['选择课程','选择题型','选择知识点','选择难度'],
      showit:0,
      isindex1:false
    };
  },
  components: { classtop },
  methods: {
    showoptionbo(index1) {
        this.showit=index1
      
      
      var height1=this.titletext2[index1].length*40
      if (!this.isshowopcheck && index1!=1) {
        this.opcheckheight = "height:" + height1 + "px";
        this.isshowopcheck = true
        console.log(this.opcheckheight);
      } else if(index1==1){
        this.isindex1=!this.isindex1
        if(this.isindex1){
          this.opcheckheight = "height:" + 120 + "px";
          this.opcheckheight +=";overflow-y:scroll";
        }else{
          this.opcheckheight = "height:" + 0 + "px";
          console.log(this.opcheckheight);
        }
      }else{
        this.opcheckheight = "height:" + 0 + "px";
        this.isshowopcheck = false;
        console.log(this.opcheckheight);
      }
      
      
    },
  },
};
</script>

<style>
.alltaskoneadian{
  position: absolute;
  top: -3px;
  right: 0;
  /* margin-top: 17px; */
  margin-right: 10px;
  margin-top: 5px;
}
.alltaskonea{
  position: relative;
  height: 54px;
  border-bottom: 1px solid rgb(231, 231, 231);;
  line-height: 54px;
}
.alltaskonea:hover{
  cursor: pointer;
  background: #e2eeff;
  transition: all 0.5s;
}
.alltaskonea input{
  position: absolute;
  top: 16px;
  cursor: pointer;
  left: 19px;
}
.alltaskonespan1{
  margin-left: 40px;
  white-space:nowrap;
  width:450px;
  overflow:hidden ;
  text-overflow: ellipsis;
  /* float: left; */
}
.alltaskonespan2{
  top: 0px;
  position: absolute;
  left:566px;
  }
.alltaskonespan3{
  top: 0px;
  position: absolute;
  left:695px;
}
.alltaskonespan4{
  top: 0px;
  position: absolute;
  left: 823px;
}
.alltaskonespan5{
  top: 0px;
  position: absolute;
  left: 966px;
}
.alltaskone span{
  font-size: 14px;
    color: #131B26;
}
.alltaskbott{
  width: 97%;
  /* border:1px solid red; */
  margin: 0 auto;
}
.tasktasspan1{
  margin-left: 40px;
}
.tasktasspan2{
  margin-left: 500px;
}
.tasktasspan3,.tasktasspan4,.tasktasspan5{
  margin-left:100px;
}
.tasktitlea input{
  position: absolute;
  top: 9px;
  margin-left: 20px;
  color: rgb(168, 168, 179);
  cursor: pointer;
}
.tasktitlea span{
    font-size: 14px;
    color: #8A8B99;
}
.tasktitlea{
  position: relative;
  width: 97%;
  height: 40px;
  margin: 0 auto;
  margin-top: 15px;
  line-height: 40px;
  background: #F2F4F7;
}
.alltask{
  width: 100%;
  height: 18px;
  line-height: 18px;
  margin-top: 15px;
}
.alltaskspan1{
  float: left;
  margin-left: 18px;
  }
.alltaskspan2{
  float: right;
  margin-right: 20px;
}
.alltask span{
  font-size: 12px;
  color: #8A8B99;
}
.classtype{
  height: 54px;
}
.classtypelii{
  float: left;
  margin-left: -5px;
}
.classtypeli {
  width: 100%;
  height: 54px;
  line-height: 54px;
  padding-left: 20px;
  float: left;
}
.optioncheckbo {
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(175, 187, 204, 0.75);
  position: absolute;
  top: 40px;
  width: 200px;
  height: 0;
  overflow: hidden;
  /* min-height: 40px; */
  /* border:1px solid red; */
  border-radius: 5px;
  margin-left: -13px;
  transition: all 0.5s;
  z-index: 1000;
}
.optioncheckbo input {
  margin-left: 15px;
}
.optioncheckbo1 {
  height: 40px;
  width: 100%;
  /* border:1px solid red */
}
.optioncheckbo1 span {
  margin-left: 15px;
}
.classtypeli .classtypespan {
  float: left;
}
.optioncheck {
  position: relative;
  margin-left: 20px;
  height: 34px;
  line-height: 34px;
  width: 196px;
  margin-right: 40px;
  border: 1px solid #e1e1e5;
  border-radius: 4px;
  display: inline-block;
  outline: none;
  font-size: 14px;
  color: #131b26;
  letter-spacing: 0.27px;
  cursor: pointer;
  padding-left: 12px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-right: 30px;
}
.topic {
  width: 1150px;
  min-height: 650px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  margin-top: 10px;
}
</style>