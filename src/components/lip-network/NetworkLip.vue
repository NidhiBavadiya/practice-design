<template>
  <div class="network">
    <div class="top-data">
        <b-form-input 
            class="network-input my-2"
            placeholder="search"
        >
        </b-form-input>
        <div class="top-btns my-2">
            <b-button class="top_net_btn">Companies</b-button>
            <b-button class="top_net_btn">People</b-button>
        </div>
        <b-button class="top_filter_btn my-2">filter</b-button>
    </div>
    <div>
      <network-data-cards></network-data-cards>
    </div>
  </div>
</template>

<script>
import NetworkDataCards from './lip-network-modal/NetworkDataCards.vue';
export default {
  components:{
    NetworkDataCards,
  }

}
</script>

<style>

</style>