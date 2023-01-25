<template>
  <div class="container mx-auto flex flex-col gap-6">
    <h-h-3>Галерея</h-h-3>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(item, i) in galery.galeries.data" :key="item.id" class="w-full h-full">
        <img
          :src="
            runtimeConfig.apiBase + item.attributes.Img.data[0].attributes.url
          "
          alt=""
          class="rounded-md w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
import hH3 from '../headers/h-h3.vue'
import GALERY from '~/graphql/query/GALERY.gql'
export default {
  components: { hH3 },
  async setup () {
    const runtimeConfig = useRuntimeConfig()
    const { data } = await useAsyncQuery(GALERY)
    const galery = data
    return { galery, runtimeConfig }
  }
}
</script>

<style></style>
