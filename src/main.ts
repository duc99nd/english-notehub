import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from '@/i18n'
import { mountAgentation } from '@/lib/agentation'
import router from '@/router'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.mount('#app')

void mountAgentation()
