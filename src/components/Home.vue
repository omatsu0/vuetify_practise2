<template>
  <section class="home">
    <HomeHero/>
    <HomeAbout/>
    <HomeWork/>
  </section>
</template>
<script>
import HomeHero from './HomeHero.vue'
import HomeAbout from './HomeAbout.vue'
import HomeWork from './HomeWork.vue'
 
export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeWork
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>