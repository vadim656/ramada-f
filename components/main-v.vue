<template>
  <div class="container mx-auto relative h-[730px]">
    <div class="w-full flex flex-col sm:flex-row justify-between gap-4 h-full">
      <div
        class=" w-full sm:w-1/2 h-full flex items-start flex-col gap-6 justify-start sm:justify-center"
      >
        <span class="text-3xl sm:text-5xl leading-tight pt-4 sm:pt-0">
          <b> Модульные беседки и навесы</b> из клееного бруса из металлических
          соединений
        </span>
        <span class="text-base sm:text-2xl"
          >для частного и коммерческого использования напрямую от
          производителя!</span
        >
        <div class="flex flex-col sm:flex-row justify-between gap-3 sm:gap-6">
          <b-arrows-form @click="mainOpenModal"
            >Оставить заявку</b-arrows-form
          >
          <b-arrows-form @click="this.$router.push({ path: '/catalog' })"
            >Перейти в каталог</b-arrows-form
          >
        </div>
      </div>
      <div class="sm:w-1/2">
        <img
          class=""
          src="~/assets/img/main-v.png"
          alt=""
        />
      </div>
    </div>
    <ModalMain ref="modalMain" />
  </div>
</template>



<script setup>
import bArrowsForm from './buttons/b-arrows-form.vue'

const modalMain = ref(null)

const mainOpenModal = () => {
  modalMain.value.show.val = true
}
</script>

<style></style>
