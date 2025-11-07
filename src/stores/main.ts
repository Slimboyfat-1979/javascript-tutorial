import { defineStore } from "pinia";
import {ref} from 'vue';

interface ArrayMethod {
    id: number,
    name: string,
    category: string,
    description: string
}

export const mainStore = defineStore('mainStore', () => {
    const arrayMethodsList = ref<ArrayMethod[]>([]);
    const arrayMethod = ref('');

    const addArrayMethodList = (methods: ArrayMethod[]) => {
        arrayMethodsList.value = methods;
    }

    function addArraymethod(method: string) {
        arrayMethod.value = method
    }

    function getMethod() {
        return arrayMethod;
    }

    return {arrayMethod, addArraymethod, getMethod, addArrayMethodList, arrayMethodsList}
});

