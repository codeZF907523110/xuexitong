<template>
  <div class="HeaderTop">
    <!-- <zhezhao></zhezhao> -->
    <div class="Headertop container">
      <div class="logo">
        <div class="menubutton" @click="menusideshow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src="./logo.jpg" @click="changmsite" class="logoimg" alt="" />
      </div>
      <div class="Header-text">
        <a @click="$router.push('/imglist')">推介课程</a>
        <a>学习中心</a>
        <a @click="$router.push('/textarea')">动态</a>
      </div>

      <div class="search">
        <search></search>
      </div>
      <div class="Headermessage el-icon-bell" @click="$router.push('/message')">
          <div class='redr' v-show="this.messrevers!=''"></div>
          <!-- <img class="messageimg"  src="./message.png" alt="" /> -->
      </div>
      <div class="HeaderText" v-if="!$store.state.userinfo.name">
        <a class="HeaderText wodeshoucang" @click="$router.push('/homepage/'+$store.state.userinfo._id+'/collection')">我的收藏</a>
        <a class="Header-Login" @click="login">登录</a>
        <span class="loginspan">/</span>
        <a class="Header-Logon" @click="logon">注册</a>
      </div>
      <div v-else class="HeaderText">
        <a class="HeaderText wodeshoucang" @click="$router.push('/homepage/'+$store.state.userinfo._id+'/collection')">我的收藏</a>
        <a class="HeaderText wodeshoucang" @click="$router.push('/education')">教学中心</a>
        <div class="Header-div" @mouseover="mouseOver" @mouseout="mouseOut">
          <img
            class="touxiang"
            @click="gotosetting('/homepage' + '/' + $store.state.userinfo._id)"
            :src="$store.state.userinfo.headphoto"
            alt=""
          />
          <div
            class="formation"
            v-show="isActive"
            @mouseover="mouseOver"
            @mouseout="mouseOut">
            <header-topin-formation :shujv="shujv"></header-topin-formation>
          </div>
        </div>
      </div>
    </div>
    <login v-show="$store.state.loginshow"></login>
    <sidebar v-show="$store.state.sideshow"></sidebar>
  </div>
</template>
<script>
import Login from "../Login/Login.vue";
import Sidebar from "../Sidebar/sidebar.vue";
import HeaderTopinFormation from "./HeaderTopinFormation.vue";
import axios from 'axios'
import Zhezhao from '../zhezhao/zhezhao.vue';
import Search from '../daiqin/Search.vue';
// import{getHomeMultidata}from '../../api/network/gather'
export default {
  data() {
    return {
      isActive: false,
      shujv: this.$store.state.userinfo,
      messrevers:[]
    };
  },
  methods: {
    gotosetting(path) {
      this.$router.push(path);
      setTimeout(() => {
        this.$router.go(0) 
      }, 30);
       axios
      .post("/gethomeinfo", {
        id: this.$route.params.id,
      })
      .then((res) => {
        this.homeinfos = res.data
        this.$store.state.homeinfo = res.data;
        console.log(this.$store.state.homeinfo.wenzhang);})
        
    },
    mouseOver() {
      this.isActive = true;
    },
    mouseOut() {
      this.isActive = false;
    },
    login() {
      this.$store.state.ischangecolor = true;
      this.$store.state.loginshow = true;
      
      // this.$store.state.islogin=true
      // this.$store.state.isshow=true
    },
    logon() {
      this.$store.state.ischangecolor = false;
      this.$store.state.loginshow = true;
      // this.$store.state.islogin=true
      // this.$store.state.isshow=true
    },
    changmsite() {
      this.$router.push("/home");
    },
    menusideshow() {
      this.$store.state.sideshow = true;
    },
  },
  components: { HeaderTopinFormation, Login, Sidebar, Zhezhao, Search},
  created(){
    axios.post('/auto',{
      name: this.$store.state.userinfo.name
    }).then(res=>{
        this.messrevers=res.data.unreadmessage.reverse()
    })
  }
};
</script>
<style>
.redr{
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
  top:26px;
  left: 14px;
}
body {
  width: 100%;
  height: 100%;
}
.Header-div {
  float: left;
  width: 35px;
  height: 35px;
  position: relative;
  height: 72px;
}
.wodeshoucang {
  float: left;
}
.showinformation-enter-active,
.show-leave-active {
  transition: all 2s;
}
.menubutton {
  width: 25px;
  height: 25px;
  border-radius: 8px;
  display: none;
  z-index: 1000;
  margin-top: 10px;
  margin-left: 10px;
}
.menubutton span {
  display: block;
  height: 4px;
  width: 95%;
  border-radius: 5px;
  margin-top: 5px;
}
.quite :hover {
  font-weight: bold;
}
input {
  outline: none;
}
.Header-text {
  
  float: left;
  text-align: center;
  font-size: 16px;
  height: 72px;
  line-height: 72px;
}
.Header-text :hover {
  font-weight: 600;
  cursor: pointer;
}
.Header-text a {
  margin-left: 35px;
  color:#303133
}
.touxiang {
  width: 32px;
  height: 32px;
  /* border:1px solid black; */
  border-radius: 50%;
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
}
.Headertop {
  height: 72px;
  width: 1150px;
  margin: 0 auto;
  /* box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1); */
  position: relative;
}
.header-topin-formation {
  position: absolute;

  margin-left: -100px;
}
.HeaderTop {
  background-color: #fff;
  position: relative;
}
.logoimg {
  width: 126px;
  height: 72px;
  float: left;
  cursor: pointer;
}
.type{
  display: none;
}
#search-keyword{
  border:none!important
}
.searchBtn{
  display: none;
}
.search {
  float: left;
  position: relative;
  height: 40px;
  padding-right: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  zoom: 1;
  border-radius: 8px;
  /* margin: 16px 70px; */
  margin-top: 16px;
  margin-left: 70px;
  margin-right: 50px;
  width: 324px;
  box-sizing: border-box;
  /* font-size: 0; */
}
.formation {
  position: absolute;
  top: 75px;
  left: -50px;
  margin-top: -20px;
  /* border:1px solid red;
           z-index: 9999999999; */
  z-index: 99999999999999;
}
/* .search-input {
  font-size: 14px;
  color: #a6a6a6;
  line-height: 24px;
  height: 40px;
  width: 100%;
  float: left;
  border: 0; */
  /* border: 1px solid red; */
/* } */
/* .search-img {
  width: 13%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
} */
.HeaderText {
  width: auto;
  color: #71777d;
  cursor: pointer;
  line-height: 72px;
  margin-left: 3%;
}
.HeaderText :hover {
  color: #00a1d6;
}
.Header-Login {
  margin-left: 50px;
}
.Headermessage {
  /* width: 100%; */
  width: 20px;
  height: 72px;
  float: left;
  margin-right: 10px;
  padding-top:28px;
  /* margin-left: 10%; */
  position: relative;
}
.el-icon-bell{
  font-size: 20px;
  
}
.el-icon-bell:hover{
  color: #00a1d6;
  transition: all 0.5s;
  cursor: pointer;
}
.messageimg {
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 25px;

  cursor: pointer;
}
@media screen and (max-width: 768px) {
  body {
    width: 100%;
    height: 100vh;
  }
  .logoimg {
    display: none;
  }
  .menubutton {
    display: block;
    float: left;
    /* margin-left: 10px; */
  }
  .Headertop {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgb(131, 131, 131);
  }
  .Header-text {
    display: none;
  }
  .search {
    /* margin-top: 10px; */
    position: absolute;
    height: 30px;
    border-radius: 30px;
    width: 60%;
    float: left;
    margin-top: 10px;
  }
  .search input {
    height: 100%;
    font-size: 12px;
    margin-left: 25px;
  }
  .search img {
    /* display: none; */
    border: none;
    position: absolute;
    margin-left: -95%;
    width: 20px;
    border-right: 1px solid rgb(173, 173, 173);
  }
  .wodeshoucang {
    display: none;
  }
  .Header-Login {
    float: left;
    margin-left: 75%;
  }
  .Header-Login,
  .Header-Logon {
    /* position: absolute; */

    font-size: 13px;
    height: 100%;
    line-height: 50px;
  }
  .Header-Logon {
    float: left;
    margin-left: 3px;
  }
  .Headermessage {
    display: none;
  }
  .loginspan {
    display: none;
  }
  .touxiang {
    width: 30px;
    height: 30px;
    margin-top: 30%;
    /* position: absolute; */
  }
  .Header-div {
    /* border:1px solid red; */
    width: 33px;
    height: 100%;
    position: absolute;
    margin-left: 80%;
  }
  .formation {
    display: none;
  }
}
</style>