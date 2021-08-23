<template>
  <div class="GlobalWrite">
    <div class='GlobalWrite-navTop'>
      <div class="globalitem ">
        <div class="globalimg g1">
            <img src="" alt="">
        </div>
        <div class="blobaltext">回答问题</div>
      </div>
      <div class="globalitem " @click="$router.push('/postvideo')">
        <div class="globalimg g2">
            <img src="./videoimg.png" alt="">
        </div>
        <div class="blobaltext" >发视频</div>
      </div>
      <div class="globalitem " @click="$router.push('/write')">
        <div class="globalimg g3">
            <img src="./wenzhangimg.png" alt="">
        </div>
        <div class="blobaltext" >写文章</div>
      </div>
      <div class="globalitem ">
        <div class="globalimg g4">
            <img src="./writeimg.png" alt="">
        </div>
        <div class="blobaltext">写想法</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.globalimg{
    width: 40px;
    height: 40px;
    border-radius: 50%;

    margin: 0 auto;
    cursor: pointer;
}
.g1{
    background-color: rgba(187, 255, 123, 0.5);
}
.g2{
    background-color: rgba(255, 209, 109, 0.5);
}
.g3{
    background-color: rgba(255, 145, 145, 0.5);

}
.g4{
    background-color: rgba(133, 190, 255, 0.5);

}
.globalimg img{
    display: block;
    width: 60%;
    margin: 0 auto;
    /* position: absolute; */
    top:50%;
    transform: translateY(30%);
}
.g4 img{
    width: 80%;
     transform: translateY(13%);
     margin-left: 6px;
}
.blobaltext{
    width: 100%;
    text-align: center;
    font-size: 12px;
    margin-top: 5px;
    cursor: pointer;
}
.blobaltext:hover{
    color:#337ab7;
    transition: all 0.3s;

}
.GlobalWrite-navTop{
    width: 240px;
    height: 70px;
    margin: 0 auto;
    /* border:1px solid red; */
    margin-top: 40px;
}
.globalitem {
  width: 60px;
  height: 100%;
  /* border: 1px solid red; */
  float: left;
}
.GlobalWrite {
  width: 296px;
  height: 156px;
  border: 1px solid rgb(231, 231, 231);
}
</style>