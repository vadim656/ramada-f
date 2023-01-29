<script setup>
import PRODUCT_ID from '~/graphql/query/PRODUCT_ID.gql'
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const variables = { ID: route.params.product }

const { data } = await useAsyncQuery(PRODUCT_ID, variables)

const colorDerevo = reactive({ colorId: 1 })
const colorMetal = reactive({ colorId: 1 })

const modalForm = ref(null)
const modalConsult = ref(null)

const zakazOrder = product => {
  modalForm.value.show.val = true
  modalForm.value.data = product
}

const reqProduct = product => {
  modalConsult.value.show.val = true
  modalConsult.value.data = product
}


const productOpenModal = product => {
  modalForm.value.show.val = true
  modalForm.value.data = product
}


</script>
<template>
  <div class="container mx-auto relative">
    <div class="flex flex-col gap-6 sm:gap-24" v-if="data">
      <!-- {{ data.product.data.attributes }} -->
      <!-- head -->
      <section class="w-full flex flex-col gap-6 sm:gap-10">
        <div
          class="flex items-center gap-3 sm:gap-6 text-neutral-600 text-xs sm:text-sm"
        >
          <nuxt-link to="/catalog">Каталог</nuxt-link>
          <img src="~/assets/img/arrow-product.svg" alt="" />
          <span>{{ data.product.data.attributes.Name }}</span>
        </div>
        <div
          class="flex flex-col sm:flex-row items-start justify-between gap-4"
        >
          <div class="flex items-start gap-4">
            <h1 class="text-xl sm:text-6xl">
              {{ data.product.data.attributes.Name }} -
              {{ data.product.data.attributes.Characteristic.Razmer }}
            </h1>
          </div>
          <span class="text-sm sm:text-base"
            >Артикул: {{ data.product.data.attributes.Art }}</span
          >
        </div>
      </section>
      <!-- head -->
      <section
        class="w-full grid grid-cols-1 sm:grid-cols-[7fr,5fr] gap-6 sm:gap-10"
      >
        <!-- slider -->
        <div class="flex flex-col gap-6 sm:gap-10">
          <productsPSlider :slides="data.product.data.attributes.Img.data" />

          <div class="hidden sm:flex flex-col gap-2">
            <span class="font-semibold text-lg">Описание</span>
            <p v-html="data.product.data.attributes.Desc"></p>
          </div>
          <div class="hidden sm:flex flex-col gap-2">
            <span class="font-semibold text-lg">У вас есть вопросы?</span>
            <button
              @click="reqProduct(data.product.data)"
              class="flex gap-2 hover:gap-4 justify-center items-center group  hover:bg-neutral-700 border border-neutral-700 py-6 rounded-md anime lg:max-w-[320px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 text-neutral-700 group-hover:text-white anime"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <span
                class="text-base text-neutral-700 group-hover:text-white anime"
                >Обратный звонок</span
              >
            </button>
          </div>
        </div>
        <!-- slider -->
        <div class="flex flex-col gap-6 sm:gap-10 text-sm sm:text-base">
          <div class="flex flex-col gap-4">
            <!-- Price -->
            <div class="flex items-start gap-2">
              <span class="text-2xl"
                >{{
                  data.product.data.attributes.Price.toLocaleString('ru-RU')
                }}
                ₽./шт.</span
              >
              <span class="text-neutral-400 line-through"
                >{{
                  data.product.data.attributes.SalePrice.toLocaleString('ru-RU')
                }}
                ₽</span
              >
            </div>
            <!-- Price -->
            <div class="flex flex-col ">
              <span>В выбранной комплектации</span>
              <span>В заказе: 1</span>
            </div>
            <button
              @click="zakazOrder(data.product.data)"
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
              <span class="text-base text-white">Заказать</span>
            </button>
          </div>
          <div
            v-if="data.product.data.attributes.Specifics.length"
            class="flex flex-col gap-2"
          >
            <span class="font-semibold text-lg">Спецификация:</span>
            <div class="flex flex-col gap-1  ">
              <div
                v-for="item in data.product.data.attributes.Specifics"
                :key="item.id"
                :class="[
                  item.Value !== 'b' ? 'border-b border-neutral-200' : ''
                ]"
              >
                <div class="flex justify-between items-center w-full pb-1">
                  <span
                    class="w-4/5"
                    :class="[item.Value !== 'b' ? '' : 'font-semibold']"
                    >{{ item.Name }}</span
                  >
                  <span class="w-1/5 text-right" v-if="item.Value !== 'b'">{{
                    item.Value
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4 py-2">
            <div
              v-if="data.product.data.attributes.ColorDerevo.length"
              class="flex flex-col gap-2"
            >
              <span class="font-semibold text-lg">Цвет дерева</span>
              <div class="grid grid-cols-4 lg:grid-cols-6 gap-2">
                <div
                  v-for="item in data.product.data.attributes.ColorDerevo"
                  :key="item.id"
                  @click="colorDerevo.colorId = item.id"
                  class="flex flex-col gap-1 items-start p-2 rounded-md"
                  :class="[
                    colorDerevo.colorId == item.id
                      ? 'text-white bg-neutral-700'
                      : 'bg-neutral-100 text-neutral-700'
                  ]"
                >
                  <img
                    src="~/assets/img/photo/test-materials.jpg"
                    alt=""
                    class="rounded-md overflow-hidden"
                  />
                  <span class="text-xs">{{ item.Name }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4 py-2">
            <div
              v-if="data.product.data.attributes.ColorMetal.length"
              class="flex flex-col gap-2"
            >
              <span class="font-semibold text-lg">Цвет метала</span>
              <div class="grid grid-cols-4 lg:grid-cols-6 gap-2">
                <div
                  v-for="item in data.product.data.attributes.ColorMetal"
                  :key="item.id"
                  @click="colorMetal.colorId = item.id"
                  class="flex flex-col gap-1 items-start p-2 rounded-md"
                  :class="[
                    colorMetal.colorId == item.id
                      ? 'text-white bg-neutral-700'
                      : 'bg-neutral-100 text-neutral-700'
                  ]"
                >
                  <img
                    src="~/assets/img/photo/test-materials.jpg"
                    alt=""
                    class="rounded-md overflow-hidden"
                  />
                  <span class="text-xs">{{ item.Name }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6 sm:gap-10 py-4">
            <!-- <div class="flex flex-col gap-2">
              <span class="font-semibold text-lg">Бесплатная доставка</span>
              <span>по России от 50 000₽</span>
            </div> -->
            <div class="flex flex-col gap-2">
              <span class="font-semibold text-lg">Оплата</span>
              <span>Наличный, безналичный расчёт</span>
            </div>
          </div>
          <div class="sm:hidden flex flex-col gap-2" v-if="data">
            <span class="font-semibold text-lg">Описание</span>
            <p v-html="data.product.data.attributes.Desc"></p>
          </div>
          <div class="flex sm:hidden flex-col gap-2">
            <span class="font-semibold text-lg">У вас есть вопросы?</span>
            <button
              @click="reqProduct(data.product.data)"
              class="flex gap-2 hover:gap-4 justify-center items-center group  hover:bg-neutral-700 border border-neutral-700 py-6 rounded-md anime lg:max-w-[320px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 text-neutral-700 group-hover:text-white anime"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <span
                class="text-base text-neutral-700 group-hover:text-white anime"
                >Обратный звонок</span
              >
            </button>
          </div>
        </div>
      </section>
      <section class=" w-full flex flex-col gap-4">
        <headersHH3>Другие товары</headersHH3>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <productsProductV1
            v-for="item in data.product.data.attributes.up_sales.data"
            :key="item.id"
            :dataProduct="item"
            @productOpen="productOpenModal(item)"
          />
        </div>
      </section>
    </div>
    <ModalConsult ref="modalConsult" />
    <ModalForm ref="modalForm" />
  </div>
</template>

<style></style>
