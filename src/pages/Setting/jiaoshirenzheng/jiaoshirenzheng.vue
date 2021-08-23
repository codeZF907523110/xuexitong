<template>
  <div>
    <common-title :tilename="'教师认证'" :successshow="false"></common-title>
    <div v-show="isteacher">已认证</div>
    <div class="jsrzright" v-show="!isteacher">
      <div class="jsrzname">
        <span class="namespan"><i>*</i>姓名:</span>
        <div class="jsrznameinput">
          <input
            type="text"
            v-model="teachername"
            placeholder="请输入姓名"
            name=""
            id=""
          />
        </div>
      </div>
      <div class="jsrzname">
        <span class="namespan"><i>*</i> 性别:</span>
        <div class="jsrznameinput jsrzradio">
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
        </div>
      </div>
      <div class="jsrzname">
        <span class="namespan"><i>*</i> 所在学校:</span>
        <div class="jsrznameinput">
          <input
            type="text"
            v-model="teacherschool"
            placeholder="请输入学校名称"
            name=""
            id=""
          />
        </div>
      </div>
      <div class="jsrzname">
        <span class="namespan"><i>*</i> 所在专业:</span>
        <div class="jsrznameinput">
          <input
            type="text"
            v-model="teachermajor"
            placeholder="请输入专业名称"
            name=""
            id=""
          />
        </div>
      </div>
      <div class="jsrzname">
        <span class="namespan"><i>*</i> 职务:</span>
        <div class="jsrznameinput">
          <input
            type="text"
            v-model="teacherpost"
            placeholder="请输入职务"
            name=""
            id=""
          />
        </div>
      </div>
      <div class="jsrzname">
        <span class="namespan"><i>*</i> 认证资料:</span>
        <div class="jiaoshiimg">
          <img src="../../../assets/img/jiaoshiimg.png" v-if='imgisshow' alt="" />
          <img v-else :src="imgUrl"  alt="">
          <input type="file" accept=".jpeg, .jpg, .png"  @change="changeimg" class="UploadPicture-input" />
        </div>
        <div class="jiaoshiimgtext">
          <span>资料要求</span>
          <span
            >1、上传您的工作证、教师资格证或其它证明您是高校教师的证明材料，保证个人信息（姓名部分）清晰可见。</span
          >
          <span>2、格式：jpg，png</span>
          <span>3、大小：<500M </span>
        </div>
        <div class="tijiao" @click='tijiao'>
          <el-button type="primary"
            >上传<i class="el-icon-upload el-icon--right"></i
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonTitle from "components/common-title/common-title.vue";
import axios from 'axios'
export default {
  data() {
    return {
      radio: "1",
      isteacher: false,
      teachername: "",
      teacherschool: "",
      teachermajor: "",
      teacherpost: "",
      imgUrl: "",
      imgisshow:true,
      file: {},
    };
  },
  components: { commonTitle },
  methods: {
    changeimg(e) {
        console.log('aaaaaaaaaaaaaaaaaa');
      this.imgisshow = false;
      this.file = e.target.files[0];
      let url = "";
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      let that = this;
      reader.onload = function (e) {
        url = this.result.substring(this.result.indexOf(",") + 1);
        that.imgUrl = "data:image/png;base64," + url;
        // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
        console.log('that.imgUrl');
      };
    },
    tijiao(){
        let formData = new FormData();
        formData.append('teachername',this.teachername)
        formData.append('fileimg',this.file)
        formData.append('teacherschool',this.teacherschool)
        formData.append('teachermajor',this.teachermajor)
        formData.append('teacherpost',this.teacherpost)
        formData.append('radio',this.radio)
        // axios.post('/teacherauthen',formData).then(res=>{
        //     console.log(res.data);
        // })
    }
  },
};
</script>

<style>
.jiaoshiimg input {
  width: 180px;
  height: 180px;
  position: absolute;
  top: 0;
  /* display: none; */
  opacity: 0;
  cursor: pointer;
}
.tijiao {
  width: 90px;
  position: absolute;
  left: 300px;
  top: 140px;
}
.shangchuan {
  height: 200px;
  display: none;
}
.jiaoshiimgtext span {
  display: block;
  color: #999;
  line-height: 2;
}
.jiaoshiimgtext {
  float: left;
  width: 400px;
  margin-left: 20px;
  /* float: left; */
  /* margin-left: 10px; */
}
.jiaoshiimg {
  width: 180px;
  height: 180px;
  float: left;
  overflow: hidden;
  position: relative;
}
.jiaoshiimg img {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.jsrzradio {
  border: none !important;
}
.jsrzright {
  width: 848px;
  height: 500px;
  margin-top: 30px;
}
.jsrzname {
  height: 36px;
  /* border:1px solid red; */
  margin-bottom: 30px;
  position: relative;
}
.jsrzname .namespan {
  width: 100px;
  text-align: right;
  float: left;
  text-align: right;
  vertical-align: middle;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.jsrzname span i {
  color: red;
}
.jsrzname .jsrznameinput {
  float: left;
  width: 230px;
  height: 36px;
  border: 1px solid black;
  overflow: hidden;
  border-radius: 5px;
  border-color: #d9dde1;
  line-height: 36px;
}
.jsrznameinput input {
  margin-left: 10px;
  height: 100%;
  width: 100%;
  border: none;
  color: #a8a8a8;
}
</style>