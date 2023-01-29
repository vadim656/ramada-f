<template>
  <div class="container mx-auto flex flex-col gap-6">
    <HeadersHH3>Каталог беседок и навесов</HeadersHH3>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6" v-if="data">
      <productsProductV1
        v-for="item in data.products.data"
        :key="item.id"
        :data="item"
      />
    </div>
    <span v-else>Загружается...</span>
    <div class="flex justify-between items-center" v-if="data">
      <button
        @click="increment"
        v-if="data.products.meta.pagination.total > variables.PAGE"
        class="bg-[#242424] px-10 py-4 rounded-md flex items-center gap-1 justify-center"
      >
        <img src="~/assets/img/plus-white.svg" alt="" />
        <span class="text-white">Показать еще</span>
      </button>
      <div v-else></div>
      <div>
        <div class="flex gap-10 items-center">
          <span class="text-slate-400"
            >6 из {{ data.products.meta.pagination.total }} товаров</span
          >
        </div>
      </div>
    </div>
    <span v-else>Загружается...</span>
  </div>
</template>

<script setup>
import PRODUCT_ALL from '~/graphql/query/PRODUCT_ALL.gql'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

let variables = reactive({ PAGE: 6 })

let { data, error, refresh } = await useAsyncQuery(PRODUCT_ALL, variables)


const increment = () => {
  variables.PAGE = variables.PAGE + 3
  refresh(variables.PAGE)
}
</script>

<style></style>
