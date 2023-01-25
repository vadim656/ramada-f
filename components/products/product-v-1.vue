<template>
  <div
    class="border rounded-md p-4 flex flex-col gap-2 justify-center items-start"
  >
    <img
      src="~/assets/img/photo/product-test.jpg"
      alt=""
      class="w-full h-auto object-cover rounded-md"
    />
    <nuxt-link
      :to="`/catalog/products/` + data.id"
      class="w-full text-xl font-semibold"
      >{{ data.attributes.Name }}
    </nuxt-link>
    <div class="flex flex-col text-sm">
      <!-- <div class="flex gap-2 w-full justify-start">
        <span class="">Модель: {{ data.attributes.Model }}</span>
      </div> -->
      <div class="flex gap-2 w-full justify-start">
        <span class="">Размер: {{ data.attributes.Characteristic.Razmer }}</span>
        
      </div>
    </div>

    <div class="flex justify-between items-center w-full">
      <div class="flex flex-col">
        <span>Цена:</span>
        <span class="text-xl">{{ data.attributes.Price.toLocaleString('ru-RU') }} ₽ / шт</span>
      </div>

      <b-add-cart :dataModal="data" @click="formOpen" />
    </div>
  </div>
</template>

<script>
import bAddCart from '../buttons/b-add-cart.vue'
export default {
  props: {
    data: Object
  },
  components: { bAddCart },
  methods: {
    formOpen () {
      this.$emit('productOpen', this.data)
    }
  }
}
</script>

<style></style>
