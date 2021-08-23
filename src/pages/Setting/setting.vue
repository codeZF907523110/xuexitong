<template>
    <div class='setting'>
        <settext :settext="'设置'"></settext>
        <!-- <div class='settext'>
          <img src="./leftjian.png" alt=""  @click='rouerback'>
          设置
        </div> -->
        <div class='phoneshowlist'>
          <div v-for="(item,index) in listnames" :class='{setlistbackcolor:setlistback==index}' @touchstart='setlistmouse(index)' @touchend='setlistup()' @click='changepath(index)'>
            <setlist :listname="item">
            </setlist></div>
        </div>
        <div>
        </div>
        <div class='settingd' >
            <div class='setting-center'>
                <div class='setting-left'>
                   
                    <div class='userinformation-boo'>
                        <div class='zhanghutext'>
                            <p>账户管理</p>
                        </div>
                        <div class='setlist' >
                                <div v-for='(item,index) in zhanghu'  @click='showright(index)' :class="{changelistcolor:ischangelistcolor == index}" >
                                     <div >  
                                        <span class='spanspan'>{{item}}</span>
                                    </div>
                                    
                                </div>
                            </div >
                        </div>
                </div>
                <div class='setting-right' >
                    <div class='setlistone'  v-show='ischangelistcolor==0'>
                        <zhanghaobangding></zhanghaobangding>
                    </div>
                    <div class='setlistone'  v-show='ischangelistcolor==1'> 
                        <gerenxinxi></gerenxinxi>
                                         
                    </div>
                    <div class='setlistone'  v-show='ischangelistcolor==2'>
                        <shimingrenzheng></shimingrenzheng>
                    </div>
                    <div class='setlistone'   v-show='ischangelistcolor==3'>
                        <xuejirenzheng></xuejirenzheng>
                    </div>
                      <div class='setlistone'   v-show='ischangelistcolor==4'>
                          <shoujiandizhi></shoujiandizhi>
                      </div>
                       <div class='setlistone'   v-show='ischangelistcolor==5'>
                          <jiaoshirenzheng></jiaoshirenzheng>
                      </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import HeaderTop from "components/HeaderTop/HeaderTop.vue";
import Zhanghaobangding from "pages/Setting/zhanghaobangding/zhanghaobangding.vue";
import Gerenxinxi from "pages/Setting/gerenxinxi/gerenxinxi.vue";
import Shimingrenzheng from "pages/Setting/shimingrenzheng/shimingrenzheng.vue";
import Xuejirenzheng from "pages/Setting/xuejirenzheng/xuejirenzheng.vue";
import Shoujiandizhi from "pages/Setting/shoujiandizhi/shoujiandizhi.vue";

import Setlist from '../../components/setlist/setlist.vue';
import Edit from '../Setting/gerenxinxi/edit.vue';
import Settext from '../../components/settext/settext.vue';
import Jiaoshirenzheng from './jiaoshirenzheng/jiaoshirenzheng.vue';
export default {
  name: "setting",
  data() {
    return {
      userid: this.$store.state.userinfo._id,
      isactive: 0,
      zhanghu: ["账户绑定", "个人信息", "实名认证", "学籍认证", "收件地址",'教师认证'],
    
      listnames:[
        '账号绑定','个人信息','实名认证','学籍认证','收件地址','护眼模式','管理存储空间','帮助中心','关于'
      ]
      ,
      ischangelistcolor:0,
      setlistback:-1
    };
  },
  methods: {
    buttonchangecolor() {
      this.isactive = true;
    },
    changepath(index){
      if(index==0){
        this.$router.push('/edit')
      }
    },
    showright(index) {
      console.log(index);
      this.ischangelistcolor = index
    },
    setlistmouse(index){
        this.setlistback=index
        console.log('setlistmouse');
        console.log(index);
    },
    setlistup(){
          this.setlistback=-1
          console.log('setlistup');
      
    }
    
  },
  components: {
    HeaderTop,
    Shimingrenzheng,
    Shoujiandizhi,
    Zhanghaobangding,
    Gerenxinxi,
    Xuejirenzheng,
    Setlist,
    Edit,
    Settext,
    Jiaoshirenzheng
  },

};
</script>

<style>
.setlistbackcolor{
  background-color: #00a1d6;
}
a {
  text-decoration: none;
}
.changelistcolor{
    background-color: #00a1d6;
}
.changelistcolor span{
    color: #fff;
}
.setlistone {
  /* display: none; */
  width: 100%;
  height: 100%;
  /* border:3px solid black */
}
.ditinformation-wai {
  width: 100vh;
  height: 100vh;
  border: 1px solid #00a1d6;
  display: flex;
  justify-content: center;
}
.settext{
  display: none;
}
.editinformation-wai {
  padding: 0 50px;
}
.setting-right {
  width: 80%;
  height: 100%;
  /* border:3px solid black */
  margin-left: 50px;
}
.setlist div {
  height:55px;
  width: 100%;
  line-height:55px;
  margin: 0 auto;
  cursor: pointer;
}
.spanspan {
  color: black;
  font-size: 15px;
  text-decoration: none;
}
/* .setlist :hover {
  background-color: rgb(255, 251, 251);
} */
/* .setlist :hover .spanspan {
  color: red;
} */
.setlist div span {
  margin-left: 30px;
}
.setlist {
  width: 100%;
  height: 93%;
}
.zhanghutext {
 
  border-bottom: 1px solid rgb(204, 204, 204);
  /* font-weight: bold; */
  font-size: 16px;
    line-height: 24px;
    margin: 12px 24px;
    font-weight: 700;
}
.usertubiao {
  width: 100%;
  height: 30px;
}
.userinformation{
  height: 40%!important;
}
.userinformation-boo {
  height: 55%;
  width: 100%;
}
.usertubiao .usertubiao-li {
  width: 79%;
  height: 100%;
  margin: 0 auto;
  line-height: 30px;
  margin-top: 10px;
}
.phoneshow{
  display: none;
}
.usertubiao .usertubiao-li div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* height: 100%; */
  float: left;
  text-align: center;
  /* background-color: black; */
}
.usertubiao .usertubiao-li div img {
  cursor: pointer;
  width: 40%;
  border-radius: 50%;
  /* background-color: rgb(255, 255, 255); */
  /* border:1px solid black */
}
.userinformation .userid {
  overflow: hidden;
  font-size: 12px;
  color: rgb(168, 168, 168);
  height: 20px;
  text-align: center;
}
.userid p {
  margin-top: -2px;
}
.username1 {
  text-align: center;
  /* width: 70%; */
  height: 30px;
  margin: 0 auto;
}
.username1 p {
  font-size: 20px;
  font-weight: 540;
  margin: 0 auto;
}
.userinformation {
  width: 100%;
  height: 45%;
}
.usertouxiang {
  width: 100%;
  height: 55%;
  text-align: center;
  position: relative;
}
.settou {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid rgb(241, 241, 241);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 20px;
  cursor: pointer;
  overflow: hidden;
}
.settouxiang {
  width: 102%;
  /* border:1px solid red; */
  position: absolute;
  margin-top: 45px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  /* z-index:999; */
  /* margin-top: 70px; */
  /* display: none; */
  transform: translateY(80px);
  transition: all 0.5s;
}
.settouxiang span {
  color: rgb(231, 231, 231);
  font-size: 13px;
  display: block;
  margin-top: 8px;
  margin-left: -2px;
}
.usertouxiang img {
  background-position: center center;

  width: 80x;
  height: 80px;
  /* border:5px solid rgb(211, 211, 211); */
  border-radius: 50%;
}
.settou:hover .settouxiang {
  display: block;
  transform: translateY(0);
}
.settingd {
  width: 100%;
  height: 670px;
  /* float: left; */
}
.setting-center {
  width: 1110px;
  height: 90%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.setting-left {
  height: 100%;
  width: 20%;
  background-color: #f8fafc;
  float: left;
}
.phoneshowlist{
  display: none;
}
@media screen and (max-width: 768px){
  .settext{
    display:block;
    height: 40px;
    text-align: center;
    line-height: 40px;
    width: 100%;
    border-bottom: 1px solid rgb(226, 226, 226);
    font-size: 18px;
    font-weight: 500;
  }
  .settext img{
    position: absolute;
     width: 20px;
    /* display: block; */
    float:left;
    margin-left: -40%;
    margin-top:10px;
  }
  .head{
    display: none;
  }
  .settingd{
    display: none;
  }
  .phoneshowlist{
    display: block;
    overflow: hidden;
  }
  .phoneshowlist div{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-bottom: 1px solid rgb(226, 226, 226);
    /* margin-left: 20px; */
    padding-left: 15px;
  }
  .phoneshowlist div img{
    width: 20px;
    /* display: block; */
    float:right;
    margin-right: 50px;
    margin-top: 15px;
  }
  .edit{
    margin-left: 0px;
  }
  .edit-li{
    margin-top: 10px;
  }
  .edit span{
    font-size: 15px;
    font-weight: 500;
    margin-left: 20px;
  }
  .nichenginput,.zhiweioption{
    width: 70%;
  }
  .zhiwei,.diqu,.sexinput,.qianming{
    margin-top:20px;
  }
  .distpicker-address-wrapper select{
    width: 20%;
  }
  .sexinput{width: 70%;}
  .qianming{
    height: 90px
  }
  .qianming span{
    display:block;
    height:100% ;
    float: left;
  }
  .qianming textarea{
    margin-top: 0;
  }
  .saveinformation{
    width: 70%;
    margin: 0 auto;
    /* margin-right: 20px; */
    background-color: #00a1d6;
    color:white;
    margin-top: 50px;
  }
}

</style>