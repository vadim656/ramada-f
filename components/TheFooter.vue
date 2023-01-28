<template>
  <div class=" bg-neutral-50">
    <div class="container mx-auto py-12 flex flex-col sm:flex-row justify-between">
      <div class="flex flex-col gap-10">
        <nuxt-link to="/">
          <img src="~/assets/img/logo-black.svg" alt="" />
        </nuxt-link>
        <div class="flex flex-col sm:flex-row gap-10">
          <div class="flex flex-col gap-2">
            <span class="text-xl font-semibold">Меню</span>
            <ul class="flex flex-col sm:flex-row  gap-3">
              <nuxt-link to="/">Главная</nuxt-link>
              <nuxt-link to="/">Каталог</nuxt-link>
              <nuxt-link to="/">Услуги</nuxt-link>
              <nuxt-link to="/">Контакты</nuxt-link>
              <nuxt-link to="/">Доставка</nuxt-link>
              <nuxt-link to="/">Оплата</nuxt-link>
            </ul>
          </div>
          <!-- <div class="flex flex-col gap-2">
            <span class="text-xl font-semibold">Сервис</span>
            <ul class="flex flex-col gap-2">
              <nuxt-link to="/">Укладка</nuxt-link>
              <nuxt-link to="/">Дизайнерам</nuxt-link>
              <nuxt-link to="/">Партнерам</nuxt-link>
            </ul>
          </div> -->
        </div>
        <div class="flex justify-between gap-10">
          <div class="flex flex-col sm:flex-row gap-2 text-sm">
            <span>ООО “РУ.ТРЕЙД” ИНН/КПП/ОГРН </span>
            <span>4705097052/470501001/1224700017464</span>
            <span>Симферополь ул. Генерала Васильева 22А</span>
          </div>
          
        </div>
      </div>
      <div class="flex flex-col  justify-between items-start my-2 gap-2  sm:items-end">
        <!-- <img
          src="~/assets/img/oplata.png"
          alt=""
          class="w-full max-w-[100px] h-auto"
        /> -->
        <div class="flex flex-col  gap-2">
            <nuxt-link class="underline underline-offset-4" to="/"
              >Условия и соглашения</nuxt-link
            >
            <nuxt-link class="underline underline-offset-4" to="/"
              >Политика конфиденциальности</nuxt-link
            >
          </div>
        <span class="text-sm">©️ 2022 Все права защищены</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
