<template>
  <div class='edit'>
      <div class='settext'>
              <settext :settext="'账号信息'"></settext>
    </div>
      <div class='edit-li'>
          
          
          <div class='nicheng'>
                <span>昵称:</span>
                <div class='nichenginput'> 
                    <input type="text" :placeholder="$store.state.userinfo.name" v-model="$store.state.userinfo.name">
                </div>
          </div>
          <div class='zhiwei'>
                <span>职位:</span>
                <div class='zhiweioption'>
                     <select name="" id="" v-model="$store.state.userinfo.position">
                        <option  :value="item"  v-for="item in optionneirong">{{item}}</option>
                    </select>
                </div>
               
          </div>
          <div class='diqu'>
                <span>所在地区:</span>
                <v-distpicker v-if="$store.state.userinfo" @selected='selected'  :province="$store.state.userinfo.address[0]" :city="$store.state.userinfo.address[1]" :area="$store.state.userinfo.address[2]"></v-distpicker>
          </div>
          <div class='sex'>
                <span>性别:</span>
                <div class='sexinput'>
                    <input type="radio" name="radio"  value=2 v-model="$store.state.userinfo.sex" checked>保密
                     <input type="radio" name="radio" value=0 v-model="$store.state.userinfo.sex">女
                     <input type="radio" name="radio" value=1 v-model="$store.state.userinfo.sex">男
                </div>
                <!-- <input type="radio" name="girl" checked="">女
                <input type="radio" name="boy" checked="">男 -->
          </div>
          <div class='qianming'>
                <span>个性签名:</span>
                <textarea v-model="$store.state.userinfo.signature" class="qianmingtextarea" id="" cols="30" rows="5"></textarea>
          </div>
          <div class='phonelist'>
            <div class='qianming'>
                <span>手机号:</span>
                <div class='xinxiright'>{{$store.state.userinfo.phone}}</div>
                
            </div>
            <div class='qianming'>
                <span>邮箱:</span>
                <div class='xinxiright'>{{$store.state.userinfo.signature}}</div>
                
            </div>
            <div class='qianming'>
                <span>二维码名片:</span>
                <div class='xinxiright'>{{$store.state.userinfo.signature}}</div>
                
            </div>
          </div>
          
      </div>

        <!-- <div v-if='$store.state.userinfo'>{{nicheng}}{{zhiwei}}{{$store.state.userinfo.address[0]}}{{city}}{{area}}{{$store.state.userinfo.sex}}{{$store.state.userinfo.signature}}</div> -->
        <div @click='saveinformation' ref='btn' class='saveinformation'>确定</div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import axios from 'axios'
import Settext from '../../../components/settext/settext.vue'
export default {
    data(){
        return{
            optionneirong:[
                'web前端工程师',
                'python工程师',
                'java工程师',
                'php工程师',
                '软件测试工程师',
                '小学生',
                '架构师'
            ],
            nicheng:this.$store.state.userinfo.name,
            zhiwei: this.$store.state.userinfo.position,
            sex:this.$store.state.userinfo.sex,
            qianming:this.$store.state.userinfo.signature,
            province:'',
            radio:this.$store.state.userinfo.sex,
            city:'',
            area:''
            
        }
    },
    components:{
        VDistpicker,
        Settext
    },
    created(){
        
    },
    methods:{
        saveinformation(){
            console.log(this.$store.state.userinfo.address[0]);
            this.$store.state.userinfo.address[0]=this.province
            this.$store.state.userinfo.address[1]=this.city
            this.$store.state.userinfo.address[2]=this.area
            // this.$refs.btn.style.margin_top='5px';
            axios.post('/setting',{
                id:this.$store.state.userinfo._id,
                name:this.$store.state.userinfo.name,
                position:this.$store.state.userinfo.position,
                sex:this.$store.state.userinfo.sex,
                signature:this.$store.state.userinfo.signature,
                address:[this.$store.state.userinfo.address[0],this.$store.state.userinfo.address[1],this.$store.state.userinfo.address[2]]
            }).then(res=>{
                this.$store.state.userinfo=res.data
            })
        },

        selected(data){
            this.province = data.province.value
            this.city = data.city.value
            this.area=data.area.value
        }
    }
    
}
</script>

<style>
.phonelist{
    display: none;
}
.xinxiright{
    display: none;
}
.diqu select{
    color:#a8a8a8 ;
}
.qianmingtextarea{
    resize: none;
}
.qianming span{
    width: 65px;
    display: block;
    float: left;
    text-align: right;
    color: #606266;
    /* margin-right: 20px; */
}
.saveinformation{
    width:80px;
    height:40px;
    background-color: #1d8aff;
    /* border:1px solid rgb(0, 212, 212); */
    border-radius:15px;
    box-shadow:2px 2px 5px #000;
    border:none;
    text-align: center;
    line-height: 40px;
    margin-left:0px;
    margin-top: 50px;
    cursor: pointer;
}
.saveinformation:hover{
    background-color: #007aff;
}
.nichenginput{
    width: 25%;
    height:36px;
    border:1px solid black;
     overflow: hidden;
     border-radius: 5px;
     border-color: #d9dde1;
    
     /* float: left; */
}
.nichenginput input{
     color:#d9dde1 ;
}
.zhiweioption{
    width: 25%;
    height:36px;
    border:1px solid black;
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
    border-color: #d9dde1;
      color:#a8a8a8  ;
}
.zhiweioption select{
    color:#a8a8a8  ;
}
.sexinput{
    margin-top:30px;
    /* border:1px solid red; */
    height:36px;
    width: 40%;
    line-height: 36px;
    
}
.zhiweioption select{
    height: 100%;
    width: 100%;
   border:none;
   cursor: pointer;
   border-color: #d9dde1;
}
.zhiwei,.diqu{
    margin-top:30px;
}
.zhiwei span,.nicheng span,.diqu span,.sex span {
    width: 65px;
    text-align: right;
    float: left;
    display: block;
    height: 100%;
    line-height: 36px;
    margin-right: 20px;
}
.nichenginput input{
    margin-left: 10px;
    height: 100%;
    width: 100%;
   border:none;
   color: #a8a8a8 ;
}
.nicheng{
    display: block;
}
.edit{
    font-size: 14px;
    color: #606266;
    border-radius: 20px;
    background-color: white;
    display: block;
    /* border:1px solid red; */
} 
.qianming{
    margin-top: 20px;
}
.qianming p{
    float: left;
}
.qianming textarea{
    border-color: #d9dde1;
    margin-left: 20px;
}
</style>