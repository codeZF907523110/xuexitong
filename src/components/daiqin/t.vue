<template lang="">
    <div class='t'>
      <div class="admin_box" v-show='false'>
        <button @click='changeclick()' >更换头像</button>

        <button @click='lookClick()' id='look'>查看更多</button>
        <input type="file" @change="changeFile" name="avatar" id="file">
        <input type="button" @click="uploadImg" value="提交" id='upload'>
      </div>
      <div class='new-window' :class='{ show:isShow }'>
        <div class='page1'>
          <span class="btnClose" @click='btnClose()'></span>
          <p class='title'>更换头像</p>
          <div class="fileList">
            <div class = 'showimg' :style="'background-image:url(' + $store.state.userinfo.headphoto + ')'">
            </div>
            <br>
          </div>
          <div class='progress-bar'>
            <span :style='{width: width}'></span>
          </div>
          <!-- <h1>{{$store.state.userinfo.headphoto}}</h1> -->
          <button @click='sendClick()' id='send'>吧唧吧唧</button>
          <button @click='recClick()' id='receive' >确定</button>
          <button @click='btnClose()' class= 'cancel'>取消</button>
        </div>
      </div>
    </div>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "http://81.70.192.127:808";
axios.defaults.timeout = 10000;
// axios.defaults.baseURL = "http://127.0.0.1:808";
export default {
  data() {
    return {
      file: {},
      rate: 0,
      isShow: false,
      state: "",
      img: "",
    };
  },
  computed: {
    width() {
      return this.rate + "%";
    },
  },
  methods: {
    changeclick() {
      this.isShow = true;
    },
    sendClick() {
      document.getElementById("file").click();
    },
    lookClick() {
      this.$router.push("/imglist");
    },
    btnClose() {
      this.isShow = false;
    },
    recClick() {
      // document.getElementById("upload").click();
      axios
        .post("/headphoto", {
          name: this.$store.state.userinfo.name,
          headphoto: this.img,
        })
        .then((res) => {
          this.$store.state.userinfo = res.data;
        });
    },

    uploadImg() {
      let formData = new FormData();
      formData.append("avatar", this.file);
      axios
        .post("/file", formData, {
          onUploadProgress: (progressEvent) => {
            this.rate = parseInt(
              (progressEvent.loaded / progressEvent.total) * 100
            );
          },
        })
        .then((res) => {
          this.state = "success";
          this.img = res.data.headphoto;
          this.$store.state.userinfo.headphoto = res.data.headphoto;
        })
        .catch((error) => {
          if (error) {
            this.state = "error";
          }
        });
    },
    changeFile(e) {
      this.isShow = true;
      this.rate = 0;
      this.file = e.target.files[0];
      this.state = "";
      this.uploadImg();
    },
  },
};
</script>
<style scoped>
.showimg {
  height: 200px;
  background-size: cover;
  background-position: top center;
  width: 200px;
  margin: 0 auto;
}
.admin_box {
  margin: 0 calc(50% - 120px);
  position: absolute;
  top: 40%;
  transition: opacity 0.25s;
  width: 240px;
  z-index: 9999;
}
.admin_box input {
  display: none;
}

#look,
#receive,
.cancel {
  width: 240px;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  font-size: 13.3px;
  height: 49px;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: background-color 0.25s, box-shadow 0.25s, color 0.25s,
    opacity 0.25s;
  background-color: rgb(65, 145, 245);
  border: none;
  box-shadow: 0 5px 20px rgb(65 145 245 / 30%);
  color: #fff;
  transition: background-color 0.25s, box-shadow 0.25s, color 0.25s,
    opacity 0.25s;
}
#send {
  width: auto;
  height: auto;
}
#receive,
.cancel {
  width: 90px;
  height: 33px;
  line-height: 33px;
  display: inline-block;
  margin: 0 10px;
}
#look,
.cancel {
  background-color: #fff;
  color: rgb(65, 145, 245);
  box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
}
.cancel {
  border: 1px #000 solid;
  color: #000;
}
#send:hover {
  box-shadow: 0 5px 30px rgb(65 145 245 / 50%);
}
#receive:hover {
  box-shadow: 0 5px 30px rgb(65 145 245 / 30%);
}
.show {
  opacity: 1 !important;
  z-index: 9999 !important;
}
.new-window {
  background-color: #fff;
  border-radius: 20px;
  font-family: pingfang sc, microsoft yahei, sans-serif;
  box-shadow: 0 10px 20px rgb(0 0 0 / 5%);
  box-sizing: border-box;
  font-size: small;
  height: 430px;
  left: calc(50% - 200px);
  opacity: 0;
  overflow: hidden;
  padding: 40px 0 0;
  position: fixed;
  text-align: center;
  transition: all 0.5s;
  top: calc(50% - 200px);
  width: 400px;
  z-index: -9991;
}
.btnClose {
  cursor: pointer;
  height: 25px;
  position: absolute;
  right: 50px;
  width: 25px;
}
.btnClose::before,
.btnClose::after {
  background-color: #b4b4b4;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  top: calc(50% - 1px);
  transition: all 0.25s;
  width: 100%;
}
.btnClose::after {
  transform: rotate(-45deg);
}
.btnClose::before {
  transform: rotate(45deg);
}
.progress-bar {
  width: 80%;
  height: 20px;
  border-radius: 8px;
  background: rgb(214, 214, 214);
  overflow: hidden;
  margin: 24px 0;
  margin-left: 10%;
}
.progress-bar span {
  display: block;
  transition: all 0.5s;
  width: 0%;
  height: 100%;
  background: rgb(0, 195, 255);
}
.fileList {
  height: 180px;
  margin: 20px auto 15px;
  width: calc(100% - 80px);
  text-align: left;
}
.fileList a {
  color: #000;
  background-color: rgba(0, 0, 0, 0.03);
  cursor: default;
  display: block;
  padding: 10px 15px;
  transition: all 0.25s;
  word-break: break-all;
}
.size span {
  font-size: 12px;
  color: #b4b4b4;
}

.page1,
.page2 {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>