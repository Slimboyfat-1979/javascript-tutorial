<script setup lang="ts">
import { onMounted, provide, ref, computed } from 'vue'
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

const selectedMethod = computed(() => store.arrayMethod)
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div
      class="text-center w-full p-5 text-6xl bg-linear-to-r from-purple-200 to-violet-400 text-white"
    >
      <div v-if="!selectedMethod">
        <h2>Choose an Array Method To Begin</h2>
        <div class="h-11 mt-2"></div>
        <CardComponent></CardComponent>
      </div>
      <div v-else>
        <h2>{{ selectedMethod.name.slice(0, 1).toUpperCase() + selectedMethod.name.slice(1) }}</h2>
        <p :key="selectedMethod.id" class="mt-2 text-2xl font-light italic">
          Category: {{ selectedMethod.category }}
        </p>

        <CardComponent>
          <InformationCard :methodInfo="selectedMethod"></InformationCard>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
