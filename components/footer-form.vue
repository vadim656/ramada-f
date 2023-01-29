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

         <div class="flex flex-col gap-6">
              <input
                class="w-full pb-2 border-b border-neutral-200 focus:border-neutral-600  placeholder-neutral-800"
                type="text"
                placeholder="Имя"
                v-model="form.name"
              />
              <input
                class="w-full pb-2 border-b border-neutral-200 focus:border-neutral-600  placeholder-neutral-800"
                type="text"
                 placeholder="+7 (___) ___-__-__"
                v-maska data-maska="+7 (###) ###-##-##"
                v-model="form.phone"
              />
              <input
                class="w-full pb-2 border-b border-neutral-200 focus:border-neutral-600  placeholder-neutral-400"
                type="text"
                placeholder="Ваша почта (необязательно)"
                v-model="form.email"
              />
            </div>
        <button
         @click="addCompany"
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
        <span v-if="form.done == true">
              Спасибо! Мы перезвоним вам в течении 10 минут.</span
            >
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
<script setup>
import { vMaska } from 'maska'
const form = reactive({
  name: '',
  phone: '',
  email: '',
  done: false
})


async function addCompany () {
  const formData =
    'RAMADA PRO форма футер' +
    '\n' +
    'Имя:  ' +
    form.name +
    '\n' +
    'Телефон: ' +
    form.phone +
    '\n' +
    'Email: ' +
    form.email 

  const data = {
    text: formData
  }
  await $fetch(
    'https://api.telegram.org/bot5105461367:AAFMSy9Qa0qKNpVsZaWCK110HJJ5fYyEdMg/sendMessage?chat_id=-1001678474365',
    {
      method: 'POST',
      body: data
    }
  )
    .then(response => {
      form.done = true
      setTimeout(() => {
        form.done = false
        form.name = ''
        form.phone = ''
        form.email = ''
      }, 1500)
    })
    .catch(e => {
      console.log(e)
    })
}
</script>

<style></style>
