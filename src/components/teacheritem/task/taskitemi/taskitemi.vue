<template>
  <div class='taskitemi'>
      <!-- {{localStorage.getItem('givelocalStorage')}} -->
      <!-- 刚进页面显示内容 -->
      <div class='taskitemlii' v-if='taskitemnu==-1'>
        点击题型按钮添加题目
      </div>
      <!-- 各种题型显示内容 -->
      <div class='taskitemli' v-else>
          <div class='taskradio'>
              <div class='tasktypes'>
                  <span class='tasktypes1'  v-if='givelocalStorages[taskitemnu]'>{{locallength+1}}</span><span class='tasktypes2'>{{tasktypetitle}}{{taskitemnu+1}}</span>
              </div>
              <!-- 输入题干 -->
              <div class="eeditor">
                  <quill-editor :options="custom" ref="myTextEditor" v-model="stem" :config="editorOption"></quill-editor>
              </div>
              <!-- 小题数 -->
              <div class='litasknumber' v-show='false'>
                <span>小题数:{{litasknumber}}</span>
              </div>
              <!-- 输入解答题答案 -->
              <div class='jiexi ansertask' v-show='taskitemnu==4||taskitemnu==5||taskitemnu==6||taskitemnu==7||taskitemnu==13'>
                <div class='oboxinput jiexiinput' v-show='!showansertask' @click='ansertaskshow'>请输入答案</div>
                <div class='optionqui jiexiqui' v-show='showansertask'>
                      <quill-editor :options="custom" ref="myTextEditor" v-model="questionanser" :config="editorOption"></quill-editor>
                    </div>
              </div>
              <!--选项循环 -->
              <div class='optinboxnumber' v-show='taskitemnu==0||taskitemnu==1||taskitemnu==2||taskitemnu==8||taskitemnu==9||taskitemnu==10||taskitemnu==11||taskitemnu==12||taskitemnu==14' v-for='(itemi,indexi) in litasknumber'>
                <!-- 完形填空小题头 -->
                <div class='litasktop' v-show='taskitemnu==11||taskitemnu==12||taskitemnu==14'>
                  <span class='el-icon-caret-right'></span>
                  <span>第{{itemi}}小题</span>
                  <span class='el-icon-delete litaskdele' @click='liraskdele'></span>
                </div>
                <!-- 小题的题干 -->
                <div class="eeditor" v-show='taskitemnu==12||taskitemnu==14'>
                  <quill-editor :options="custom" ref="myTextEditor" v-model="littletaskt[indexi]"  :config="editorOption"></quill-editor>
                </div>
                <!-- 选项 -->
                <!-- {{indexi}} {{optionnumber[indexi]}} -->
                <div v-show='true'  class='optinbox' v-for="(item,index) in optionnumber[indexi]">
                  <!-- {{optionnumber}} -->
                  <div class='completion' v-show='taskitemnu==2||taskitemnu==8||taskitemnu==9'>第{{item}}空</div>
                  <div class='obox' v-show='taskitemnu==0||taskitemnu==11|taskitemnu==12||taskitemnu==14' :class="{optioncheck:taskitemnu==1,panduandi:optioncheckwhat[indexi]==optioncheck[index]}" @click='oboxclick(indexi,index)'>{{optioncheck[index]}}</div>
                  <div class='obox' v-show='taskitemnu==1' :class="{optioncheck:taskitemnu==1,panduandi:morechecked.indexOf(optioncheck[index])!=-1}" @click='morcheck(index)'>{{optioncheck[index]}}</div>
                  <div class='obox' v-show='taskitemnu==10'  >{{optioncheck[index]}}</div>
                  <div class='oboxin' >
                      <div class='oboxinput' v-show='showoptionqui[indexi]!=index' @click='optionquishow(indexi,index)'></div>
                      <div class='optionqui' v-show='showoptionqui[indexi]==index'>
                          <quill-editor :options="custom" ref="myTextEditor" v-model="optiontaskst[index]"  :config="editorOption"></quill-editor>
                      </div>
                      <div class='el-icon-close' @click='optiondele(indexi)'></div>
                  </div>
                  
                </div>
                <div class='mydaan' v-show='taskitemnu==0||taskitemnu==11|taskitemnu==12||taskitemnu==14'>我的答案:{{optioncheckwhat[indexi]}}</div>
                <div class='moreradiodaan mydaan' v-show='taskitemnu==1'>我的答案:<span v-for="(ii,indexj) in morechecked">{{ii}}&nbsp;</span></div>
                <!-- 当是完形填空时添加选项 -->
                 <div class='addoption' @click='addoptionsi(indexi)' v-show='taskitemnu==11||taskitemnu==12||taskitemnu==14'>
                  <span>+</span>
                  <a >添加选项</a>
                </div>
              </div>
              <!-- 判断题 -->
              <div class='optinbox panduanti' v-show='taskitemnu==3' >
                    <div class='panduan'>
                      <div class='obox panduand' :class='{panduandi:panduanda==true}' @click='panduand(1)'>A</div><span>对</span>
                    </div>
                    <div class='panduan'>
                      <div class='obox panduand' :class='{panduandi:panduanda==false}' @click='panduand(2)'>B</div><span>错</span>
                    </div>
                    <div>我的答案:<span v-if='panduanda'>对</span><span v-else>错</span></div>
              </div>
              <!-- 添加选项 -->
              <div class='addoption' @click='addoptions' v-show='taskitemnu==0||taskitemnu==1||taskitemnu==2||taskitemnu==8||taskitemnu==9||taskitemnu==10'>
                <span>+</span>
                <a >添加选项</a>
              </div>
              <!-- 添加完形填空小题 -->
              <div class='addlitask addoption' @click='addlitask' v-show='taskitemnu==11||taskitemnu==12||taskitemnu==14'>
                <span>+</span>
                <a >添加小题</a>
              </div>
              <!-- 打乱填空题顺序 -->
              <div v-show='taskitemnu==2'>
                <div class='checkupset'> <el-checkbox v-model="isupset">答案顺序打乱也判正确</el-checkbox></div>
                <div class='checkupsettext'>
                  <span>1. 一个空有多种答案时请用";"隔开。如：答案一;答案二</span>
                  <span>2. 若试题答案是数字，可设置范围，两个数字之间用"-"。如：1-9，学生填写1到9之间的数字都算正确（包括1和9）</span>
                </div>
              </div>
              <!-- 排序题 -->
              <div class='paixvtask' v-show='taskitemnu==10'>
                <p><span>答案</span>：请在下方下拉框中对选项进行排序（顺序从左到右）</p>
                <div class='paixvoptionboxi'>
                  <div class='paixvoptionbox' v-for="(item,index) in optionnumber[0]">
                    <el-dropdown trigger="click">
                    <span class="el-dropdown-link nanduspan">
                      {{paixvitem[index]}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu class='nandueldro' slot="dropdown">
                      <div v-for="item in paixvoption" @click='paixvitemcl(index,item)'>
                        <el-dropdown-item >{{item}}</el-dropdown-item>
                      </div>
                      
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                </div>
              </div>
              <!-- 答案解析 -->
              <div class='jiexi'>
                <div class='oboxinput jiexiinput' v-show='!showjiexiqui' @click='jiexiquishow'>请输入答案解析</div>
                <div class='optionqui jiexiqui' v-show='showjiexiqui'>
                      <quill-editor :options="custom" ref="myTextEditor" v-model="anseranslysis"  :config="editorOption"></quill-editor>
                    </div>
              </div>
              <!-- 难度和完成提交 -->
              <div class='nandu'>
                <span>难度</span>
                   <el-dropdown trigger="click">
                      <span class="el-dropdown-link nanduspan" >
                        {{nandutext}}<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu class='nandueldro' slot="dropdown">
                        <div v-for="item in nandu" @click='nanducheck(item)'>
                          <el-dropdown-item >{{item}}</el-dropdown-item>
                        </div>
                        
                      </el-dropdown-menu>
                    </el-dropdown>
                    <div class='creatfinish'>
                        <el-button type="primary" size='small' round>完成</el-button>
                    </div>
              </div>
              
        </div>
      </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";

import 'quill/dist/quill.js';
export default {
    data() {
      return {     
        order:0,
        morechecked:[],                   //多选题的答案
        anseranslysis:'请输入答案解析',    //答案解析
        paixvitem:['A','A','A','A'],      //排序题顺序
        optioncheckwhat:[],               //单选题答案
        isupset:false,                    //填空题是否可以打乱
        optiontaskst:[],                  //题干
        littletaskt:[],                   //小题题干
        questionanser:'请输入答案',        //解答题答案
        stem:'请输入题干',                 //题干
        nandutext:'简单',                 //难易程度
        morchecks:[],                     //多选题是否被选
        optionchecks:[-1],                //单选题是否被选住
        panduanda:true,                   //判断题的对错
        litasknumber:1,                   //小题数量
        showansertask:false,              //解答题是否显示
        nandu:['简单','中等','困难'],      //难易程度
        showjiexiqui:false,               //显示解析题
        paixvoption:['A','B','C','D'],    //排序题顺序选择
        optioncheck:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        optionnumber:[4],                 //选择题选项的数量
        showoptionqui:[-1],               //是否显示选择题
        editorOption: {                   
          // 编辑器的配置
          // something config
          theme: "bubble",
        },
        custom:{                          //编辑区
          modules:{
            toolbar:[
              [{'align':[]},'bold','italic','underline','strike',{'font':[]},{'size':[]}],
              [{'color':[]},{'background':[]}],
              [{'script':'sub'},{'script':'super'}]
              [{'direction':'rtl'}],
              [{'indent':'-1'},{'indent':'+1'}],
              [{'list':'ordered'},{'list':'bullet'}],
              ['blockquote','code-block','image','video'],
            ]
          }
        },
        isedit:false,
        givelocalStorage:{},
        givelocalStorages:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
        getlocalStorages:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
      };
  },
  props:{
    taskitemnu:Number,
    tasktypetitle:String,
    locallength:Number,
    ischange:Boolean
  },
  methods:{
    nanducheck(item){
      this.nandutext=item
      this.$forceUpdate();
    },
    paixvitemcl(index,item){
      this.paixvitem[index]=item
      this.$forceUpdate();
    },
    morcheck(index){
      this.isedit=false
      this.morchecks[index]=!this.morchecks[index]
      let indexii=this.morechecked.indexOf(this.optioncheck[index])
      if(indexii==-1){
        this.morechecked.push(this.optioncheck[index])
      }else{
        this.morechecked.splice(indexii,1)
      }
      this.$forceUpdate();
    },
    optiondele(indexi){
      this.optionnumber[indexi]--
      this.$forceUpdate();
    },
    addoptionsi(indexi){
      this.optionnumber[indexi]++
      this.$forceUpdate();
    },
    oboxclick(indexi,index){
      this.isedit=false
      this.optionchecks[indexi]=index
      this.optioncheckwhat[indexi]=this.optioncheck[index]
      this.$forceUpdate();
    },
    liraskdele(){
      this.litasknumber--
    },
    addlitask(){
      this.litasknumber++
      this.optionnumber.push(4)
      
    },
    optionquishow(indexi,index){
      this.isedit=false
      this.showoptionqui[indexi]=index
      this.$forceUpdate();
    },
    jiexiquishow(){
      this.showjiexiqui=true
    },
    addoptions(){
      if(this.optionnumber[0]<26){
        this.optionnumber[0]++
        this.$forceUpdate();
        this.paixvitem.push('A')
      }
    },
    ansertaskshow(){
      this.showansertask=true
    },
    panduand(index){
      this.isedit=false
      if(index==1){
          this.panduanda=true
          
      }else{
          this.panduanda=false  
      }
    }
  },
  components: {
    quillEditor
  },
  watch:{
      taskitemnu(val, oldVal){
        if(JSON.parse(localStorage.getItem('givelocalStorages'))!=null){
            this.givelocalStorages=JSON.parse(localStorage.getItem('givelocalStorages'))
            // console.log(this.givelocalStorages,'zzz');
        }
      },
      ischange(){
        if(JSON.parse(localStorage.getItem('givelocalStorages'))!=null){
          Object.assign(this.$data, this.$options.data())
          this.givelocalStorages=JSON.parse(localStorage.getItem('givelocalStorages'))

        }
      },
      givelocalStorage(val, oldVal){
          if(this.isedit==false){
            this.givelocalStorages[this.taskitemnu][this.locallength]=this.givelocalStorage
            console.log(this.givelocalStorages,'bbb');
            localStorage.setItem('givelocalStorages',JSON.stringify(this.givelocalStorages))
            console.log(JSON.parse(localStorage.getItem('givelocalStorages')),'aaaaaaaaa');
         }
      }
    },
  updated(){
    this.givelocalStorage={
          stem:this.stem,
          tasktypetitle:this.tasktypetitle,
          optiontaskst:this.optiontaskst,
          optioncheckwhat:this.optioncheckwhat,
          anseranslysis:this.anseranslysis,
          nandutext:this.nandutext,
          morechecked:this.morechecked,
          isupset:this.isupset,
          panduanda:this.panduanda,
          questionanser:this.questionanser,
          paixvitem:this.paixvitem,
          optionnumber:this.optionnumber,
          litasknumber:this.litasknumber
    }
  },
  created(){
    if(JSON.parse(localStorage.getItem('givelocalStorages'))!=null){
      this.givelocalStorages=JSON.parse(localStorage.getItem('givelocalStorages'))
    }
    console.log(this.givelocalStorages,'creat');
    //  localStorage.removeItem('givelocalStorages')
  }
}
</script>

<style >
.mydaan{
  margin-top: 20px;
}
.oboxin .el-icon-close{
position: absolute;
top:15px;
right: 0;
cursor: pointer;
color: #a8a8b3;
font-size: 15px;
}
.oboxin .el-icon-close:hover{
  font-weight: bold;
  transition: all 0.4s;
}
.taskitemlii{
  line-height: 570px;
  text-align: center;
  color: #a8a8b3;
}
.addlitask{
  background-color:#ffffff ;
  border:1px solid #007aff;
  border-radius: 20px;
  height:30px;
  line-height: 30px;
}
.optinboxnumber{
  margin-top: 20px;
}
.litaskdele{
  float: right;
  margin-top: 15px;
  cursor: pointer;
}
.litasktop{
    height: 40px;
    background: rgb(247, 248, 250);
    margin-bottom: 20px;
    padding: 0px 20px;
    line-height: 40px;
    font-size: 14px;
    color: rgb(100, 104, 115);
    margin-top: 10px;
}
.litasknumber{
  color: #A8A8B3;
    font-size: 12px;
}
.paixvoptionboxi{
  margin-left: -38px;
}
.paixvoptionbox{
  float: left;
  margin-left: 20px;
  margin-top: 5px;
}
.paixvspan i{
  float: right;
}
.paixvtask{
  min-height: 55px;
  margin-top: 10px;
  padding-bottom: 15px;
}
.paixvtask p{
  color: #A8A8B3;
  font-size: 12px;
}
.panduandi{
  background-color: #409EFF;
}
.panduand{
  margin-top: 10px!important;
  
}
.panduanti{
  height: 100px;
}
.panduan{
  height: 50px;
  margin-top: 0!important;
  line-height: 50px!important;
}
.panduan span{
  margin-left: 20px;
  margin-top: -10px;
}
.checkupsettext span{
  display: block;
  color: #A8A8B3;
  margin-top: 5px;
}
.checkupset{
  margin-top: 20px;
}
.completion{
  height: 38px;
  line-height: 38px;
  float: left;
}
.optioncheck{
  border-radius: 0px!important;
}
.nandueldro{
  width:80px!important;
}
.creatfinish{
float: right;
margin-right: 20px;
}
.nanduspan{
  display: block;
  width:58px!important;
  height: 24px!important;
  border: 1px solid #E1E1E5;
  line-height:24px ;
}
.nanduspan:hover{
  box-shadow: 0 0 4px 1px #75BAFF;
  transition: all 0.4s;
}
.nanduspan i{
  float: right;
  line-height: 24px;
}
.nandu{
  min-height:30px ;
  /* margin-top: 100px!important; */
  margin-top: 20px;
  line-height: 30px;
  margin-bottom: 20px;
}
.jiexiqui{
  width: 98%!important;
  margin-top: 20px;
  margin-left: 0px!important;
}
.jiexiinput{
  width: 98%!important;
  margin-left: 0px!important;
}
.jiexi{
  margin-top: 20px;
  min-height: 38px;
}
.addoption{
  width: 70px;
  color: #3A8BFF;
  cursor: pointer;
  margin-top: 20px;
}
.addoption:hover,.addoption a:hover{
  color:#7eb4ff ;
  transition: all 0.4s;
}
.addoption a{
  text-decoration: none;
  color: #3A8BFF;
}
.addoption span{
  font-weight: bold;
  font-size: 16px;
}
.optinbox{
  min-height: 45px;
  margin-top: 20px;
  position: relative;
  }
.optionqui{
  /* position: absolute; */
  width:95%;
  /* float: left; */
  margin-left: 50px;
  right: 0;
  height: 150px;
}
.eeditor{
  height: 150px;
}
.oboxinput{
  width: 90%;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #E1EAF4;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    line-height: 38px;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0 10px;
    white-space: nowrap;
    float: left;
    margin-left: 20px;
}
.oboxinput:hover{
  border: 1px solid #CCDEF3;
  transition: all 0.4s;
}
.obox{
    float: left;
    width: 30px;
    height: 30px;
    border: 1px solid #E1EAF4;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: #646873;
    margin-top: 4px;
    cursor: pointer;
}
.obox:hover{
  border: 1px solid #CCDEF3;
  background-color: #CCDEF3;
  transition: all 0.4s;
}
.quill-editor{
  height:100px!important;
}
.tasktypes2{
    margin-left: 15px;
}
.tasktypes span{
    font-weight: bold;
    color: #181E33;
    width: 30px;
    /* float: left; */
}
.tasktypes{
    height: 50px;
    line-height: 50px;
}
body{
    background: #f2f4f7;
}
.taskradio{
    width: 100%;
    background-color: white;
    border-radius: 8px;
}
.taskitemli,.taskitemlii{
    width: 90%;
    height: 80%;
    margin: 0 auto;
    /* border:1px solid red */
}
.taskitemi{
    position: relative;
    min-height: 100%;
    background-color: white;
    border-radius: 8px;
}
</style>