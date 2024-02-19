<script setup>
import { reactive } from "vue";
import { useWalletStore } from "@/stores/wallet";

const store = useWalletStore();

const walletInfo = reactive({
    debit: false,
    credit: false,
    description: "",
    montant: 0
});

function addMontant(walletInfo) {
    if (walletInfo.length === 0) return;
    store.addMontant(walletInfo);

}

</script>

<template>
    <form action="#" @submit.prevent="addMontant(walletInfo), $router.push('/')">

        <div>
            <label>Type d'opération :</label>

            <div>
                <span>Débit</span>
                <input type="checkbox" id="debit" name="debit" @click="walletInfo.debit = !walletInfo.debit"
                    :value="walletInfo.debit" />

                <span>Crédit</span>
                <input type="checkbox" id="credit" name="credit" @click="walletInfo.credit = !walletInfo.credit"
                    :value="walletInfo.credit" />
            </div>

        </div>

        <div>
            <label for="description">Description: </label>
            <textarea id="description" cols="5" rows="3" style="resize: none" maxlength="150"
                v-model="walletInfo.description"></textarea>
        </div>

        <div>
            <label for="time-cooking">Montant : </label>
            <input type="number" id="montant" name="montant" min="1" max="1000" v-model="walletInfo.montant" />
            <span> €</span>
        </div>

        <div>
            <button>Ajouter</button>
        </div>
    </form>
</template>

<style scoped>
form {
    height: 50dvh;
    >div {
        padding: 0.5rem;
        >label,
        input {
            font-size: 1rem;
        }
        >div {
            >input {
                margin: 1rem;
            }
        }
        >label {
            width: 30ch;
            color: #647eff;
            margin-right: 2rem;
        }
        >input,
        textarea {
            color: hsl(0, 0%, 9%);
            width: 80%;
            box-sizing: border-box;
            padding: 0.5em 1em;
            background-color: hsl(0, 0%, 95%);
            outline: none;
            border: 0.025em hsl(0, 0%, 71%) solid;
            border-radius: 0.5rem;
        }

        >button:last-child {
            color: hsl(0, 0%, 95%);
            font-size: 1rem;
            border: none;
            border-radius: 0.5rem;
            box-sizing: border-box;
            padding: 0.7em 1.4em;
            background: #647eff;
            margin: 2rem 0 0 auto;
            transition: all 400ms ease;
            box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
                1px 1px 3px rgba(0, 0, 0, 0.3);
        }

        >button:last-child:hover {
            cursor: pointer;
            background-color: #4f6dff;
        }
    }
}
</style>