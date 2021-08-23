<!--  -->
<template>
  <div class="putdata container">
    <header-top></header-top>
    <el-steps :active="3" align-center>
      <el-step
        title="新系列"
        description="如果您想创建视频合集 请选择新建"
      ></el-step>
      <el-step
        title="加入作品"
        description="如果您想在原有基础上加入新的视频 请选择加入"
      ></el-step>
      <el-step
        title="管理作品"
        description="如果您想管理您的作品 请选择管理"
      ></el-step>
    </el-steps>
    <el-tabs v-model="activeName">
      <el-tab-pane label="新建" name="first">
        <div class="form-group">
          <h1 class="h1">输入您的作品名</h1>
          <el-autocomplete  v-model="zuopinming" placeholder="请输入内容" size='small'></el-autocomplete>
          <input
            type="file"
            id="exampleInputFile"
            name="avatr"
            @change="changeFile"
            style="display: none"
          />
          <h1 class="h1">选择分类</h1>
          <div class='ele1'>
            <el-select v-model="vtype" placeholder="请选择">
            <div v-for="(item,index) in category1">
              <el-option
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
            </div>
            
            
          </el-select>
          </div>
          <div class='ele2'>
            {{check1}}
              <el-select v-model="vvtype" placeholder="请选择">
              <div v-for="(item,index) in category2[check1]">
                <el-option
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
              </div>
               </el-select>
          </div>
          
          <div class="title">
            <h1 class="h1">封面上传</h1>
          </div>
          <div class="file_list">
            <div class="logo" @click="putfile()">点我上传</div>
          </div>
          <!-- 进度条 -->
          <div class="progress" v-show="rate != 0">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="2"
              aria-valuemin="0"
              aria-valuemax="100"
              style="min-width: 2em; width: 2%"
              :style="{ width: rate + '%' }"
            >
              {{ rate }}%
            </div>
          </div>
          <p>....</p>
          <button type="submit" class="btn btn-default" @click="uploadFile">
            提交
          </button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="加入" name="second">
        <div class="form-group">
          <h1 class="h1">输入标题</h1>
          <el-input v-model="title" placeholder="请输入内容"></el-input>
          <input
            type="file"
            id="exampleInputFile"
            name="avatr"
            @change="changeFile"
            style="display: none"
          />
          <h1 class="h1">选择系列</h1>
          {{xilie}}
          <el-select v-model="xilie" placeholder="请选择">
            <el-option
              v-for="item in $store.state.userinfo.class"
              :key="item"
              :label="item.label"
              :value="item"
            >
            </el-option>
          </el-select>
          <div class="title">
            <h1 class="h1">
              文件上传<span
                >（推荐采用mp4、flv格式，可有效缩短审核转码耗时）</span
              >
            </h1>
          </div>
          <div class="file_list">
            <div class="logo" @click="putfile()">点我上传</div>
          </div>
          <!-- 进度条 -->
          <div class="progress" v-show="rate != 0">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="2"
              aria-valuemin="0"
              aria-valuemax="100"
              style="min-width: 2em; width: 2%"
              :style="{ width: rate + '%' }"
            >
              {{ rate }}%
            </div>
          </div>
          <p class="help-block">Example block-level help text here.</p>
          <button type="submit" class="btn btn-default" @click="uploadFile">
            提交
          </button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="管理" name="third">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="address" label="操作"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
import HeaderTop from '../HeaderTop/HeaderTop.vue';
axios.defaults.timeout = 10000000;
axios.defaults.baseURL = "http://81.70.192.127:808";
export default {
  components: { HeaderTop },
  name: "",
  data() {
    return {
      check1:0,
      video: "",
      title: "",
      file: "",
      rate: 0,
      vtype:"",
      vvtype:"",
      type:0,
      category1:['前端开发','后端开发','移动开发','计算机基础','前沿技术','云计算&大数据','运维&而测试','数据库','UI设计&多媒体','游戏'],
       category2:[
        ['JavaScript','HTML/CSS','Vue.js','React.JS','Angular','Node.js','jQuery','Bootstrap','Sass/Less','WebApp','小程序','前端工具','CSS','Html5','CSS3','Typescript'],
        ['Java','Python','C','C++','Go','C#','Ruby','ThinkPHP','ThinkPHP','Yii','SpringBoot','爬虫','Tornado','Flask','Django','SSM','Spring Cloud','Lua','Swoole','PHP','.net'],
        ['Android','iOS','WEEX','Ionic','React native','Swift','Flutter'],
        ['数学','算法与数据结构','计算机网络'],
        ['计算机视觉','超级账本','数据分析&挖掘','以太坊','微服务','机器学习','深度学习','自然语言处理','区块链'],
        ['大数据','云计算','Hadoop','Storm','Kubernetes','Docker','阿里云','AWS','OpenStack','R语言','Flink','Hbase','Spark','容器'],
        ['测试','Linux','中间件','运维工具','自动化运维','安全测试','接口测试','自动化测试','性能测试','功能测试','运维','Apache'],
        ['MySQL','MongoDB','Oracle','SQL Server','NoSql','Redis'],
        ['动效动画','APPUI设计','设计工具','设计基础','模型制作','产品交互','Maya','Photoshop','ZBrush'],
        ['Unity 3D','Cocos2d-x']
      ],
      xilie: null,
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      zuopinming: "",
    };
  },
  methods: {
    putfile() {
      // console.log(this.activeName);
      document.getElementById("exampleInputFile").click();
    },
    uploadFile() {
      let formData = new FormData();
      let config = {
        //必须
        headers: {
          "Content-Type": "multipart/form-data",
        },
        //获取上传进度, 可去掉
        onUploadProgress: function (progressEvent) {
          let complete =
            ((progressEvent.loaded / progressEvent.total) * 100) | 0;
          console.log(complete + "%");
        },
      };
      formData.append("type", "视频");
      formData.append("avatar", this.file);
      formData.append("auther", this.$store.state.userinfo.name);
      if (this.activeName == "first") {
        formData.append("title", this.zuopinming);
        formData.append("vtype", this.vtype);
        formData.append("vvtype", this.vvtype);
        formData.append("iscreate", true);
      } else if (this.activeName == "second") {
        formData.append("title", this.title);
        formData.append('xilie',this.xilie)
      }
      axios
        .post("/file", formData, {
          onUploadProgress: (progressEvent) => {
            this.rate = parseInt(
              (progressEvent.loaded / progressEvent.total) * 100
            );
          },
        })
        .then((res) => {
          // this.video = res.data.name;
          console.log(res);
        });
    },
    upxilie() {},
    changeFile(e) {
      this.rate = 0;
      this.file = e.target.files[0];
    },
  },
  updated(){
    for(let i in this.category1){
        if(this.vtype==this.category1[i]){
          this.check1=i
        }
    }
    
  }
};
</script>

<style scoped>
.ele1{
  width: 200px;
  height: 50px;
  float: left;
}
.ele2{
  padding-left: 245px;
}
video {
  height: 200px;
  width: 100%;
  background: oldlace;
}
.title {
  padding: 12px 0;
}
h1 span {
  font-size: 12px;
}
.file_list {
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
}
.file_list h2 {
  flex: 1;
  margin-left: 22px;
}
.logo {
  width: 140px;
  height: 66px;
  background: rgb(167, 154, 154);
}
</style>
