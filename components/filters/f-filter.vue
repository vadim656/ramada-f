<template>
  <div>
    <div class="flex gap-2 items-center ">
      <input
        type="checkbox"
        :value="name"
        :id="filterId"
        v-model="checkedNames"
        @change="addFilter(name)"
      />
      <label :for="filterId" class="w-full flex justify-between items-center"
        >{{ name }}
        <span class=" text-xs font-semibold text-neutral-400">{{ data }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    data: Number,
    type: String,
    filterId: String
  },
  data () {
    return {
      checkedNames: []
    }
  },
  methods: {
    addFilter (data) {
      if (this.type == 'cat') {
        this.$emit('selectCat', data)
      } else if (this.type == 'razmer') {
        this.$emit('selectRazmer', data)
      }
    }
  }
}
</script>

<style></style>
