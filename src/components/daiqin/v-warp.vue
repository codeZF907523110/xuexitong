<!--  -->
<template>
<div>
  <div class="v_warp pc container">
    <div class="l_box">
      <!-- 标题部分 -->
      <div class="video_info">
        <!-- 标题 -->
        <div class="video_title">
          <h1>
            <a>活动作品</a>
            <span>{{ video.title }}</span>
          </h1>
        </div>
        <!-- 数据 -->
        <div class="video_data">
          <span>{{ video.count }}播放&nbsp;·&nbsp;</span
          ><span>2021-02-22 01:09:50</span>
        </div>
      </div>
      <!-- 播放器 -->
      <div class="video_player">
        <video
          controls
          src="https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Soldier76_Hero.mp4"
        ></video>
      </div>
      <!-- 互动区 -->
      <div class="I_area">
        <!-- 点赞 -->
        <div class="likes">
          <div v-if='!ishoucang'>
             <el-button type="success" size='mini' plain>收藏
            <span v-if="video.likes"><i></i>{{ video.likes.length }}</span>
          </el-button>
          </div>
         <div v-else>
             <el-button type="success" size='mini' plain>收藏
            <span v-if="video.likes"><i></i>{{ video.likes.length }}</span>
          </el-button>
          </div>
          
          <!-- <span v-if="video.star"><i></i>{{ video.star.length }}</span> -->
        </div>
        <!-- 更多 -->
        <div class="more"><i>1</i></div>
        <!-- 申诉————笔记 -->
        <div class="note">
          <div class="appeal">稿件投诉</div>
          <div class="note_btn">
            <i></i>
            <span>记笔记</span>
          </div>
        </div>
      </div>
      <!-- 视频介绍 -->
      <div class="video_synopsis">
        <!-- 提示 -->
        <div class="tips"><span>未经作者授权，禁止转载</span></div>
        <!-- 内容 -->
        <div class="synopsis_box">{{ video.signature }}</div>
        <!-- 展开更多 -->
        <div class="read_more">
          <span>展开更多</span>
        </div>
      </div>
      <!-- 视频标签 -->
      <div class="video_tags">
        <ul class="clearfix">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </div>
      <!-- 广告 -->
      <div class="ad">
        <div class="ad_left">
          <div>
            <b>寒假的第一个征稿活动，这次一定！</b>
          </div>
          <div>本视频参加过 <b>[ 寒假不咕咕 ]</b> 活动，该活动已结束~</div>
        </div>
        <div class="ad_right">
          <a href=""></a>
        </div>
      </div>
      <!-- 评论 -->
      <Comment :commentlist="video" />
    </div>
    <div class="r_box">
      <!-- 上区 用户资料 -->
      <div class="user">
        <!-- 头像 -->
        <div
          class="headphoto"
          :style="{ 'background-image': 'url(' + auther.headphoto + ')' }"
        ></div>
        <!-- 昵称 -->
        <div class="userinfo">
          <div class="name" :class="{ is_vip: true }">{{ auther.name }}</div>
          <!-- 签名 -->
          <div class="signature">
            {{ auther.signature }}
          </div>
          <!-- 关注 -->
          <div class="attention">
            <div class="a_btn" @click="like()">
              <b v-if="!isguanzhu"
                >关注<span v-if="auther.fans">{{ auther.fans.length }}</span></b
              >
              <b v-else>取消关注</b>
            </div>
          </div>
        </div>
      </div>
      <!-- 视频列表 -->
      <div class="video_list">
        <!-- 列表头部 -->
        <div class="list_head"><h3>视频选集</h3></div>
        <!-- 列表内容 -->
        <div class="list_box">
          <ul>
            <li
              class="active"
              v-for="(item, index) in $store.state.video.filename"
              :key="index"
            >
              <div class="list_title">
                <div class="list_number">P {{ index + 1 }} {{ item.title }}</div>
              </div>
              <div class="video_time">51:55</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="slide"></div>
      <!-- 推荐 -->
      <div class="recommend_list">
        <!-- 标题-->
        <div class="rec_title">相关推荐</div>
        <!-- 列表 -->
        <div class="rec_list">
          <ul>
            <li>
              <div class="rec_card">
                <div class="card_pic"></div>
                <div class="card_info">
                  <a href=""> 撒贝宁提问何同学，关于5G的问题 </a>
                  <div class="rec_username">魔音小皇子</div>
                  <div class="rec_data">234.3万 播放 · 1781 弹幕</div>
                </div>
              </div>
            </li>
            <li>
              <div class="rec_card">
                <div class="card_pic"></div>
                <div class="card_info">
                  <a href=""> 撒贝宁提问何同学，关于5G的问题 </a>
                  <div class="rec_username">魔音小皇子</div>
                  <div class="rec_data">234.3万 播放 · 1781 弹幕</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="v_warp phone">
    <!-- 播放器 -->
    <div class="video_player">
      <video
        controls
        src="https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Soldier76_Hero.mp4"
      ></video>
    </div>
    <!-- 上区 用户资料 -->
    <div class="user">
      <!-- 头像 -->
      <div
        class="headphoto"
        :style="{ 'background-image': 'url(' + auther.headphoto + ')' }"
      ></div>
      <!-- 昵称 -->
      <div class="userinfo">
        <div>
          <div class="name" :class="{ is_vip: true }">{{ auther.name }}</div>
          <!-- 签名 -->
          <div class="signature">
            <span style="margin-right: 10px" v-if="auther.fans"
              >{{ auther.fans.length }}粉丝</span
            >
            <span>1视频</span>
          </div>
        </div>
        <!-- 关注 -->
        <div class="attention">
          <div class="a_btn" @click="like()">
            <b v-if="!isguanzhu"
              >关注
              <span v-if="auther.fans">{{ auther.fans.length }}</span>
            </b>
            <b v-else>取消关注</b>
          </div>
          
          <div>
          <el-button type="primary">主要按钮</el-button>
          </div>
        </div>
        
      </div>
    </div>
    <!-- 标题部分 -->
    <div class="video_info">
      <!-- 标题 -->
      <div class="video_title">
        <h1>
          <a>活动作品</a>
          <span>{{ video.title }}</span>
        </h1>
      </div>
      <!-- 视频介绍 -->
      <div class="video_synopsis">
        <!-- 数据 -->
        <div class="video_data">
          <span>{{ video.count }}播放&nbsp;·&nbsp;</span>
          <span></span>
          <span>{{ video.time }}</span>
        </div>
        <!-- 提示 -->
        <div class="tips"><span>未经作者授权，禁止转载</span></div>
        <!-- 内容 -->
        <div class="synopsis_box">{{ video.signature }}</div>
      </div>
    </div>
    <!-- 互动区 -->
    <div class="I_area">
      <!-- 点赞 -->
      <div class="likes">
        <span><i></i>点赞 </span>
        <span><i></i>不喜欢</span>
        <span><i></i>投币</span>
        <span><i></i>收藏</span>
        <span><i></i>分享</span>
      </div>
    </div>
    <!-- 视频列表 -->
    <div class="video_list">
      <!-- 列表头部 -->
      <div class="list_head"><h3>视频选集</h3></div>
      <!-- 列表内容 -->
      <div class="list_box">
        <ul class="swiper-wrapper">
          <li
            class="active swiper-slide"
            v-for="(item, index) in $store.state.video.filename"
            :key="index"
          >
            <div class="list_title">
              <div
                class="list_number"
                @click="$router.push($route.path + '/P' + (index + 1))"
              >
                P{{ index + 1 }}{{ item.title }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 视频标签 -->
    <div class="video_tags">
      <ul class="clearfix">
        <li v-for="(item, index) in video.type" :key="index">{{ item }}</li>
      </ul>
    </div>
    <!-- 推荐 -->
    <div class="recommend_list">
      <!-- 标题-->
      <div class="rec_title">相关推荐</div>
      <!-- 广告 -->
      <div class="ad">
        <div class="ad_left">
          <div>
            <b>寒假的第一个征稿活动，这次一定！</b>
          </div>
          <div>本视频参加过 <b>[ 寒假不咕咕 ]</b> 活动，该活动已结束~</div>
        </div>
        <div class="ad_right">
          <a href=""></a>
        </div>
      </div>
      <!-- 列表 -->
      <div class="rec_list">
        <ul>
          <li>
            <div class="rec_card">
              <div class="card_pic"></div>
              <div class="card_info">
                <a href=""> 撒贝宁提问何同学，关于5G的问题 </a>
                <div class="rec_username">魔音小皇子</div>
                <div class="rec_data">234.3万 播放 · 1781 弹幕</div>
              </div>
            </div>
          </li>
          <li>
            <div class="rec_card">
              <div class="card_pic"></div>
              <div class="card_info">
                <a href=""> 撒贝宁提问何同学，关于5G的问题 </a>
                <div class="rec_username">魔音小皇子</div>
                <div class="rec_data">234.3万 播放 · 1781 弹幕</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <Comment />
    <!-- 评论 -->

    <!-- 分割线 -->
    <div class="slide"></div>
  </div>
  <v></v>
</div>
  
</template>

<script>
import Comment from "components/daiqin/Comment.vue";
import "swiper/swiper-bundle.min.css";
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import axios from "axios";
import V from './v.vue';
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://81.70.192.127:808";
export default {
  name: "v_warp",
  data() {
    return {
      auther: {},
      video: {},
      isguanzhu: false,
      islike:false
    };
  },
  components: {
    Comment,
    V,
  },
  props: {
    id: String,
  },
  methods: {
    like() {
      let FormData = {};
      FormData.name = this.$store.state.userinfo.name;
      FormData.id = this.auther._id.toString();
      if (this.isguanzhu) {
        FormData.type = 5;
        // 5guanzhu
      } else {
        FormData.type = 4;
        // 4quxiao
      }
      this.a(FormData);
    },
    islike() {
      let arr = this.auther.fans;
      if (arr.length != 0) {
        for (let i of arr) {
          if (i == this.$store.state.userinfo.name) {
            this.isguanzhu = true;
          } else {
            this.isguanzhu = false;
          }
        }
      } else {
        this.isguanzhu = false;
      }
    },
    a(FromData) {
      axios.post("/like", FromData).then((res) => {
        console.log(res.data);
        this.auther.fans = res.data;
        this.islike();
      });
    },
  },
  mounted() {
    //swiper6提供了use方法，其他写法没有啥区别和swiper4、5一样
    Swiper.use([Navigation, Pagination, Autoplay]);
    var recommendswiper = new Swiper("list_box", {
      loop: false, // 循环模式选项
      autoplay: false,
      scrollbar: false,
      noSwiping: true,
    });
  },
  created() {
    // 获取 视频详细信息
    axios
      .post("/getinfo", {
        id: this.id,
      })
      .then((res) => {
        this.auther = res.data.user;
        this.video = res.data.video;
        this.$store.state.video = res.data.video;
        this.islike();
      });
         
  },
};
</script>

<style scoped>
/* * {
  user-select: none;
} */
.pc {
  display: flex !important;
}
.phone {
  padding-top: 233px;
  padding-bottom: 45px;
  display: none !important;
}
i {
  font-style: normal;
}
.v_warp {
  display: flex;
  justify-content: space-around;
}
.l_box {
  width: 638px;
  position: relative;
}
.r_box {
  width: 320px;
  -ms-flex: none;
  flex: none;
  margin-left: 30px;
}
/* 信息区 */
.video_info {
  height: 96px;
  padding-top: 27px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.video_title h1 {
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  line-height: 26px;
  height: 26px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.video_title a {
  transition: none;
  display: inline-block;
  vertical-align: text-bottom;
  font-size: 12px;
  margin-right: 10px;
  padding: 0 5px;
  height: 22px;
  line-height: 22px;
  border-radius: 2px;
  color: #fff;
  background-color: #ffafc9;
  vertical-align: middle;
}
.video_data {
  font-size: 12px;
  height: 16px;
  color: #999;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 播放器 */
.video_player {
  width: 638px;
  height: 493px;
  position: static;
  background: #000;
}
.video_player video {
  width: 100%;
  height: 100%;
}
/* 互动区 */
.I_area {
  height: 41px;
  font-size: 14px;
  color: #505050;
  line-height: 28px;
  border-bottom: 1px solid #e5e9f0;
  padding-bottom: 12px;
  position: relative;
  margin-top: 16px;
}
/* 点赞 */
.likes {
  user-select: none;
  float: left;
  height: 30px;
  width: 66.3px;
}
.likes > span {
  width: 92px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
  white-space: nowrap;
  color: #505050;
  position: relative;
}
.likes > span i {
  display: inline-block;
  font-size: 28px;
  vertical-align: top;
  margin-right: 6px;
  width: 28px;
  height: 28px;
  color: #757575;
}
/* 更多 */

.more {
  cursor: pointer;
  color: #757575;
  font-size: 16px;
  float: right;
  transition: all 0.3s;
  position: relative;
  text-align: center;
}
.more i {
  height: 16px;
  width: 16px;
}

/* 申诉 */
.appeal {
  cursor: pointer;
  font-size: 12px;
  margin-right: 20px;
  color: #505050;
  transition: color 0.3s;
  line-height: 24px;
}
/* 笔记 */
.note {
  float: right;
  display: flex;
}
.note_btn {
  border: 1px solid #fb7299;
  color: #fb7299;
  transition: 0.3s;
  position: relative;
  margin-right: 25px;
  width: 71px;
  height: 24px;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  font-size: 12px;
  line-height: 20px;
}
/* 视频简介 */
.video_synopsis {
  position: relative;
  margin-top: 16px;
}
.video_synopsis .tips {
  margin-bottom: 15px;
}
.video_synopsis .tips span {
  margin-right: 20px;
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  color: #999;
}
.synopsis_box {
  white-space: pre-line;
  transition: all 0.3s;
  font-size: 12px;
  color: #212121;
  letter-spacing: 0;
  line-height: 18px;
  /* height: 63px; */
  width: 573px;
  overflow: hidden;
}
.read_more {
  margin-top: 12px;
  font-size: 12px;
  line-height: 18px;
}
.read_more span {
  cursor: pointer;
  color: #505050;
}

/* 视频标签 */
.video_tags {
  position: relative;
  clear: both;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e9ef;
  margin-top: 16px;
}
.video_tags ul {
  padding: 0;
}
.video_tags ul > li {
  float: left;
  margin: 0 10px 8px 0;
  background: #f4f4f4;
  border-radius: 100px;
  padding: 0 12px;
  position: relative;
  height: 22px;
  line-height: 22px;
  transition: all 0.3s;
  font-size: 12px;
  border: 1px solid #f4f4f4;
}

/* 左侧广告 */
.ad {
  margin-top: 20px;
  font-size: 14px;
  overflow: hidden;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  box-sizing: border-box;
}
.ad .ad_left {
  float: left;
  margin-right: -320px;
  padding-left: 20px;
  padding-right: 320px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ad_left div {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.ad .ad_right {
  float: right;
  height: 100px;
  position: relative;
  width: 320px;
}
.ad_right a {
  display: block;
  width: 320px;
  height: 100px;
  background: url();
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.ad_right ::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #fff, transparent 30%);
}

/* 右侧 用户区 */
.user {
  box-sizing: border-box;
  height: 96px;
  padding-top: 27px;
  padding-bottom: 12px;
  display: flex;
}
.headphoto {
  border-radius: 50%;
  float: left;
  width: 48px;
  height: 48px;
  position: relative;
  background-size: cover;
  background-position: top center;
}
.userinfo {
  width: 256px;
  height: 96px;
  margin-left: 13px;
  float: left;
}
.name {
  line-height: 20px;
  height: 20px;
  font-size: 14px;
  color: #212121;
  font-weight: 600;
  display: inline-block;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: top;
}
.is_vip {
  color: #fb7299;
}
/* 签名 */
.signature {
  margin-top: 4px;
  width: 256px;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 关注 */
.attention {
  margin-top: 5px;
}
.a_btn {
  box-sizing: border-box;
  padding: 0;
  line-height: 27px;
  height: 27px;
  border-radius: 2px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #00a1d6;
  color: #fff;
  position: relative;
  width: 146px;
}

/* 视频列表 */
.video_list {
  margin-top: 19px;
  margin-bottom: 20px;
  position: relative;
  background: #f4f4f4;
}
.list_head {
  display: flex;
  color: #222;
  padding: 10px 16px 0;
}
.list_head h3 {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
}
.list_box {
  padding: 4px 0;
  transition: all 0.3s;
}
ul,
li {
  list-style: none;
}
.list_box > ul {
  padding: 0 6px;
  max-height: 340px;
  overflow: auto;
}
.list_box > ul > li.active {
  background: #fff !important;
  padding: 0 0 0 20px !important;
}
.list_box > ul > li {
  display: flex;
  height: 30px;
  justify-content: space-around;
  line-height: 30px;
  padding: 0 0 0 10px;
  color: #6d757a;
  margin: 5px 0;
  transition: all 0.3s;
  border-radius: 3px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
}
.list_title {
  width: 80%;
  height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
.list_number {
  margin-right: 10px;
  font-size: 12px;
}
.video_time {
  font-size: 12px;
  color: #757575;
}
/* 分割线 */
.slide {
  min-height: 1px;
}

/* 推荐区 */
.rec_title {
  font-size: 16px;
  color: #222;
  margin-bottom: 6px;
}
/* 列表 */
.rec_list > ul {
  padding: 0;
}
.rec_list > ul > li {
  padding: 0 6px;
  margin: 12px 0;
}
.rec_card {
  display: flex;
}
.card_pic {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 2px;
  background: #f4f5f7;
}
.card_info {
  margin-left: 10px;
  font-size: 0;
  flex: 1;
}
.card_info > a {
  display: block;
  font-size: 14px;
  color: #222;
  font-weight: 500;
  white-space: normal;
  height: 36px;
  line-height: 18px;
  margin-bottom: 6px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 推荐 */
.rec_username,
.rec_data {
  width: 160px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  height: 16px;
  color: #999;
  font-size: 12px;
}
.rec_data {
  margin: 0;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .pc {
    display: none !important;
  }
  .phone {
    display: block !important;
  }
}

.phone {
  width: 100%;
  overflow: hidden;
}
.phone .video_player {
  width: 100%;
  height: 233px;
  top: 0;
  position: fixed;
  z-index: 99999;
}
.phone .video_player video {
  width: 100%;
  height: 100%;
}
.phone .likes > span {
  width: 62px;
}
.phone .userinfo {
  display: flex;
  height: auto;
  width: 100px;
  flex: 1;
  justify-content: space-between;
}
.phone .signature {
  width: auto;
}

.phone .attention .a_btn {
  width: 106px;
}
.phone .user {
  padding: 12px 10px 0 10px;
  height: auto;
}
.phone .video_title h1 {
  font-size: 16px;
}
.phone .video_info {
  padding: 0;
  margin: 0;
  height: auto;
}

.phone .video_info {
  padding: 0 10px;
}
.phone .video_tags {
  padding: 0 10px;
  margin-bottom: 10px;
}
.phone .synopsis_box {
  width: 100%;
}
.phone .tips {
  margin-bottom: 0;
}
.phone .list_box > ul > li {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  color: #212121;
  margin: 5px;
  padding: 0 10px 0 10px !important;
}
.phone .video_list {
  margin: 0;
  background: #fff;
}
.swiper-wrapper {
  width: auto;
}
.phone .list_box > ul > li.active {
  padding: 0 10px 0 10px !important;
  color: #fb7299;
  border: 1px solid #fb7299;
}
</style>
