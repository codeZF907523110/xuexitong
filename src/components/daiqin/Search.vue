<!-- 搜索栏 -->
<template>
  <div class="search1">
    <!-- <div class="s_logo"></div> -->
    <div class="s_input">
      <div class="type" @click="istypeShow = true">
        <span class="default">{{ title[active] }}</span>
        <ul class="list" :class="{ show: istypeShow }">
          <li
            v-for="(item, index) in title"
            :key="index"
            @click="active = index"
            v-show="index !== active"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="input1">
        <input
          id="search-keyword"
          placeholder="搜索你想要的内容..."
          type="text"
          maxlength="30"
          autocomplete="off"
          class="content"
          @focus="(isinputShow = true), (istypeShow = false)"
          v-model="keyword"
          @input="search()"
        />
        <div class="suggest-wrap" style="" :class="{ show: keyword!='' }">
          <div class="hotword-wrap">
            <ul class="vertical">
              <li class="title"><span>热搜榜</span></li>
              <li
                v-for="(item, index) in result"
                
                :key="index"
                @click="liClick(item)"
                 
              >
                <a class="vt-text" v-if="item.name == undefined"
                  ><span class="rank">{{ index + 1 }}</span> {{ item.title }}</a
                >
                <a class="vt-text" v-else
                  ><span class="rank">{{ index + 1 }}</span> {{ item.name }}</a
                >
              </li>
            </ul>
          </div>
          <ul class="history-wrap">
            <li class="title"><span>搜索历史</span></li>
            <li class="clearall"><a>清空搜索历史</a></li>
          </ul>
        </div>
      </div>
      <a href="javascript:;" class="searchBtn">搜 索</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://81.70.192.127:808";
axios.defaults.timeout = 10000;
export default {
  name: "Search",
  data() {
    return {
      istypeShow: false,
      isinputShow: false,
      title: ["综合", "视频", "文章", "用户"],
      active: 0,
      keyword: "",
      result: [{ name: "请输入要查询的内容" }],
    };
  },
  methods: {
    search() {
      this.isinputShow = true;
      if (this.keyword != "") {
        axios
          .post("/search", {
            keyword: this.keyword.toString(),
            type: this.active,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data.length === 0) {
              this.result = [{ name: "未找到" }];
            } else {
              this.result = res.data;
            }
          });
      } else {
        this.result = [{ name: "请输入要查询的内容" }];
      }
    },
    liClick(item) {
      if (item.sex >= 0) {
        // 个人主页路由
        this.$router.push("/homepage/" + item._id);
      } else if (item.createdtime) {
        // 文章页路由
        this.$router.push("/textarea" + item._id);
      } else {
        // 视频页路由
        this.$router.push("/video/" + item._id);
      }
    },
  },
};
</script>

<style scoped>
.search1 {
  width: 350px;
}
ul,
li {
  list-style: none;
  padding: 0;
}
.show {
  display: block !important;
}
.s_box {
  height: 40px;
  width: 500px;
}
.s_logo {
  text-align: center;
  margin: 40px auto 20px;
  width: 284px;
  height: 68px;
  background: transparent
    url(//s1.hdslb.com/bfs/static/jinkela/search/assets/search_index_logo_v2.4.png)
    no-repeat 50%;
}
.s_input {
  width: auto;
  height: 40px;
  position: relative;
}
.input1 {
  float: left;
  position: relative;
  width: 280px;
  height: 40px;
}
.type {
  width: 100px;
  height: 40px;
  user-select: none;
  line-height: 40px;
  border-radius: 4px 0 0 4px;
  text-align: center;
  border: 1px solid #ccd0d7;
  transition: border 0.1s linear;
  vertical-align: middle;
  background-color: #fff;
  cursor: pointer;
  padding: 0 7px;
  float: left;
}
.type:hover {
  border: 1px solid #aaa;
  background-image: linear-gradient(0deg, #f8f8f8, #fff);
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
}
.list {
  user-select: none;
  list-style: none;
  display: none;
  position: absolute;
  top: 40px;
  background: #fff;
  left: 0;
  border: 1px solid #ccd0d7;
  border-top: 0;
  z-index: 5000;
  border-radius: 0 0 4px 4px;
  padding: 0;
  top: 40px;
}
.list li {
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 98px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.list li:hover {
  background-color: #e5e9ef;
}
#search-keyword {
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #ddd;
  border-left: 0;
  border-right: 0;
  padding: 0 10px;
  height: 40px;
  color: #222;
  width: 280px;
}
.suggest-wrap {
  display: none;
  top: 42px;
  left: 0px;
  width: 280px;
  border: 1px solid #e5e9ef;
  position: absolute;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0;
  color: #222;
  background: #fff;
  z-index: 100;
  overflow: hidden;
  margin-top: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
}
.suggest-wrap .vertical {
  padding: 0;
  list-style: none;
  margin-top: 10px;
}
.suggest-wrap .title {
  border-top: 1px solid #e5e9ef;
  height: 10px;
  line-height: 10px;
  margin: 0 20px;
}
.suggest-wrap .title span {
  display: inline-block;
  font-size: 12px;
  color: #99a2aa;
  padding: 0 10px;
  text-align: center;
  background: #fff;
  position: relative;
  top: -6px;
}
.suggest-wrap .vt-text {
  height: 32px;
  display: block;
  line-height: 32px;
  font-size: 14px;
  position: relative;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  color: #222;
  padding: 0 20px;
  margin: 0 0 4px;
}
.suggest-wrap .vertical > li:nth-child(2) .rank {
  color: #e84242;
}
.suggest-wrap .vertical > li:nth-child(3) .rank {
  color: #ff6a22;
}
.suggest-wrap .vertical > li:nth-child(4) .rank {
  color: #e39423;
}
.suggest-wrap .vt-text .rank {
  margin-right: 10px;
  color: #b8c0cc;
}
.suggest-wrap .history-wrap .clearall {
  position: absolute;
  bottom: 0;
  right: 20px;
  font-size: 12px;
  color: #00a1d6;
}

.suggest-wrap .history-wrap {
  margin-top: 20px;
  position: relative;
  padding-bottom: 20px;
}
.searchBtn {
  float: left;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  font-weight: bolder;
  background-color: #00a1d6;
  color: #fff;
  border: 1px solid #008cd2;
  width: 120px;
  height: 40px;
  border-radius: 0 4px 4px 0;
}
.searchBtn:hover {
  background-color: #00b5e5;
}
</style>
