import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import { VueTelegramPlugin } from 'vue-tg'
import Aura from '@primevue/themes/aura';
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(createPinia())
app.use(VueTelegramPlugin)

app.mount('#app')
