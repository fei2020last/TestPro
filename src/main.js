//查看vue的版本号:npm list vue 
//@vue/cli脚手架查看版本:vue -V 
//vuex版本4.0.0
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'

//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')