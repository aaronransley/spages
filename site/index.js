const app = Vue.createApp({
  data() {
    return {
      msgHome: "testHome",
      msgAbout: "testAbout"
    };
  },
});

const HomePage = { template: `<h1>Home - {{ msgHome }}</h1>` };
const AboutPage = { template: `<h1>About - {{ msgAbout }}</h1>` };

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);
app.mount("#app");
