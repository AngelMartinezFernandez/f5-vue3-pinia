import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// ESTA ES LA STORE QUE CREA DE EJEMPLO AL CREAR PROYECTO
// BÁSICAMENTE SON VARIABLES Y MÉTODOS PARA TRABAJAR CON ELLAS QUE SE QUIEREN REUTILIZAR EN MÚLTIPLES COMPONENTES
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return { count, doubleCount, increment }
})

// ESTA ES LA FORMA QUE PERSONALMENTE ME GUSTA USAR

export const useProductsStore = defineStore( {
    id: 'products',
    state: () => ({
        data1: 'lo que sea',
        data2: 'puede ser un string, array, son variables clásicas de cualquier lenguaje',
        data3: []
    }),
    actions: {
        methodThatModifiesState () {
            return this.data3.push( { id: 1, name: 'dato recibido de un fetch o lo que proceda' })
        },
        getFilteredData (id) {
            return this.data3.find(data => data.id === id)
        }
    }
} )
