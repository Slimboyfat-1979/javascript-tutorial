<template>
  <div
    class="bg-purple-100 border border-purple-300 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 w-[80%] mt-7 mx-auto h-[50vh]"
  >
    <slot></slot>
    <div class="flex justify-between align-middle h-[80%] text-purple-300">
      <button class="cursor-pointer"><</button>
      <button class="cursor-pointer">></button>
    </div>
    <div class="flex justify-center">
      <div>.</div>
      <div>.</div>
      <div>.</div>
    </div>
  </div>
</template>
