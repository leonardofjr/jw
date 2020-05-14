<template>
    <div>
        <header class="page_title">
                <h2>Geofence</h2>
        </header>
    </div>
</template>

<script>
import moment from 'moment-timezone'; // Importing Time Zone Library

    export default {
        data: function() {
            return {
                timeZones: moment.tz.names() // Getting All Time Zones
            }
        },
        mounted() {

            console.log('Component mounted.')
            CKEDITOR.replace( 'cleaningInstructions' );
        }
    }
</script>
