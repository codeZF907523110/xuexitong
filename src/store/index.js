import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)
    //实例化
const store = new Vuex.Store({
    state: {
        isshow: true,
        loginshow: false,
        ischangecolor: false,
        userinfo: {},
        editshow: true,
        sideshow: false,
        showmoconumber: 1,
        isshowmoco: false,
        video: {},
        homeinfo: {},
        wenzhang: {},
        arrb: [],
        estclassshow: false
    }
})
export default store