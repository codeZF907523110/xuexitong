<template>
    <div class='creaddiscuss'>
        <div class='creaddisli'>
            <div class='creaddistop'>
                <span>新建话题</span>
            </div>
            <div class='fabuto'>
                <span>发布给</span>
                <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    18计科甲<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >全部班级</el-dropdown-item>
                    <el-dropdown-item >18计科甲</el-dropdown-item>
                    <el-dropdown-item >默认班级</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class='fabutitle'><el-input  placeholder="请输入标题"></el-input></div>
            <div class='fabucontent'>
                    <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容">
                    </el-input>
            </div>
            <div class='creadcimg' v-show='creadcimg'>
                <div class='creaddisimg'>
                    <img src="../../../assets/img/touxiang.jpg" alt="" >
                    <div class='creadimgtop'>
                        <div class='el-icon-delete-solid'></div>
                    </div>
                </div>
                <div class='creadimg'>
                    <img src="../../../assets/img/creadimg.png" alt="">
                    <input type="file" name="" id="" class='creadimginput'>
                </div>
            </div>
            
            <div class='addfile'>
                <div class='addimg' @click='showcreadimg'>
                  <img src="../../../assets/img/addimg.png" alt="">
                  <input type="file" class='addimginput'>
                </div>
                <div class='addlink'>
                    <img src="../../../assets/img/addlink.png" alt="">
                    <input type="file" class='addlinkinput'>
                </div>
            </div>

            <div class='creaddisbottom'>
                <span class='creadfabuspan'>发表该话题即表示您已阅读并接受《用户协议》, 请勿发布色情，反动等违法内容</span>
                <div class='creadfbbtn'>
                    <el-button size='small' type="primary" round>发布</el-button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            creadcimg:false
        }
    },
    methods:{
        showcreadimg(){
            this.creadcimg=true
        }
    }
}
</script>

<style>
.el-icon-delete-solid:hover{
    color: black;
    transition: all 0.5s;
}
.el-icon-delete-solid{
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 15px;
    color:white;
}
.addimginput,.addlinkinput,.creadimginput{
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    
}
.creadimg{
    width: 66px;
    height: 66px;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 20px;
    margin-left: 80px;
    /* float: left; */
    cursor: pointer;
    position: relative;
}
.creadimg img{
    width: 100%
}
.creadimgtop{
        background: rgba(17, 30, 45, 0.55);
         position: absolute;
        left: 0;
        top:0px;
        border-radius: 8px;
        opacity: 0;
    }
.creaddisimg{
    position: relative;
    cursor: pointer;
}
.creaddisimg:hover .creadimgtop{
    opacity: 1;
    transition: all 0.5s;
}
.creaddisimg,.creadimgtop{
    width: 66px;
    height: 66px;
    float: left;
   
}
.creaddisimg img{
    width: 100%;
    /* margin-top: 20px; */
    border-radius: 8px;
}
.creadfabuspan{
    font-size: 14px;
    color: #A8A8B3;
}
.creadfbbtn{
    float: right;
    margin-left: 500px;
    margin-top: -27px;
    
}
.creadfbbtn button{
    color: white!important;
}
.addimg{
    float: left;
    position: relative;
    cursor: pointer;
}
.addlink{
    margin-left:40px;
    position: relative;
    cursor: pointer;
}
.addfile div{
    width: 18px;
    
    border-radius: 10px;
    cursor: pointer;
}
.creaddisbottom button{
    float: right;
    width:80px;
}
.creaddisbottom{
    position: absolute;
    bottom: 0;
}
.addfile{
    margin-top: 30px;
}
.fabucontent textarea{
    height: 100px;
    margin-top: 20px;
    resize:none
}
.fabutitle{
    margin-top: 20px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    margin-left: 20px;
  }
.el-dropdown-link:hover{
    background: #F5F7FA;
}
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
.fabuto{
    color:#8A8B99 ;
}
.creaddistop{
    font-size: 18px;
    color: #131B26;
    font-weight: bold;
    line-height: 28px;
    padding-bottom: 20px;
    margin-top: 10px;
}
.creaddiscuss{
    /* position: absolute; */
    margin: 0 auto;
    width: 1150px;
    height: 506px;
    /* border:1px solid red; */
    background-color: white;
    border-radius: 8px;
    margin-top: 20px;
    position: relative;
}
.creaddisli{
    width: 92%;
    height: 90%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>