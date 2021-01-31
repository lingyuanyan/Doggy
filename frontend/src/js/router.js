import { createRouter, createWebHistory } from 'vue-router';
import Banner from "../components/Dogs/Banner.vue";
import Footer from "../components/Dogs/Footer.vue";
import Content from "../components/Dogs/Content.vue";
import AboutUs from "../components/AboutUs/AboutUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dogs' },
    { name:'dogs', path: '/dogs', components: {default: Content, footer: Footer, header: Banner} },
    { name:'aboutUs', path: '/aboutus', components:  {default: AboutUs, footer: Footer, header: Banner}},
  ],
});
export {router};
