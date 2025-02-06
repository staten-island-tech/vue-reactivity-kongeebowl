<template>
  <div class="fixed top-0 right-0 w-64 h-full bg-gray-100 p-6 border-l border-gray-300 shadow-xl">
    <h3>Shopping Cart</h3>
    <CartCards v-for="drug in cart" :key="drug.name" :drug="drug" />
  </div>
</template>

<script setup>
import cart from './DrugCards.vue'
import CartCards from './CartCards.vue'
</script>

<style scoped></style>
