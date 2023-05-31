<template>
  <div id="app">
    <div class="d-flex"> 
    <component :is="layout">
      <router-view />
    </component>
  </div>
  </div>
</template>

<script>

const FullLayout = () => import("@/components/layout/FullLayout.vue")
const VerticalLayout = () => import("@/components/layout/VerticalLayout.vue")
export default {
  name: 'App',
  components: {
    // SideBar,
    FullLayout,
    VerticalLayout
  },
  computed:{
    layout(){
      return 'vertical-layout';
      // if(this.$router.meta.layout==="full") return "full-layout" ;
      // return "vertical-layout"
    }
  }
}
</script>

<style>

</style>
