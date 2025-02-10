import { createApp, reactive, provide } from 'vue'
import App from './App.vue'

const store = reactive({
  cart: {},
})

const app = createApp(App)

app.provide('store', store)

app.mount('#app')
