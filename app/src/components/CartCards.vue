<template>
  <div
    class="card w-full sm:w-[90%] md:w-[80%] lg:w-[75%] h-auto rounded-3xl flex flex-col items-center justify-between bg-blue-200 text-center p-2 shadow-sm m-5"
  >
    <h2 class="card-title text-base text-black font-semibold">{{ cdrug.name }}</h2>
    <h3 class="text-sm text-black">{{ cdrug.function }}</h3>
    <h3 class="text-sm text-black font-semibold">${{ cdrug.price }}</h3>
    <div class="flex gap-x-2">
      <button
        @click=""
        class="text-center text-black bg-white rounded-xl w-10 border-black border-2"
      >
        +
      </button>
      <button class="text-center text-black bg-white rounded-xl w-10 border-black border-2">
        -
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cdrug: Object,
})

function addDuplicate() {
  if (store.cart.includes(cdrug)) {
    store.cart.push(cdrug)
  }
}
</script>

<style scoped></style>
