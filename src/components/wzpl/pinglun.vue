<!--  -->
<template>
  <!-- 发布评论 -->
  <div class="c_issue" v-if="isshow">
    <!-- 头像 -->
    <div class="headphoto">
      <img :src="$store.state.userinfo.headphoto" alt="" />
    </div>
    <!-- 内容 -->
    <div class="c_text">
      
      <textarea name="" v-model="text" :placeholder='ph'>
      </textarea>
    </div>
    <button type="submit" class="c_submit" @click="addAcomment(Otype)">
      发表评论
    </button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://81.70.192.127:808";
axios.defaults.timeout = 10000;
export default {
  name: "",
  data() {
    return {
      text: "",
      ph: "发条友善的评论",
    };
  },
  props: {
    Otype: Number,
    byname: String,
    index: Number,
    isshow: Boolean,
    pholder: String,
  },
  watch: {
    pholder: function (n, o) {
      if (n == "") {
        this.text = "";
      } else {
        this.text = "@" + n + ":";
      }
    },
  },
  methods: {
    // 评论
    addAcomment(Otype) {
      let FromData = {};
      FromData.id = this.$route.params.id;
      FromData.type = Otype;
      FromData.name = this.$store.state.userinfo.name;
      FromData.content = this.text;
      FromData.likes = [];
      let date = new Date();
      FromData.time = date.getTime();
      // 判断是回复
      if (Otype === 1) {
        FromData.index = this.index;
      }
      FromData.reply = [];
      axios.post("/addwzreply", FromData).then((res) => {
        this.text = "";
        this.$store.state.wenzhang = res.data;
      });
    },
    textarea() {
      if (this.pholder == "" || this.pholder == undefined) {
        return (this.text = "");
      } else {
        return (this.text = "@" + this.pholder + ":");
      }
    },
  },
};
</script>

<style  scoped>
/* 发布评论 */
/* 头像 */
.c_issue {
  display: flex;
  margin: 10px 0;
  justify-content: space-around;
}
.c_issue .headphoto {
  float: left;
  margin: 0 0 0 5px;
  position: relative;
}
.c_issue .headphoto img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
/* 内容 */
.c_text {
  width: 60%;
  position: relative;
}
.c_text textarea {
  font-size: 12px;
  display: inline-block;
  box-sizing: border-box;
  background-color: #f4f5f7;
  border: 1px solid #e5e9ef;
  overflow: auto;
  border-radius: 4px;
  color: #555;
  width: 100% !important;
  height: 65px;
  transition: 0s;
  padding: 5px 10px;
  line-height: normal;
  outline: none;
  resize: none;
}
.c_submit {
  width: 70px;
  height: 64px;
  padding: 4px 15px;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  min-width: 60px;
  vertical-align: top;
  cursor: pointer;
  background-color: #00a1d6;
  border: 1px solid #00a1d6;
  transition: all 0.1s;
  /* user-select: none; */
  outline: none;
}
.c_submit:hover {
  background-color: #00b5e5;
  border-color: #00b5e5;
}
/* 评论列表 */
.c_list {
  padding-top: 20px;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .c_issue {
    background: #fff;
    margin: 0;
    position: fixed;
    z-index: 9999999;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px 10px;
  }
  .headphoto {
    display: none;
  }
  .c_text {
    width: 76%;
    height: 35px;
  }
  .c_text textarea {
    height: 33px;
    text-indent: 10px;
    line-height: 33px;
    padding: 0;
  }
  .c_submit {
    height: 33px;
    padding: 0;
    width: 20%;
  }
}
</style>
