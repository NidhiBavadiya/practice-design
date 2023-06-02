<template>
  <div class="Representatives_data">
     <div class="Representatives_title">
      <h5>Representatives</h5>
      <div class="d-flex justify-contect-end align-items-center">
        <p class="viewdata" v-if="showMore == false">View All</p>
        <b-button class="show_data_btn" @click="showMore = true" v-if="showMore == false"><b-icon icon="chevron-right"></b-icon></b-button>
        <b-button class="show_data_btn" @click="showMore = false" v-else><b-icon icon="chevron-left"></b-icon></b-button>
      </div>
    </div>
      <div>
        <div class="network_data_card">
            <div v-for="i in 5" :key="i" >
            <b-card class="Representatives_card" v-if=" i<=4 || showMore">
                <div class="company_img">
                    <img src="@/assets/images/icons/cartoon1.png" alt="company-logo" class="card_logo_img">
                    <div>
                        <b-button class="round_btn" @click="isOpenContactModal=true"><img src="@/assets/images/icons/office-plus.svg" alt="officeicon"></b-button>
                        <b-button class="round_btn"><img src="@/assets/images/icons/threedot.svg" alt="threedot"></b-button>
                    </div>
                </div>
                <div class="Represent_title">
                    <h5>Moeller IP</h5>
                </div>
                <div class="company_detail">
                    <div class="d-flex">
                        <img src="@/assets/images/icons/com_logo.svg" alt="logo">
                        <p class="com_detail_p"><span>Score</span></p>
                        <b-badge class="badge_tab">12</b-badge>
                    </div>
                    <div class="d-flex">
                        <img src="@/assets/images/icons/office_beg.svg" alt="beg">
                        <p class="com_detail_p">IP firm</p>
                    </div>
                    <div class="d-flex">
                        <img src="@/assets/images/icons/location_point.svg" alt="location">
                        <p class="com_detail_p">Munich, Germany</p>
                    </div>
                    <div class="d-flex">
                        <img src="@/assets/images/icons/earth.svg" alt="earth">
                        <p class="com_detail_p">23 <span>offices</span></p>
                    </div>
                </div>
            </b-card>
            </div>

        </div>
    </div>
    <network-modal
    :modalchangecontact="isOpenContactModal"
    ></network-modal>
  
</div>
</template>

<script>
import NetworkModal from './NetworkModal.vue';
export default {
    components:{
        NetworkModal
    },
data(){
    return{
        showMore:false,
    }
}
}
</script>

<style>

</style>