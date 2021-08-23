<!--  -->
<template>
  <a href="javascript:;" class="item" @click="go(classlist._id)"> 
    <div class="img">
      <div
        class="img-list"
        :style="{ 'background-image': 'url(' + classlist.cover + ')' }"
      ></div>
    </div>
    <div class="info">
      <p class="title">
        {{ classlist.title }}
      </p>
      <p class="type">
        <span>{{ classlist.vtype}}</span>
        <span class="auther">{{ classlist.auther }}</span>
      </p>
      <p class="number" v-if="classlist.likes">
        喜欢:{{ classlist.likes.length }}
      </p>
    </div>
    <div class="bottom clearfix">
      <span class="discount l">
        <i class="name"></i>
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: "classlist",
  props: {
    classlist: Object,
    
  },
  methods: {
    go(i) {
      this.$router.push("/video/" + i);
    },
  },
};
</script>

<style scoped>
.info {
  padding: 0 10px;
}
.auther::before {
  content: "";
  width: 1px;
  height: 12px;
  background-color: #ddd;
  display: inline-block;
  vertical-align: -1px;
  margin-right: 4px;
  margin-left: 4px;
}
a.item {
  float: left;
  position: relative;
  width: 270px;
  height: 272px;
  margin: 0 20px 20px 0;
  background: #ffffff;
  box-shadow: 0 6px 10px 0 rgb(95 101 105 / 15%);
  border-radius: 8px;
  float: left;
  overflow: hidden;
  transition: all 0.2s;
}
a.item:hover {
  transform: translateY(-10px);
}
a.item:nth-child(4n) {
  margin-right: 0;
}
.hot::before {
  background-image: url();
}
.item .img {
  height: 152px;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.img-list {
  height: 100%;
  width: 100%;
}
.item .img .img-list {
  background-size: cover;
  background-position: top center;
  transition: all 0.5s;
}
.img:hover .img-list {
  transform: scale(1.1);
}

p.title {
  color: #545c63;
  text-align: left;
  line-height: 20px;
  font-size: 18px;
  /* height: 40px; */
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
p.number {
  display: block;
  color: #9199a1;
  font-size: 12px;
  margin-bottom: 8px;
}

.item > div.bottom {
  font-size: 12px;
  color: #9199a1;
  line-height: 18px;
  padding: 0 8px;
  margin-bottom: 18px;
}
.l {
  float: left;
}
.bottom .discount {
  border: 1px solid rgba(242, 13, 13, 0.2);
  border-radius: 2px;
  font-size: 12px;
  line-height: 1;
  margin-right: 4px;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
i.name {
  font-style: normal;
  color: #fff;
  background-color: rgba(242, 13, 13, 0.6);
}

.price {
  line-height: 20px;
  margin-right: 2px;
}
.red {
  color: #f01414;
}
.bold {
  font-weight: 700 !important;
}
p.type {
  color: #9199a1;
  text-align: left;
}
/* 移动端适配 */
@media screen and (max-width: 768px) {
  a.item {
    width: 100%;
    height: 140px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item .img {
    flex-basis: 110px;
    height: 110px;
    width: 110px;
    margin: 0;
    margin-left: 15px;
  }
  .item .title {
    padding: 0;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item .number {
    font-size: 14px;
    text-align: left;
  }
  .item .discount {
    display: none;
  }
  .info {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 10px;
  }
}
</style>
