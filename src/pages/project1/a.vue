<template>
  <div>
      <!-- 鼠标拖动 -->
      {{positionX}}
      {{positionY}}
      <div class='aaaa' @mousedown="move" :style="'margin-left:'+positionX+'px;'+'margin-top:'+positionY+'px'"></div>
  </div>
</template>

<script>
export default {
data(){
    return{
        positionX:0,
        positionY:0
    }
},
methods:{
        move(e){
            console.log(111);
            let odiv = e.target;        //获取目标元素
            //获取鼠标相对div的位置
            let mousedivx=e.clientX-odiv.offsetLeft
            let mousedivy=e.clientY-odiv.offsetTop
            document.onmousemove=(e)=>{
                console.log(2222);
                //用鼠标的位置减去鼠标相对元素的位置得到元素的位置
                this.positionX=e.clientX-mousedivx
                this.positionY=e.clientY-mousedivy
                console.log(this.positionX+','+this.positionY);
            }
            document.onmouseup = function(e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
           
        }    }
}
</script>

<style>
.aaaa{
    width: 100px;
    height: 100px;
    border:1px solid red
}
</style>