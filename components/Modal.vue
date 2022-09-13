<template>
<div class="relative mx-auto" 
aria-labelledby="modal-title" role="dialog" aria-modal="true" 
@click="$emit('close-modal')">
  <div class="overflow-auto scrolling-touch inset-0 w-full h-full fixed
  bg-gray-900 opacity-50"></div>
  <div class="bg-gray-50 rounded overflow-visible relative
  p-4"
  @click.stop>
    <button class="absolute top-0 right-0" @click="$emit('close-modal')">X</button>
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
    import Vue from 'vue'
    
    export default Vue.extend({
        name: "Modal",
    })
</script>