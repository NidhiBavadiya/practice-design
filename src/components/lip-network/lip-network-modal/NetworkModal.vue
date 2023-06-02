<template>
  <div class="network-modal">
    <b-modal id="network-modal" centered v-modal="ischangecontact" hide-footer hide-header>
        <div class="change-contact">
          <h5 class>Change Contact</h5>
            <v-select
              label="Select"
              class="contact-select"
              :options="selectContact"
              >
              </v-select>
              <span>This Information is only visible for you</span>
              <div class="cancel_save_btn">
                <b-button class="cancel_btn mr-2">Cancel</b-button>
                <b-button class="save_btn">Save</b-button>
              </div>
        </div>
  </b-modal>
  </div>    
</template>

<script>
export default {
    data(){
        return{
            ischangecontact:false,
            selectContact:['Contact', 'Client', 'Prospect']
        }
    },
    props:{
      modalchangecontact:{
        default:false
      }  
    },
    // watch:{
      // modalchangecontact(val){
        // console.log(val)
      // }
    // }

}
</script>

<style>

</style>