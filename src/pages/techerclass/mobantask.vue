<template>
  <div class='mobandaoru'>
      <div class='mobantop'>
          <span class='mobanback el-icon-arrow-left'>返回</span>
          智能导入
      </div>
      <div class='mobanbo'>
        <div class='mobanleft'>
          <div class='moleftli'>
            <div class='moleftlitop'>
              <div class='molefttext'>
                  <span class='moleftspan1'>编辑题目</span>
                  <span class='moleftspan2'>提示：若识别有误，可点击左侧题目按格式进行修改后重新识别</span>

                    <div class='moleftbtn el-dropdown-link'><el-button round>本地导入<input type="file" class='moleftbtnfile '></el-button></div>
                    
                  
              </div>
            </div>
            <div class='moleftlibo'></div>
          </div>
        </div>
        <div class='mobancenter'>
          <img src="./right.png" alt="">
          <div class='mobancenbtn '>
             <el-button type="success"  round>识别</el-button>
          </div>
        </div>
        <div class='mobanright'>
          <div class='morightli'>
            <div class='morightlitop'>
              <span class='morightspan1'>题目预览</span>
               <div class=' morightbtn'><el-button type="primary" round>加入作业</el-button></div>
            </div>
            <div class='morightlibo'></div>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.morightbtn{
  position: absolute;
  right:2px;
  top:0px;
}
.mobancenter{
  width: 170px;
  /* border:1px solid red; */
  float: left;
  text-align: center;
  height: 100%;
  padding-top:230px;
}
.mobancenbtn{
  margin: 0;
  padding: 0;
  height: 39px;
  width: 76px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 2px 6px 0 #7AB7E0;
}
.moleftbtn{
  position: absolute;
  right: 0;
  top:0;
  float: left;
}
.moleftbtnfile{
  width: 104px;
  height: 39px;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
}
.moleftlibo,.morightlibo{
  width: 100%;
  height:470px;
  border: 1px solid #F2F2F2; 
  position: absolute;
  bottom: 0;
}
.moleftspan1,.morightspan1{
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    display: block;
}
.moleftspan2{
  color: #A8A8B3;
  font-size: 12px;
  display: block;
  margin-top: 5px;
}
.mobanleft,.mobanright{
  width: 640px;
  height: 580px;
  background-color: white;
  border-radius: 8px;
  float: left;
  
}
.moleftli,.morightli{
  width: 90%;
  height: 90%;
  /* border:1px solid red; */
  margin: 0 auto;
  margin-top: 30px;
  
}
.moleftli{
  position: relative;
}
.morightli{
  position: relative;
}
.mobanright{
  float: right;
}
.mobanbo{
  width: 1450px;
  height: 580px;
  margin: 0 auto;
  /* border:1px solid red; */
  margin-top:30px;
}
.mobanback{
  float: left;
  margin-left: 20px;
  height: 40px;
  cursor: pointer;
  padding-top: 12px;
}
.mobanback:hover{
  color: #e0e0e0;
  transition: all 0.5s;
}
.mobantop{
    width: 100%;
    height: 40px;
    background: #3A4357;
    box-shadow: 0 2px 17px 0 rgba(211,211,211,0.50);
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #A8A8B3;
}
</style>