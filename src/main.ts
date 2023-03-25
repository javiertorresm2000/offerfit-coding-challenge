import { createApp } from 'vue'
import './assets/scss/styles.scss'
import App from './App.vue'

//Boostrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'
const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.mount('#app')
