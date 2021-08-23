<!-- 评论区 -->
<template>
  <div class="comment">
    <!-- 头部 -->
    <div class="c_head">
      <span v-if="comment">{{ comment.length }}</span>
      <span>评论</span>
    </div>

    <!-- 主体部分 -->
    <div class="c_box">
      <!-- 排序部分 -->
      <div class="c_sort clearfix">
        <div class="tabs-order">
          <ul class="clearfix">
            <li class="hot-sort on">按热度排序</li>
            <li class="new-sort">按时间排序</li>
          </ul>
        </div>
      </div>
      <pinglun :Otype="0" :isshow="true" class="c_issue" />
      <!-- 评论列表 -->
      <div class="c_list">
        <Clist
          v-for="(item, index) in $store.state.video.comment"
          :info="item"
          :index="index"
          @isreply="show"
          :isreplyShow="isreplyShow"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import C_list from "components/daiqin/Commentlist.vue";
import Pinglun from "components/daiqin/pinglun.vue";
import { mapState } from "vuex";
export default {
  name: "Comment",
  components: {
    Clist: C_list,
    Pinglun,
  },
  methods: {
    show(i) {
      this.isreplyShow = i;
    },
  },
  data() {
    return {
      text: "",
      pinglun: {},
      isreplyShow: -1,
    };
  },
  computed: {
    ...mapState({
      comment: (state) => state.video.comment,
    }),
  },
};
</script>

<style scoped>
.comment {
  margin-top: 20px;
  z-index: 0;
  position: relative;
}
/* 头部 */
.c_head {
  font-size: 18px;
  line-height: 24px;
  color: #222;
  margin: 0 0 20px;
  padding: 0 10px;
}
.c_head span:first-child {
  margin-right: 10px;
}

/* 主体 */

/* 排序 */
.tabs-order {
  padding: 0 10px;
}
.tabs-order > ul {
  padding: 0;
  list-style: none;
}
.tabs-order > ul > li {
  background-color: transparent;
  border-radius: 0;
  border: 0;
  padding: 8px 0;
  margin-right: 16px;
  border-bottom: 1px solid transparent;
  position: relative;
  float: left;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #222;
}
.tabs-order > ul > li.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}
.tabs-order > ul > li.on::after {
  content: "";
  width: 6px;
  height: 6px;
  background: #00a1d6;
  transform: rotate(45deg);
  position: absolute;
  bottom: -3px;
  left: 50%;
  margin-left: -3px;
  visibility: visible;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .c_issue {
    display: none;
  }
}
</style>

