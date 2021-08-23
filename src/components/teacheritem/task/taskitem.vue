<template>
  <div class='taskitem'>
      <div class='taskitemli'>
          <div class='taskitemleft'>
            <div class='taskname'>作业1</div>
            <div class='taskclass'>
                <span class='el-icon-user-solid'>18计科甲班</span>
            </div>
          <div class='taskdate'>
              <span class='el-icon-time'>作答时间:03-27 15:25</span>
          </div>
        </div>
        <div class='taskitemcenter'>
            <span>修改设置</span><span>删除</span>
        </div>
        <div class='taskitemright'>
            <div class='rightspan'>
                <span class='rightspan1'>0</span><span class='rightspan2'>/0</span>
            </div>
            
            <el-button size="medium" round>批阅</el-button>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.rightspan{
    margin-right:30px;
    float: left;
}
.rightspan1{
    font-size: 28px;
    font-weight: bold;
    font-family: din;
    
}
.taskitemright{
    margin-right: 5px   ;
    float: right;
    height: 100%;
    line-height: 101.15px;
}
.taskitemleft{
    height: 100%;
    float: left;
}
.taskitem:hover .taskitemcenter{
    opacity: 1;
    transition: all 0.5s;
}
.taskitemcenter{
    height: 100%;
    line-height: 101.15px;
    float: left;
    margin-left: 260px;
    opacity: 0;
}
.taskitemcenter span{
    color: #8A8B99;
    margin-left:40px;
}
.taskitemcenter span:hover{
    color: #00a1d6;
    transition: all 0.5s;
}
.taskclass:hover,.taskdate:hover{
    color: black;
    transition: 0.5s;
}
.taskclass,.taskdate{
    color: #8A8B99;
    margin-top: 10px;
}
.taskname:hover{
    color: #00a1d6;
    transition: 0.5s;
}
.taskname{
    font-size: 16px;
    line-height: 22px;
    max-width: 92%;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 10px;
}
.taskitemli{
    width: 95%;
    height: 85%;
    border-bottom: 1px solid rgb(238, 238, 238);
    margin: 0 auto;
    margin-top: 8px;
    position: relative;
}
.taskitem{
    height: 119px;
    width: 100%;
    margin-top: 20px;
    cursor: pointer;
}
</style>