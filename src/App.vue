<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import { mainStore } from './stores/main'

interface ArrayMethod {
  id: number
  name: string
  category: string
  description: string
}

const store = mainStore()
const arrayMethods = ref<ArrayMethod[]>([])

onMounted(async () => {
  const res = await fetch('arrayMethods.json')
  const data = await res.json()
  arrayMethods.value = data
})

provide('arrayMethods', arrayMethods)

// const selectedMethod = ref<string | null>(null);
const selectedMethod = store.getMethod()
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="text-center w-full p-5 text-6xl">
      <h1 v-if="!selectedMethod">Choose An Array Method</h1>
      <h1 v-else="selectedMethod">Working With {{ selectedMethod.toUpperCase() }}</h1>
    </div>
  </div>
</template>

<style scoped></style>
