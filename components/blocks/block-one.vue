<template>
  <div class="container mx-auto flex flex-col gap-6">
    <h-h-3>Почему Ramada?</h-h-3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" v-if="ramada">
      <div
        v-for="item in ramada.pochemuRamadas.data"
        :key="item.id"
        class="grid grid-cols-[1fr,4fr]  p-3 gap-3 sm:p-6 border rounded-md"
      >
        <img
          class="col-span-1"
          :src="runtimeConfig.apiBase + item.attributes.Img.data.attributes.url"
          alt=""
        />
        <div class="flex flex-col gap-2">
          <span class="col-span-1 text-xl sm:text-2xl">{{
            item.attributes.H1
          }}</span>
          <span class="col-span-1 text-sm">{{
            item.attributes.H2
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import POCHEMU_RAMADA from '~/graphql/query/POCHEMU_RAMADA.gql'
import hH3 from '../headers/h-h3.vue'
export default {
  components: { hH3 },
  async setup () {
    const runtimeConfig = useRuntimeConfig()
    const { data } = await useAsyncQuery(POCHEMU_RAMADA)
    const ramada = data
    return { ramada, runtimeConfig }
  }
}
</script>

<style></style>
