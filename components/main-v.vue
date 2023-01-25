<template>
  <div class="container mx-auto relative h-[730px]">
    <div class="w-full flex justify-between h-full">
      <div class=" w-1/2 h-full flex items-start flex-col gap-6 justify-center">
        <span class="text-5xl leading-tight">
          <b> Модульные беседки и навесы</b> из клееного бруса из металлических
          соединений
        </span>
        <span class="text-2xl"
          >для частного и коммерческого использования напрямую от
          производителя!</span
        >
        <div class="flex justify-between gap-6">
          <b-arrows-form @click="$refs.modalMain.show = true"
            >Оставить заявку</b-arrows-form
          >
          <b-arrows-form @click="this.$router.push({ path: '/catalog' })"
            >Перейти в каталог</b-arrows-form
          >
        </div>
        <div class=" w-1/2">
          <img
            class="absolute top-10 right-0 z-[1]"
            src="~/assets/img/main-v.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <ModalMain ref="modalMain" />
  </div>
</template>

<script>
import bArrowsForm from './buttons/b-arrows-form.vue'
export default {
  components: { bArrowsForm },
  // setup () {
  //   const router = useRouter()
  //   const getCatalog = router.push({ path: '/catalog' })
  // },
  methods: {
    linkCatalog () {
      console.log('d')
    }
  }
}
</script>

<style></style>
