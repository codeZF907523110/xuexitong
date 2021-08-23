<template>
  <div class='carditem'>
          <img src="" alt="">
          <div class='cardtext'>{{cardtext}}</div>
          <div class='cardmess' v-show="cardmess">{{cardmess}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        cardtext:String,
        cardmess:String
    }
}
</script>

<style>
.carditem{
    width: 296px;
    height: 40px;
    /* border:1px solid red; */
    color:#8590a6;
    position: relative;
    cursor: pointer;
}
.carditem:hover{
    background-color:#f6f6f6 ;
    transition: all 0.5s;
}
.carditem img{
    float: left;
}
.cardtext{
    height: 100%;
    line-height: 40px;
    float: left;
}
.cardmess{
    width: 27px;
    height: 28px;
    /* border:1px solid red; */
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right: 20px;
    background-color: #f6f6f6;
    text-align: center;
    padding-top: 6px;
}
.carditem:hover .cardmess{
    background-color: white;
}
</style>