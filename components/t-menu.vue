<template>
  <Transition name="slide-fade">
    <div
      v-if="show"
      class="fixed top-0 left-0 right-0 w-screen h-screen z-[99] flex justify-center items-center overflow-y-hidden"
    >
      <div class="p-6 bg-neutral-800 w-full h-full ">
        <div
          class="w-full flex flex-col justify-start items-center container mx-auto"
        >
          <button @click="show = false" class="text-white">Закрыть</button>
        </div>
        <div
          class="w-full h-full flex flex-col justify-center items-center container mx-auto"
        >
          <div class=" flex flex-col items-start gap-6 text-white text-6xl font-semibold">
            <nuxt-link class="pl-0 hover:pl-4 anime" to="/">Главная</nuxt-link>
            <nuxt-link class="pl-0 hover:pl-4 anime" to="/">Каталог</nuxt-link>
            <nuxt-link class="pl-0 hover:pl-4 anime" to="/">Услуги</nuxt-link>
            <nuxt-link class="pl-0 hover:pl-4 anime" to="/">Контакты</nuxt-link>
            <nuxt-link class="pl-0 hover:pl-4 anime" to="/">Доставка</nuxt-link>
            <nuxt-link class="pl-0 hover:pl-4 anime" to="/">Оплата</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
