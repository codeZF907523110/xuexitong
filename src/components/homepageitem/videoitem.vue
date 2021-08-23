<template>
  <div class="videoitem">
    <div class="videoitemli">
      <div class="videofenmian">
        <img src="./1.jpg" alt="" />
      </div>
      <div class="videotitle">
        <a>这是视频标题</a>
        <div>
          <span>作者:张山炮</span>
          <span class="span22">播放量:18万</span>
        </div>

        <span>收藏日期:2020-11-2</span>
        <div class="videoplay">播放</div>
      </div>
      <div class="videoaction">
        <div>
          <img src="./like.png" alt="" />
          <span>喜欢</span>
        </div>
        <div v-show='false'>
          <img src="./shoucang.png" alt="" />
          <span>收藏</span>
        </div>
         
        <div>
          <img src="./shar.png" alt="" />
          <span>分享</span>
        </div>
        <div>
          <img src="./shoucang.png" alt="" />
          <span>取消收藏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.videoaction img {
  width: 20px;
  display: block;
  float: left;
  margin-top:8px;
}
.videoaction div {
  float: left;
  cursor: pointer;
  height: 100%;
  line-height: 40px;
  margin-left: 40px;
}
.videoaction div:hover{
    color: #00a1d6;
}
.videoaction {
  height: 40px;
  width: 400px;
  float: left;
  margin-top: 85px;
}
.span22 {
  margin-left: 20px;
}
.videoplay {
  width: 60px;
  height: 30px;
  background-color: rgb(12, 0, 182);
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-top: 13px;
}
.videoplay:hover {
  background-color: rgb(2, 151, 151);
}
.videotitle {
  padding-left: 10px;
  float: left;
  height: 100%;
}
.videotitle span {
  font-size: 11px;
  /* display: block; */
  color: #99a2aa;
}
.videotitle a {
  cursor: pointer;
  margin-bottom: 10px;
  display: block;
}
.videoitem {
  width: 100%;
  height: 140px;
  border-bottom: 1px solid rgb(235, 235, 235);
}
.videoitemli {
  width: 95%;
  height: 119px;
  margin: 0 auto;
  margin-top: 20px;
}
.videofenmian {
  width: 188px;
  height: 119px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  float: left;
  /* box-shadow: 5px 2px rgb(236, 236, 236); */
  cursor: pointer;
}
.videofenmian img {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>