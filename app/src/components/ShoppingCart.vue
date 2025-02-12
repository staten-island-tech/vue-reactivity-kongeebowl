<template>
  <div
    class="container flex-col items-center justify-around m-auto fixed top-0 right-0 w-64 h-full bg-gray-100 p-6 border-l border-gray-300 shadow-xl overflow-auto"
  >
    <h3 class="text-center text-2xl">Shopping Cart</h3>
    <h3 class="text-center text-xl">Total Cost: ${{ totalCost }}</h3>
    <CartCards v-for="cdrug in store.cart" :key="cdrug.id" :cdrug="cdrug" />
  </div>
</template>

<script setup>
import { store } from '@/arrays/store'
import CartCards from './CartCards.vue'
import { computed } from 'vue'

const totalCost = computed(() => {
  let total = store.cart.reduce((sum, drug) => sum + drug.price * drug.quantity, 0)
  total = Math.floor(total * 100) / 100
  return total
})
</script>

<style scoped></style>
