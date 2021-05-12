<template>
<div class="home">
  <my-section background-image= "/images/transport.PNG">
  <v-img src="/images/Logo.png" contain class="ma-auto mb-1" height="130px" width="250px"></v-img>
  <v-card width ="40%" class="ma-auto mb-16" height="50px">
    <v-text-field placeholder="search..." color="white" class="input d-flex ma-auto"></v-text-field>
  </v-card>
  </my-section>  

  <my-section  background-color="#003b6d">
      <div class="home-img-container">
        <div class="home-howItWorks ma-auto"><h2>How it works?</h2></div>
        <img src="/images/element.PNG" width="150px" height="150px"/>
      </div>
      <div class="home-simple"><h1>very simple!</h1></div>
    </my-section>

    <my-section background-color="#003B6D">
      <div class=" home-options d-flex mt-2 ">
        <div class="home-option123 d-flex"><img src="/images/adress.PNG"/></div>
        <div class="home-option123 d-flex"><img src="/images/information.PNG"/></div>
        <div class="home-option123 d-flex"><img src="/images/selection.PNG"/></div>
      </div>
      <div class="home-optionsNames d-flex">
        <v-layout row justify-space-around>
          <div>
           <div class="home-divABC d-block">Adress</div>
           <div class="home-div123" >- entre the address that you want to go to.</div>
          </div>
          <div>
            <div class="home-divABC d-block">information</div>
            <div class="home-div123">- find the information about where do you want to go.</div>
          </div>
          <div>
            <div class="home-divABC d-block">selection</div>
            <div class="home-div123">- decide which transport is the faster.</div>
          </div>
        </v-layout>
      </div>
    </my-section>



</div>
</template>

<script>
import MySection from "../components/MySection.vue";

export default {
  name: "Home",
  components: {
    MySection
  }
};
</script>

<style lang="stylus" scoped>
.home
  &-img-container
    position relative
    margin-top 80px
    margin-left 550px
    height 150px
  &-howItWorks
    color aliceblue
    position absolute
    top calc(50% - 14px)
    width 100%
    text-shadow 1px 2px 2px #44D9E6
  &-img
    position relative
  &-simple
    font-family Georgia, serif
    font-size 50px
    letter-spacing 6px
    word-spacing 2px
    color #44D9E6
    font-weight 400
    font-style italic
    font-variant small-caps
    text-transform none
    text-shadow 1px 2px 2px #ffff
    margin-left 300px

  &-options
    justify-content space-around
  &-option123
   width 300px
  &-divABC
    margin-left 70px
    color #003b6d
    font-size x-large
    text-shadow 1px 2px 2px #44D9E6
  &-div123
    width 300px
</style>