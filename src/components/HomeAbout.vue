<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>
    <v-container>
      <v-row class="home-about__contents">
        <v-col md="5" class="home-about__contents-img">
          <img src="../assets/img/profile.jpg" alt="" class="img-fluid">
        </v-col>
        <v-col md="5" class="home-about__contents-text">
          <p>XXXXXXXXXXXXXXXXXXあXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url"/>
    </v-container>
  </section>
</template>
<script>
import AppButton from './AppButton.vue'

export default {
  data () {
    return {
      buttonText: '詳しくみる',
      url: '/about'
    }
  },
  components: {
    AppButton
  }
}
</script>
<style lang="scss" scoped>
.home-about__contents {
  margin-top: 20px;
  justify-content: center;
 
  &-img {
    text-align: center;
  }
 
  &-text {
    word-wrap: break-word;
  }
}
</style>