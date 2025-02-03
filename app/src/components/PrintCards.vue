<template>
  <div>
    <DrugCards v-for="drug in legalDrugs" :key="drug.name" :drug="drug" />
  </div>
</template>

<script setup>
import DrugCards from './DrugCards.vue'

const legalDrugs = [
  {
    name: 'Aspirin',
    price: 5.99,
    function: 'Pain relief, anti-inflammatory',
    image: '',
  },
  {
    name: 'Ibuprofen',
    price: 7.49,
    function: 'Pain relief, anti-inflammatory',
    image: '',
  },
  {
    name: 'Paracetamol',
    price: 3.99,
    function: 'Pain relief, fever reduction',
    image: '',
  },
  {
    name: 'Caffeine',
    price: 1.99,
    function: 'Stimulant, energy boost',
    image: '',
  },
  {
    name: 'Loratadine',
    price: 8.49,
    function: 'Antihistamine, allergy relief',
    image: '',
  },
  {
    name: 'Nicotine (patch)',
    price: 10.99,
    function: 'Smoking cessation aid',
    image: '',
  },
  {
    name: 'Diphenhydramine',
    price: 4.99,
    function: 'Antihistamine, sleep aid',
    image: '',
  },
]
</script>

<style scoped></style>
