import { defineStore } from "pinia";
import {ref} from 'vue';

export interface ArrayMethod {
    id: number,
    name: string,
    category: string,
    description: string
}

export const mainStore = defineStore('mainStore', () => {
    const arrayMethodsList = ref<ArrayMethod[]>([]);
    const arrayMethod = ref<ArrayMethod>();

    const addArrayMethodList = (methods: ArrayMethod[]) => {
        arrayMethodsList.value = methods;
    }

    function setArraymethod(method: string) {
        const methodObject = arrayMethodsList.value.find(array => method.toLowerCase() === array.name.toLowerCase());
        arrayMethod.value = methodObject;
    }

    function getMethod() {
        return arrayMethod;
    }

    return {arrayMethod, setArraymethod, getMethod, addArrayMethodList, arrayMethodsList}
});

