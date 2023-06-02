<template>
<div class="lip_network">
    <div class="lip_heading">
        <h2 class="l_h_h2">LIP Network <span>The IP people’s network</span></h2>
    </div>

    <div class="lip_network_tab">
    <b-tabs content-class="mt-3">
        <b-tab active>
            <template #title>
                <div class="d-flex">
                    <img src="@/assets/images/icons/LIPNetwork.svg" alt="network" class="tab_icon">
                    Network
                </div>
            </template>
            <network-lip></network-lip>
        </b-tab>    
        <b-tab>
            <template #title>
                <div class="d-flex">
                    <img src="@/assets/images/icons/my_network.svg" alt="my_network" class="tab_icon">
                    My Network
                </div>               
            </template>
        </b-tab>
        <b-tab>
            <template #title>
                <div class="d-flex">
                    <img src="@/assets/images/icons/messaging.svg" alt="messaging" class="tab_icon">
                    Messaging
                </div>        
            </template>
        </b-tab>
        <b-tab>
            <template #title>
                <div class="d-flex">
                    <img src="@/assets/images/icons/feed.svg" alt="feed" class="tab_icon">
                    Feed
                </div>             
            </template>
        </b-tab>
        <b-tab>
            <template #title>
                <div class="d-flex">
                    <img src="@/assets/images/icons/Events.svg" alt="Events" class="tab_icon">
                    Events
                </div>              
            </template>
        </b-tab>
    </b-tabs>
    </div>
</div>
</template>

<script>
import NetworkLip from "@/components/lip-network/NetworkLip.vue"
export default {
    components:{
        NetworkLip,
    }
}
</script>

<style>

</style>