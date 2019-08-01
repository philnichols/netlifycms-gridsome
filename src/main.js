import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Import main css
import '~/assets/style/index.scss'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, {router, head, isClient}) {
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    })
    Vue.use(Vuetify);
    Vue.use(BootstrapVue);
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
