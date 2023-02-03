<template>
  <div>
    <Swiper
      :loop="true"
      :spaceBetween="10"
      :pagination="{ clicksable: true }"
      :modules="modules"
      class="mySwiperProduct"
    >
      <Swiper-slide v-for="(item, i) in slides" :key="i">
        <img :src="'https://admin.ramada.pro' + item.attributes.url" alt="" class="aspect-[6/5] object-cover"/>
      </Swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
export default {
  components: { Swiper, SwiperSlide },
  props: {
    slides: Array
  },
  setup (props) {
    return { modules: [Pagination, Autoplay] }
  }
}
</script>
<style>
.swiper-pagination-bullet-active {
  background-color: #242424;
}

.mySwiperProduct{
  width: 100%;
  max-width: 600px;
}
</style>
