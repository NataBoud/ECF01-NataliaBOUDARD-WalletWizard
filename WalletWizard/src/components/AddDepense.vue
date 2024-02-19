<script setup>
import { reactive } from "vue";
import { useWalletStore } from "@/stores/wallet";

const store = useWalletStore();

const walletInfoDebit = reactive({
    description: "",
    montant: 0
});

const walletInfoCredit = reactive({
    description: "",
    montant: 0
});


function ajouterMontant(walletInfoDebit) {
    if (walletInfoDebit.length === 0) return;
    store.ajouterMontant(walletInfoDebit);

}

function soustraireMontant(walletInfoCredit) {
    if (walletInfoCredit.length === 0) return;
    store.soustraireMontant(walletInfoCredit);

}

</script>

<template>
    <div class="container">
        <form action="#" @submit.prevent="ajouterMontant(walletInfoDebit), $router.push('/')">
            <div>Débit</div>
            <div>
                <label for="description">Description: </label>
                <textarea id="description" cols="5" rows="3" style="resize: none" maxlength="150"
                    v-model="walletInfoDebit.description"></textarea>
            </div>

            <div>
                <label for="montant">Montant : </label>
                <input type="number" id="montant" name="montant" min="1" max="1000" v-model="walletInfoDebit.montant" />
                <span> €</span>
            </div>

            <div>
                <button>Ajouter</button>
            </div>
        </form>

        <form action="#" @submit.prevent="soustraireMontant(walletInfoCredit), $router.push('/')">
            <div>Crédit</div>
            <div>
                <label for="description">Description: </label>
                <textarea id="description" cols="5" rows="3" style="resize: none" maxlength="150"
                    v-model="walletInfoCredit.description"></textarea>
            </div>

            <div>
                <label for="montant">Montant : </label>
                <input type="number" id="montant" name="montant" min="1" max="1000" v-model="walletInfoCredit.montant" />
                <span> €</span>
            </div>

            <div>
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
            color: hsla(160, 100%, 37%, 1);
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
            background: hsla(160, 100%, 37%, 1);
            margin: 2rem 0 0 auto;
            transition: all 400ms ease;
            box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4),
                1px 1px 3px rgba(0, 0, 0, 0.3);
        }

        >button:last-child:hover {
            cursor: pointer;
            background-color: rgb(2, 168, 113);
        }
    }
}
</style>