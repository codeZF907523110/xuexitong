<template>
  <div class='taskcreat'>
    <div class='taskcreattop'>
      新建作业<div class='creatsuccess'>完成</div>
    </div>
    <div class='creattask'>
      <div class='taskname1'>
          <input type="text" name="" value='汇编语言' id="">
      </div>
      <div class='taskname1bo'>
        <div class='creattype typete1'>
          <span class='creattypete '>作业类型</span>
          <div class='creatradio'> 
            <el-radio v-model="typeradio" label="1">题目型作业</el-radio>
            <el-radio v-model="typeradio" label="2">答题卡作业</el-radio>
          </div>
    
      </div>
      <div class='creattype'>
          <span class='creattypete'>评分机制</span>
          <div class='creatradio'> 
            <el-radio v-model="pingfenradio" label="1">百分制（平均分配每道题的分值）</el-radio>
            <el-radio v-model="pingfenradio" label="2">自定义（自行设置每道题的分值）</el-radio>
          </div>
      </div>
      <div class='creattype'>
          <span class='creattypete'>题型设置</span>
          <div class='creatradio'> 
            <el-radio v-model="tasktype" label="1">按题型归类</el-radio>
            <el-radio v-model="tasktype" label="2">不按题型归类</el-radio>
          </div>
      </div>
      </div>
      
    </div>
    <div class='taskcenter'>
      <!-- 左边的题量和总分 -->
      <div class='taskcleft'>
        <span class='tlefttitle'>题量0,总分100</span>
        <div class='tleftnumber' >
          <div  v-for="(item,index) in getlocalStorages">
            <div class='ttasktitle' v-if="getlocalStorages[index].length">
              <div class='tasktitlett' >{{index+1}}.{{tasktypebtn1[index]}}<i class="el-icon-delete i1"   @click='deletaski(index)'></i></div>
              <ul>
                <li  v-for="(i,indexi) in getlocalStorages[index]" :class='{changebb:(changbbnum1==index&&changbbnum==indexi)}' @click='changebbb(index,indexi)'>{{parseInt(indexi)+1}} <span class='edittextt' @click='edittasktt(index,indexi)'>编辑</span><i class="el-icon-delete i2" @click='deleitask(index,indexi)'></i></li>
              </ul>
            </div>
          </div>
        </div>
          
      </div>
      <!-- 右边的题型 -->
      <div class='taskcright'>
        <div class='taskcrightt'>
          <div class='taskcrightti'>
            <span class='addtastt'>添加题目:</span>
            <div class='tasktypebtn' v-for="(item,index) in tasktypebtn" @click='changeindex(index)'> 
                <el-button size="small" round>{{item}}</el-button>
            </div>
            <div class='addtaskmore'>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <el-button size="small" round>更多<i class="el-icon-arrow-down el-icon--right" ></i></el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <div v-for="(i,index) in tasktypebtn2" @click='changeindexi(index)'>
                    <el-dropdown-item>{{i}}</el-dropdown-item>
                  </div>
              </el-dropdown-menu>
            </el-dropdown>
            </div>
            
            <span class='importtask'>智能导入</span>
            <span class='importtask'>从题库选题</span>
          </div>
          
        </div>
        <div class='taskcrightb' @click='iseditfa'>
          <div >
            <taskitemi :ischange="ischange"  :taskitemnu="taskitemnui" :locallength="locallength" :tasktypetitle="tasktypetitle" ref="taskitemii"></taskitemi>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>
import Taskitemi from '../../components/teacheritem/task/taskitemi/taskitemi.vue';

export default {
  components: {Taskitemi },
  data () {
      return {
        showedittask:false,
        changbbnum1:0,
        changbbnum:0,
        tasktypetitle:'',
        taskitemnui:-1,
        typeradio: '1',
        pingfenradio:'1',
        tasktype:'1',
        tasktypebtn:['单选题','多选题','填空题','判断题','简答题'],
        tasktypebtn1:['单选题','多选题','填空题','判断题','简答题','名词解释','论述题','计算题','分录题','资料题','排序题','完型填空','阅读理解','口语题','听力题','其它'],
        tasktypebtn2:['名词解释','论述题','计算题','分录题','资料题','排序题','完型填空','阅读理解','口语题','听力题','其它'],
        tasktypebtn3:[0],
        locallength:0,
        getlocalStorages:JSON.parse(localStorage.getItem('givelocalStorages')),
        ischange:false
      };
    },
    methods:{
      iseditfa(){
        this.$refs.taskitemii.isedit=false
      },
      deletaski(index){//删除题型

        this.$refs.taskitemii.givelocalStorages[index]=[]
        localStorage.setItem('givelocalStorages',JSON.stringify(this.$refs.taskitemii.givelocalStorages))
        this.$forceUpdate();
      },
      deleitask(index,indexi){//删除某一个小题
        this.$refs.taskitemii.givelocalStorages[index].splice(indexi,1)
        localStorage.setItem('givelocalStorages',JSON.stringify(this.$refs.taskitemii.givelocalStorages))
      },
      changebbb(index,indexi){
              Object.assign(this.$refs.taskitemii.$data,this.$refs.taskitemii.$options.data())
              this.$refs.taskitemii.isedit=true
              this.$forceUpdate();
              //获取草稿数据
              this.$refs.taskitemii.givelocalStorages=JSON.parse(localStorage.getItem('givelocalStorages'))
              this.$refs.taskitemii.stem=this.$refs.taskitemii.givelocalStorages[index][indexi].stem
              this.$forceUpdate();
              this.$refs.taskitemii.optiontaskst=this.$refs.taskitemii.givelocalStorages[index][indexi].optiontaskst
              this.$refs.taskitemii.optioncheckwhat=this.$refs.taskitemii.givelocalStorages[index][indexi].optioncheckwhat
              this.$refs.taskitemii.anseranslysis=this.$refs.taskitemii.givelocalStorages[index][indexi].anseranslysis
              this.$refs.taskitemii.nandutext=this.$refs.taskitemii.givelocalStorages[index][indexi].nandutext
              this.$refs.taskitemii.morechecked=this.$refs.taskitemii.givelocalStorages[index][indexi].morechecked
              this.$refs.taskitemii.isupset=this.$refs.taskitemii.givelocalStorages[index][indexi].isupset
              this.$refs.taskitemii.panduanda=this.$refs.taskitemii.givelocalStorages[index][indexi].panduanda
              this.$refs.taskitemii.optionnumber=this.$refs.taskitemii.givelocalStorages[index][indexi].optionnumber
              this.$refs.taskitemii.litasknumber=this.$refs.taskitemii.givelocalStorages[index][indexi].litasknumber
              this.changbbnum1=index
              this.changbbnum=indexi

              //获取index
              this.taskitemnui=index
              this.tasktypetitle=this.tasktypebtn1[index]
              this.locallength=indexi
              this.$forceUpdate();
      },
      changeindex(index){
        this.$refs.taskitemii.isedit=false
        this.taskitemnui=index
        this.tasktypetitle=this.tasktypebtn[index]
        if(JSON.parse(localStorage.getItem('givelocalStorages'))!=null){
          this.locallength=this.$refs.taskitemii.givelocalStorages[index].length
          if(this.$refs.taskitemii.givelocalStorages){
              this.$refs.taskitemii.givelocalStorages=JSON.parse(localStorage.getItem('givelocalStorages'))
          }
          this.$forceUpdate();
          this.ischange=!this.ischange
        }
        
      },
      changeindexi(index){
        this.$refs.taskitemii.isedit=false
        this.taskitemnui=index+5
        this.tasktypetitle=this.tasktypebtn2[index]
        if(JSON.parse(localStorage.getItem('givelocalStorages'))!=null){
          this.locallength=this.$refs.taskitemii.givelocalStorages[index+5].length
          if(this.$refs.taskitemii.givelocalStorages){
              this.$refs.taskitemii.givelocalStorages=JSON.parse(localStorage.getItem('givelocalStorages'))
          }
          this.$forceUpdate();
          this.ischange=!this.ischange
        }
        
      }
    },
    watch:{
      getlocalStorages(val, oldVal){
        this.$forceUpdate();
      }
    },
    created(){

    }
}
</script>

<style>
.creatsuccess{
    background: #3A8BFF;
    width: 94px;
    height: 40px;
    border-left: 1px solid #313A4C;
    font-size: 14px;
    color: #FFFFFF;
    float: right;
    cursor: pointer;
}
.creatsuccess:hover{
  background: #75afff;
  transition: all 0.4s;
}
.taskcreattop{
    width: 100%;
    height: 40px;
    background: #3A4357;
    box-shadow: 0 2px 17px 0 rgba(211,211,211,0.50);
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #A8A8B3;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;

}
.ttasktitle ul li span{
  margin-left: 130px;
  cursor: pointer;
  opacity: 0;
}
.ttasktitle ul li span:hover{
  color: #00a1d6;
  transition: all 0.4s;
}
.ttasktitle ul li:hover .edittextt{
  
  transition:all 1s;
  opacity: 1;
}
.edittask{
  position: relative;
  min-height: 395px;
  width: 850px;
  border-radius: 8px;
  background-color: white;
  margin-top: 20px;
}
.ttasktitle ul li:hover .i2{
  opacity: 1;
  transition: all 0.5s;
}
.tasktitlett i{
  float: right;
  height:32px;
  line-height: 32px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #acbfd9;
  cursor: pointer;
  opacity: 0;
}
.i2{
  color: #acbfd9;
  cursor: pointer;
  opacity: 0;
  font-size: 17px;
  /* margin-top:8px; */
  position: absolute;
  height: 100%;
  top: 7px;
  /* float: right; */
  margin-left: 10px;
}
.tasktitlett:hover .i1{
  opacity: 1;
  transition: all 0.5s;
}
.i1:hover,.i2:hover{
  color: #a2c7ff;
  transition: all 0.5s;
}
.changebb{
  background: #F0F6FF!important;
}
.ttasktitle{
  color: #181E33;
    /* width: 250px; */
    font-weight: 600;
    padding: 0 16px;
    
}
.ttasktitle ul{
  list-style: none;
  padding: 0;
  width: 280px;
  margin-left: -16px;
}
.ttasktitle ul li,.tasktitlett{
  height: 32px;
  width: 100%;
  /* border:1px solid red; */
  padding-left: 30px;
  line-height: 32px;
  font-size: 12px;
  position: relative;
}
.tasktitlett{
  width:  280px;
  margin-left: -15px;
  /* border:1px solid red; */
  padding-left: 18px!important;
}
.ttasktitle ul li:hover,.tasktitlett:hover{
  background: #F7FAFC;
  transition: all 0.3s;
}

.addtaskmore{
  float: left;
}
.importtask{
  float: left;
  color: #3A8BFF;
  margin-left:20px;
  cursor: pointer;
}
.importtask:hover{color: #94C1FF;transition: all 0.4s;}
.taskname1bo{
  width: 100%;
  position: absolute;
  top: 50px;
}
.tasktypebtn{
  float: left;
  margin-left: 15px;
}

.addtastt{
    font-size: 12px;
    color: #A8A8B3;
    font-weight: bold;
    padding-right: 15px;
    float: left;
}
.taskcrightti{
  width: 90%;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  line-height: 40px;
}
.taskcrightb{
  position: relative;
  width: 100%;
  min-height: 570px;
  background-color: white;
  border-radius: 8px;
  margin-top: 20px;
 
  flex: 1;
}
.taskcrightt{
  position: relative;
  width: 100%;
  height: 70px;
  border-radius: 8px;
  background-color: white;
}
.el-icon--right{
  margin-left: 0!important;
}
.taskcright{
  width:850px;
  min-height: 662px;
  float: right;
}
.tlefttitle{
    height:50px;
    line-height: 50px;
    font-size: 12px;
    color: #A8A8B3;
    font-weight: bold;
    padding-right: 15px;
    margin-left: 20px;
}
.taskcleft{
  float: left;
  width: 280px;
  flex: 1;
  margin-right: 20px;
  border-radius: 8px;
  background-color: white;
}
.taskcenter{
  position: relative;
  width: 1150px;
  min-height: 662px;
  margin: 0 auto;
  background-color: #f2f4f7;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
}
.creattypete{
  float: left;
  margin-left: 10px;
}
.creatradio{
  float: left;
  margin-left: 30px;
}
.creattask{
  width: 1150px;
  height: 180px;
  border-radius: 8px;
  margin: 0 auto;
  background-color: white!important;
  position: relative;
}
.taskname1{
  position: absolute!important;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
.taskname1,.creattype{
  width: 90%;
  margin: 0 auto;
  height: 40px;
  /* border:1px solid red; */
  position: relative;
  margin-top: 5px;
 
}
.taskname1 input{
   position: absolute;
   top: 0;
  width:99% ;
  height: 39px;
  /* border:1px solid red; */
  border:none;
  font-size: 16px;
    color: #181E33;
    padding: 0 10px;
    line-height: 38px;
    font-weight: bold;
  
}
.taskname1:hover{
      border: 1px solid #E1EAF4;
}
.creattask{
  background: #f2f4f7;
}
.taskcreat{
  /* margin-top:500px; */
  width: 100%;
  height: 100%;

  
  background: #f2f4f7;
}
</style>