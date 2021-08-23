<template>
  <div class='photo'>
      <div class='photo-top' @mousemove="photo1" @mouseleave="photo2">
          <img src="./1.jpg" alt="">
      </div>
      <div class='photo-bo' v-show='photoshow'  @mousemove="photo1" @mouseleave="photo2">
          <div class='zhuanfa'>转发</div>
          <div class='pinglun'>评论</div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            photoshow:false
        }
    },
    methods:{
        photo1(){
            this.photoshow=true
        },
        photo2(){
            this.photoshow=false
        }
        
    }
}
</script>

<style>
    .photo{
        /* width: 217px; */
       padding: 0 15px;
    }
    .photo-top{
        height: 217px;
        width: 100%;
        /* border-radius: 10px; */
        overflow: hidden;
        position: relative;
        box-shadow:0px 0px 7px #000;
    }
    .photo img{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        cursor: pointer;
    }
    .photo-bo{
        float: left;
        height: 35px;
        width: 100%;
        position: relative;
        /* line-height: 35px; */
        text-align: center;
        background: rgba(74,74,74,0.6);
        
        font-size: 12px;
        cursor: pointer;
        margin-top: -35px;
    }
    .photo-top:hover .photo-bo{
        display: block;
    }
    
    .photo-bo .zhuanfa,.photo-bo .pinglun{
        width: 40%;
        height: 50%;
        float: left;
        color:white;
        margin-top: 9px;
    }
    .photo-bo .zhuanfa{
        border-right: 1px solid white;
    }
    .photo-bo .pinglun{
        width: 60%;
        
    }
    .photo-bo .zhuanfa:hover{
        color: rgb(255, 175, 2);
    }
    .photo-bo .pinglun:hover{
        color: rgb(255, 175, 2);
    }
</style>