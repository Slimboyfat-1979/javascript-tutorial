<template>
  <div class="p-4 w-50 h-screen bg-purple-200 flex flex-col items-center">
    <h1 class="text-lg font-bold">Javascript Guide</h1>
    <p class="text-center text-xs">Choose your Javascript Concept</p>
    <Concepts />
  </div>
</template>

<script setup lang="ts">
import Concepts from '@/components/Concepts.vue'
</script>
