<template>
      <div class='mamodal-li'>
           
            <div class='mamodal-one' v-show='$store.state.showmoconumber==1'>
                 <div class='mamodal-top'>绑定邮箱</div>
                <div class='mamodal-emil-top'>
                    <span>邮箱地址:</span>
                    <div class='mamodal-emil-input'>
                        <input type="text" placeholder="请输入您的邮箱">
                    </div>
                    
                </div>
            </div>
            <div class='mamodal-one' v-show='$store.state.showmoconumber==2' >
                 <div class='mamodal-top'>绑定手机</div>
                <div class='mamodal-emil-top'>
                     
                    <span>绑定手机:</span>
                    <div class='mamodal-emil-input'>
                        <input type="text" placeholder="输入手机号">
                    </div>
                </div>
                <div class='mamodal-emil-top'>
                    
                    <span>短信验证码:</span>
                    <div class='mamodal-emil-input'>
                        <input type="text" placeholder="输入短信验证码">
                    </div>
                </div>
            </div>
             <div class='mamodal-one' v-show='$store.state.showmoconumber==3' >
                 <div class='mamodal-top'>修改密码</div>
                <div class='mamodal-emil-top'>
                    <span>输入原始密码：</span>
                    <div class='mamodal-emil-input'>
                        <input type="text" placeholder="输入密码">
                    </div>
                </div>
                <div class='mamodal-emil-top'>
                    <span>输入新密码：</span>
                    <div class='mamodal-emil-input'>
                        <input type="text" placeholder="输入密码">
                    </div>
                </div>
                <div class='mamodal-emil-top'>
                    <span>确认新密码：</span>
                    <div class='mamodal-emil-input'>
                        <input type="text" placeholder="再次输入密码">
                    </div>
                </div>
            </div>
            <div class='mamodal-btn'>
                <div class='mamodal-btn1'>确定</div>
                <div class='mamodal-btn2' @click='cancershow'>取消</div>
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
        titlename:String
    },
    methods:{
        cancershow(){
            this.$store.state.isshowmoco=false
        }
    }
}
</script>

<style>
.mamodal-btn2{
    margin-left: 20px;
}
.mamodal-btn{
    width: 100%;
    height:80px;
    /* float: left; */
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
}
.mamodal-btn div{
    background-color: #6cb2fd;
    height: 36px;
     min-width: 62px;
    max-width: 104px;
    text-align: center;
    line-height: 36px;
    border-radius: 18px;
    float: left;
    cursor: pointer;
    margin-top: 10px;
}
.mamodal-btn div:hover{
    background-color: #00a1d6;
    color: white;
}
.mamodal-emil-top{
    height: 66px;
    width: 430px;
    line-height: 66px;
    position: relative;
}

.mamodal-one,.mamodal-two,.mamodal-three{
    margin-top: 20px;
    
}
.mamodal-li span{
    display: block;
    height: 100%;
    float: left;
    margin-left: 20px;
}
.mamodal-emil-input{
    float: right;
    /* margin-left: 20px; */
    width: 288px;
    height: 36px;
    /* border:1px solid red; */
    position: relative;
    margin-right: 0px;

}
.mamodal-li{
    font-size: 16px;
    font-weight: bold;
    color: #1c1f21;
    margin-bottom: -8px;
    padding: 0px 32px 0;
    line-height: 20px;
}
.mamodal-li input{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border:none;
    border:1px solid  #9199a1;
    /* float: right; */
    position: absolute;
    top: 30%;
    /* margin-left: 20px; */
}
</style>