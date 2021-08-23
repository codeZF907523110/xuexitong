<!--  -->
<template>
  <div class="examlist">
    <div class="pc container">
      <div class="question_box">
        <div
          v-for="(test, index) in tests"
          :key="index"
          class="item"
          :id="index"
        >
          <p>
            {{ index + 1 }}.<span class="type">{{ test.type }}</span
            >{{ test.timu }}
          </p>
          <!-- 单选 -->
          <div v-if="test.type == '单选'" class="question">
            <div
              class="list"
              v-for="(city, index) in test.xuanxiang"
              :key="index"
            >
              <input type="radio" :value="city" v-model="test.da" />{{ city }}
            </div>
          </div>
          <!-- 多选 -->
          <div v-else-if="test.type == '多选'" class="question">
            <div
              class="list"
              v-for="(city, index) in test.xuanxiang"
              :key="index"
            >
              <input type="checkbox" :value="city" v-model="test.da" />{{
                city
              }}
            </div>
          </div>
          <!-- 简答题 -->
          <div v-else-if="test.type == '简答'" class="question">
            <div class="list">
              <textarea
                name="jianda"
                id=""
                cols="20"
                rows="5"
                v-model="test.da"
              ></textarea>
            </div>
          </div>
          <!-- 判断 -->
          <div v-else-if="test.type == '判断'" class="question">
            <div
              class="list"
              v-for="(city, index) in test.xuanxiang"
              :key="index"
            >
              <input type="radio" :value="city" v-model="test.da" />{{ city }}
            </div>
          </div>
          <!-- 填空 -->
          <div v-else-if="test.type == '填空'" class="question">
            <div class="list">
              <p v-if="item !== ''" type="text">
                {{ item }}
              </p>
              <input type="text" v-model="test.da" />
            </div>
          </div>
        </div>
      </div>
      <div class="answer_box">
        <div class="tips">
          <div class="clearfix">
            <div class="isanswer box"></div>
            <p>已答</p>
          </div>
          <div class="clearfix">
            <div class="noanswer box"></div>
            <p>未答</p>
          </div>
        </div>
        <div class="answercard">
          <div class="item">
            <h3>单选题：30分</h3>
            <ul class="clearfix">
              <li
                v-for="(item, index) in tests"
                :key="index"
                :class="{ isanswer: item.da.length >= 1 }"
                @click="pcgo(index)"
              >
                {{ index + 1 }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="phone container-fluid">
      <div class="swiper-container recommend-swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(test, index) in tests"
            :key="index"
            class="item swiper-slide"
          >
            <p>
              {{ index + 1 }}. <span class="type">{{ test.type }}</span>
              {{ test.timu }}
            </p>
            <!-- 单选 -->
            <div v-if="test.type == '单选'" class="question">
              <div
                class="list"
                v-for="(item, index) in test.xuanxiang"
                :key="index"
              >
                <input
                  type="radio"
                  :value="item"
                  v-model="test.da"
                  id="danxuan"
                />{{ item }}
              </div>
            </div>
            <!-- 多选 -->
            <div v-else-if="test.type == '多选'" class="question">
              <div
                class="list"
                v-for="(item, index) in test.xuanxiang"
                :key="index"
              >
                <input type="checkbox" :value="item" v-model="test.da" />{{
                  item
                }}
              </div>
            </div>
            <!-- 简答题 -->
            <div v-else-if="test.type == '简答'" class="question">
              <div class="list">
                <textarea
                  name="jianda"
                  id=""
                  cols="20"
                  rows="5"
                  v-model="test.da"
                ></textarea>
              </div>
            </div>
            <!-- 判断 -->
            <div v-else-if="test.type == '判断'" class="question">
              <div
                class="list"
                v-for="(item, index) in test.xuanxiang"
                :key="index"
              >
                <input type="radio" :value="item" v-model="test.da" />{{
                  item
                }}᠌
              </div>
            </div>
            <!-- 填空 -->
            <div v-else-if="test.type == '填空'" class="question">
              <div class="list">
                <div
                  class="list"
                  v-for="(item, index) in test.xuanxiang"
                  :key="index"
                >
                  <p v-if="item != ''">{{ item }}</p>
                  <input v-else type="text" v-model="test.da" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="answer_box" :class="{ cardactive: cardshow }">
        <div class="hidebox" @click="cardshow = false"></div>
        <div class="showbox">
          <div class="menu" @click="cardshow = !cardshow"></div>
          <div class="tips">
            <div class="clearfix">
              <div class="isanswer box"></div>
              <p>已答</p>
            </div>
            <div class="tipshidebox">
              <span
                v-if="tests"
                class="moveblock"
                :style="{ width: getwidth() }"
                >{{ getrate() }}</span
              >
            </div>
            <div class="clearfix">
              <div class="noanswer box"></div>
              <p>未答</p>
            </div>
          </div>
          <div class="answercard">
            <div class="item">
              <h3>单选题：30分</h3>
              <ul class="clearfix">
                <li
                  v-for="(item, index) in tests"
                  :key="index"
                  :class="{ isanswer: item.da.length >= 1 }"
                  @click="go(index)"
                >
                  {{ index + 1 }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  name: "examlist",
  data() {
    return {
      cardshow: false,
      Swiper: null,
    };
  },
  props: {
    tests: Array,
  },
  components: {},
  mounted() {
    //swiper6提供了use方法，其他写法没有啥区别和swiper4、5一样
    Swiper.use([Navigation, Pagination, Autoplay]);
    this.Swiper = new Swiper(".recommend-swiper", {
      // direction: 'vertical', // 垂直切换选项
      loop: false, // 循环模式选项
      autoplay: false,
      // 如果需要分页器
    });
  },
  methods: {
    getwidth() {
      let width = 0;
      for (let i = 0; i < this.tests.length; i++) {
        if (this.tests[i].da.length != 0) {
          width++;
        }
      }
      return (width / this.tests.length) * 100 + "%";
    },
    getrate() {
      let rate = this.getwidth();
      return parseFloat(rate).toFixed(2) + "%";
    },
    go(index) {
      this.Swiper.slideTo(index);
    },
    pcgo(index) {
      let h = document.getElementById(index).offsetTop;
      window.scrollTo({
        top: h,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.answercard .item {
  margin-bottom: 22px;
}
.answercard .item h3 {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #303133;
  line-height: 20px;
}
.answercard .item li {
  list-style: none;
  float: left;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  margin-right: 2px;
  text-align: center;
  line-height: 32px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #e4e7ed;
  margin-bottom: 3px;
  cursor: pointer;
}
.answercard .item ul.clearfix {
  padding: 0;
}
.tips .clearfix:last-child {
  margin-left: 32px;
}
.tips .clearfix p {
  float: left;
  margin-left: 8px;
}
.tips .clearfix {
  display: inline-block;
}
.tips .box {
  width: 18px;
  height: 18px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
}
.noanswer {
  background: #e4e7ed;
}
.isanswer {
  background: #4191f5 !important;
}
.tips {
  text-align: center;
  margin-bottom: 24px;
}
.examlist {
  background: #f5f7fa;
}
.pc {
  display: flex;
  justify-content: space-between;
}
.question_box {
  width: 68%;
  background: #fff;
}
.pc .answer_box {
  padding: 37px 14px;
  width: 25%;
  /* margin-top: 80px; */
  overflow-y: auto;
  background: #fff;
  height: 500px;
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
}
.item p {
  line-height: 30px;
}
.type {
  display: inline-block;
  border-radius: 8px 8px 8px 0;
  background: #4191f5;
  height: 20px;
  width: 50px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  margin: 0 3px;
  color: #fff;
  font-weight: 700;
}
.phone {
  display: none;
}
.phone .item {
  padding: 0 20px;
}
.phone .item p {
  margin-top: 30px;
}
.phone .list {
  padding: 0 10px;
  font-size: 18px;
}
.swiper-container {
  height: 100%;
}
textarea {
  width: 60%;
  margin-left: 10px;
  resize: none;
  border: 1px solid #000;
}
.pc .question_box .item {
  padding: 10px 20px;
  border-bottom: 1px solid rgba(226, 226, 226, 0.7);
}
.pc .question_box .list {
  margin-bottom: 10px;
}
.item > p {
  font-size: 18px;
}
.list {
  padding: 0 44px;
}
.list input {
  margin-bottom: 16px;
  color: #606266;
}

.swiper-wrapper {
  display: block;
}
.swiper-container {
  overflow: visible;
}

/* 响应式布局 */
@media screen and (max-width: 768px) {
  .examlist {
    background: #fff;
  }
  .menu {
    height: 34px;
    width: 34px;
    background: rgba(65, 145, 245, 0.7);
    position: absolute;
    right: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .swiper-wrapper {
    display: flex;
  }
  .swiper-container {
    overflow: hidden;
  }
  .pc {
    display: none;
  }
  .phone {
    position: relative;
    height: 70vh;
    display: block;
  }
  .type {
    display: inline-block;
    border-radius: 8px 8px 8px 0;
    background: #4191f5;
    height: 25px;
    width: 55px;
    text-align: center;
    font-size: 14px;
    line-height: 25px;
    color: #fff;
    font-weight: 700;
  }
  .tipshidebox {
    height: 33px;
    width: 60%;
    /* margin: 0 auto; */
    margin-left: 40px;
    overflow: hidden;
  }
  .tips > .clearfix {
    display: none;
  }
  .cardactive .tipshidebox {
    display: none;
  }
  .cardactive .clearfix {
    display: inline-block;
  }
  .answer_box {
    background: none;
    transition: all 0.5s;
    box-sizing: border-box;
    position: fixed;
    top: 90%;
    /* top: 0%; */
    z-index: 9999999;
    left: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
  .cardactive {
    top: 0% !important;
  }
  .hidebox {
    height: 0vh;
    transition: all 0.5s;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .cardactive .hidebox {
    height: 20vh;
    opacity: 1;
  }
  .showbox {
    height: 80vh;
    background: #fff;
  }
  .answer_box .tips {
    padding: 20px 0;
  }
}
</style>
<style>
.moveblock {
  float: left;
  display: block;
  width: 100%;
  font-size: 18px;
  line-height: 33px;
  text-align: center;
  height: 33px;
  margin: 0 auto;
  border-radius: 10px;
  background-size: 30px 30px;
  background-image: linear-gradient(
    135deg,
    rgb(65 145 245) 0%,
    rgb(65 145 245) 25%,
    white 25%,
    white 50%,
    rgb(65 145 245) 50%,
    rgb(65 145 245) 75%,
    white 75%,
    white 100%
  );
  animation: move 2s linear infinite;
}
@keyframes move {
  0% {
    background-position: 0px 0;
  }
  50% {
    background-position: 30px 30px;
  }
  100% {
    background-position: 60px 60px;
  }
}
</style>