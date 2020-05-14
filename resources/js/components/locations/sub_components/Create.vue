<template>
    <div>
        <header class="page_title">
                <h2>Add Locations</h2>
        </header>
        <form method="POST" action="">
            <div class="form-group row">
                <label for="name" class="col-md-1 col-form-label text-md-right">Name</label>
                <div class="col-md-5">
                    <input id="name" type="text" class="form-control" name="name" value="" required autocomplete="name" autofocus>

                        <span class="invalid-feedback" role="alert">
                            <strong></strong>
                        </span>
               
                </div>
            </div>

            <div class="form-group row">
                <label for="cleaningInstructions" class="col-md-1 col-form-label text-md-right">Cleaning Instructions</label>
                <div class="col-md-5">
                   <textarea name="cleaningInstructions"></textarea>
                        <span class="invalid-feedback" role="alert">
                            <strong></strong>
                        </span>
                
                </div>
            </div>

            <div class="form-group row">
                <label for="timeZone" class="col-md-1 col-form-label text-md-right">Time Zone</label>
                <div class="col-md-5">
                    <select id="timeZone" type="text" class="form-control" name="timeZone" value="" required autocomplete="timeZone" autofocus>
                        <template v-for="timeZoneItem in this.timeZones">
                            <option :value="timeZoneItem">
                                {{timeZoneItem}}
                            </option>
                        </template>
              
                    </select>

  
                        <span class="invalid-feedback" role="alert">
                            <strong></strong>
                        </span>
            
                </div>
            </div>


            <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                        Add Location
                    </button>  
                </div>
            </div>
        </form>
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
