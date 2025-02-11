<template>
  <div
    class="container flex-col items-center justify-around m-auto fixed top-0 right-0 w-64 h-full bg-gray-100 p-6 border-l border-gray-300 shadow-xl overflow-auto"
  >
    <h3 class="text-center text-2xl">Shopping Cart</h3>
    <CartCards v-for="cdrug in store.cart" :key="cdrug.name" :cdrug="cdrug" />
  </div>
</template>

<script setup>
import { store } from '@/arrays/store'
import CartCards from './CartCards.vue'

console.log(store)
</script>

<style scoped></style>
