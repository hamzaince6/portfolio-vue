import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// BootstrapVue3'i import edin ve Vue uygulamasına ekleyin
import BootstrapVue3 from 'bootstrap-vue-3';

// Fontawesome
import '@fortawesome/fontawesome-free/css/all.css';

// Swiper CSS
import 'swiper/swiper-bundle.css';

const app = createApp(App);

// BootstrapVue3'ü kullanın
app.use(BootstrapVue3);

app.mount('#app');
