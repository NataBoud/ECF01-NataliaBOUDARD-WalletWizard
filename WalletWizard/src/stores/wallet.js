import { defineStore } from "pinia";
import { v4 as newId } from "uuid";

export const useWalletStore = defineStore("wallet", {
  state: () => ({
    operations: [],
  }),

  actions: {
    ajouterOperation(operationInfo) {
      const momentAjout = new Date().toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }); 
      this.operations.push({
        ...operationInfo,
        id: newId(),
        momentAjout: momentAjout,
      });
      console.log(this.operations);
    },
  },
});
