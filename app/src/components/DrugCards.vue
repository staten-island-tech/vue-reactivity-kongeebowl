<template>
  <div
    class="card w-[90%] sm:w-[50%] md:w-[33%] lg:w-[24%] h-auto rounded-3xl flex flex-col items-center justify-around m-4 bg-blue-200 text-center"
  >
    <h2 class="card-title text-2xl text-black">{{ drug.name }}</h2>
    <img :src="drug.image" :alt="drug.function" class="object-contain w-[65%]" />
    <h3 class="text-xl text-black">{{ drug.function }}</h3>
    <h3 class="text-xl text-black">${{ drug.price }}</h3>
    <button
      @click="cart.push(drug)"
      class="text-center text-black bg-white rounded-xl w-[30%] border-black border-2 transition-transform duration-300 hover:scale-110 m-2"
      :id="drug.id"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
defineProps({
  drug: Object,
})

const cart = []
</script>

<style scoped></style>
