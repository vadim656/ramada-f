<template>
  <Transition name="slide-fade">
    <div
      v-if="show"
      class="fixed top-0 left-0 right-0 w-screen h-screen z-[99] flex justify-center items-center overflow-y-hidden"
    >
      <div
        @click="show = false"
        class="p-6 bg-neutral-800/70  w-full h-full flex justify-center items-center z-[100]"
      ></div>
      <div class=" z-[101] absolute">
        <div
          class="bg-white p-6  relative flex flex-col gap-4 rounded-md drop-shadow-2xl w-full max-w-[320px]"
        >
          <div class="w-full flex flex-col gap-4">
            <div class="flex items-center justify-between w-full gap-6">
              <span class="text-2xl">Заказать <br /> звонок </span>
              <button @click="show = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-col gap-6">
              <input
                class="w-full pb-2 border-b border-neutral-200 focus:border-neutral-600  placeholder-neutral-800"
                type="text"
                placeholder="Имя"
              />
              <input
                class="w-full pb-2 border-b border-neutral-200 focus:border-neutral-600  placeholder-neutral-800"
                type="text"
                placeholder="Телефон"
              />
              <input
                class="w-full pb-2 border-b border-neutral-200 focus:border-neutral-600  placeholder-neutral-400"
                type="text"
                placeholder="Ваша почта (необязательно)"
              />
            </div>
            <button
              class="flex gap-2 hover:gap-4 justify-center items-center bg-neutral-800 hover:bg-neutral-700 py-6 rounded-md anime w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span class="text-base text-white">Оставить заявку</span>
            </button>
            <span class="text-xs text-center text-neutral-500"
              >Оставляя заявку, вы соглашаетесь с условиями
              <nuxt-link class="underline underline-offset-4" to="/"
                >политики конфиденциальности и обработки персональных
                данных</nuxt-link
              >
            </span>
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

<style></style>
