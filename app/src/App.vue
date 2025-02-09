<script setup>
import TheHeader from './components/TheHeader.vue'
import PrintCards from './components/PrintCards.vue'
import ShoppingCart from './components/CartCards.vue'

import { reactive, provide } from 'vue'

const store = reactive({
  cart: [],
})

provide('store', store)
</script>

<template>
  <main>
    <TheHeader />
    <PrintCards />
    <ShoppingCart />
  </main>
</template>

<style scoped></style>
