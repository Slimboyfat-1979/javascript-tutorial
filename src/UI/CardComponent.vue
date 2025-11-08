<template>
  <div
    class="bg-purple-100 border border-purple-300 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 w-[80%] mt-7 mx-auto h-[50vh]"
  >
    <slot name="empty"></slot>
    <slot name="information"></slot>
  </div>
</template>
