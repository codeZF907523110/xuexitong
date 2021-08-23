<!--  -->
<template>
  <div class="reply_box">
    <a href="" class="reply_img"><img :src="user.headphoto" alt="" /></a>
    <a href="" class="name">{{ reply.name }}</a>
    <a href="" class="level l8"><i></i></a>
    <span class="text">{{ reply.content }}</span>
    <div class="info">
      <!-- 时间 -->
      <span class="time"></span>
      <!-- 点赞数 -->
      <span class="like" @click="like()" :class="{ liked: isliked }">
        <i></i>
        <span>{{ reply.likes.length }}</span>
      </span>
      <!-- 回复 -->
      <span class="reply" @click="rclick(reply.name)">回复</span>
      <!-- 操作 -->
      <div class="oper">
        <div class="o_btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://81.70.192.127:808";
export default {
  name: "",
  data() {
    return {
      isliked: false,
      ishated: false,
      user: {},
    };
  },
  props: {
    reply: Object,
    index: Number,
    cindex: Number,
  },
  methods: {
    like() {
      let FormData = {};
      FormData.name = this.$store.state.userinfo.name;
      FormData.id = this.$store.state.video._id.toString();
      FormData.index = this.cindex;
      FormData.cindex = this.index;
      if (this.isliked) {
        FormData.type = 3;
        // 2回复点赞
      } else {
        FormData.type = 2;
        // 3回复取消赞
      }
      this.a(FormData);
    },
    islike() {
      let arr = this.$store.state.video.comment[this.cindex].reply[this.index]
        .likes;
      if (arr.length != 0) {
        for (let i of arr) {
          if (i == this.$store.state.userinfo.name) {
            this.isliked = true;
          } else {
            this.isliked = false;
          }
        }
      } else {
        this.isliked = false;
      }
    },
    a(FromData) {
      axios.post("/like", FromData).then((res) => {
        this.$store.state.video = res.data;
        this.islike();
      });
    },
    rclick(name) {
      let data = name;
      this.$emit("kk", data);
    },
  },
  created() {
    axios.post("/getinfo", { name: this.reply.name }).then((res) => {
      this.user = res.data.user;
      this.islike();
    });
  },
};
</script>

<style scoped>
.reply_box {
  padding: 10px 0;
}
.reply_box a {
  display: inline-block;
}
.reply_img {
  display: inline-block;
  position: relative;
  margin-right: 10px;
  vertical-align: top;
}
.reply_img img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.name {
  display: inline-block;
  /* width: calc(100% - 34px); */
  padding-bottom: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #6d757a;
}
</style>
