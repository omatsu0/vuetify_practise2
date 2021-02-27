<template>
  <v-app>
    <header>
      <v-app-bar
        app
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
      </v-app-bar>
      <!-- ここから -->
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>ABOUT</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>WORK</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>SERVICE</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>BLOG</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>ACCESS</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- ここまで -->
    </header>
  </v-app>
</template>
 
<script>
export default{
  data(){
    return{
      drawer: false
    }
  }
}
</script>
 
<style></style>