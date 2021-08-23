<!--  -->
<template>
  <div class="home">
    <header-top></header-top>
    <Elevator />
    <!-- <Nav /> -->
    <Swiper />
    <div class="section">
      <div class="container">
        <div class="text-center bigtitle">萌萌手抓饼提供了各种服务</div>
        <div class="text-center smalltitle">从视频论坛到在线考试</div>
      </div>
      <div class="itemcontainer container">
        <div class="itemc" @click=''>
          <a >
            <div class="imgc el-icon-edit-outline"></div>
            <p>在线考试</p>
          </a>
        </div>
        <div class="itemc" @click="$router.push('/textarea/0')">
          <a 
            ><div class="imgc el-icon-s-management"></div>
            <p>精品文章</p></a
          >
        </div>
        <div class="itemc"  @click="$router.push('/imglist/0&0')">
          <a 
            ><div class="imgc el-icon-video-camera"></div>
            <p>视频学习</p></a
          >
        </div>
        <div class="itemc"  @click="$router.push('/postvideo')">
          <a >
            <div class="imgc el-icon-upload"></div>
            <p>资源上传</p></a
          >
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="text-center bigtitle">多种功能，满足多种使用场景</div>
        <div class="text-center smalltitle">
          产品功能为服务场景进行了深入优化设计。
        </div>
      </div>
      <div class="container itemcontainer">
        <div class="bitem">
          <div class="btop">
            <p class="smalltitle">
              <i class="el-icon-user-solid"></i>
              个人中心
            </p>
            <p>关注、点赞、回复互动</p>
          </div>
          <div class="bbox">
            <ul>
              <li><i class="el-icon-s-tools"></i> 个人设置</li>
              <li><i class="el-icon-star-off"></i> 我的收藏</li>
              <li><i class="el-icon-picture-outline"></i> 修改头像</li>
              <li><i class="el-icon-bell"></i>消息中心</li>
              <li><i class="el-icon-search"></i>按需查找</li>
              <li><i class="el-icon-thumb"></i>点赞互动</li>
              <li><i class="el-icon-edit"></i>发表文章</li>
              <li><i class="el-icon-upload"></i>资源共享</li>
            </ul>
          </div>
        </div>
        <div class="bitem">
          <div class="btop">
            <p class="smalltitle">
              <i class="el-icon-user-solid"></i>
              资源多多
            </p>
            <p>每日更新海量资源</p>
          </div>
          <div class="bbox">
            <ul>
              <li><i class="el-icon-more"></i> 多种分类</li>
              <li><i class="el-icon-plus"></i>同类推荐</li>
              <li><i class="el-icon-chat-dot-round"></i> 讨论交流</li>
              <li><i class="el-icon-edit"></i>考试复习</li>
              <li><i class="el-icon-search"></i>按需查找</li>
              <li><i class="el-icon-thumb"></i>点赞互动</li>
              <li><i class="el-icon-edit"></i>发表文章</li>
              <li><i class="el-icon-upload"></i>资源共享</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 视频 -->
    <div class="container">
      <el-tabs v-model="VactiveName">
        <el-tab-pane label="推荐" name="first">
          <Class :max="8" />
        </el-tab-pane>
        <el-tab-pane label="web前端" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="后端开发" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="精品课程" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>

    <div class="wzbox container">
      <div class="sleft">
        <div class="stitle">文章推荐</div>
        <ul>
          <li v-for='(item,index) in fabuitem' @click="gotowenzhang(index)">
            {{index}}.{{item.title}}
            
          </li>
        </ul>
      </div>
      <div class="sright">
        广告
      </div>
    </div>
    
    <!-- 文章 -->
    <!-- <div class="container">
      <el-tabs v-model="WactiveName">
        <el-tab-pane label="推荐" name="first">
          <Class :max="8" />
        </el-tab-pane>
        <el-tab-pane label="web前端" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="后端开发" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="精品课程" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div> -->
    <!-- <div class="box container">
      <div class="row row1">
        <div class="big rbox">
          <div class="cloak"></div>
          <div class="hidebox">
            V8引擎本身使用了一些最新的编译技术。这使得用Javascript这类脚本语言编写出来的代码运行速度获得了极大提升，又节省了开发成本。对性能的苛求是Node的一个关键因素。
            Javascript是一个事件驱动语言，Node利用了这个优点，编写出可扩展性高的服务器。Node采用了一个称为“事件循环(event
            loop）”的架构，使得编写可扩展性高的服务器变得既容易又安全。提高服务器性能的技巧有多种多样。Node选择了一种既能提高性能，又能减低开发复杂度的架构。这是一个非常重要的特性。并发编程通常很复杂且布满地雷。Node绕过了这些，但仍提供很好的性能。
          </div>
          <p class="title">Node.js</p>
        </div>
        <div class="rbox">
          <div class="cloak"></div>
          <div class="hidebox">
            Vue.js是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue采用自底向上增量开发的设计。Vue
            的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue
            完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用
          </div>
          <p class="title">Vue</p>
        </div>
      </div>
      <div class="row row2">
        <div class="rbox">
          <div class="cloak"></div>
          <div class="hidebox">
            JavaScript（简称“JS”）
            是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript
            基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。
          </div>
          <p class="title">JavaScript</p>
        </div>
        <div class="rbox">
          <div class="cloak"></div>
          <div class="hidebox">
            AJAX是使用 JavaScript
            向服务器提出请求并处理响应而不阻塞用户核心对象XMLHttpRequest。通过这个对象，您的
            JavaScript 可在不重载页面的情况与 Web
            服务器交换数据，即在不需要刷新页面的情况下，就可以产生局部刷新的效果。
          </div>
          <p class="title">AJAX</p>
        </div>
        <div class="rbox">
          <div class="cloak"></div>
          <div class="hidebox">
            jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write
            Less，Do
            More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。
          </div>
          <p class="title">JQuery</p>
        </div>
      </div>
      <div class="row row3">
        <div class="rbox">
          <div class="cloak"></div>
          <div class="hidebox">你郭大爷</div>
          <p class="title">嵌入式开发</p>
        </div>
        <div class="big rbox">
          <div class="cloak"></div>
          <div class="hidebox">
            MongoDB是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。它支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是它支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。
          </div>
          <p class="title">Mongodb</p>
        </div>
      </div>
    </div> -->

    <!-- <Exam/> -->
    <!-- <Server /> -->
    <!-- <T/>   -->
    <!-- <V /> -->

    <Bottom />
    <!-- <Search /> -->
  </div>
</template>


<script>
import axios from 'axios'
import Swiper from "components/daiqin/Swiper.vue"; //轮播图
import Exam from "components/daiqin/Exam.vue"; // 考试
import T from "components/daiqin/t.vue"; // 文件
import Server from "components/daiqin/Server.vue"; //后台管理
import Bottom from "components/daiqin/Bottom.vue"; // 底部
import Nav from "components/daiqin/Nav.vue"; //导航栏
import Search from "components/daiqin/Search.vue"; // 搜索框
import V from "components/daiqin/v.vue"; // 忘了是什么
import Class from "components/daiqin/Class.vue"; //视频列表
import Elevator from "components/daiqin/Elevator.vue"; //侧栏
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
import Dynamicitem from '../../components/dynamicitem/dynamicitem.vue';
import search from '../../components/daiqin/Search.vue';
export default {
  name: "Home",
  components: {
    Swiper,
    Exam,
    T,
    Server,
    Bottom,
    Nav,
    Search,
    V,
    Class,
    Elevator,
    HeaderTop,
    Dynamicitem,
    search,
  },
  data() {
    return {
      menutitle: ["推荐", "前端开发", "后端开发", "精品课程"],
      wenzhangtitle: ["推荐", "精品文章", "面试指南", "专栏"],
      activeIndex: 0,
      VactiveName: "first",
      WactiveName: "second",
      fabuitem:[]
    };
  },
  methods: {
    menuClick() {},
    gotowenzhang(index){
      this.$router.push('/textarea/wenzhang/'+this.fabuitem[index]._id)
    }
  },
  created() {
    // new Date()
    // let time = new Date().getTime();
    // console.log(time);
    // var date = new Date(time);
    // console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());
    axios.get('/getwenzhang').then(res=>{
        this.fabuitem=res.data.reverse()
    })
  
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
  background: #fff;
}
.list {
  width: 100%;
  text-align: center;
  position: relative;
  background-color: #fff;
  /* border-bottom: 1px solid #e5e5e5; */
  border-top: 1px solid #e5e5e5;
  margin: 20px 0 30px 0;
}
.list h3 {
  background: url(https://www.imooc.com/static/img/index-v3/title-bg3.png)
    no-repeat left center / auto 29px;
  height: 36px;
  padding-left: 180px;
  margin: 10px auto;
  display: flex;
  line-height: 36px;
  align-items: center;
}
.list h3 ul {
  margin: 0;
  user-select: none;
  list-style: none;
}
.list h3 ul li a.active {
  color: #e02020 !important;
  font-weight: bold;
}
.list h3 ul li {
  position: relative;
  padding: 0 14px;
  margin: 0;
  float: left;
  font-size: 14px;
  line-height: 30px;
  cursor: pointer;
  transition: all 0.2s;
}
.list h3 ul li a {
  color: #545c63;
}
.list h3 ul li a:hover {
  color: #e02020;
}
.videolist {
  /* max-height: 600px; */
  overflow: hidden;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

a.wenzhangitem {
  position: relative;
  float: left;
  width: 368px;
  height: 178px;
  margin: 0 24px 24px 0;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgb(95 101 105 / 10%);
  border-radius: 8px;
  transition: all 0.2s;
  overflow: hidden;
}

.title {
  font-size: 30px;
  font-weight: 700;
}
.cloak {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background: #606266;
  opacity: 0.1;
  transition: all 1s;
}
.box {
  margin-top: 44px;
  margin-bottom: 44px;
}
.row {
  width: 100%;
  margin: 0;
}
.rbox {
  height: 271px;
  padding: 20px;
  float: left;
  position: relative;
  width: 33%;
  background-repeat: no-repeat;
  overflow: hidden;
}
.big {
  width: 66%;
}
.title {
  font-size: 30px;
  color: #ffffff;
  letter-spacing: 0;
  margin-bottom: 25px;
  position: relative;
  z-index: 9999;
}
.row .rbox .hidebox {
  width: 100%;
  transition: all 0.5s;
  height: 100%;
  padding: 0 20px;
  color: #fff;
  font-size: 16px;
  padding-top: 80px;
  z-index: 9999;
  position: absolute;
  top: 100%;
  left: 0;
}
.row .rbox:hover .hidebox {
  top: 0;
}
.row .rbox:hover .cloak {
  opacity: 0.9;
}
.row1 .rbox:nth-child(1) .cloak {
  background: rgba(0, 82, 217, 1);
}
.row1 .rbox:nth-child(2) .cloak {
  background: rgba(155, 38, 182, 0.7);
}
.row2 .rbox:nth-child(1) .cloak {
  background: rgba(0, 169, 206, 0.7);
}
.row2 .rbox:nth-child(2) .cloak {
  background: rgba(255, 103, 31, 0.7);
}
.row2 .rbox:nth-child(3) .cloak {
  background: rgba(0, 169, 206, 0.7);
}
.row3 .rbox:nth-child(1) .cloak {
  background: rgba(150, 140, 131, 0.7);
}
.row3 .rbox:nth-child(2) .cloak {
  background: rgba(121, 192, 0, 0.7);
}

.row1 .rbox:nth-child(1) {
  background-image: url("~assets/img/001.svg");
  background-size: 100% 100%;
  background-position: center -20px;
}
.row1 .rbox:nth-child(2) {
  background-image: url("~assets/img/logo.png");
  background-size: 50%;
  background-position: center 50px;
}
.row2 .rbox:nth-child(1) {
  background-image: url("~assets/img/js.jpg");
  background-position: center 50px;
}
.row2 .rbox:nth-child(2) {
  background-image: url("~assets/img/ajax.jpg");
  background-size: 60%;
  background-position: center 50px;
}
.row2 .rbox:nth-child(3) {
  background-image: url("~assets/img/jquery.jpg");
  background-size: 70%;
  background-position: center 70px;
}
.row3 .rbox:nth-child(1) {
  background-image: url("~assets/img/006.jpg");
}
.row3 .rbox:nth-child(2) {
  background-image: url("~assets/img/mongodb.jpg");
  background-size: 60%;
  background-position: center 00px;
}
.row1 .rbox:nth-child(1) .hidebox {
  background: rgba(0, 82, 217, 1);
}
.row1 .rbox:nth-child(2) .hidebox {
  background: rgba(155, 38, 182, 1);
}
.row2 .rbox:nth-child(1) .hidebox {
  background: rgba(0, 169, 206, 1);
}
.row2 .rbox:nth-child(2) .hidebox {
  background: rgba(255, 103, 31, 1);
}
.row2 .rbox:nth-child(3) .hidebox {
  background: rgba(0, 169, 206, 1);
}
.row3 .rbox:nth-child(1) .hidebox {
  background: rgba(150, 140, 131, 1);
}
.row3 .rbox:nth-child(2) .hidebox {
  background: rgba(121, 192, 0, 1);
}
.section {
  padding: 40px;
  width: 100%;
  background: #fff;
}
.bigtitle {
  font-size: 36px;
  font-weight: 600;
}
.smalltitle {
  margin-top: 16px;
  font-size: 20px;
}
.itemcontainer {
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
}
.itemc {
  width: 20%;
  font-size: 88px;
  text-align: center;
  cursor: pointer;
}
.itemc a {
  color: #333;
  transition: all 0.5s;
}
.itemc a:hover {
  color: #5cb6ff;
}
.itemc p {
  margin-top: 8px;
  color: #333333;
  font-size: 18px;
  font-weight: 700;
}
.bitem {
  width: 45%;
  text-align: center;
  box-shadow: 0px 4px 32px rgb(0 0 0 / 10%);
}
.btop {
  height: 100px;
  padding: 20px;
  text-align: left;
  color: #fff;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(249.28deg, #459bf1 12.4%, #2c7aef 63.5%);
}
.btop .smalltitle {
  margin-top: 0;
  font-size: 24px;
  margin-bottom: 8px;
}
.bbox ul {
  width: 100%;
  padding: 0;
}
.bbox ul li i {
  color: #2c7aef;
  margin-right: 15px;
}
.bbox ul li {
  list-style: none;
  float: left;
  width: 50%;
  padding: 20px;
  line-height: 20px;
  text-align: left;
  font-size: 18px;
  height: 60px;
  border-right: 1px dashed #eee;
  border-bottom: 1px dashed #eee;
  cursor: pointer;
}
.bbox ul li:hover{
  color:#00a1d6;
  transition: all 0.4s;
}
.wzbox {
  margin: 0px auto 75px;
  display: flex;
  justify-content: space-around;
}
.sleft {
  width: 457px;
  height: 360px;
  overflow: hidden;
}
.sleft, .sright{
  border-radius: 6px;
  background-color: #fff;
  padding: 24px 30px 30px 20px;
  box-shadow: 4px 4px 5px 4px #e4e8eb;
}
.stitle {
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
}
.sleft ul {
  padding: 0 10px;
  padding-top: 5px;
  list-style: none;
}
.sleft ul li {
  height: 20px;
  margin-top: 14px;
  cursor: pointer;
}
.sleft ul li:hover{
  color:#00a1d6;
  transition: all 0.4s;
}
.sright{
  margin-left: 30px;
  flex: 1;
  background: rebeccapurple;
}
</style>
