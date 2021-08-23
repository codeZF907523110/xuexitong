<template>
    <div class='signtopitem'>
        <div class='signtopitem1'>
            <i class='el-icon-arrow-left'></i>
            <span class='qiandaospan1'>返回</span>
            <span class='qiandaospan2'>|</span>
            <span class='qiandaospan3'>活动</span>
            <i class='el-icon-arrow-right qiandao_ii'></i>
            <span class='qiandaospan5'>{{actionname}}</span>
        </div>
        <div class='signtopitem2'>
            <img :src="require('assets/img/img3/签到.png') " alt="">
            <div class='signitem2text'>
                <span class='sign2text1'>{{actionname}}</span>
                <span class='sign2text2'>{{actiondata}}</span>
                <span class='sign2text3'>进行中</span>
            </div>
            <div class='jieshuactive'>
                <el-button type="primary" round>结束活动</el-button>
            </div>
            
        </div>
        <div class='signtopitem3'>

        </div>
    </div>

</template>

<script>
export default {
    props:{
        actionname:String,
        actiondata:String,

    }
}
</script>

<style>
.jieshuactive{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
}
.sign2text3{
    color: #8A8B99;
    font-size: 12px;
    margin-left: 20px;
}
.sign2text1{
    display: block;
    color: #131B26;
    font-weight: bold;
}
.sign2text2{
    color: #8A8B99;
    font-size: 12px;
}
.signitem2text{
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* border:1px solid red; */
    margin-left: 70px;
}
.signtopitem2 img{
    width: 42px;
    height: 42px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 20px;
}
.qiandaospan1{
    color: #6B89B3;
    cursor: pointer;
}
.signtopitem1{
    width: 1150px;
    height: 20px;
    margin: 0 auto;
    /* border:1px solid red; */
    margin-top: 20px;
    line-height: 20px;
}
.qiandao_ii{
    margin: 0!important;

    font-size: 15px;
    /* float: left; */
    float:none;
}
.qiandaospan2{
    margin-left: 5px;
    margin-right: 5px;
}
.signtopitem2{
    width: 1150px;
    min-height: 84px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    margin-top: 20px;
    position: relative;
}
</style>