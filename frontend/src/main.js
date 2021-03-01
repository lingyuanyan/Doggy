import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {router} from './js/router';
import "./js/Utilities.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'

import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookSquare)
library.add(faEnvelopeSquare)
library.add(faInstagramSquare)

const app = createApp(App);

app.use(router).component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
