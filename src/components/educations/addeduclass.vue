<template>
  <div class='addclass'>
          <div class='addclassi'>
              +
          </div>
          <div class='addclasstext '>{{classtext}}</div>
      </div>
</template>

<script>
export default {
props:{
    classtext:String
}
}
</script>

<style>
.addtext{
    margin-top: 9px;
}
.addclssimg{
    width: 110px;
    height: 134px;
    position: relative;
    margin-top: 10px;
    overflow: hidden;
    margin-left: 25px;
    border-radius: 5px;
}
.addclssimg img{
    width:100%;
    /* height: 134px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    cursor: pointer;
    transition:all .2s ease-in 0s;
    
}
.addclssimg img:hover{
    width: 115%;
    transition: all 0.5s;
}
.myclassimg img:hover{
    cursor: pointer;
    width: 120%;
    transition: all 0.5s;
}
.classtext{
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 15px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
}
.myclassimg{
    width: 110px;
    height: 134px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 5px;
}
.myclassimg img{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
}
.myclassi{
    width: 167px;
    height: 200px;
    float: left;
    margin-left: 50px;
}
.eduteacher{
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
}
.addclass{
    width: 153px;
    height: 200px;
    /* border:1px solid red */
    float: left;
    
}
.addclassi{
    width: 153px;
    height: 153px;
    border:1px solid rgb(206, 206, 206);
    cursor: pointer;
    border-radius: 10px;
    font-size:100px;
    text-align: center;
    line-height: 153px;
    color:rgb(206, 206, 206) ;
    
}
.addclassi:hover{
    box-shadow:0px 0px 5px rgb(206, 206, 206);
    transition: all 0.5s;
}
.addclasstext{
    width: 153px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    white-space:nowrap;
    overflow: hidden;
}
</style>