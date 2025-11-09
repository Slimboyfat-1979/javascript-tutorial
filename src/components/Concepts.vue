<template>
   <div class="mt-5" v-if="store.arrayMethodsList.length">
    <select @change="chosenMethod($event)" name="" id="" class="text-xs py-1 border border-purple-100">
        <option value="">Select Your Method</option>
        <option v-for="method in store.arrayMethodsList" :key="method.id" :value="method.id">{{ method.name ?? ' ' }}</option>
    </select>
   </div>

</template>

<script setup lang="ts">
import { mainStore } from '../stores/main';
import {ref} from 'vue'

const initialSelect = ref(false)

function chosenMethod(e: Event) {
    initialSelect.value = true;
    const target = e.target as HTMLSelectElement;
    const selectedText = target.options[target.selectedIndex]?.text;
    store.setArraymethod(selectedText ?? '')
}

const store = mainStore();

</script>

