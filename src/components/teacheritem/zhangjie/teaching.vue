<template>
    <div class='teaching'>
        <div class='teachingmenu'>
            <span class='mulu'>目录</span>
            <!-- <div class='addzhang el-button'>
                添加章节
            </div> -->
             <div class='addzhang'>
                <e-button :itemtext="'添加章'" :itemnmber="0" :bigmenus="bigmenus"></e-button>
            </div>
        </div>
       
        <div class='teacherbox'>
            <div v-for=' (item,index) in bigmenus'>
                 <teachermenuitem :bigmenus="bigmenus" :litelmenus="litelmenus" :bigitem="index"></teachermenuitem>
            </div>
        </div>
    </div>
</template>

<script>
import EButton from '../currency/e-button.vue'
import Teachermenuitem from './teachermenuitem.vue'
export default {
    data(){
        return{
            bigmenus:['戴勤是个大傻吊','赵文帅是个大傻吊'],
            litelmenus:[['第一小节','第二小节','第三小节','第四小节'],['第一小节','第二小节','第三小节','第四小节']]
        }
    },
components:{Teachermenuitem,EButton}
}
</script>


<style>
.teacherbox{

    width: 1150px;
    min-height: 127px;
    border:1px solid red;
    margin-top: 50px;
    background-color: rgba(255, 255, 255, 0.3);
}

.el-button--text{
    color: white!important;
    margin-top: -2px!important;
}
.addzhang{
    color: white!important;
    width: 70px;
    height: 32px;
    float: right;
    line-height: 30px;
    color: white;
    text-align: center;
    background-color:#00a1d6 ;
    border-radius: 5px;
    margin-right:10px;
    cursor: pointer;
    margin-top: 2px;
    
}
.addzhang:hover{
    background-color:#00b8f5 ;
    transition: all 0.5s;
}
.teachingmenu .mulu{
    font-weight: 600;
    margin-right: 10px;
    font-size: 20px;
    color: #010101;
    height: 36px;
    line-height: 36px;
    float: left;
}
.teaching{
    width: 1150px;
    border:1px solid red;
    margin: 0 auto;
    min-height: 800px;
    position: relative;
}
.teachingmenu{
    width: 1100px;
    height: 38px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border:1px solid rgb(255, 255, 255);
    background-color: rgba(255, 0, 255, 0.3);
    top:10px;
}
</style>