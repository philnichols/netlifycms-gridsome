<template>
  <div id="app">


    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>
    </header>

    <main class="main max-width  background-color-1">
      <slot/>
    </main>


  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
//https://wizardly-varahamihira-adb04e.netlify.com/
export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">


</style>
