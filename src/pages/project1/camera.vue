<template>
  <dir class='camera'>
      <div class='cameraitem'>
        <img src="./camera.png" alt="" @click='getUserMedia({video:true,audio:true})'>
      </div>
        
  </dir>
</template>

<script>
export default {
    
    methods:{
        getUserMedia(constrains) {
            if (navigator.mediaDevices.getUserMedia) {
                // 最新标准API
                navigator.mediaDevices.getUserMedia(constrains).then(stream => { this.success(stream); }).catch(err => { this.error(err); });
            } else if (navigator.webkitGetUserMedia) {
                // webkit内核浏览器
                navigator.webkitGetUserMedia(constrains).then(stream => { this.success(stream); }).catch(err => { this.error(err); });
            } else if (navigator.mozGetUserMedia) {
                // Firefox浏览器
                navigator.mozGetUserMedia(constrains).then(stream => { this.success(stream); }).catch(err => { this.error(err); });
            } else if (navigator.getUserMedia) {
                // 旧版API
                navigator.getUserMedia(constrains).then(stream => { this.success(stream); }).catch(err => { this.error(err); });
            }
            },
                // 成功的回调函数
            success(stream) {
            alert("已点击允许,开启成功");
            },
            // 异常的回调函数
            error(error) {
            alert("访问用户媒体设备失败：", error.name, error.message);
            }
    }
}
</script>

<style>
.cameraitem{
    width: 200px;
    /* height: 100%; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border:1px solid red;
    cursor: pointer;
}
</style>