import { defineStore } from "pinia";
import { v4 as newId } from "uuid";

export const useWalletStore = defineStore("wallet", {
  state: () => ({
    walletList: [],
  }),

  // getters: {
  //   getOneById: (state) => {
  //     return (id) => state.recetteList.find((recette) => recette.id === id);
  //   },
  // },

  actions: {
    addMontant(walletInfo) {
      this.walletList.push({
        ...walletInfo,
        id: newId(),
      });
      console.log(this.walletList);
    },
  },
});


// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
