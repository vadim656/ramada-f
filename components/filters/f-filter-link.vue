<template>
  <div>
    <div class="flex gap-2 items-center ">
      <nuxt-link to="/" class="relative text-sm">
        {{ name }}
        <span
          class="absolute top-0 -right-5 text-xs font-semibold text-right"
          >{{ data }}</span
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    data: Number
  }
}
</script>

<style></style>
