<template>
  <div
    class="card w-[30%] sm:w-[50%] md:w-[33%] lg:w-[15%] h-auto rounded-3xl flex flex-col items-center justify-around m-4 bg-blue-200 text-center"
  >
    <h2 class="card-title text-2xl text-black">{{ drug.name }}</h2>
    <img :src="drug.image" :alt="drug.function" class="object-contain w-[65%]" />
    <h3 class="text-xl text-black">{{ drug.function }}</h3>
    <h3 class="text-xl text-black">${{ drug.price }}</h3>
  </div>
</template>

<script setup>
defineProps({
  drug: Object,
})
</script>

<style scoped></style>
