<!-- 侧栏 -->
<template>
  <aside>
    <div class="box">
      <div class="item">
        <a href="javascript:void(0)">消息</a>
      </div>
      <div class="item qr">
        <a href="javascript:void(0)">二维码</a>
        <div class="qrcode"></div>
      </div>
      <div class="item">
        <a href="javascript:void(0)">回到顶部</a>
        <a href="javascript:void(0)" class="plane" @click="back_to_top()"></a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "elevator",
  methods: {
    back_to_top(timer) {
      timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - 100; //可以调整数字明确放慢速度20->50,为0时为正常速度
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    },
  },
};
</script>

<style scoped>
aside {
  z-index: 99999999999999999999;
  position: fixed;
  right: 20px;
  bottom: 170px;
  z-index: 3001;
  font-size: 14px;
}
.box {
  user-select: none;
  width: 60px;
  text-align: center;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
}
.item {
  position: relative;
  cursor: pointer;
  width: 60px;
  height: 60px;
  overflow: hidden;
}
.qr {
  overflow: visible;
}
.item > a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 60px;
  background: transparent;
  color: #23b8ff;
}
.item .plane {
  display: block;
  position: absolute;
  width: 42px;
  height: 56px;
  left: 10px;
  transition: all 0.5s;
  top: 60px;
  background-position: -286px -114px;
  background-image: url(https://9.idqqimg.com/edu/index-sprite3_8339b9533a0e87f77f95edd7b3b9e937.png#unsprite);
}
.item:hover {
  background: #23b8ff;
  color: #fff;
}
.item:hover .plane {
  top: 5px;
}
.qr:hover .qrcode {
  display: block;
}
.qrcode {
  display: none;
  width: 290px;
  height: 182px;
  position: absolute;
  z-index: 999;
  left: -290px;
  top: -60px;
  background-image: url(https://9.idqqimg.com/edu/side-tips-qr-code_bb0659b407f187b4441e2aa5fb9a0c7d.png);
  background-size: 100%;
}
</style>
