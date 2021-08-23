<!--  -->
<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <Search />
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="../navbar/">Default</a></li>
          <li><a href="../navbar-static-top/">Static top</a></li>
          <li class="active">
            <a href="./">Fixed top <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
import Search from "components/daiqin/Search.vue";
export default {
  name: "Nav",
  components: {
    Search,
  },
};
</script>

<style scoped>
.navbar {
  z-index: 9999999;
}
.logo {
  width: 140px;
  height: 50px;
  /* background: url(~assets/img/logo.png); */
}
.logo a {
  padding: 0;
  height: 100%;
  width: 100%;
}
.logo img {
  height: 100%;
  width: 100%;
}

/* 适配 */
@media screen and (max-width: 768px) {
}
</style>
