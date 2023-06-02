<template>
  <div  class="main-layout" :class="{active : showsmallmenu}" >
    <div class="side_component">
    <side-bar></side-bar>
    <b-button class="side_btn" @click="smallMenuHideShow()"><b-icon icon="chevron-right"></b-icon></b-button>
  </div>
  <div class="component-layout">
    <router-view />
  </div>
  </div>
</template>

<script>
import SideBar from '../general/SideBar.vue';
export default {
  components:{
    SideBar
  },
  data(){
    return{
      showsmallmenu:true,
    }
  },
  methods:{
    smallMenuHideShow(){
      this.showsmallmenu = !this.showsmallmenu;
    }
  }

}
</script>

<style>

</style>