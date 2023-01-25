<template>
  <div class="w-full relative">
    <div
      class="w-full py-4 pl-4 border-2 flex gap-2 justify-start items-center bg-white z-[2]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 z-[2]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        @input="search($event.target.value)"
        v-bind:value="searchInput"
        type="text"
        placeholder="Поиск по каталогу"
        class="placeholder:text-neutral-700 w-full py-1 focus-visible:none z-[2]"
      />
    </div>

    <div
      v-if="data.search.products.data.length && showSearch == true"
      @click="showSearch = false"
      class="fixed w-screen h-screen top-0 left-0 right-0 bg-neutral-200/10 backdrop-blur-sm  z-[1]"
    ></div>
    <div
      class="absolute top-24 left-0 right-0 bg-white drop-shadow-2xl w-full  z-[2]"
      v-if="data.search.products.data.length"
    >
      <div class="flex flex-col divide-y divide-neutral-200">
        <div
          v-for="item in data.search.products.data"
          :key="item.id"
          class="p-4"
        >
          <div class="flex justify-start gap-4">
            <img
              :src="
                runtimeConfig.apiBase +
                  item.attributes.Img.data[0].attributes.url
              "
              alt=""
              class="w-20 h-auto object-cover"
            />
            <div class="flex flex-col gap-1 items-start">
              <nuxt-link :to="'/catalog/products/' + item.id" class="text-xl">{{ item.attributes.Name }}</nuxt-link>
              <span class="font-semibold"
                >{{ item.attributes.Price.toLocaleString('ru-RU') }} ₽</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PRODUCT_SEARCH from '~/graphql/query/PRODUCT_SEARCH.gql'

const runtimeConfig = useRuntimeConfig()
let variables = reactive({ NAME: '' })
let searchInput = reactive('')
let showSearch = reactive(false)

let { data, error, refresh } = await useAsyncQuery(PRODUCT_SEARCH, variables)

function search (value) {
  console.log(value, variables)
  variables.NAME = value
  searchInput = value
  showSearch = true
  refresh(variables.NAME)
}
</script>

<style></style>
