<template>
  <div class="sidebar">
    <div class="small_sidebar">
    <div class="sidenavigation">
        <div class="logo">
            <img src="@/assets/images/icons/sidelogo.svg" alt="logo" class="company_logo">
            <img src="@/assets/images/icons/small-sidelogo.svg" alt="smalllogo" class="small_company_logo">
        </div>
        <div class="profile_pic">
            <b-avatar class="avatar_1"></b-avatar>
            <b-avatar class="avatar_2"></b-avatar>
        </div>

        <div class="side_data_component">
          <ul class="side_ul">
            <li class="side_li">
              <div class="d-flex">
                <img src="@/assets/images/icons/Dashboard.svg" alt="Dashboard" class="side_menu_icon">
                <a href="#">Dashboard</a>
              </div>
            </li>
            <li class="side_li">
              <div class="d-flex"> 
                <img src="@/assets/images/icons/Workspace.svg" alt="Workspace" class="side_menu_icon">
                <a href="#">Workspace</a>
              </div>
            </li>
            <li class="side_li">
              <div>
                <img src="@/assets/images/icons/AllContect.svg" alt="contact" class="side_menu_icon">
                <a href="#">All Contacts</a>
              </div>
            </li>
          </ul>
        </div>

        <div class="side_data_component side_data_component_1">
          <ul class="side_ul">
            <li class="side_li">
              <div>
                <img src="@/assets/images/icons/LIPNetwork.svg" alt="LIPNetwork" class="side_menu_icon">
                <a href="">LIP Network</a>
              </div>
            </li>
            <li class="side_li">
              <div>
                <img src="@/assets/images/icons/LipMonitor.svg" alt="LIPMonitor" class="side_menu_icon">
                <a href="">LIP Monitor</a>
              </div>
            </li>
          </ul>
        </div>

        <div class="side_footer">
          <ul class="side_footer_ul">
            <li class="side_footer_li">
              <div class="d-flex">
                <img src="@/assets/images/icons/needHelp.svg" alt="Needhelp" class="side_menu_icon">
                <a href="">Need help?</a>
              </div>
            </li>
            <li class="side_footer_li">
              <div class="d-flex">
                <img src="@/assets/images/icons/setting.svg" alt="Settings" class="side_menu_icon">
              <a href="">Settings</a>
              </div>
            </li>
            <li class="side_footer_li">
              <div class="d-flex">
                <img src="@/assets/images/icons/logout.svg" alt="logout" class="side_menu_icon">
              <a href="">Log out</a>
              </div>
            </li>
          </ul>
        </div>


    <!-- </div> -->
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>