<template>
    <div>
        <header class="page_title">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                        <router-link :active="isExactActive" class="nav-link" exact to="/locations/list">List Locations</router-link>
                </li>
                <li class="nav-item">
                        <router-link :active="isExactActive" class="nav-link" exact to="/locations/add">Add Locations</router-link>
                </li>
                <li class="nav-item">
                        <router-link :active="isExactActive" class="nav-link" exact to="/locations/geofence">Geofence</router-link>
                </li>

            </ul>
        </header>

            <router-view></router-view>
    </div>
</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
