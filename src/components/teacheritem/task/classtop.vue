<template>
  <div class='addclasstop'>
            <div class='addclassbtn'>
              <div class='addclassbtn1' @click='btnclick(buttonnumber)'>
                <el-button type="primary" round>
                    <e-button :itemnmber="buttonnumber" :itemtext="buttontext"></e-button>
                </el-button>
              </div>
                  <el-button size="medium" round v-show='buttonnumber==4' @click="$router.push('/alltask')">作业库</el-button>
                  
            </div>
            <div class='classsearch'>
              <el-input v-model="classsearch" placeholder="请输入内容"></el-input>
              <div class='el-icon-search inputsearch'></div>
            </div>
          </div>
</template>

<script>
import EButton from '../currency/e-button.vue'
export default {
  data(){
    return{
        classsearch:''
    }
  },
    components:{EButton},
    props:{
        buttontext:String,
        buttonnumber:Number
    },
    methods:{
      btnclick(buttonnumber){
        if(buttonnumber==4){
          this.$router.push('/creattask')
        }
      }
    }
}
</script>

<style>
.addclassbtn1{
  float: left;
  margin-right: 20px;
}
.addclassbtn button{
  /* line-height:0!important; */
  height: 35px;
  overflow: hidden;
}
.addclassbtn button span button{
  margin-top: -13px!important;
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
  /* border:1px solid red; */
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
  /* border:1px solid red; */
  border-radius: 8px;
  margin-top: 10px;
}
</style>