<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { mainStore } from './stores/main'
import Sidebar from '@/components/SideBar.vue'
import CardComponent from '../src/UI/CardComponent.vue'


const store = mainStore()

onMounted(async () => {
  const res = await fetch('/arrayMethods.json')
  const data = await res.json()
  store.addArrayMethodList(data)
})

const selectedMethod = computed(() => store.arrayMethod)
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div
      class="text-center w-full p-5 text-6xl bg-linear-to-r from-purple-200 to-violet-400 text-white"
    >
      <div v-if="!selectedMethod">
        <h1>Choose Your Array Method</h1>
        <CardComponent #empty></CardComponent>
      </div>
      <div v-else>
        <h1>
          Working With
          {{ selectedMethod.name.slice(0, 1).toUpperCase() + selectedMethod.name.slice(1) }}
        </h1>
        <CardComponent #information>
          <div class="flex justify-between align-middle h-[80%] text-purple-300">
            <button class="cursor-pointer"><</button>
            <button class="cursor-pointer">></button>
          </div>
          <div class="flex justify-center">
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

