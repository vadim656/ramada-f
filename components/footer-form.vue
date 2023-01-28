<template>
  <div class="container mx-auto">
    <div class="w-full grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-[8fr,4fr]">
      <img src="~/assets/img/footer-form.png" alt="" />
      <div class="flex flex-col gap-6 ">
        <div class="flex flex-col gap-2 ">
          <span class="text-4xl">У вас есть вопросы?</span>
          <span
            >Оставьте заявку, и мы поможем выбрать вам подходящий вариант!</span
          >
        </div>

        <div class="flex flex-col gap-4">
          <input
            class="w-full p-4 border border-neutral-800  placeholder-neutral-800 rounded-md"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            class="w-full p-4 border border-neutral-800  placeholder-neutral-800 rounded-md"
            type="text"
            placeholder="Ваш телефон"
          />
          <input
            class="w-full p-4 border border-neutral-400  placeholder-neutral-400 rounded-md"
            type="text"
            placeholder="Ваша почта (необязательно)"
          />
        </div>
        <button
          class="flex gap-2 hover:gap-4 justify-center items-center bg-neutral-800 hover:bg-neutral-700 py-6 rounded-md anime"
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
        <span class="text-sm text-neutral-400 text-center"
          >Оставляя заявку, вы соглашаетесь с условиями
          <nuxt-link class="underline underline-offset-4" to="/"
            >политики конфиденциальности и обработки персональных
            данных</nuxt-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
