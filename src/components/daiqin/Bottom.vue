<!--  -->
<template>
  <div class="footer">
    <div class="footer_box container">
      <!-- 关注 -->
      <div class="focus">
        <h3 class="h3">关注我们</h3>
      </div>
      <!-- 加入我们 -->
      <div class="join_us float-left" :class="{ active: activeIndex == 1 }">
        <div class="tit_area">
          <h5 class="h4" @click="iClick(1)">加入我们</h5>
          <i class="icon"></i>
        </div>
        <ul class="list">
          <li>
            <a href="javascript:;" @click="$router.push('/test/123')"
              >考试练习</a
            >
          </li>
          <li>
            <a href="javascript:;" @click="$router.push('/imglist')"
              >图片浏览</a
            >
          </li>
          <li><a href="javascript:;">大骨头</a></li>
        </ul>
      </div>
      <!-- 联系我们 -->
      <div class="contact_us float-left" :class="{ active: activeIndex == 2 }">
        <div class="tit_area">
          <h5 class="h4" @click="iClick(2)">联系我们</h5>
          <i class="icon"></i>
        </div>
        <ul class="list">
          <li><a href="">客户服务</a></li>
          <li><a href="">合作洽谈</a></li>
          <li><a href="">采购</a></li>
          <li><a href="">媒体及投资者</a></li>
        </ul>
      </div>
      <!-- 法律信息 -->
      <div class="legal_info float-left" :class="{ active: activeIndex == 3 }">
        <div class="tit_area">
          <h5 class="h4" @click="iClick(3)">法律信息</h5>
          <i class="icon"></i>
        </div>
        <ul class="list">
          <li><a href="">服务协议</a></li>
          <li><a href="">隐私政策</a></li>
          <li><a href="">知识产权</a></li>
        </ul>
      </div>
      <!-- logo -->
      <div class="logo">
        <h1 class="h2">我是logo</h1>
      </div>
      <!-- 底部信息 -->
      <div class="footer_info">
        <ul class="links">
          <li><a href="">法律声明</a></li>
          <li><a href="">阳光准则</a></li>
          <li><a href="">网站地图</a></li>
          <li><a href="">蒙ICP备2021000737号-1</a></li>
        </ul>
        <p class="copyright">
          <b>Copyright © 2020 - 2021 Mmszb. All Rights Reserved. </b
          ><br />萌萌手抓饼 版权所有
        </p>
      </div>
      <!-- 返回顶部  -->
      <div class="back_to_top">
        <a class="back" @click="back_to_top()">回到顶部</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    back_to_top(timer) {
      timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - 80; //可以调整数字明确放慢速度20->50,为0时为正常速度
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    },
    iClick(index) {
      if (this.activeIndex == index) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = index;
      }
    },
  },
};
</script>

<style scoped>
.footer {
  height: 480px;
  background: #fbfbfb;
  position: relative;
  z-index: 1;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.footer_box {
  height: 100%;
  position: relative;
}
.focus {
  box-sizing: border-box;
  height: 88px;
  width: 100%;
  border-bottom: 1px solid #f2f3f5;
  padding-top: 33px;
  margin-bottom: 40px;
}
.join_us,
.contact_us,
.legal_info {
  width: 20%;
}
.footer ul li {
  list-style: none;
}
.list {
  padding: 0;
}
.list a:hover {
  color: rgb(65, 145, 245);
}
.footer ul li a {
  display: block;
  font-size: 16px;
  color: #5f6464;
  font-weight: normal;
  margin-bottom: 18px;
}
.logo {
  display: block;
  height: 28px;
  width: 212px;
  position: absolute;
  right: 75px;
  top: 50%;
  margin-top: -21px;
}
.footer_info {
  display: block;
  width: 100%;
  /* margin-top: 15px; */
  position: absolute;
  bottom: 30px;
  left: 0px;
}
.footer_info .links {
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
}
.float-left {
  float: left;
}
.footer_info .links li {
  float: left;
  margin-right: 20px;
}
.footer_info .links li a {
  font-size: 14px;
  color: #5f6464;
  margin-bottom: 0px;
}
.copyright {
  width: 100%;
  font-size: 14px;
  color: #5f6464;
  float: right;
}
.h3 {
  margin-top: 10pxf;
}
.h4 {
  height: 52px;
  line-height: 52px;
}
.copyright br {
  display: none;
}
.back_to_top {
  display: none;
}
/* 响应式布局 */

@media screen and (max-width: 768px) {
  .list {
    padding: 0 10px;
  }
  .join_us,
  .contact_us,
  .legal_info {
    width: 100%;
    float: none;
    overflow: hidden;
  }
  .join_us .list,
  .contact_us .list,
  .legal_info .list {
    display: block;
    margin: 0;
    height: 0;
    transition: height 0.3s ease-out;
  }
  .active .list {
    transition: height 0.3s ease-out;
    height: 117px;
  }
  .logo {
    display: none;
  }
  .footer_box .tit_area {
    display: block;
    height: 52px;
    line-height: 52px;
    position: relative;
  }
  .icon {
    display: block;
    height: 12px;
    width: 12px;
    /* background: url(~assets/img/icon_arrow_d.png) no-repeat 0 0; */
    background-size: contain;
    position: absolute;
    right: 28px;
    top: 20px;
    transition: transform 0.2s ease-out;
  }
  .active .icon {
    display: block;
    height: 12px;
    width: 12px;
    /* background: url(~assets/img/icon_arrow_d.png) no-repeat 0 0; */
    background-size: contain;
    position: absolute;
    transform: rotate(180deg);
    right: 28px;
    top: 20px;
    transition: transform 0.2s ease-out;
  }
  .legal_info {
    margin-bottom: 18px;
  }
  .footer_info {
    position: static;
    margin-bottom: 29px;
  }
  .footer_info .links {
    display: none;
  }
  .footer_info .copyright {
    color: #929797;
    font-size: 12px;
    float: none;
    line-height: 1.8;
  }
  .copyright br {
    display: block;
  }
  .back_to_top {
    display: block;
    width: 100%;
    height: 50px;
  }
  .back_to_top .back {
    display: block;
    height: 50px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #111;
    background: #f2f3f5;
    line-height: 50px;
  }
}
</style>
