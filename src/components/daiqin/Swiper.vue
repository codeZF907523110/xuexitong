<!--  -->
<template>
  <div class="swiper-container swiper container">
    <div class="swiper-wrapper">
      <div class="swiper-slide s1">
        <img
          src="https://p.qpic.cn/qqconadmin/0/99e7782b32774aa9ba5b89976a53712e/0?tp=webp"
          alt=""
        />
      </div>
      <div class="swiper-slide s2">
        <img
          src="https://p.qpic.cn/qqconadmin/0/ac911e81d4014fa389b14170ba3502ef/0"
          alt=""
        />
      </div>
      <div class="swiper-slide s3">
        <img
          src="https://p.qpic.cn/qqconadmin/0/efd46628911846c68193d997497ee810/0?tp=webp"
          alt=""
        />
      </div>
      <div class="swiper-slide s4">
        <img
          src="https://p.qpic.cn/qqconadmin/0/8292c2929e1d4428807d0ceea8970d80/0?tp=webp"
          alt=""
        />
      </div>
      <div class="swiper-slide s5">
        <img
          src="https://p.qpic.cn/qqconadmin/0/8212e35622fb412b994dfcf0b9c6b4f3/0?tp=webp"
          alt=""
        />
      </div>
      <div class="swiper-slide s6">
        <img
          src="https://p.qpic.cn/qqconadmin/0/eb61e35c94874f129f3ef8c6b7435de9/0?tp=webp"
          alt=""
        />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination fenye"></div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.min.css";
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";

export default {
  name: "Swiper",
  data() {
    return {
      imgList: {},
    };
  },
  created() {},
  mounted() {
    //swiper6提供了use方法，其他写法没有啥区别和swiper4、5一样
    Swiper.use([Navigation, Pagination, Autoplay]);
    var recommendswiper = new Swiper(".swiper", {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 3000,
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style>
.swiper {
  user-select: none;
  box-sizing: border-box;
  text-align: center;
}
.swiper-wrapper {
  text-align: center;
}
.s1 {
  background-color: #1a1b1f;
}
.s2 {
  background-color: #3969e7;
}
.s3 {
  background-color: #28ad38;
}
.s4 {
  background-color: #eaad42;
}
.s5 {
  background-color: #8a130f;
}
.s6 {
  background-color: #2f7a76;
}
.swiper .swiper-slide {
  height: 300px;
  text-align: center;
  line-height: 300px;
  font-size: 50px;
}
.swiper .fenye .swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.75);
  transition: all 0.2s;
  opacity: 1;
  border-radius: 4px;
}
.swiper .fenye .swiper-pagination-bullet-active {
  width: 20px;
}
</style>
