<template>
<div class="row">

                    <aside>
                        <div class="col-md-2">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <router-link to="/">Dashboard</router-link>
                                <router-link to="/locations/list">Locations</router-link>
                                <router-link to="/inspection_plans">Inspection Plans</router-link>
                            </div>
                        </div>
                    </aside>

                    <section class="col-md-10">
                            <router-view></router-view>
                    </section>
</div>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
