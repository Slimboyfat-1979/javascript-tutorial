<template>
   <div class="mt-5" v-if="store.arrayMethodsList.length">
    <select name="" id="" class="text-xs py-1 border border-purple-100">
        <option value="">Select Your Method</option>
        <option v-for="method in store.arrayMethodsList" :key="method.id" value="">{{ method.name }}</option>
    </select>
   </div>

</template>

<script setup lang="ts">
import { mainStore } from '../stores/main';

const store = mainStore();
// const initialSelect = ref(false)




</script>

    <!-- <div class="mt-5">
        <select @change="selectMethod($event)" name="" id="" class="text-xs py-1 border border-purple-400 ">
            <option disabled selected value="">Select a method</option>
            <option v-for="method in arrayMethods" :value="method.id" :key="method.id">{{  method.name ?? ' ' }}</option>
        </select>
    </div> -->
<!-- 
    // const selectMethod = function(event: Event) {
//     initialSelect.value = true;
//     const target = event.target as HTMLSelectElement;
//     const selectedText = target.options[target.selectedIndex]?.text;
//     console.log(typeof selectedText);
//     store.addArraymethod(selectedText ?? '')
   
// } -->
