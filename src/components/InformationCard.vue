<template>
<div class="text-black text-sm">
    <p v-if="methodInfo">{{ methodInfo.description }} </p>
</div>
</template>

<script setup lang="ts">
import type {ArrayMethod} from '../stores/main' 

defineProps<{
    methodInfo: ArrayMethod
}>()


</script>