<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import Sidebar from './components/Sidebar.vue';

interface ArrayMethod {
    id: number,
    name: string,
    category: string,
    description: string
}


const arrayMethods = ref<ArrayMethod[]>([]);

onMounted(async () => {
    const res = await fetch('arrayMethods.json');
    const data = await res.json();
    arrayMethods.value = data;
    console.log(arrayMethods.value)
})

provide('arrayMethods', arrayMethods)

</script>

<template>
    <Sidebar />
</template>

<style scoped>

</style>
