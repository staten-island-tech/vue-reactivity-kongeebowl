<template>
  <div class="fixed top-0 right-0 w-64 h-full bg-gray-100 p-6 border-l border-gray-300 shadow-xl">
    <h3>Shopping Cart</h3>
    <div v-if="cart.length === 0">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <CartCards v-for="cdrug in store.cart" :key="cdrug.name" :cdrug="cdrug" />
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import CartCards from './CartCards.vue'

const store = inject('store')
</script>

<style scoped></style>
