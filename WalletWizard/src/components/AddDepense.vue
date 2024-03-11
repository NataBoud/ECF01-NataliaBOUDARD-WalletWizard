<script setup>
import { ref } from "vue";
import { useWalletStore } from "@/stores/wallet";
import { useRouter } from "vue-router";

const store = useWalletStore();
const router = useRouter();

const walletInfo = ref({
  description: "",
  montant: 0,
  operation: [], // Utiliser un tableau pour stocker les opérations
});

let debitChecked = false;
let creditChecked = false;

function handleChange(option) {
  // Si l'option est cochée, mettre à jour l'état de la case à cocher
  if (option === "debit") {
    debitChecked = !debitChecked;
    creditChecked = false;
  } else {
    creditChecked = !creditChecked;
    debitChecked = false;
  }
}
function submitOperation() {
  // Ajouter chaque opération sélectionnée au store
  walletInfo.value.operation.forEach((op) => {
    store.ajouterOperation({
      ...walletInfo.value,
      operation: op,
    });
  });
  walletInfo.value.description = "";
  walletInfo.value.montant = 0;
  walletInfo.value.operation = [];
  router.push("/");
}
</script>

<template>
  <div class="container">
    <form action="#" @submit.prevent="submitOperation">
      <div>
        <label for="typeOperation">Choisissez une option :</label>
        <div class="center">
          <input
            type="checkbox"
            id="debit"
            value="debit"
            v-model="walletInfo.operation"
            @change="handleChange('debit')"
            :disabled="
              walletInfo.operation.length > 0 &&
              !walletInfo.operation.includes('debit')
            "
            required
          />
          <span class="span">Débit</span>
          <input
            type="checkbox"
            id="credit"
            value="credit"
            v-model="walletInfo.operation"
            @change="handleChange('credit')"
            :disabled="
              walletInfo.operation.length > 0 &&
              !walletInfo.operation.includes('credit')
            "
            required
          />
          <label class="form-check-label" for="credit">Crédit</label>
        </div>
      </div>

      <div>
        <label for="description">Description: </label>
        <textarea
          id="description"
          cols="5"
          rows="3"
          style="resize: none"
          maxlength="150"
          required
          v-model="walletInfo.description"
        ></textarea>
      </div>

      <div>
        <label for="montant">Montant (€) : </label>
        <input
          type="number"
          id="montant"
          name="montant"
          min="1"
          max="10000"
          v-model="walletInfo.montant"
        />
      </div>
      <div class="button-container">
        <button><RouterLink to="/">Retour</RouterLink></button>
        <button>Ajouter</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

form {
  height: 50dvh;

  .center {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }

  > div {
    padding: 0.5rem;
    text-align: center;

    > label,
    input {
      font-size: 1rem;
    }

    > div {
      display: flex;
      align-items: center;
    }

    > label {
      width: 30ch;
      color: hsla(160, 100%, 37%, 1);
      text-align: left;
      display: grid;
      align-items: start;
    }
    #debit,
    #credit {
      margin-right: 0.3rem;
    }

    .span {
      margin-right: 1.5rem;
    }

    input[type="checkbox"] {
      accent-color: rgb(2, 168, 113);
      cursor: pointer;
    }

    > input,
    textarea {
      color: hsl(0, 0%, 9%);
      width: 100%;
      box-sizing: border-box;
      padding: 0.5em 1em;
      background-color: hsl(0, 0%, 95%);
      outline: none;
      border: 0.025em hsl(0, 0%, 71%) solid;
      border-radius: 0.5rem;
    }
  }
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
}

button:last-child {
  /* Styles des boutons */
  color: hsl(0, 0%, 95%);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.7em 1.4em;
  background: hsla(160, 100%, 37%, 1);
  transition: all 400ms ease;
}
a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
}
a:hover {
  color: hsl(0, 0%, 95%);
}
button:first-child {
  border: solid 0.1em hsla(160, 100%, 37%, 1);

  font-size: 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.7em 1.4em;
  background: hsl(0, 0%, 95%);
  transition: all 400ms ease;
}

button:hover {
  cursor: pointer;
  background-color: rgb(2, 168, 113);
}
</style>
