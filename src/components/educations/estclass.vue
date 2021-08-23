<template>
  <div class='estclass'>
      <div class='estclassi'>
          <div class='estclassitop'>
              新建课程
          </div>
          <div class='classes'>
              <span>课程名称:</span>
              <input type="text" placeholder="请输入课程名称">
          </div>
          <div class='classes'>
              <span>课程教师:</span>
              <input type="text" placeholder="请输入课程教师">
          </div>
          <div class='classes'>
              <span>课程封面:</span>
              <div class='classimg'>
                  <img :src="imgUrl" alt="">
              </div>
          </div>
          <div class='changeimg'>
              <div>
                  <input type="file" @change='changeimg'>
                  <i class="el-icon-edit"></i>
                  <span>修改封面</span>

              </div>
              
              <p>支持jpg/jpeg/gif/png格式 建议单张图片不超过4M
                课程封面图最佳尺寸：800*480</p>
          </div>
          <div class='classbtn'>
              <div class='el-button'>确定</div>
              <div class='el-button' @click='canclebtn'>取消</div>
          </div>
          
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl:'./touxiang.jpg',
            file:''
        }
    },
    methods:{
        canclebtn(){
            this.$store.state.estclassshow=false
        },
        changeimg(e){
            this.file=e.target.files[0]
            let url=''
            let reader=new FileReader()
            reader.readAsDataURL(this.file)
            let that=this
            reader.onload=function(e){
                url = this.result.substring(this.result.indexOf(",") + 1);
                that.imgUrl = "data:image/png;base64," + url;
            }
        }
    }
}
</script>

<style>
.classbtn{
    position: absolute;
    bottom:30px;
    /* top: 50%; */
    left: 50%;
    transform: translate(-50%,-50%);
}
.changeimg{
    width: 275px;
    margin-left:30px;
    float: left;
    margin-top:80px;
}
.changeimg div input{
    width: 100px;
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
.changeimg span{
    cursor: pointer;
    
}
.changeimg div:hover{
    color: #00a1d6;
    transition: all 0.3s;
}
.changeimg p{
    color: #a8a8b3;
    line-height: 20px;
    font-size: 12px;
}
.classimg{
    width: 130px;
    height: 160px;
    float: left;
    overflow: hidden;
    position: relative;
    left: 20px;
    top: -10px;
    cursor: pointer;
}
.classimg img{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
}
.classes span{
   
    font-size: 14px;
    color: #181e33;
    letter-spacing: .33px;
    z-index: 1;
    float: left;
}
.classes input{
    width: 70%;
    height: 44px;
    box-sizing: border-box;
    padding: 0 14px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #e1e1e5;
    margin-left: 10px;
    margin-top: -20px;
}
.classes{
    margin-top: 35px;
    margin-left: 30px;
}
.estclassitop{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgb(236, 236, 236);
    font-size: 20px;
    /* padding-top: 20px; */
    line-height: 60px;
    padding-left: 20px;
}
.estclass{
    transition: all 0.5s;
    /* opacity: 0; */
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(16,26,41,0.76);
    top: 0;
    left: 0;
    overflow: hidden;
}
.estclassi{
    width: 840px;
    height: 504px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    /* border:1px solid red; */
    border-radius: 10px;
    background-color: white;
}
</style>