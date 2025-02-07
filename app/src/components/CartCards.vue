<template>
  <div
    class="card w-1/5 h-auto rounded-3xl flex flex-col items-center justify-around m-4 bg-blue-200 text-center"
  >
    <h2 class="card-title text-2xl text-black">{{ Cdrug.name }}</h2>
    <img :src="Cdrug.image" :alt="Cdrug.function" class="object-contain w-[65%]" />
    <h3 class="text-xl text-black">{{ Cdrug.function }}</h3>
    <h3 class="text-xl text-black">${{ Cdrug.price }}</h3>
  </div>
</template>

<script setup>
defineProps({
  Cdrug: Object,
})
</script>

<style scoped></style>
