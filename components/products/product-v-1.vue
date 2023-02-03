<template>
  <div
    class="border rounded-md p-4 flex flex-col gap-2 justify-center items-start"
  >
    <img
      src="~/assets/img/photo/product-test.jpg"
      alt=""
      class="w-full h-auto object-cover rounded-md aspect-[6/5]"
    />
    <nuxt-link
      :to="`/catalog/products/` + dataProduct.id"
      class="w-full text-xl font-semibold"
      >{{ dataProduct.attributes.Name }}
    </nuxt-link>
    <div class="flex flex-col text-sm">
      <div
        class="flex gap-2 w-full justify-start"
        v-if="dataProduct.attributes.Characteristic.Proizvidotel"
      >
        <span class=""
          >Производитель:
          {{ dataProduct.attributes.Characteristic.Proizvidotel }}</span
        >
      </div>
      <!-- <div class="flex gap-2 w-full justify-start">
        <span class="">Модель: {{ data.attributes.Model }}</span>
      </div> -->
      <div
        class="flex gap-2 w-full justify-start"
        v-if="dataProduct.attributes.Characteristic.Razmer"
      >
        <span class=""
          >Размер: {{ dataProduct.attributes.Characteristic.Razmer }}</span
        >
      </div>
    </div>

    <div class="flex justify-between items-center w-full">
      <div class="flex flex-col">
        <span>Цена:</span>
        <span class="text-xl"
          >{{ dataProduct.attributes.Price.toLocaleString('ru-RU') }} ₽ / шт</span
        >
      </div>

      <b-add-cart :dataModal="dataProduct" @click="$emit('productOpen')" />
    </div>
  </div>
</template>

<script setup>
import bAddCart from '../buttons/b-add-cart.vue'

const props = defineProps(['dataProduct'])



</script>

<style></style>
