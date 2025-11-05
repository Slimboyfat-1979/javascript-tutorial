import { defineStore } from "pinia";
import {ref} from 'vue';

export const mainStore = defineStore('mainStore', () => {
    const arrayMethod = ref('');

    function addArraymethod(method: string) {
        arrayMethod.value = method
    }

    function getMethod() {
        return arrayMethod;
    }

    return {arrayMethod, addArraymethod, getMethod}
});

