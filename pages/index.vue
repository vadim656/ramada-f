<template>
  <div class="flex flex-col gap-24 pb-24 relative">
    <main-v />
    <block-one />
    <block-2 />
    <b-galery/>
    <footer-form/>
    
  </div>
</template>

<script>
import BGalery from '../components/blocks/b-galery.vue'
import Block2 from '../components/blocks/block-2.vue'
import blockOne from '../components/blocks/block-one.vue'
import FooterForm from '../components/footer-form.vue'
export default {
  components: { blockOne, Block2, BGalery, FooterForm }
}
</script>

<style></style>
