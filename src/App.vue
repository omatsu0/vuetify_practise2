<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <router-view/>
    </v-content>
    <AppFooter/>
  </v-app>
</template>
 
<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
 
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}
</style>
 