<template>
<div class="text-black text-2xl">
    <h2 v-if="methodInfo">{{ methodInfo.description }} </h2>
</div>
</template>

<script setup lang="ts">
import type {ArrayMethod} from '../stores/main' 

defineProps<{
    methodInfo: ArrayMethod
}>()


</script>