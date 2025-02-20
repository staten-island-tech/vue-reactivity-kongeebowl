<template>
  <div class="container flex flex-wrap items-center justify-around m-auto mr-[20%]">
    <DrugCards v-for="drug in legalDrugs" :key="drug.id" :drug="drug" />
  </div>
</template>

<script setup>
import DrugCards from './DrugCards.vue'
import { legalDrugs } from '@/arrays/items'
</script>

<style scoped></style>
