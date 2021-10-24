import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadFrom from './components/UploadFrom';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/', component: ImageList},
        { path: '/upload', component: UploadFrom }
    ] 
});

new Vue({
    router, //router : router (full form)
    store,
    render: h => h(App) 
}).$mount("#app");