<!--  -->
<template>
  <div class="video">
    <header-top></header-top>
    <Vwarp :id="$route.params.id" />
    <Bottom />
  </div>
</template>

<script>
import Nav from "components/daiqin/Nav.vue";
import Vwarp from "components/daiqin/v-warp.vue";
import Bottom from "components/daiqin/Bottom.vue";
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';

export default {
  name: "Vpage",
  components: {
    Nav,
    Vwarp,
    Bottom,
    HeaderTop,
  },
};
</script>

<style scoped>
/* .video {
  padding-top: 50px;
} */
/* 移动端适配 */
@media screen and (max-width: 768px) {
  Nav {
    display: none;
  }
  .video {
    padding-top: 0px;
  }
}
</style>
