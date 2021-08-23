<template>
  <div class="information">
    <div v-show="$store.state.isshow" class="informationdiv">
      <div class="information-top">
        <div class="information-touxiang">
          <img class="touxiangimg" :src="$store.state.userinfo.headphoto" alt="">
        </div>
        <div class="information-xinxi">
          <p class="informationId">{{$store.state.userinfo.name}}</p>
          <div class='exin'>
            <span class="experience">经验{{$store.state.userinfo.exp}}</span>
            <p class="integral">积分{{$store.state.userinfo.integral}}</p>
          </div>
        </div>
      </div>
      <div class='box'>
        <div class='boxi'>
          <div class='boxi-li'>
            <img src="./kecheng.png" alt="">
            <span>我的课程</span>
          </div>
        </div>
        <div class='boxi'>
          <div class='boxi-li'>
            <img src="./dingdan.png" alt="">
            <span @click="$router.push('/homepage/'+$store.state.userinfo._id+'/collection')">我的收藏</span>
          </div>
        </div>
        <div class='boxi'>
          <div class='boxi-li'>
            <img src="./jifen.png" alt="">
            <span>我的积分</span>
          </div>
        </div>
        <div class='boxi'>
          <div class='boxi-li'>
            <img src="./set.png" alt="">
            <span @click="$router.push('/homepage/'+$store.state.userinfo._id+'/setting')">个人设置</span>
          </div>
        </div>
      </div>
      <div class='quite' >
        <span @click='quitelogin'>退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    quitelogin(){
      console.log(this.$store.state.uerinfo);
      document.cookie = "name=" + '' + ";expires=Thu," +'-1';
      // console.log(document.cookie);
      this.$store.state.loginshow = true
      this.$store.state.isshow=false
      this.$store.state.ischangecolor=true
     this.$store.state.userinfo={}
     console.log(this.$store.state.userinfo);
     console.log(this.$store.state.userinfo.name);
      
    }
  }
}
</script>
<style>
.quite{
  margin-left: 200px;
  cursor: pointer;
  margin-top: 10px;
}
.information-xinxi{
  position: absolute;
  margin-left: 100px;
}
.box span{
  margin-left: 10px;
}
.box{
  width: 258px;
  height: 76px;
  margin: 0 auto;
  margin-top: 30px;
}
.box :hover{
  cursor: pointer;
  background-color: rgb(230, 230, 230);
}
.boxi{
  width: 127px;
  height: 36px;
  float: left;
  background-color: #f5f5f5;
  line-height: 40px;
}
.boxi img{
  width: 13%;
}
.boxi-li{
  height: 100%;
  color:black!important
}
.boxi-li img{
  margin-left: 5px;
}
.exin{
  font-weight: bold;
  margin-top: 30px;
}
.experience,.integral{
    color: #93999f;
    font-size: 12px;
    line-height: 12px;
    
}
.informationId{
  font-weight: bold;
    font-size: 16px;
    color: #07111b;
    width: 170px;
    line-height: 20px;

}
.informationdiv {
  width: 306px;
  height: 244px;
  /* position: fixed; */
  z-index: 10000000000;
  background-color: white;
  
}
.experience {
  float: left;
  margin-right: 20px;
}
.integral {
  margin-left: 10px;
}
.information-top {
    margin-top: -2px;
    width: 100%;
    height: 76px;
  
}
.information-touxiang img {
  margin-left: 10px;
  float: left;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 12px;
}
</style>