<template>
 <div class='zhanghaobangding'>
      <div class='mamodal' v-show='$store.state.isshowmoco'>
       <moco-modal :shownumber= "shownumbers"></moco-modal>
     </div>
      <common-title :tilename="'账号绑定'" :successshow="true" :fraction="fraction"></common-title>
      <div class=''></div>
      <div class='itembox'>
          <itembox :shownumbera="1" :font1="'邮箱'" :leftimg="leftimg1" :font4="'未绑定（绑定邮箱可得一积分）'" :font2="'可用邮箱加密码登录慕课网，可用邮箱找回密码'" :binding="'立即绑定'"></itembox>
      </div>
      <div class='itembox' >
          <itembox :shownumbera="2" :font1="'手机'" :leftimg="leftimg2" :font4="$store.state.userinfo.phone" :font2="'可用手机号加密码登录慕课网，可通过手机号找回密码 无法绑定'" :binding="'操作'"></itembox>
      </div>
      <div class='itembox'>
          <itembox :shownumbera="3" :font1="'密码'" :leftimg="leftimg3" :font4="'已设置'" :font2="'用于保护账号信息和登录安全'" :binding="'修改'"></itembox>
      </div>
      <div class='itembox'>
          <itembox :shownumbera="4" :font1="'社交账号'" :leftimg="leftimg4" :font4="''" :font2="'绑定第三方账号，可以直接登录，还可以将内容同步到以下平台，与更多好友分享'" :binding="''"></itembox>
      </div>
      <div class='innerleft'>
          <div class='inner-i-box'>
              <inner-box :bangdingimgs="bangdingimg4" :bangdingimg="bangdingimg1" :bindname="'微信'" :isbangding="true"></inner-box>
          </div>
          <div class='inner-i-box'>
              <inner-box :bangdingimgs="bangdingimg5" :bangdingimg="bangdingimg2" :bindname="'微信'" :isbangding="true"></inner-box>
          </div>
          <div class='inner-i-box'>
              <inner-box :bangdingimgs="bangdingimg6" :bangdingimg="bangdingimg3" :bindname="'微信'" :isbangding="true"></inner-box>
          </div>
      </div>
      
     
 </div>
</template>

<script>
import CommonTitle from 'components/common-title/common-title.vue'
import InnerBox from 'components/inner-box/inner-box.vue'
import itembox from 'components/Itembox/itembox.vue'
import MocoModal from 'components/moco-modal/moco-modal.vue'
export default {
  data(){
    return{
      leftimg1:require('components/Itembox/itemboximg1.png'),
      leftimg2:require('components/Itembox/itemboximg2.png'),
      leftimg3:require('components/Itembox/itemboximg3.png'),
      leftimg4:require('components/Itembox/itemboximg4.png'),
      fraction:3,
      bangdingimg1:require('components/inner-box/wechat.png'),
      bangdingimg2:require('components/inner-box/micro-blog.png'),
      bangdingimg3:require('components/inner-box/QQ.png'),
      bangdingimg4:require('components/inner-box/wechat2.png'),
      bangdingimg5:require('components/inner-box/micro-blog2.png'),
      bangdingimg6:require('components/inner-box/QQ2.png'),
      titlename:'',
      shownumbers:1
    }
  },
  components: { itembox, CommonTitle, InnerBox,MocoModal },
  methods:{
    showmoco(index){
      this.shownumbers=index
      showmoco=true
    }
  }
}
</script>,
   

<style>
.innerleft{
  margin-left: 150px;
}
.mamodal{
  position: fixed;
   z-index: 9999999999;
  width: 488px;
  /* height: 339px; */
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  border-radius: 18px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #888888;
  /* display: none; */
}
.inner-i-box {
  height: 80px;
  width: 200px;
  margin-left: 50   px;
  float: left;
  margin-top: 15px;
}
.itembox{
    border-bottom: 1px solid #d9dde1;
    height: 88px;
    overflow: hidden;
    margin: auto;
}
.top-text1{
  color: black;
  font-size: 18px;
}
.zhanghaobangding-top{
  height: 80px;
  width: 100%;
  border: 1px solid black;
  line-height: 80px;
  font-weight: bold;
}
.zhanghaobangding{
  height: 100%;
}
</style>