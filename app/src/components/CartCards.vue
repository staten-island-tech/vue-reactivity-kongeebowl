<template>
  <div
    class="card w-full sm:w-[90%] md:w-[80%] lg:w-[75%] h-auto rounded-3xl flex flex-col items-center justify-between bg-blue-200 text-center p-4 m-2 shadow-lg"
  >
    <h2 class="card-title text-2xl text-black font-bold">{{ cdrug.name }}</h2>
    <img :src="cdrug.image" :alt="cdrug.function" class="object-contain w-[70%] h-auto mb-4" />
    <h3 class="text-xl text-black font-semibold">{{ cdrug.function }}</h3>
    <h3 class="text-xl text-black font-semibold">${{ cdrug.price }}</h3>
  </div>
</template>

<script setup>
defineProps({
  cdrug: Object,
})
</script>

<style scoped></style>
