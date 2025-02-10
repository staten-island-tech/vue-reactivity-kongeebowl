<template>
  <div
    class="card w-1/5 h-auto rounded-3xl flex flex-col items-center justify-around m-4 bg-blue-200 text-center"
  >
    <!--     <h2 class="card-title text-2xl text-black">{{ cdrug.name }}</h2>
    <img :src="cdrug.image" :alt="cdrug.function" class="object-contain w-[65%]" />
    <h3 class="text-xl text-black">{{ cdrug.function }}</h3>
    <h3 class="text-xl text-black">${{ cdrug.price }}</h3> -->
  </div>
</template>

<script setup>
const cdrug = defineProps(['cdrug'])
console.log(cdrug)
</script>

<style scoped></style>
