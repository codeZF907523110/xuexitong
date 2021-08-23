<template>
  <div class="Login">
    
    <div class="login">
      <div class="loginlogo"><img src="./loginlogo.jpg" alt="" /></div>
      <div class="loginOrlogon">
        <div class="islogin loginactive changecolor">
          <span
            :class="{ changecolor2: $store.state.ischangecolor }"
            @click="changelogin"
            >登录</span
          >
        </div>
        <div class="islogon loginactive">
          <span
            :class="{ changecolor2: !$store.state.ischangecolor }"
            @click="changelogon"
            >注册</span
          >
        </div>
      </div>
      <div v-if="$store.state.ischangecolor">
        <div class="logininput">
          <div class="input">
            <input
              type="text"
              class="userid"
              v-model="dlzhanghao"
              placeholder="请输入登陆账号"
            />
          </div>
          <div class="input">
            <input
              type="password"
              class="userpassword"
              v-model="dlmima"
              placeholder="请输入密码"
            />
          </div>
           <div class='wrongtext' v-show='wrongtextshow1'>
              <el-alert
              v-model="wrongtext"
              :title='wrongtext'
              type="error"
              show-icon
              :closable='false'>
            </el-alert>
          </div>
        </div>
        <div class="auto-signin">
          <div class="signin">
            <div class="qqiri">
              <input type="checkbox" checked="checked" class="auto-cbx" />
              七日自动登录
            </div>
            <div class="forget forget1">忘记密码</div>
            <div>|</div>
            <div class="no-sign forget1">无法登录</div>
          </div>
        </div>

        <div class="button" @click="loginchenggong()">登录</div>
      </div>
      <div v-else>
        <div class="logininput">
          <div class="input">
            <input
              type="text"
              v-model="zczhanghao"
              class="userid"
              minlength="6"
              maxlength="16"
              placeholder="请输入注册账号"
            />
          </div>
          <div class="input">
            <input
              type="password"
              v-model="zcmima"
              class="userpassword"
              minlength="8"
              maxlength="16"
              placeholder="请输入密码"
            />
          </div>
         
          <div class="input">
            <input
              type="password"
              v-model="zcmima1"
              class="userpassword"
              minlength="8"
              maxlength="16"
              placeholder="请再次输入密码"
            />
          </div>
          <div class='wrongtext' v-show='wrongtextshow'>
            <el-alert
            v-model="wrongtext"
            :title='wrongtext'
            type="error"
            show-icon
            :closable='false'>
          </el-alert>
          </div>
          
        </div>
        <div class="auto-signin">
          <div class="signin">
            <input type="checkbox" checked="checked" class="auto-cbx" />
            同意《萌萌手抓饼注册协议》&《隐私政策》
          </div>
        </div>
        <div class="button" @click="logonchenggong()">注册</div>
      </div>
    </div>
    <!-- <h1>{{ischangecolor}}</h1> -->
    <zhezhao></zhezhao>
  </div>
</template>
<script>
import axios from "axios";
import zhezhao from '../zhezhao/zhezhao.vue';
// import axios from 'axios'
// import qs from 'qs'
axios.defaults.baseURL = "http://81.70.192.127:808";
// import {getUserinfo}from '../../api/network/gather'
export default {
  components: { zhezhao },
  name: "Login",
  data() {
    return {
      ischangecolor: this.$store.state.ischangecolor,
      dlzhanghao: "",
      dlmima: "",
      zczhanghao: "",
      zcmima: "",
      zcmima1:"",
      wrongtextshow:false,
       wrongtext:'哈哈哈',
       wrongtextshow1:false
    };
  },
  methods: {
    changelogin() {
      this.$store.state.ischangecolor = true;
    },
    changelogon() {
      this.$store.state.ischangecolor = false;
    },
    loginchenggong() {
      var weishu =
        this.dlzhanghao.length > 2 &&
        this.dlzhanghao.length < 18 &&
        this.dlmima.length > 8 &&
        this.dlmima.length < 16;
      var type1 = false,
        type2 = false,
        type3 = false;
      for (var value of this.dlmima) {
        if (value.charCodeAt() >= 48 && value.charCodeAt() <= 57) {
          type1 = true;
        } else if (value.charCodeAt() >= 97 && value.charCodeAt() <= 122) {
          type2 = true;
        } else {
          type3 = true;
        }
        console.log(value.charCodeAt());
      }
      
        axios
          .post("./login", {
            name: this.dlzhanghao,
            password: this.dlmima,
          })
          .then((res) => {
            if (res.data.errcode == 1) {
              this.wrongtextshow1=true
              this.wrongtext='账号不存在'
              
            } else if (res.data.errcode == 2) {
              this.wrongtextshow1=true
              this.wrongtext='账号密码错误'
            } else {
              this.$store.state.loginshow = false;
              this.$store.state.isshow = true;
              this.$store.state.userinfo = res.data;
              let d = new Date();
              d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 7);
              d = d.toUTCString(); // console.log(d);
              document.cookie = "name=" + res.data.name + ";expires=Thu," + d;
            }
          });
      
      // getUserinfo().then(res=>{
      //     this.$store.state.userinfo=res
      // })
    },
    logonchenggong() {
      var weishu =
        this.zczhanghao.length > 2 &&
        this.zczhanghao.length < 18 &&
        this.zcmima.length > 8 &&
        this.zcmima.length < 16;
      var type1 = false,
        type2 = false,
        type3 = false;
      for (var value of this.zcmima) {
        if (value.charCodeAt() >= 48 && value.charCodeAt() <= 57) {
          type1 = true;
        } else if (value.charCodeAt() >= 97 && value.charCodeAt() <= 122) {
          type2 = true;
        } else {
          type3 = true;
        }
        console.log(value.charCodeAt());
      }
      if (!(type1 && type2 && type3)) {
        this.wrongtext='密码必须由数字、字母、符号三种字符组成'
        this.wrongtextshow=true
      } else if (!weishu) {
        this.wrongtext='账号至少2位、最多11位组成、密码不得少于8位'
        this.wrongtextshow=true
      }else if(this.zcmima!=this.zcmima1){
        this.wrongtext='密码输入错误'
        this.wrongtextshow=true
      } else {
        axios
          .post("./logon", {
            name: this.zczhanghao,
            password: this.zcmima,
          })
          .then((res) => {
            console.log(res.data);
            this.$store.state.userinfo = res.data;
            if (res.data.errcode == 1) {
              console.log("用户名已存在");
            } else {
              this.$store.state.loginshow = false;
              this.$store.state.isshow = true;
            }
          });
      }
    },
    // axios.post('./zc',{
    //     zczhanghao:this.zczhanghao,
    //     zcmima:this.zcmima
    // })
  },
};
</script>
<style>
.wrongtext{
  width: 100%;
  position: absolute;
}
.forget1:hover{
  color: #00b1ec;
}
.auto-cbx {
  margin-left: 10px;
}
.auto-signin {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  line-height: 50px;
}
.signin div {
  float: left;
}
.no-sign,
.forget {
  cursor: pointer;
}
.forget {
  margin-left: 80px;
}
.signin {
  width: 328px;
  margin: 0 auto;
  /* margin-top:10px; */
  color: #9199a1;
  font-size: 15px;
  height: 100%;
  overflow: hidden;
}
.inputimg {
  width: 12%;
  height: 100%;
  background: rgba(28, 31, 33, 0.06);
  text-align: center;
  /* margin-right: 20px; */
  float: left;
}

.input {
  margin: 0 auto;
  width: 82%;
  height: 48px;
  line-height: 30px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888;
  border-radius: 8px;
  overflow: hidden;
}
.input input {
  padding-left: 10px;
  border: none;
  height: 100%;
  width: 100%;
  float: left;
  background: rgba(28, 31, 33, 0.06);
}

.changecolor2 {
  color: #00a1d6 !important;
  border-bottom: 4px solid #00a1d6 !important;
}
.loginactive {
  cursor: pointer;
  height: 100%;
  line-height: 50px;
  width: 20%;
  text-align: center;
  float: left;
  color: #787d82;
}
.button {
  width: 80%;
  height: 48px;
  margin: 0 auto;
  background-color: #00b1ec;
  text-align: center;
  color: white;
  line-height: 48px;
  cursor: pointer;
  border-radius: 25px;
  margin-top: 20px;
}
.button:hover {
  background-color: #00a1d6;
}
.logininput {
  width: 100%;
  /* max-height: 130px; */
  /* margin-bottom: 100px; */
}
.loginOrlogon {
  width: 80%;
  height: 50px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  color: #787d82;
  font-size: 20px;
  font-weight: 700;
  /* background-color: rgb(143, 143, 143); */
}
.loginlogo {
  width: 100%;
  height: 60px;
  text-align: center;
  margin-bottom: 5px;
}
.loginlogo img {
  /* margin-top: 5px; */
  width: 30%;
}
.login {
  position: fixed;
  left: calc(50% - 162px);
  width: 384px;
  /* height: 350px; */
  padding-bottom: 50px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid rgb(177, 177, 177);
  z-index: 9999999999999999;
}
</style>