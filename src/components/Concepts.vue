<template>
    <div class="mt-5">
        <select name="" id="" class="text-xs px-1">
            <option v-for="method in arrayMethods" value="" :key="method.id">{{ method.name }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import {inject, type Ref} from 'vue';

interface ArrayMethod {
    id: number,
    name: string,
    category: string,
    description: string
}

const arrayMethods = inject<Ref<ArrayMethod[]>>('arrayMethods')



</script>