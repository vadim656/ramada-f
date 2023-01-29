<script>
import CATEGORY_ALL from '~/graphql/query/CATEGORY_ALL.gql'
export default {
  data () {
    return {
      filtersView: false,
      catView: false,
      selectFilterRazmer: [],
      selectFilterCat: [],
      selected: ''
    }
  },
  async setup () {
    let { data } = await useAsyncQuery(CATEGORY_ALL)

    return { data }
  },
  methods: {
    applyFilters () {
      const data = [
        { cat: this.selectFilterCat },
        { razmer: this.selectFilterRazmer }
      ]

      this.$emit('applyFilters', data)
    },
    selectCat (data) {
      if (this.selectFilterCat.includes(data)) {
        let filtersAll = this.selectFilterCat
        let dataq = filtersAll.filter(x => x !== data)
        this.selectFilterCat = dataq
      } else {
        this.selectFilterCat.push(data)
      }
    },
    selectRazmer (data) {
      if (this.selectFilterRazmer.includes(data)) {
        let filtersAll = this.selectFilterRazmer
        let dataq = filtersAll.filter(x => x !== data)
        this.selectFilterRazmer = dataq
      } else {
        this.selectFilterRazmer.push(data)
      }
    },
    selectFilter (data) {
      if (data == 'cat') {
        this.catView = !this.catView
        this.filtersView = false
      } else if (data == 'filters') {
        this.filtersView = !this.filtersView
        this.catView = false
      }
    }
  }
}
</script>
<template>
  <div>
    <!-- filters desctop -->
    <div class="hidden h-full w-full sm:flex flex-col gap-6 sm:gap-10">
      <div class="border rounded-t-md p-4">
        Фильтр товаров
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3 text-sm">
          <span class="font-semibold">Категории</span>
          <nuxt-link
            v-for="item in data.categories.data"
            :to="`/catalog/category/` + item.attributes.URL"
            :key="item.id"
            class="flex items-center gap-2 w-full justify-between pl-3"
          >
            {{ item.attributes.Name }}
            <span class="text-xs text-neutral-400">
              {{item.attributes.tovaries.data.length}}
            </span>
          </nuxt-link>
        </div>
        <!-- <div class="flex flex-col gap-2">
          <span>Размер</span>
          <FiltersFFilter :data="30" :name="'2х2х2,2м'" />
          <FiltersFFilter :data="30" :name="'3х3х2,2м'" />
        </div> -->
      </div>
      <!-- <button
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
      </button> -->
    </div>
    <!-- filters desctop end -->
    <!-- filters mobile -->
    <div class="sm:hidden h-full w-full flex flex-col gap-10 relative p-2">
      <div class="w-full flex items-center justify-between ">
        <div
          @click="selectFilter('cat')"
          class=" flex items-center justify-center gap-3 text-sm"
        >
          Категории
          <svg
            v-if="catView == false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <!-- <div
          @click="selectFilter('filters')"
          class=" flex items-center justify-center gap-3 text-sm"
        >
          Фильтры

          <svg
            v-if="filtersView == false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div> -->
      </div>
      <!-- dropdown block -->
      <div
        v-if="catView == true"
        class="flex flex-col gap-3   bg-white    w-full"
      >
        <div class="flex flex-col gap-3 text-sm">
          <!-- <span class="font-semibold">Категории</span> -->
          <nuxt-link
            v-for="item in data.categories.data"
            :to="`/catalog/category/` + item.attributes.URL"
            :key="item.id"
            class="flex items-center gap-2 w-full justify-between pl-3"
          >
            {{ item.attributes.Name }}
            <span class="text-xs text-neutral-400">
              {{item.attributes.tovaries.data.length}}
            </span>
          </nuxt-link>
        </div>
      </div>
      <div
        v-if="filtersView == true"
        class="flex flex-col gap-3 p-3  bg-white  w-full"
      >
        <div class="flex flex-col gap-3 text-sm">
          <span class="font-semibold">Размер</span>
          <FiltersFFilter
            :data="30"
            :name="'2х2х2,2м'"
            :type="'razmer'"
            @selectRazmer="selectRazmer"
          />
          <FiltersFFilter
            :data="30"
            :name="'3х3х2,2м'"
            :type="'razmer'"
            @selectRazmer="selectRazmer"
          />
        </div>
        <!-- <div>
          filterRazmer -{{ selectFilterRazmer }}
        </div> -->
        <!-- <button
          @click="applyFilters"
          class="group flex gap-2 hover:gap-4 justify-center items-center bg-neutral-800 hover:bg-neutral-700 py-6 rounded-md anime"
        >
          <span class="text-base text-white">Применить</span>
        </button>
        <button
          class="group flex gap-2 hover:gap-4 justify-center items-center border border-neutral-800 hover:border-neutral-700 py-6 rounded-md anime"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-neutral-800 group-hover:animate-[spin_2s_ease-in-out_infinite]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>

          <span class="text-base text-neutral-800">Сбросить фильтр</span>
        </button> -->
      </div>
    </div>
    <!-- filters mobile end -->
  </div>
</template>

<style></style>
