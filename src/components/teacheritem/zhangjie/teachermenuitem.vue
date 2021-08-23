<template>
  <div class="teachermenuitem1">
    <div class="teachermenuitem" @click="showmenu">
      <div
        class="el-icon-arrow-right"
        :class="{ rander: ismenushow, rander1: !ismenushow }"
      ></div>
      <div class="zhangnumber">第{{}}章</div>
      <div class="zhangjiename">
        <span v-show="!isinputshow">{{ bigmenus[bigitem] }}</span>
        <div v-show="isinputshow" @click.stop>
          <input type="text" value="戴勤是个大傻吊" />
          <div class="el-icon-check" @click="inputshow"></div>
        </div>
      </div>
      <div
        class="el-icon-edit hhh"
        @click.stop
        v-show="!isinputshow"
        @click="inputshow"
      ></div>
      <div class="boxthreetext" @click.stop>
        <div class="addjie" @click="addxiaojie">
          <e-button :itemnmber="1" :itemtext="'添加节'"></e-button>
        </div>
        <!-- <span >添加节</span> -->
        <span>添加PPT</span>
        <span>删除</span>
      </div>
      <div class="fabu"  @click.stop>发布任务</div>
      <div
        class="boxmenubo"
        :class="{ boxmenuboshow: ismenushow }"
        v-if="litelmenus"
      >
        <ul>
          <li v-for="(item, index) in litelmenus[bigitem]" @click.stop>
            <div class="menusindex">{{ index }}.</div>
            <div class="boxmenuboitem" :class='{menuactive:index==litleindex}'>
              {{ item }}
            </div>
            <div
              class="el-icon-edit aaael"
              :class='{menuactive:index==litleindex}'
              @click='litelinputshow(item)'
            ></div>
            <div
              class="boxmenuinput"
              :class='{menuactive:index!=litleindex}'
            >
              <input type="text" :value="item" />
              <div class="el-icon-check" @click='litelinputs(item)'></div>
            </div>
            <div class='litletext'>
                <span>编辑视频 <input type="file" class='litletextinput'></span>
                <span>删除</span>
                <a>播放视频</a>
                <div class='bofangvideo'>

                </div>
                <div class='fabu'>发布任务</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import eButton from "../currency/e-button.vue";
export default {
  components: { eButton },
  data() {
    return {
      ismenushow: false,
      isinputshow: false,
      boxmenuinput: false,
      islitelinputshow: true,
      litleindex:10
    };
  },
  methods: {
    litelinputshow(item) {
      for(var i in this.litelmenus[this.bigitem]){
        if(item==this.litelmenus[this.bigitem][i]){
            console.log(i);
            this.litleindex=i
            // console.log(this.litleindex);
        }
      }
        
    },
    litelinputs(item){
      for(var i in this.litelmenus[this.bigitem]){
        if(item==this.litelmenus[this.bigitem][i]){
            console.log(i);
            this.litleindex=20
            // console.log(this.litleindex);
        }
      }
    },
    inputshow() {
      this.isinputshow = !this.isinputshow;
    },
    showmenu() {
      this.ismenushow = !this.ismenushow;
    },
    addxiaojie() {
      axios
        .post("/addclass", {
          bigitem: this.bigitem,
        })
        .then((res) => {});
    },
  },
  props: {
    litelmenus: Array,
    bigmenus: Array,
    bigitem: Number,
  },
};
</script>
<style>
.litletextinput{
  cursor: pointer;
  width:56px;
  height:100% ;
  position: absolute;
  top: 0px;
  opacity: 0;
  
}

.litletext a{
  margin-left: 50px;
}
.litletext{
  position: relative;
  margin-left: 500px;
  display: none;
}
.boxmenubo ul li:hover .litletext{
  display: block;
}
.litletext span{
  float: left;
  font-size: 14px;
  color: #909399;
  margin-left: 25px;
  cursor: pointer;
  letter-spacing: 0;
}
.litletext span:hover{
  color: #00a1d6;
    transition: all 0.5s;
}
.litletext .fabu{
  float: right!important;
  margin-right:50px;
}
.litletext div{
  float: left;
}
.menuactive{
    display: none;
}
.menusindex {
  float: left;
}
.boxmenuinput {
  float: left;
  margin-left: 10px;
}
.boxmenuinput input {
  width: 182px;
  height: 25px;
}
.aaael {
  float: left;
  margin-top: 15px;
  margin-left: 5px;
}
.aaael:hover{
  color: #409EFF;
  transition: all 0.3s;
}
.boxmenuboitem {
  float: left;
}
.li-elicon {
  float: left !important;
}
.addjie {
  float: left;
}
.boxmenuboshow {
  transition: all 1.5s !important;
  max-height: 1200px !important;
  /* height:auto!important */
}
.rander {
  transform: rotate(90deg);
  transition: all 0.5s;
}
.rander1 {
  transform: rotate(0deg);
  transition: all 0.5s;
}
.boxmenubo ul li {
  width: 1100px;
  cursor: pointer;
  list-style: none;
  padding-left: 50px;
  float: left;
}
.boxmenubo ul {
  margin: 0;
  padding: 0;
}
.boxmenubo {
  /* position: absolute; */
  /* bottom: 0; */
  transition: all 0.7s;
  width: 100%;
  max-height: 0px;
  overflow: hidden;
  top: 44px;
  background-color: rgba(255, 255, 255, 0.5);
}
.boxmenubo li:hover {
  background-color: rgba(255, 255, 255, 1);
  transition: all 0.3 s;
}
.fabu {
  float: right;
  color: rgb(0, 36, 199);
  font-size: 18px;
  margin-right: 10px;
  cursor: pointer;
}
.hhh {
  /* margin-left: 5px; */
  cursor: pointer;
  float: left;
  margin-top: 15px;
}
.hhh:hover,
.fabu:hover {
  color: #00a1d6;
  transition: all 0.5s;
}
.boxthreetext {
  position: absolute;
  left: 550px;
  float: left;
}
.boxthreetext span {
  font-size: 14px;
  color: #909399;
  margin-left: 25px;
  cursor: pointer;
  letter-spacing: 0;
}
.boxthreetext span:hover {
  color: #00a1d6;
  transition: all 0.5s;
}
.zhangnumber {
  font-size: 16px;
  float: left;
  margin-left: 5px;
}
.zhangjiename span {
  float: left;
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
}
.zhangjiename input {
  margin-left: 18px;
  height: 25px;
}
.zhangjiename {
  /* width: 500px; */
  float: left;
}
.teachermenuitem1 {
  width: 1100px;
  /* min-height: 44px; */
  margin: 0 auto;

  background-color: rgba(255, 255, 255, 0.7);
}
.teachermenuitem {
  width: 1100px;
  transition: all 1s;
  min-height: 44px;
  /* border:1px solid red; */
  position: relative;
  line-height: 44px;
  border-bottom: 1px solid rgb(211, 211, 211);
}
.el-icon-check {
  font-size: 16px;
  line-height: 44px;
  font-weight: 700;
  margin-left: 15px;
  cursor: pointer;
  color: #00a1d6;
}
.el-icon-arrow-right {
  font-size: 22px;
  font-weight: 700;
  margin-left: 10px;
  float: left;
  margin-top: 10px;
}
</style>