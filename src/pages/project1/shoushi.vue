<template>
  <div class='shoushi'>
    {{mouseX}}
    {{mouseY}}
    <br/>
    {{licenterl}}
    {{licentert}}
     <div class='jiesuo' ref='jiesuoa'>
            <ul>
              <li v-for="(item,index) in 9" @mouseover='lileave(index)' @mousedown="firstlidown(index)" @mouseup='liup(index)'></li>
            </ul>
            <canvas width="300" height="300" id='myCanvas' ></canvas>
      </div>
      
  </div>
</template>

<script>
export default {
  data(){
    return{
      mouseX:0,
      mouseY:0,
      licenterl:0,
      licentert:0,
      ismousedown:false,
      sspassworld:[]
    }
  },
  methods:{
    lileave(index){
      if(this.ismousedown){
        console.log(index);
        let e=window.event
        let olie=e.target;
        if(this.sspassworld.indexOf(index+1)==-1){
          this.sspassworld.push(index+1)//给密码数组中添加
           console.log(this.sspassworld);
          //获取元素相对父级的位置
          let firstlileft=olie.offsetLeft+(olie.offsetWidth/2)
          let firstlitop=olie.offsetTop+(olie.offsetHeight/2)
          //给data赋值
          this.licenterl=firstlileft;
          this.licentert=firstlitop
        }
      }
    },
    firstlidown(index){
      this.ismousedown=true//已经点下
      this.sspassworld.push(index+1)//将第一个密码添加到数组
      let e=window.event
      let olie=e.target;
      let firstlileft=olie.offsetLeft+(olie.offsetWidth/2)
      let firstlitop=olie.offsetTop+(olie.offsetHeight/2)
      this.licenterl=firstlileft;
      this.licentert=firstlitop
      let c=document.getElementById("myCanvas");//获取画板实例
      let ctx=c.getContext('2d')
      ctx.moveTo(this.licenterl,this.licentert)
      document.onmousemove=(e)=>{
        // ctx.fillRect(0,0,300,150);
        this.mouseX=e.clientX-this.$refs.jiesuoa.offsetLeft
        this.mouseY=e.clientY-this.$refs.jiesuoa.offsetTop
        ctx.clearRect(0,0,1000,1000);
        ctx.lineTo(this.licenterl,this.licentert)
        ctx.stroke();
      }
      document.onmouseup=(e)=>{
      }
    },
    liup(index){
      this.ismousedown=false
      if(this.sspassworld.length<3){
        window.alert('密码不得小于三位')
        let c=document.getElementById("myCanvas");
        let ctx=c.getContext('2d')
        c.height=c.height;  
        this.sspassworld=[]//清空密码数组
      }
    }
  }
}
</script>

<style>
#myCanvas{
  border:1px solid red;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

}
.jiesuo{
  position: relative;
    width: 300px;
    height: 300px;
    border:1px solid red;
    margin: 0 auto;
}
.jiesuo ul{
  display:flex;
  justify-content: space-between; 
  align-content: space-between;
  padding:0; margin:0; 
  list-style: none;
  flex-basis: row;
  align-items: flex-start;

  flex-wrap:wrap;
  margin-left: -20px;
  margin-right: 20px;
}
.jiesuo ul li{
  width:60px;
  height: 60px;
  border-radius:50%;
  border:3px solid rgb(255, 0, 0);
  margin-left: 35px;
  margin-top: 35px;
  background-color: black;
  /* flex-flow:wrap row-reverse */
  /* flex-wrap:wrap-reverse */
  /* margin-left: 20px; */
  /* float: left; */
  /* margin-top: 30px; */
}
</style>