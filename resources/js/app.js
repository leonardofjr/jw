/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');


import VueRouter from 'vue-router'
Vue.use(VueRouter)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import App from './components/App'
import Dashboard from './components/Dashboard'

import InspectionPlans from './components/InspectionPlans'
import LocationsMainRouterView from './components/locations/Index'
import Locations from './components/locations/sub_components/Locations'
import LocationsCreate from './components/locations/sub_components/Create'
import LocationsGeoFence from './components/locations/sub_components/GeoFence'

const router = new VueRouter({
        routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/locations',
            component: LocationsMainRouterView,
            children: [
                {
                    path: 'add',
                    component: LocationsCreate,
                },
                {
                    path: 'list',
                    component: Locations,
                },
                {
                    path: 'geofence',
                    component: LocationsGeoFence,
                }
            ]
        },
        {
            path: '/inspection_plans',
            name: 'Inspection Plans',
            component: InspectionPlans,
        },
    ],
    linkActiveClass: "active", // Changing router-link-active class to work with bootstrap
    linkExactActiveClass: "exact-active", // Changing router-link-exact-active class to work with bootstrap
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
