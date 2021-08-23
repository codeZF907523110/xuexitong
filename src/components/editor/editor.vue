<template>
  <div class="writewenzhang container">
    <header-top></header-top>
    <el-button type="text" @click="open"></el-button>
    <div class="fabufenmian">
      <div class="fabuimg" v-show="!isshow">
        <img :src="imgUrl" alt="" />
        <div class="fabuimgbtn">
          <div class="tihuan tihuan1" @click="tihuanimg"><i class="el-icon-refresh"></i></div>
          <div class="shanchu tihuan1" @click="shanchuimg">
            <i class="el-icon-delete"></i>
          </div>
        </div>
      </div>
      <div v-show="isshow" class="tyy">
        <img src="./dc.png" alt="" @click="imgClick" />
        <input
          name="avatar"
          type="file"
          accept=".jpeg, .jpg, .png"
          class="UploadPicture-input"
          @change="changeimg"
        />
        <span class="addfengmian">添加封面</span>
      </div>
      <div class="select1">
        请输入发布文章类型
        <br>
        <el-select v-model="optionvalue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="addtitle container">
      <label class="WriteIndex-titleInput">
        <textarea
          class="Input"
          placeholder="请输入标题（最多 100 个字）"
          style="height: 45px"
          v-model="titletext"
        >
        </textarea>
      </label>
    </div>
    <quill-editor
      class="quill container"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>
    <div class="fabubtn" @click="fabu">发布</div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import HeaderTop from "../HeaderTop/HeaderTop.vue";
import axios from "axios";
export default {
  components: {
    quillEditor,
    HeaderTop,
  },
  data() {
    return {
      isshow: true,
      file: {},
      content: `<span>戴勤</span>`,
      editorOption: {},
      imgUrl: "",
      titletext: "",
      aaa: {},
      optionvalue: "",
      options: [
        "全部",
        "前端开发",
        "后端开发",
        "移动开发",
        "计算机基础",
        "前沿技术",
        "云计算&大数据",
        "运维&而测试",
        "数据库",
        "UI设计&多媒体",
        "游戏",
      ],
    };
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    imgClick() {
      document.getElementsByClassName("UploadPicture-input")[0].click();
    },
    changeimg(e) {
      this.isshow = false;
      this.file = e.target.files[0];
      let url = "";
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      let that = this;
      reader.onload = function (e) {
        url = this.result.substring(this.result.indexOf(",") + 1);
        that.imgUrl = "data:image/png;base64," + url;
        // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
        console.log();
      };
    },

    shanchuimg() {
      this.isshow = true;
      this.imgUrl = "";
    },
    tihuanimg() {
      document.getElementsByClassName("UploadPicture-input")[0].click();
    },
    open(neiring,title) {
        this.$alert(neiring, title, {
          confirmButtonText: '确定',
          
        });
      },
    fabu() {
      if(this.titletext==''){
         this.open('请输入标题','警告')
      }else if(this.content==''){
         this.open('请输入文本内容','警告')
      }else if(this.optionvalue==''){
        this.open('请选择文章类型','警告')
      }else if(this.file==null){
        this.open('请添加封面','警告')
      }else{
        let formData = new FormData();
        formData.append("avatar", this.file);
        formData.append("auther", this.$store.state.userinfo.name);
        formData.append("title", this.titletext);
        formData.append("content", this.content);
        formData.append("type", "文章");
        formData.append("headphoto", this.$store.state.userinfo.headphoto);
        formData.append('wtype',this.optionvalue)
      axios
        .post("/file", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          if (error) {
            this.state = "error";
          }
        });
        this.open('发表成功','提示')
        this.$router.push('/textarea/0')
        setTimeout(() => {
          location.reload() 
        }, 300);
      }
     
      
    },
  },
};
</script>
<style scoped>
.tihuan1{
  font-size:22px;
}
.select1 {
  font-size: 25px;
  width: 300px; 
  margin-left:400px;
  position: absolute;
  height: 500px;
  /* border:1px solid red; */
  top: 0;
}
.WriteIndex-titleInput {
  width: 100%;
}
.fabufenmian input {
  width: 100%;
  height: 200px;
  border: 1px solid red;
  display: none;
}
.tyy {
  position: relative;
  height: 100%;
}
.tyy img {
  margin: 0 auto;
  padding-top: 80px;
}
.fabuimgbtn {
  position: absolute;
  width: 96px;
  height: 30px;
  background-color: rgba(231, 231, 231,0.5);
  line-height: 30px;
  right: 0;
  bottom: 0;
}
.tihuan1:hover{
  color:#337ab7;
  transition:all 0.3s;
}
.fabuimgbtn div {
  /* font-size: 12px; */
  width: 50%;
  float: left;
}
.fabufenmian {
  width: 400px;
  /* border:1px solid red; */
  margin-left: 20px;
  background-color: rgb(247, 247, 247);
  position: relative;
  text-align: center;
  cursor: pointer;
  /* overflow: hidden; */
  min-height: 200px;
}
.addtitle {
  text-align: center;
  margin: 0 auto;
  margin-top: 15px;
  font-weight: bold;
}
.WriteIndex-titleInput .Input {
  resize: none;
  font-family: "微软雅黑";
  font-weight: 500;
  height: 44px;
  min-height: 44px;
  display: block;
  width: 100%;
  border: 0;
  font-size: 32px;
  line-height: 1.4;
  border: none;
}
.fabubtn {
  cursor: pointer;
  width: 150px;
  height: 40px;
  border: 1px solid red;
  margin: 0 auto;
  text-align: center;
  line-height: 40px;
  border-radius: 18px;
  margin-top: 80px;
  margin-bottom: 10px;
}
.fabufenmian img {
  width: 10%;
  display: block;
}
.fabufenmian span {
  display: block;
  width: 100%;
  position: absolute;
  margin-top: -5px;
  color: grey;
  font-size: 15px;
  transition: all 0.5s;
  opacity: 0;
}
.fabufenmian:hover .addfengmian {
  opacity: 1;
  margin-top: 15px;
}
.quill-editor {
  /* width: 1150px; */
  margin: 0 auto;
  margin-top: 10px;
  height: 530px;
}

.fabufenmian .fabuimg img {
  width: 100%;
}
.ql-container {
  height: 530px;
}
.ql-snow {
  height: 530px;
}
</style>
