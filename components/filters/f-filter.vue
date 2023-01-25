<template>
  <div>
    <div class="flex gap-2 items-center ">
      <input type="checkbox" />
      <label for="" class="relative">{{name}}
      <span class="absolute top-0 -right-5 text-xs font-semibold text-right">{{data}}</span>
      </label>
      
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
