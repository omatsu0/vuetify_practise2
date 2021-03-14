<template>
  <section class="home">
   <HomeHero/>
   <HomeAbout/>
  </section>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero.vue'
import HomeAbout from '@/components/HomeAbout.vue'

export default {
  components: {
    HomeHero,
    HomeAbout
  }
}
</script>
<style lang="scss" scoped>
.home{
  padding-bottom: 50px;
}
</style>
