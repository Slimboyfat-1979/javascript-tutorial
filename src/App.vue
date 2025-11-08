<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { mainStore } from './stores/main'
import Sidebar from '@/components/SideBar.vue'
import CardComponent from '../src/UI/CardComponent.vue'
import InformationCard from '../src/components/InformationCard.vue'

const store = mainStore()

onMounted(async () => {
  const res = await fetch('arrayMethods.json')
  const data = await res.json()
  store.addArrayMethodList(data)
})

const selectedMethod = store.getMethod()
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div
      class="text-center w-full p-5 text-6xl bg-linear-to-r from-purple-200 to-violet-400 text-white"
    >
      <h2 v-if="!selectedMethod">Choose an Array Method To Begin</h2>
      <div v-else>
        <h2>{{ selectedMethod.name.slice(0, 1).toUpperCase() + selectedMethod.name.slice(1) }}</h2>
        <p class="mt-2 text-2xl font-light italic">Category: {{ selectedMethod.category }}</p>
      </div>
      <CardComponent> 
        <InformationCard :methodInfo="selectedMethod"></InformationCard>
      </CardComponent>
    </div>
  </div>
</template>

<style scoped></style>
