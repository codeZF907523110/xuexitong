<template>
  <div class='alltask'>
      <div class='alltasktop'>
          作业库
      </div>
      <div class='alltaski'>
          <div class='alltaskback el-icon-arrow-left' @click='$router.back()'><span >返回</span> </div>
          <classtop :buttonnumber=3 :buttontext="'新建作业'"></classtop>
          <div class='alltasks'>
              <div class='alltaskstop'>
                  <span class='alltstspan1'>全部作业</span><span class='alltstspan2'>共14份</span>
              </div>
              <div class='alltaskstopt'>
                  <div class='ttsinput'>
                      <input type="checkbox" name="" id="">
                  </div>
                   <span class='ttsspan1'>文件夹/作业</span>
                   <span class='ttsspan2'>创建者</span>
                   <span class='ttsspan3'>创建时间</span>
                   
                   
              </div>
              <div class='alltstones'>
                  <div class='alltaskstopt alltaskone'>
                    <div class='ttsinput'>
                        <input type="checkbox" name="" id="">
                    </div>
                    <span class='ttsspan1'>作业1</span>
                    <span class='ttsspan2'>张峰</span>
                    <span class='ttsspan3'>03-31 09:33</span>
                    <div class='alltaskactive'>
                        <a>发布</a>
                        <a>编辑</a>
                        <a>删除</a>
                   </div>
                  </div>
                  <div class='alltaskstopt alltaskone'>
                    <div class='ttsinput'>
                        <input type="checkbox" name="" id="">
                    </div>
                    <span class='ttsspan1'>作业1 <i>[未完成]</i></span>
                    <span class='ttsspan2'>张峰</span>
                    <span class='ttsspan3'>03-31 09:33</span>
                    <div class='alltaskactive'>
                        <a>发布</a>
                        <a>编辑</a>
                        <a>删除</a>
                   </div>
                  </div>
                  <div class='alltaskstopt alltaskone'>
                    <div class='ttsinput'>
                        <input type="checkbox" name="" id="">
                    </div>
                    <span class='ttsspan1'>作业1</span>
                    <span class='ttsspan2'>张峰</span>
                    <span class='ttsspan3'>03-31 09:33</span>
                  </div>
                  <div class='alltaskstopt alltaskone'>
                    <div class='ttsinput'>
                        <input type="checkbox" name="" id="">
                    </div>
                    <span class='ttsspan1'>作业1</span>
                    <span class='ttsspan2'>张峰</span>
                    <span class='ttsspan3'>03-31 09:33</span>
                  </div>
                  <div class='alltaskstopt alltaskone'>
                    <div class='ttsinput'>
                        <input type="checkbox" name="" id="">
                    </div>
                    <span class='ttsspan1'>作业1</span>
                    <span class='ttsspan2'>张峰</span>
                    <span class='ttsspan3'>03-31 09:33</span>
                  </div>
                  <div class='alltaskstopt alltaskone'>
                    <div class='ttsinput'>
                        <input type="checkbox" name="" id="">
                    </div>
                    <span class='ttsspan1'>作业1</span>
                    <span class='ttsspan2'>张峰</span>
                    <span class='ttsspan3'>03-31 09:33</span>
                  </div>
              </div>
          </div>
          <div class='fenye'>
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
              </div>
      </div>
  </div>
</template>

<script>
import classtop from './classtop.vue'
export default {
  components: { classtop },

}
</script>

<style>
.alltaskactive{
    margin-left: 850px;
    opacity: 0;
}
.alltaskone:hover{
    background: #F7FAFC!important;
    cursor: pointer;
}
.alltaskone:hover .alltaskactive{
    opacity: 1;
    transition: all 0.5s;
}
.alltaskstopt a{
    color: #3A8BFF;
    margin-left: 20px;
    cursor: pointer;
}
.alltaskstopt a:hover{
    color: #8cbcff;
    transition: all 0.5s;
}
.fenye{
    min-width:100%;
    /* border:1px solid red; */
    text-align: center;
    position: absolute;
    bottom: 30px;
}
.alltstones{
    margin-top: 5px;
    
}
.alltstones span{
    color: #333!important;
}
.alltaskone{
    background-color: white!important;
}
.alltaskstopt span{
    font-size: 12px;
    color: #A8A8B3;
    position: absolute;
}
.ttsspan1{
    left: 35px;
}
.ttsspan1 i{
    color: #C7C8D4;
}
.ttsspan2{
    left: 500px;
}
.ttsspan3{
    left: 700px;
}
.alltaskstopt{
    background: #F5F6F7;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border:1px solid rgba(212, 185, 185, 0)
}
.ttsinput{
    float: left;
    margin-left: 10px;
    margin-top: 0px;
}
.alltstspan1{
    color: #6B89B3;
    font-size: 14px;
    display: block;
    float: left;
}
.alltstspan2{
    display: block;
    float: right;
    margin-right: 0;
    font-size: 12px;
    color: #A8A8B3;
}
.alltaskstop{
    width: 100%;
    height: 20px;
    border:1px solid rgba(0, 0, 0, 0);
    margin-top: 5px;
}
.alltasks{
    position: relative;
    width: 97%;
    min-height:100px ;
    margin: 0 auto;
    border:1px solid rgba(0, 0, 0, 0)
}
.alltaskback{
    width: 100%;
    height: 40px;
    padding-top: 12px;
    border-bottom: 1px solid #F2F2F2;
    color: #91A0B5;
    padding-left: 10px;
}
.alltaskback span{
    cursor: pointer;
    margin-left: 5px;
}
.alltasktop{
    height: 40px;
    width: 100%;
    text-align: center;
    background: #3A4357;
    box-shadow: 0 2px 17px 0 rgba(211,211,211,0.50);
    line-height: 40px;
    font-size: 16px;
    color: #A8A8B3;
    position: fixed;
    top: 0;
    z-index: 1000;
}
.alltaski{
    position: relative;
    width: 1150px;
    min-height:610px ;
    border:1px solid red;
    border-radius: 8px;
    background-color: white;
    margin: 0 auto;
    margin-top:50px!important;
}
</style>