<template>
  <div class="container mx-auto flex flex-col gap-10">
    <!-- search -->
    <CSearch />
    <!-- search end -->
    <div class="grid grid-cols-[3fr,9fr] gap-10">
      <!-- filters -->
      <div class=" h-full w-full flex flex-col gap-10">
        <div class="border rounded-t-md p-4">
          Фильтр товаров
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <span>Категории</span>
            <FiltersFFilter :data="10" :name="'Беседки'" />
            <FiltersFFilter :data="100" :name="'Навесы'" />
            <FiltersFFilter :data="100" :name="'Перголы'" />
            <FiltersFFilter :data="1" :name="'Уличная мебель'" />
            <FiltersFFilter :data="1" :name="'Уличное освещение'" />
            <FiltersFFilter :data="100" :name="'Пляжные конструкции'" />
            <FiltersFFilter :data="1" :name="'Аксессуары'" />
          </div>
          <div class="flex flex-col gap-2">
            <span>Размер</span>
            <FiltersFFilter :data="30" :name="'2х2х2,2м'" />
            <FiltersFFilter :data="30" :name="'3х3х2,2м'" />
          </div>
        </div>
        <button
          class="group flex gap-2 hover:gap-4 justify-center items-center bg-neutral-800 hover:bg-neutral-700 py-6 rounded-md anime"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-white group-hover:animate-[spin_2s_ease-in-out_infinite]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>

          <span class="text-base text-white">Сбросить фильтр</span>
        </button>
      </div>
      <!-- filters end -->
      <div class="h-full w-full flex flex-col gap-10">
        <div class="grid grid-cols-3 gap-6" v-if="data">
          <productsProductV1
            v-for="item in data.products.data"
            :key="item.id"
            :data="item"
            @productOpen="productOpen"
          />
        </div>
        <div class="flex justify-between items-center">
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
      </div>
    </div>

    <ModalForm ref="modalForm" />
  </div>
</template>

<script>
import PRODUCT_ALL_CATALOG from '~/graphql/query/PRODUCT_ALL_CATALOG.gql'
export default {
  data () {
    return {
      searchInput: ''
    }
  },
  computed: {},
  async setup () {
    let variables = reactive({ PAGE: 6 })

    let { data, refresh } = await useAsyncQuery(PRODUCT_ALL_CATALOG, variables)

    const increment = () => {
      variables.PAGE = variables.PAGE + 3
      refresh(variables.PAGE)
    }

    return { data, increment, variables }
  },
  methods: {
    productOpen (data) {
      this.$refs.modalForm.show = true
      this.$refs.modalForm.data = data
    }
  }
}
</script>

<style></style>
