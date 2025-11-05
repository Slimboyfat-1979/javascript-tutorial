<template>
    <div class="mt-5">
        <select @change="selectMethod($event)" name="" id="" class="text-xs py-1 border border-purple-400 ">
            <option disabled selected value="">Select a method</option>
            <option v-for="method in arrayMethods" :value="method.id" :key="method.id">{{  method.name ?? ' ' }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import {inject, type Ref, ref} from 'vue';
import { mainStore } from '@/stores/main';

const store = mainStore();
const initialSelect = ref(false)

interface ArrayMethod {
    id: number,
    name: string,
    category: string,
    description: string
}

const arrayMethods = inject<Ref<ArrayMethod[]>>('arrayMethods');

const selectMethod = function(event: Event) {
    initialSelect.value = true;
    const target = event.target as HTMLSelectElement;
    const selectedText = target.options[target.selectedIndex]?.text;
    console.log(typeof selectedText);
    store.addArraymethod(selectedText ?? '')
   
}


</script>