<template>
  <div class='classitem'>
      <div class='classitemleft'>
          <div class='classname'>
              <div class='changename' v-show="ischangenameshow">
                  <input type="text" name="" id="" placeholder="18计科甲">
                  <div class='el-icon-check checkname' @click='renewname'></div>
              </div>
              
              <span v-show='!ischangenameshow'>18计科甲</span>
            </div>
          
          <div class='stunumber'>学生人数:0</div>
      </div>
      <div class='classhover'>
          <div class='el-icon-bottom'></div>
          <div class='el-icon-top'></div>
          <div class='removeclass'>删除课程</div>
          <div class='renewname' @click='renewname'>重命名</div>
          
      </div>
      <div class='classitemright'>
            <div class='classnumber'>邀请码:41658430</div>
            <div class='litleerwei'>
                <img src="../litleerwei.png" alt="">    
            </div>    
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            ischangenameshow:false
        }
    },
    methods:{
        renewname(){
            this.ischangenameshow=!this.ischangenameshow
        }
    }
}
</script>

<style>
.changename div{
    font-size:20px;
}
.el-icon-bottom,.el-icon-top{
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
    color: rgb(195, 233, 255);
    margin-left: 10px;
}
.el-icon-bottom:hover,.el-icon-top:hover{
    color: #3A8BFF;
    transition: all 0.4s;
}
.classitem:hover .classhover{
    opacity: 1;
    transition: all 0.5s;
}
.classhover{
    width: 200px;
    height: 100%;
    position: relative;
    line-height: 93px;
    margin-left: 700px;
    float: left;
    color: #3A8BFF;
    opacity: 0;
}
.renewname,.removeclass{
    width: 70px;
    text-align: center;
    float: right;
    cursor: pointer;
}
.renewname:hover,.removeclass:hover{
    color: rgb(116, 203, 253);
    transition: all 0.4s;
}
.classitemright div{
    float: left;

}
.classitem:hover{
    background: rgb(247, 250, 252);
    transition: all 0.5s;
}
.litleerwei{
   left: 20px;
   cursor: pointer;
}
.classnumber{
    float: left;
    margin-right: 20px;
    cursor: pointer;
}
.classitemright{
    position: absolute;
    width: 200px;
    height: 100%;
    line-height: 93px;
    right: 0;
    
}
.classitemleft{
    height: 70%;
    width: 600px!important;
    float: left;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 30px;
}
.classitem{
    position: relative;
    font-size: 16px;
    width: 100%;
    height: 93px;
    border-bottom: 1px solid rgb(238, 238, 238);
}
.classname{
    line-height:30px;
    height:30px;
    cursor: pointer;
}
.stunumber{
    color: #A8A8B3;
    margin-top: 5px;
    cursor: pointer;
}
</style>