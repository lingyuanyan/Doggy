import { createRouter, createWebHistory } from 'vue-router';
import Banner from "../components/Dogs/Banner.vue";
import Footer from "../components/Dogs/Footer.vue";
import Content from "../components/Dogs/Content.vue";
import AboutUs from "../components/AboutUs/AboutUs.vue";
import Admins from "../components/Admins/Admins.vue";
import Adopt from "../components/Adopt.vue";
import Gallery from "../components/Gallery.vue";
import GetInvolved from "../components/GetInvloved.vue";
import Programs from "../components/Programs.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dogs' },
    { name:'dogs', path: '/dogs', components: {default: Content, footer: Footer, header: Banner}},
    { name:'aboutUs', path: '/aboutus', components:  {default: AboutUs, footer: Footer, header: Banner}},
    { name:'admins', path: '/admins', components:  {default: Admins, footer: Footer, header: Banner}},
    { name:'adopt', path: '/Adopt', components:  {default: Adopt, footer: Footer, header: Banner}},
    { name:'Gallery', path: '/Gallery', components:  {default: Gallery, footer: Footer, header: Banner}},
    { name:'getInvloved', path: '/GetInvolved', components:  {default: GetInvolved, footer: Footer, header: Banner}},
    { name:'programs', path: '/Programs', components:  {default: Programs, footer: Footer, header: Banner}},
    { path: '/notFound(.*)', redirect:'/dogs'}
  ],
});
export {router};
