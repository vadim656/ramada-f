<template>
  <button
    class="flex gap-2 hover:bg-neutral-800 hover:text-white items-center border sm:border-2 border-neutral-800 group py-3 sm:py-6 px-6 sm:px-12 rounded-md anime"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-neutral-800 group-hover:text-white anime"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>

    <span class="text-base"><slot /></span>
  </button>
</template>

<script>
export default {}
</script>

<style></style>
