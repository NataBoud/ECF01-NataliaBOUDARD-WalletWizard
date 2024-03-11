<script setup>
import { RouterLink } from "vue-router";
import { useWalletStore } from "@/stores/wallet";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useWalletStore();
const { operations } = storeToRefs(store);

const debitOperations = computed(() =>
  operations.value.filter((op) => op.operation === "debit")
);
const creditOperations = computed(() =>
  operations.value.filter((op) => op.operation === "credit")
);

const debitTotal = computed(() =>
  debitOperations.value.reduce((total, op) => total + op.montant, 0)
);
const creditTotal = computed(() =>
  creditOperations.value.reduce((total, op) => total + op.montant, 0)
);

const solde = computed(() => debitTotal.value - creditTotal.value);

const soldeDebitOuCredit = computed(() => {
  return solde.value < 0 ? "credit" : "debit";
});

// Concaténer et trier les opérations de débit et de crédit par ordre d'ajout
const allOperations = computed(() => {
  const allOps = [...debitOperations.value, ...creditOperations.value];
  return allOps.sort((a, b) => {
    // Convertir les chaînes de caractères de date en objets Date
    const momentA = new Date(a.momentAjout).getTime();
    const momentB = new Date(b.momentAjout).getTime();
    // Comparaison des dates
    return momentA - momentB;
  });
});

</script>

<template>
  <div class="container">
    <div>
      <p>Solde</p>
      <h2 :class="soldeDebitOuCredit">{{ solde }} €</h2>
      <div class="solde-info">
        <div>
          <div class="debit">Debit : {{ debitTotal }} €</div>
          <div class="credit">Credit : {{ creditTotal }} €</div>
        </div>
        <button>
          <RouterLink class="button" to="/ajout">+</RouterLink>
        </button>
      </div>

      <div v-for="op in allOperations" :key="op.id" class="card">
        <ul class="list-container">
          <div>
            <div class="info">
              <li>{{ op.description }}</li>
            </div>
            
            <span>{{ op.momentAjout }}</span>
          </div>
          <div>
            <li :class="op.operation">
              {{ op.operation === "debit" ? "+" : "-" }}{{ op.montant }} €
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto; /* Pour centrer horizontalement */
  width: 90%; /* 90% de la largeur de main-container */
  padding: 0 1rem;
  justify-content: space-around;
  overflow: auto;

  p {
    font-size: 18px;
    font-weight: 500;
  }

  h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  h2,
  p {
    text-align: center;
    line-height: 1.2;
  }

  .debit {
    color: hsla(160, 100%, 37%, 1);
  }

  .credit {
    color: hsla(0, 90%, 65%, 1);
  }

  .solde-info {
    display: flex;
    justify-content: space-between;
    font-weight: 00;

    a {
      text-decoration: none;
      color: hsl(163, 85%, 21%);
      font-size: 32px;
      font-weight: 500;
    }
    a:hover {
      color: rgb(255, 255, 255);
      transition: all 400ms ease;
    }

    > button:last-child {
      display: grid;
      justify-content: center;
      align-items: center;
      border: solid 0.2em hsl(163, 85%, 21%);
      border-radius: 50%;
      padding: 1.3em;
      line-height: 0; /* Définir la hauteur de la ligne sur 0 */
      height: 1.3em; /* Définir la hauteur de l'élément sur 0 */
      width: 1.3em;
      transition: all 400ms ease;
    }

    > button:last-child:hover {
      cursor: pointer;
      border: solid 0.2em hsl(163, 85%, 21%);
      background-color: hsl(163, 85%, 21%);
    }
  }

  .card {
    margin-top: 1rem;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 0.5rem;
    color: hsl(0, 2%, 8%);
    box-shadow: 4px 7px 20px rgba(163, 163, 163, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .list-container {
      display: flex;
      align-items: center;
      list-style-type: none;
      width: 100%;
    }

    
    .list-container > div:first-child {
      display: grid;
      justify-content: flex-start;
    }

    .list-container > div:last-child {
      display: grid;
      justify-content: flex-end; /* Aligner le contenu à droite */
      margin: 0 0 auto;
      font-size: 1em;
      font-weight: 700;
    }

    .info {
      display: flex;
      flex-wrap: wrap;
      word-wrap: break-word;
      width: 70%;
    }

    .list-container > div {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    ul {
      padding-inline-start: 0px;
    }

    .list-container > div li {
      list-style-type: none;
    }

    .list-container > div span {
      font-size: 0.75em;
    }
  }
}
</style>
