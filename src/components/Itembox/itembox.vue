<template>
  <div class="itemBox">
                	<div class="left">
                        <img :src="leftimg" draggable="false" alt="">
                    </div>
                	<div class="center">
                		<p><span class="font1">{{font1}}</span> 
                            <span class="font3">
                            </span> <span class="font4">{{font4}}
                             
                            </span>
                        </p>
                		<p class="font2">{{font2}}</p>
                	</div>
                	<div class="right" >
                        <a  class="binding js-bindemail moco-btn moco-btn-normal" @click='showmoco(shownumbera)' v-show="binding!=''">{{binding}}</a>
                    </div>
                </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        font1:String,
        font4:String,
        font2:String,
        binding:String,
        leftimg:String,
        shownumbera:Number
    },
    methods:{
        showmoco(index){
            this.$store.state.isshowmoco=true
            this.$store.state.showmoconumber=index
            console.log(this.$store.state.showmoconumber);
        }
    }
}
</script>

<style>

.itemBox .left {
    width: 60px;
    float: left;
    font-size: 36px;
    color: #d9dde1;
    line-height: 98px;
    padding-left: 19px;
}
.itemBox .left img{
    width: 70%;
    margin: 0 auto;
}
.itemBox .center {
    padding-top: 22px;
    width: 510px;
    float: left;

}
.font1 {
    color: #2b333b;
    font-size: 16px;
    font-weight: 700;
}
.font3 {
    color: #2b333b;
    font-size: 14px;
}
.font4 {
    color: #00a1d6;
    font-size: 14px;
    font-weight: 500;
}
.itemBox p {
    line-height: 24px;
    /* font-size: 12px; */
}
.font2 {
    color: #93999f;
    font-size: 14px;
    font-weight: 500;
    margin-top: -10px;
    
}
.right {
    float: right;
    padding-right: 12px;
    margin-top: 28px;
}
.page-settings .setting .bingd .itemBox .right .moco-btn-normal {
    padding-left: 15px;
    padding-right: 15px;
}
.moco-btn-normal {
    color: #545c63;
    background-color: transparent;
    border-color: #9199a1;
    opacity: 1;
    border:1px solid #00a1d6;
    border-radius: 20px;
    height: 35px;
}
.moco-btn {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    box-sizing: border-box;
    background-image: none;
    border-radius: 0;
    -webkit-appearance: none;
    white-space: nowrap;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    -moz-transition: all .3s;
    transition: all .3s;
    color: #545c63;
    background-color: transparent;
    border-color: #9199a1;
    opacity: 1;
    padding: 7px 16px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 18px;
}
</style>