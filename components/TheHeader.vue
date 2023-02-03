<template>
  <div class="w-full fixed top-0 left-0 z-[4] bg-white drop-shadow-sm">
    <div class="container mx-auto py-4 px-2 grid grid-cols-[1fr,1fr,1fr] content-center">
      <nuxt-link to="/" class="flex items-center">
        <img src="~/assets/img/logo-black.svg" alt="" />
      </nuxt-link>
      <div class="flex w-full justify-center">
        <button @click="openMenu" >
        <img src="~/assets/img/menu-close.svg" alt="" />
      </button>
      </div>
      
      <div class="flex flex-col items-end">
        <div class="flex gap-1 items-center">
          <img  src="~/assets/img/phone.svg" alt="" />
          <a href="tel:89893462808" class="text-xs sm:text-sm">+7 (989) 346-28-08</a>
        </div>
        <span class="text-xs hidden sm:block">Звоните, мы работаем</span>
      </div>
    </div>
    <t-menu ref="menu" />
  </div>
</template>

<script>
import tMenu from './t-menu.vue'
export default {
  components: { tMenu },
  methods: {
    openMenu () {
      this.$refs.menu.show = true
    }
  }
}
</script>

<style></style>
