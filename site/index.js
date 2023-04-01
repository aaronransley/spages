const { createApp } = Vue
const { createRouter, createWebHistory } = VueRouter

const app = createApp()

app.config.globalProperties = {
  ...(app.config?.globalProperties || {}),
  msgHome: 'testHome',
  msgAbout: 'testAbout',
}

const HomePage = { template: `<h1>Home - {{ msgHome }}</h1>` }
const AboutPage = { template: `<h1>About - {{ msgAbout }}</h1>` }

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
