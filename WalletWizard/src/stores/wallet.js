import { defineStore } from "pinia";
import { v4 as newId } from "uuid";

export const useWalletStore = defineStore("wallet", {
  state: () => ({
    walletListDebit: [],
    walletListCredit: []
  }),

  actions: {
    ajouterMontant(walletInfoDebit) {
      this.walletListDebit.push({
        ...walletInfoDebit,
        id: newId(),
      });
      console.log(this.walletListDebit);
    },
    soustraireMontant(walletInfoCredit) {
      this.walletListCredit.push({
        ...walletInfoCredit,
        id: newId(),
      });
      console.log(this.walletListCredit);
    }
  },
});

