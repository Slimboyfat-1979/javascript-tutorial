<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { mainStore } from './stores/main'
import Sidebar from '@/components/SideBar.vue'
import CardComponent from '../src/UI/CardComponent.vue'

const store = mainStore()

onMounted(async () => {
  const res = await fetch('arrayMethods.json')
  const data = await res.json()
  store.addArrayMethodList(data);  
})

const selectedMethod = store.getMethod()
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="text-center w-full p-5 text-6xl bg-linear-to-r from-purple-200 to-violet-400 text-white">
            <h2 v-if="!selectedMethod">Choose an Array Method To Begin</h2>
            <h2 v-else>{{ selectedMethod.slice(0,1).toUpperCase() + selectedMethod.slice(1)}}</h2>
          <CardComponent>
           
          </CardComponent>
     
    </div>
  </div>
</template>

<style scoped></style>
