<template>
  <div class='classactivelist'>
      <!-- 脑袋 -->
      <div class='classactivetop'>
          <span class='classactivespan1'>18计科甲班</span>
          <span class='classactivespan2'>0人</span>
          <span class='classactivespan3'>管理</span>
          <span class='classactivespan4'><i class='classspan4i el-icon-delete-solid'></i>回收站</span>
      </div>
      <!-- 添加活动 -->
      <div class='addactive'>
          <el-button type="success" round @click='isactiveshow'>添加活动</el-button>
      </div>
      <!-- 活动列表 -->
      <div class='addactivelist'>
          <div class='addactiveitem'>
            <img src="../touxiang.jpg" alt="">
            <div class='activeitemleft' v-show='false'><span>主题讨论</span> </div>
            <span class='spana2'>新建课程目录</span>
            <span class='spana1' v-show='true'>结束</span>
            <div class='activedian' >
                <el-dropdown trigger="click">
                <span class="alltaskdele el-dropdown-link el-icon-more">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >编辑</el-dropdown-item>
                    <el-dropdown-item >删除</el-dropdown-item>
                    
                </el-dropdown-menu>
                </el-dropdown>
            </div>
          </div>
          <div class='addactiveitem'>
            <img src="../touxiang.jpg" alt="">
            <div class='activeitemleft' v-show='false'><span>主题讨论</span> </div>
            <span class='spana2'>新建课程目录</span>
            <span class='spana1' v-show='true'>结束</span>
            <div class='activedian' >
                <el-dropdown trigger="click">
                <span class="alltaskdele el-dropdown-link el-icon-more">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >编辑</el-dropdown-item>
                    <el-dropdown-item >删除</el-dropdown-item>
                    
                </el-dropdown-menu>
                </el-dropdown>
            </div>
          </div>
          <div class='addactiveitem'>
            <img src="../touxiang.jpg" alt="">
            <div class='activeitemleft' v-show='false'><span>主题讨论</span> </div>
            <span class='spana2'>新建课程目录</span>
            <span class='spana1' v-show='true'>结束</span>
            <div class='activedian' >
                <el-dropdown trigger="click">
                <span class="alltaskdele el-dropdown-link el-icon-more">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >编辑</el-dropdown-item>
                    <el-dropdown-item >删除</el-dropdown-item>
                    
                </el-dropdown-menu>
                </el-dropdown>
            </div>
          </div>
      </div>
      <!-- 活动目录透明底 -->
      <transition name="fade">
        <div class='activate' v-show='activeshowdi' @click='isactiveshowdi'>
            
        </div>
      </transition>
      <!-- 活动目录 -->
      <transition name="fade">
        <div class='activateli' v-show='activeshow'>
            <div class='activatelitop' ><span class='el-icon-close' @click='isactiveshow'></span></div>
            <div class='activatelicenter'>
                <div class='operate'>活动</div>
                <div class='operateimgitem'>
                    <div class='opimgitem' @click='isactiveshow2(item)' v-for="(item,index) in activateitem1">
                        <div class='opimg'>
                            <img :src="require('assets/img/img3/'+item+'.png')"  alt="">
                        </div>
                        <div class='opimgtext'>{{item}}</div>
                    </div>
                </div>
                <div class='operate'>本课内容</div>
                <div class='operateimgitem'>
                    <div class='opimgitem' @click='isactiveshow2(item)' v-for="(item,index) in activateitem2">
                        <div class='opimg'>
                            <img :src="require('assets/img/img3/'+item+'.png')"  alt="">
                        </div>
                        <div class='opimgtext'>{{item}}</div>
                    </div>
                </div>
                <div class='operate'>更多资料</div>
                <div class='operateimgitem'>
                    <div class='opimgitem' @click='isactiveshow2(item)' v-for="(item,index) in activateitem3">
                        <div class='opimg'>
                            <img :src="require('assets/img/img3/'+item+'.png')"  alt="">
                        </div>
                        <div class='opimgtext'>{{item}}</div>
                    </div>
                </div>
            </div>
        </div>
      </transition>
      <transition name="fade">
        <div class='activeitemi' v-show='activeshowd2'>
            <div class='activatelitop' ><div class='activtoptex'>{{activeitemitext}}</div><span class='el-icon-close' @click='isactiveshowdi'></span></div>
            <div class='activeinput'>
                <el-input  placeholder="请输入内容"></el-input>
            </div>
            <!-- 签到 -->
             <el-tabs v-model="activeName"  class='el-tabsss' v-show="activeitemitext=='签到'">
                <el-tab-pane v-for='(item,index) in tagbiaoqian' :label="item" :name="tagbiaoqianname[index]" >
                    <div class='el-tabsbo'> 
                        <div class='el-tabsbo1'>
                            <span>要求参与人签到</span>
                            <el-switch v-model="elswitch1"></el-switch>
                        </div>
                        <div class='el-tabsbo2'>
                                <span>活动时长</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 30"
                                    :value="index+''"
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>天</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 24"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>小时</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 60"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>分钟</span>
                                <span class='selectspan2'>手动结束</span>
                            <el-switch v-model="elswitch1"></el-switch>
                        </div>
                        <div class='el-tabsbo3'>
                            <span>定时发布</span>
                            <el-switch v-model="elswitch1" @change='iseltabsbo4show'></el-switch>
                        </div>             
                        <div class='el-tabsbo3 el-tabsbo4' v-show='eltabsbo4show'>
                            <span>活动时长</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 24"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>时</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 60"
                                    :value=' index'>
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>分</span>
                                <div class='selecredio'>
                                    <el-radio  label="1">仅发一次</el-radio>
                                    
                                </div>
                                <div class='selecredio'> 
                                    <el-radio  label="2">重复</el-radio>
                                </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <!-- 投票 -->
            <div class='toupiaooption'  v-show="activeitemitext=='投票'">
                <div v-for="(item,index) in toupiaoopclick" :class='{toupiaoopclick:istoupiaoopclick==index}' @click='changetoupiaoop(index)'>{{item}}</div>
            </div>
            <!-- 奖励积分 -->
            <div class='fenzhi' v-show="activeitemitext=='投票'">
                <span class='fenzhispan1'>奖励积分</span>
                <input type="text">
                <span class='fenzhispan1'>分</span>
            </div>
            <!-- 选人 -->
            <div class='checkpepol' v-show="activeitemitext=='选人'">
                <div class='el-tabsbo1'>
                    <span>优先2小时内签到人员</span>
                    <el-switch v-model="elswitch1"></el-switch>
                </div>
                <div class='el-tabsbo1'>
                    <span>每次选人数量</span>
                    <input type="text" name="" id="">
                    <span>人</span>
                </div>
            </div>
            <!-- 抢答 -->
            <div class='qiangda' v-show="activeitemitext=='抢答'">
                <div class='el-tabsbo1'>
                    <span>根据抢答顺序奖励积分</span>
                    <el-switch v-model="elswitch1"></el-switch>
                </div>
                <div class='el-tabsbo2'>
                                <span>活动时长</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 30"
                                    :value="index+''"
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>天</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 24"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>小时</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 60"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>分钟</span>
                                <span class='selectspan2'>手动结束</span>
                            <el-switch v-model="elswitch1"></el-switch>
                </div>
            </div>
            <!-- 主题讨论 -->
            <div class='zhutitaolun' v-show="activeitemitext=='主题讨论'">
                <div class='el-tabsbo2'>
                                <span>活动时长</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 30"
                                    :value="index+''"
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>天</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 24"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>小时</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 60"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>分钟</span>
                                <span class='selectspan2'>手动结束</span>
                            <el-switch v-model="elswitch1"></el-switch>
                </div>
                <div class='el-tabsbo1'>
                    <span>活动结束后不允许回复</span>
                    <el-switch v-model="elswitch1"></el-switch>
                </div>
            </div>
            <!-- 评分 -->
            <div class='pingfen' v-show="activeitemitext=='评分'">
                <div class='el-tabsbo1'>
                    <span>奖励积分</span>
                    <input type="text" name="" id="">
                    <span>分</span>
                </div>
                 <div class='el-tabsbo1'>
                    <span>允许查看评分统计 </span>
                    <el-switch v-model="elswitch1"></el-switch>
                </div>
                <div class='el-tabsbo2'>
                                <span>活动时长</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 30"
                                    :value="index+''"
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>天</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 24"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>小时</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 60"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>分钟</span>
                                <span class='selectspan2'>手动结束</span>
                            <el-switch v-model="elswitch1"></el-switch>
                </div>
                <div class='el-tabsbo1'>
                    <span>分项评分 </span>
                    <el-switch v-model="elswitch1"></el-switch>
                </div>
                <div class='el-tabsbo1'>
                    <span>匿名评分 </span>
                    <el-switch v-model="elswitch1"></el-switch>
                </div>
                <div class='el-tabsbo1'>
                    <span>去掉最高分和最低分 </span>
                    <el-switch v-model="elswitch1"></el-switch>
                </div>
                
            </div>
            <!-- 倒计时  -->
            <div class='daojishi' v-show="activeitemitext=='计时器'">
                <div class='el-tabsbo1'>
                    <span>倒计时 </span>
                    <el-switch v-model="elswitch1"></el-switch>
                </div>
                <div class='daojishitime'>
                    <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 60"
                                    :value='index'
                                    >
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>分钟</span>
                                <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                                    <el-option 
                                    v-for="(item,index) in 60"
                                    :value=' index'>
                                    </el-option>
                                </el-select>
                                <span class='selectspan'>秒</span>
                </div>
            </div>
            <!-- 群聊 -->
            <div class='qunliao' v-show="activeitemitext=='群聊'">
                <div class='el-tabsbo2'>
                    <span>活动时长</span>
                    <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                        <el-option 
                        v-for="(item,index) in 30"
                        :value="index+''"
                        >
                        </el-option>
                    </el-select>
                    <span class='selectspan'>天</span>
                    <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                        <el-option 
                        v-for="(item,index) in 24"
                        :value='index'
                        >
                        </el-option>
                    </el-select>
                    <span class='selectspan'>小时</span>
                    <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                        <el-option 
                        v-for="(item,index) in 60"
                        :value='index'
                        >
                        </el-option>
                    </el-select>
                    <span class='selectspan'>分钟</span>
                    <span class='selectspan2'>手动结束</span>
                <el-switch v-model="elswitch1"></el-switch>
                </div>
            </div>
            <!-- 通知 -->
            <div class='qunliao' v-show="activeitemitext=='通知'">
                <div class='el-tabsbo2'>
                    <span>活动时长</span>
                    <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                        <el-option 
                        v-for="(item,index) in 30"
                        :value="index+''"
                        >
                        </el-option>
                    </el-select>
                    <span class='selectspan'>天</span>
                    <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                        <el-option 
                        v-for="(item,index) in 24"
                        :value='index'
                        >
                        </el-option>
                    </el-select>
                    <span class='selectspan'>小时</span>
                    <el-select  placeholder="0" v-model="elselecta" class='el-option1'>
                        <el-option 
                        v-for="(item,index) in 60"
                        :value='index'
                        >
                        </el-option>
                    </el-select>
                    <span class='selectspan'>分钟</span>
                    <span class='selectspan2'>手动结束</span>
                <el-switch v-model="elswitch1"></el-switch>
                </div>
            </div>
            <!-- 立即开始按钮 -->
            <div class='activeinputbtn' >
                <el-button type="primary" round size='small'>立即开始</el-button>
            </div>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
    data(){
        return{
            activateitem1:['签到','投票','选人','抢答','主题讨论','随堂练习','问卷','评分','分组任务','计时器','群聊','通知'],
            activateitem2:['教案','资料','章节'],
            activateitem3:['图片','视频','云盘','电脑文件','收藏','笔记','网页链接'],
            activeshow:false,
            activeshowdi:false,
            activeshowd2:false,
            activeitemitext:'',
            elswitch1:false,
            tabsbooptions1:[],
            eltabsbo4show:false,
            elselecta:'',
            eloptiona:'',
            activeName: 'first',
            tagbiaoqian:['普通签到','位置签到','手势签到','二维码签到'],
            tagbiaoqianname:['first','second','third','fourth'],
            istoupiaoopclick:0,
            toupiaoopclick:['赞同/反对','正确/错误','选A/B','A/B/C/D']
        }
    },
    methods:{
        iseltabsbo4show(){
            this.eltabsbo4show=!this.eltabsbo4show
        },
        isactiveshow(){
            this.activeshow=!this.activeshow
            this.activeshowdi=!this.activeshowdi
        },
        isactiveshowdi(){
            this.activeshow=false
            this.activeshowdi=false
            this.activeshowd2=false
        },
        isactiveshow2(item){
            this.activeshow=!this.activeshow
            this.activeshowd2=true
            this.activeitemitext=item
        },
        changetoupiaoop(index){
            this.istoupiaoopclick=index
        }
    },
    watch:{
        activeshow(){
            if(this.activeshowdi){
                document.body.style.overflow='hidden';
                // document.addEventListener("touchmove",'',false);
            }else{
                document.body.style.overflow='';//出现滚动条
                // document.removeEventListener("touchmove",'',false);
            }
        }
    }
}
</script>
<style>
.classactivelist .el-input__icon{
    line-height: 20px!important;
}
.daojishitime{
    margin-top: 20px;
    margin-bottom: 10px;
}
.selectspan2{
    margin-left: 20px;
}
.fenzhispan1{
    margin-left: 20px;
    font-size:16px;
    color: #606266;
    margin-right: 10px;
    }
.fenzhi input,.el-tabsbo1 input{
    border: 1px solid #E1E1E5;
    background: #FFFFFF;
    width: 60px;
    height: 26px;
}
.el-tabsbo1 input{
    margin-left: 10px;
    margin-right: 10px;
}
.fenzhi{
    margin-top: 10px;
}
.toupiaooption div{
    border: 1px solid #E1E1E5;
    border-radius: 20px;
    width: 130px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    cursor: pointer;
    }
.toupiaooption div:hover{
    background: #EAF0FF;
    border-color: #3A8BFF;
    color: #3A8BFF;
    transition: all 0.3s;
}
.toupiaoopclick{
    background-color:#3A8BFF ;
    color: white;
    border-color: #3A8BFF;
}
.activeinputbtn{
    margin-top: 10px;
    margin-bottom: 10px;
    float: right;
    margin-right: 30px;
}
.selecredio{
    margin-top: 20px;
}
.el-tabsbo4{
    padding-top: 20px;
    padding-left: 20px;
    width: 580px!important;
    /* height: 140px!important; */
    background: rgb(245, 247, 250);
    margin: 0 auto!important;
    margin-top: 20px!important;
}
.selectspan{
    margin-left: 20px;
}
.el-option1{
    margin-left: 20px;
}
.el-option1 .el-input{
    width: 60px!important;
    height: 20px!important;
}
.el-option1 input{
    width: 60px;
    height: 20px;
}

/* .el-select-dropdown__list{
    z-index:100000!important
} */
.el-switch__core{
    width: 38px!important;
    height: 20px!important;
}
.el-switch{
    margin-left: 22px;
    
}
.el-tabsbo1,.el-tabsbo2,.el-tabsbo3{
    font-size: 14px;
    color: #646873;
    line-height: 20px;
    margin-left: 20px;
    margin-top: 20px;
}
.tab-head{
    margin-left:50px;
    height: 36px;
    line-height: 36px;
    margin-top: 10px;
}
.el-tabsbo{
    width: 100%;
    min-height: 110px;

}
.el-tabs__nav{
    margin-left:140px;
    
}
.tab-head li{
    list-style: none;
    margin-right: 70px;
    float: left;
    cursor: pointer;
    font-size: 14px;
    color: #A8A8B3;
}
.tab-head{
    width: 100%;
    height: 36px;
}
.activeinput{
    width: 580px;
    margin: 0 auto;
    margin-top: 15px;
}
.activtoptex{
    float: left;
    height: 100%;
    line-height: 60px;
    font-weight: 500;
    font-size: 18px;
    margin-left: 20px;
}
.activeitemi{
    position: absolute;
    width: 640px;
    z-index:1000;
    min-height: 100px;
    background: #FFFFFF;
    border-radius: 10px;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-50%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.opimgitem:hover .opimgtext{
    color: rgb(168, 168, 168);
    transition: all 0.5s;
}

.opimgtext{
    width: 100%;
    height: 24px;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    color: #474C59;
    letter-spacing: 0;
}
.opimgitem{
    width: 100px;
    height: 80px;
    float: left;
    margin-right: 10px;
    cursor: pointer;
}
.opimg img{
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 12px 34px 8px 34px;
}
.operateimgitem{
    width: calc(100% - 60px);
    margin: 0 auto;
}
.operate{
    width: calc(100% - 80px);
    margin: 28px 30px 0 50px;
    height: 32px;
    font-size: 18px;
    color: #131B26;
    line-height: 35px;
    float: left;   
}
.activatelitop span{
    display: block;
    float: right;
    line-height: 60px;
    font-size: 25px;
    color: #CAD5E6;
    margin-right: 20px;
    cursor: pointer;
    font-weight: bold;
}
.activatelitop{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(242, 242, 242, 0.5);
}
.activateli{
    width: 840px;
    height: 737px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    border-radius: 8px;
}
.activate{
    background-color: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}
.addactivelist{
    margin-top: 10px;
}
.addactiveitem:hover{
    background: #F0F6FF;
    cursor: pointer;
    transition: all 0.4s;
}
.addactiveitem:hover .spana2{
    color: #3A8BFF;
    transition: all 0.4s;
}
.spana2{
    float: left;
    margin-left: 80px;
    margin-top: 3px;
}
.addactiveitem img{
    width: 44px;
    height: 44px;
    margin-left: 20px;
    cursor: pointer;
    border-radius: 5px;
    float: left;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.activedian{
    position: absolute;
    right: 0;
    top: 56%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
}
.addactiveitem span{
    display: table-cell;  
    vertical-align: middle;   
}
.addactiveitem .spana1{
    display: block;
    height: 15px;
    font-size: 14px;
    color: #3A8BFF;
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 3px;
}
.addactiveitem .spana1:hover{
    color:#99c3ff ;
}
.activeitemleft{
    display: table;
    /* display: inline-block;vertical-align: top; */
    width:45px ;
    height: 42px;
    line-height: 1.2;
    padding-top: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    float: left;
    padding-bottom: 5px;
    font-size: 16px;
    background-color: rgb(100, 162, 255);
    border-radius: 5px;
    color: white;
    text-align: center;
    cursor: pointer;
    margin-left: 20px;
}

.addactiveitem{
    position: relative;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid rgb(240, 240, 240);
    line-height: 70px;
    margin-top: 3px;
}
.addactive{
    margin-top: 20px;
    margin-left: 20px;
}
.classspan4i{
    color: rgb(201, 201, 201);
    top: 60%;
    transform: translateY(-50%);
    left: -20px;
}
.classactivespan1{
    margin-left: 20px;
    font-size: 18px;
    color: #131B26;
}
.classactivespan2{
    margin-left: 10px;
    font-size: 14px;
    color: #8A8B99;
}
.classactivespan3{
    margin-left: 20px;
    font-size: 14px;
    color: #5f81b1;
    cursor: pointer;
}
.classactivespan4{
    position: relative;
    font-size: 14px;
    color: #5f81b1;
    float: right;
    margin-right: 20px ;
    cursor: pointer;
}
.classactivespan3:hover,.classactivespan4:hover{
    color:#7d94b4 ;
}
.classactivetop{
    height: 77px;
    width: 100%;
    line-height: 77px;
    border-bottom: 1px solid #F2F2F2;
}
.classactivelist{
    width: 1150px;
    min-height: 676px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    margin-top: 20px;
}
</style>