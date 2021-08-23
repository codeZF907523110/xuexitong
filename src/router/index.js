import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home'
import Setting from '../pages/Setting/setting'
// import zhanghaobangding from '../pages/Setting/zhanghaobangding/zhanghaobangding'
import video from '../pages/kecheng/Video playback/Videoplayback'
import classification from '../pages/Class/classification.vue'
import Edit from '../pages/Setting/gerenxinxi/edit.vue'
import textarea from '../pages/textarea/Comment-area.vue'
import editor from '../components/editor/editor'
import homepage from '../pages/homepage/homepage.vue'
import collection from '../components/homepageitem/collection.vue'
import dynamic from '../components/homepageitem/dynamic.vue'
import like from '../components/homepageitem/like.vue'
import album from '../components/homepageitem/album.vue'
import more from '../components/homepageitem/follow.vue'
import imglist from 'pages/imglist/Imglist.vue'
import vpage from '../pages/Vpage/Vpage.vue'
import readwenzhang from '../pages/readwenzhang/readwenzhang'
import message from '../pages/message/message'
import replyme from '../components/messageitem/replyme'
import myfabulous from '../components/messageitem/myfabulous'
import systemmessage from '../components/messageitem/systemmessage'
import mymessage from '../components/messageitem/mymessage'
import myprivate from '../components/messageitem/myprivate'
import allmessage from '../components/messageitem/allmessage'
import search from '../components/daiqin/Search'
import postvideo from '../components/daiqin/v'
import techerclass from '../pages/techerclass/techerclass'
import teaching from '../components/teacheritem/zhangjie/teaching'
import exam from '../components/teacheritem/exam'
import preview from '../components/teacheritem/preview'
import sign from '../components/teacheritem/sign/sign'
import task from '../components/teacheritem/task/task'
import topic from '../components/teacheritem/topic/topic'
import discuss from '../components/teacheritem/discuss/discuss'
import education from '../pages/education/education'
import edustudent from '../components/educations/edustudent'
import eduteacher from '../components/educations/eduteacher'
import creattask from '../pages/techerclass/creattask.vue'
import mobantask from '../pages/techerclass/mobantask.vue'
import alltask from '../components/teacheritem/task/alltask'
import classactivelist from '../components/teacheritem/sign/classactivelist'
import aaa from '../pages/project1/a.vue'
import shoushi from '../pages/project1/shoushi.vue'
import qiandao from '../components/teacheritem/sign/qiandao'
import camera from '../pages/project1/camera.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            path: '/camera',
            component: camera
        }, 
        {
            path:'/classactivelist',
            component:classactivelist
        },{
            path: '/classactivelist/qiandao',
            component: qiandao
        }, {
            path: '/aaa',
            component: aaa
        },
        {
            path: '/shoushi',
            component: shoushi
        },
        {
            path: '/',
            component: home
        }, {
            path: '/alltask',
            component: alltask
        }, {
            path: '/mobantask',
            component: mobantask
        }, {
            path: '/creattask',
            component: creattask
        },
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/video',
            component: video
        },
        {
            path: '/classification',
            component: classification
        },
        {
            path: '/edit',
            component: Edit
        },
        {
            path: '/textarea',
            component: textarea,
            children: [{
                path: '/',
                redirect: '/textarea/0'
            }, {
                path: '/index',
                component: textarea
            }]
        },
        {
            path: '/textarea/wenzhang/:id',
            component: readwenzhang
        },
        {
            path: '/write',
            component: editor
        },
        {
            path: '/setting',
            component: Setting
        }, {
            path: '/homepage/:id',
            component: homepage,
            children: [{
                    path: '/',
                    redirect: 'dynamic'
                },
                {
                    path: 'setting',
                    component: Setting
                },
                {
                    path: 'dynamic',
                    component: dynamic
                },
                {
                    path: 'like',
                    component: like
                },
                {
                    path: 'collection',
                    component: collection
                },
                {
                    path: 'album',
                    component: album
                },
                {
                    path: 'more',
                    component: more
                }
            ]
        },
        {
            path: '/imglist',
            component: imglist,
            children: [{
                path: '/',
                redirect: '0&0'
            }, {
                path: ':index',
                component: imglist
            }]
        }, {
            path: '/video/:id',
            component: vpage
        },
        {
            path: '/message',
            component: message,
            children: [{
                    path: '/',
                    redirect: 'allmessage'
                },
                {
                    path: 'replyme',
                    component: replyme
                },
                {
                    path: 'myfabulous',
                    component: myfabulous
                },
                {
                    path: 'systemmessage',
                    component: systemmessage
                },
                {
                    path: 'mymessage',
                    component: mymessage
                },
                {
                    path: 'myprivate',
                    component: myprivate
                }, {
                    path: 'allmessage',
                    component: allmessage
                }
            ]
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/postvideo',
            component: postvideo
        },
        {
            path: '/techerclass',
            component: techerclass,
            children: [{
                    path: '/',
                    redirect: 'teaching'
                },
                {
                    path: 'teaching',
                    component: teaching
                },
                {
                    path: 'discuss',
                    component: discuss
                },
                {
                    path: 'sign',
                    component: sign
                },
                {
                    path: 'task',
                    component: task
                },
                {
                    path: 'exam',
                    component: exam
                },
                {
                    path: 'preview',
                    component: preview
                },
                {
                    path: 'topic',
                    component: topic
                }
            ]
        },
        {
            path: '/education',
            component: education,
            children: [{
                    path: '/',
                    redirect: 'edustudent'
                }, {
                    path: 'edustudent',
                    component: edustudent
                },
                {
                    path: 'eduteacher',
                    component: eduteacher
                }
            ]
        },

    ]
})