<script>
import gql from 'graphql-tag'
import PRODUCT_CAT from '~/graphql/query/PRODUCT_CAT.gql'
import PRODUCT_FILTERS from '~/graphql/query/PRODUCT_FILTERS.gql'
import fFiltersAll from '~/components/filters/f-filters-all.vue'

export default {
  components: { fFiltersAll },
  data () {
    return {
      searchInput: ''
    }
  },
  computed: {},
  setup () {
    const route = useRoute()
    let filtersActiveStatus = reactive({ active: true })
    let variables = reactive({ PAGE: 6, URL: route.params.cat })
    const notFilters = computed(() => {
      return filtersActiveStatus.active == true ? PRODUCT_CAT : PRODUCT_FILTERS
    })

    // filters

    const applyFilters = data => {
      console.log('click', filtersActiveStatus.active)
      if (filtersActiveStatus.active == true) {
        filtersActiveStatus.active = false
      } else {
        filtersActiveStatus.active = true
      }
    }
    // filters end

    const { result } = useQuery(notFilters, variables)

    watchEffect(route.params.cat, () => {
      console.log('id', route.params.cat)
      variables.URL = route.params.cat
    })

    const increment = () => {
      variables.PAGE = variables.PAGE + 3
    }
    return { increment, variables, applyFilters, result, filtersActiveStatus }
  },
  methods: {
    productOpen (data) {
      this.$refs.modalForm.show = true
      this.$refs.modalForm.data = data
    }
  }
}
</script>

<template>
  <div class="container mx-auto flex flex-col gap-3 sm:gap-10">
    <CSearch />
    <div class="grid grid-cols-1 sm:grid-cols-[3fr,9fr] gap-3 sm:gap-10">
      <div class="text-neutral-600 block sm:hidden">
        <div
          class="flex items-center gap-3 sm:gap-6 text-neutral-600 text-sm bg-neutral-50 p-2"
        >
          
          <nuxt-link to="/catalog">Каталог</nuxt-link>
          <img src="~/assets/img/arrow-product.svg" alt="" />
          <span v-if="result && result.products.data[0].attributes.categories.data.length"> {{ result.products.data[0].attributes.categories.data[0].attributes.Name }}</span>
        </div>
      </div>
      <f-filters-all @applyFilters="applyFilters" />

      <div class="h-full w-full flex flex-col gap-10">
        <div
          class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6"
          v-if="result"
        >
          <productsProductV1
            v-for="item in result.products.data"
            :key="item.id"
            :data="item"
            @productOpen="productOpen"
          />
        </div>
        <div class="flex justify-between items-center" v-if="result">
          <button
            @click="increment"
            v-if="result.products.meta.pagination.total > variables.PAGE"
            class="bg-[#242424] px-10 py-4 rounded-md flex items-center gap-1 justify-center"
          >
            <img src="~/assets/img/plus-white.svg" alt="" />
            <span class="text-white">Показать еще</span>
          </button>
          <div v-else></div>
          <div class="mb-2">
            <div class="flex gap-10 items-center">
              <span class="text-slate-400"
                >{{ result.products.data.length }} из
                {{ result.products.meta.pagination.total }} товаров</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <ModalForm ref="modalForm" />
  </div>
</template>

<style></style>
