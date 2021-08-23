<!--  -->
<template>
  <div>
    <div class="server container">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="(title, index) in title" :key="index">
              {{ title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in user" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.password }}</td>
            <td>
              <span v-for="(item1, index) in item.class" :key="index">{{
                item.class[index]
              }}</span>
            </td>
            <td>{{ item.integral }}</td>
            <td>{{ item.exp }}</td>
            <td>{{ item.address }}</td>
            <td>{{ getsex(item.sex) }}</td>
            <td>{{ item.signature }}</td>
            <td>{{ item.position }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <button @click="oClick('删除', index)">删除</button>
              <button @click="oClick('修改', index)">修改</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="alert" v-show="type">
      <h1>是否确定{{ type }}</h1>
      <div>
        <button @click="btnClick()">确定</button>
        <button @click="oClick()">取消</button>
      </div>
    </div>
  </div>
  <div class="server container" v-show="false">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ip地址</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in ip" :key="index">
            <td>{{ item.ip }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="server container">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ip地址</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in videodb" :key="index">
            <td>{{ item }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="server container">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>题目</th>
            <th>答案</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in examdb" :key="index">
            <td>{{ item.name }}</td>
            <td v-for="(question, index) in item.question" :key="index">
              题目：{{ question.timu }} —— 类型：{{ question.type }} —— 选项：{{
                question.xuanxiang
              }}
              —— 答案：{{ question.da }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="server container">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>文章</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in wzdb" :key="index">
            <td>{{ item }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  
</template>
    
<script>
import axios from "axios";
axios.defaults.baseURL = "http://81.70.192.127:808";
export default {
  name: "server",
  data() {
    return {
      title: [
        "账号",
        "密码",
        "已选课程",
        "积分",
        "经验",
        "地址",
        "性别",
        "签名",
        "职位",
        "手机号",
        "操作",
      ],
      user: [],
      type: "",
      now: 0,
      ip: [],
      videodb: [],
      examdb: [],
      wzdb: [],
    };
  },
  methods: {
    oClick(val, index) {
      this.type = val;
      this.now = index;
    },
    getsex(val) {
      if (val == "1") {
        return "男";
      } else if (val == "2") {
        return "保密";
      } else {
        return "女";
      }
    },
    btnClick() {
      if (this.type == "删除") {
        this.type = "";
        axios
          .post("./delete", { name: this.user[this.now].name })
          .then((res) => {
            this.user = res.data;
          });
      } else if (this.type == "修改") {
        this.type = "";
        axios
          .post("./changed", { name: this.user[this.now].name })
          .then((res) => {
            this.user = res.data;
          });
      }
    },
  },
  created() {
    axios.get("./server").then((res) => {
      this.user = res.data[0];
      this.ip = res.data[1];
      this.videodb = res.data[2];
      this.examdb = res.data[3];
      this.wzdb = res.data[4];
    });
  },
};
</script>

<style scoped>
.server {
  overflow: hidden;
}

table button {
  margin: 0 3px;
  border: none;
  width: 45px;
  height: 22px;
  background: rgb(58, 225, 231);
  border-radius: 5px;
  font-size: 12px;
  color: #fff;
  outline: none;
  cursor: pointer;
}

.alert {
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 250px;
  background-color: rgba(151, 151, 151, 0.78);
  border-radius: 8px;
  box-shadow: 0 5px 20px rgb(0 0 0 / 30%);
  color: #000;
  text-align: center;
}
.alert h1 {
  padding-top: 22px;
}
.alert div {
  margin-top: 120px;
}
.alert button {
  height: 32px;
  width: 60px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: rgb(0, 174, 255);
  cursor: pointer;
  margin: 0 20px;
}
</style>
