<script setup>
import { useWalletStore } from "@/stores/wallet";
import { storeToRefs } from "pinia";
import { ref, computed, reactive } from 'vue'

const store = useWalletStore();

const { walletListDebit, walletListCredit } = storeToRefs(store);

const debitTotal = computed(() => {
    const map = walletListDebit.value.map((x) => x.montant)
    const totaldepense = map.reduce((a, c) => a + c, 0)
    return totaldepense
})

const creditTotal = computed(() => {
    const map = walletListCredit.value.map((x) => x.montant)
    const totaldepense = map.reduce((a, c) => a + c, 0)
    return totaldepense
})

const solde = computed(() => {
    const soldeTotal = debitTotal.value - creditTotal.value
    return soldeTotal
})


</script>

<template>
    <h1>Solde : {{ solde }} €</h1>

    <div class="container">
        <div>
            <div>Débit total : {{ debitTotal }} €</div>

            <div v-for="operation in walletListDebit" :key="operation.id" class="card">
                <ul>
                    <li>{{ operation.description }}</li>
                    <li>{{ operation.montant }} €</li>
                </ul>
            </div>
        </div>

        <div>
            <div>Crédit total : {{ creditTotal }} €</div>

            <div v-for="operation in walletListCredit" :key="operation.id" class="card">
                <ul>
                    <li>{{ operation.description }}</li>
                    <li>{{ operation.montant }} €</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

h1 {
    text-align: center;
}

.card {
    margin-top: 1rem;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: .5rem;
    color: hsl(0, 2%, 8%);
    box-shadow: 4px 7px 20px rgba(163, 163, 163, 0.1);
    aspect-ratio: 1 / .5;
    display: flex;
    justify-content: center;
    align-items: center;


    ul {
        align-items: center;
        margin: 0;
        padding: 0 ;

        >li:first-child>b {
            font-size: 1.8rem;
            text-align: center;
            display: grid;
            font-weight: 600;
            color: hsl(0, 0%, 36%);
            margin-top: .7rem;
        }

        >li {
            list-style-type: none;
        }


    }
}
</style>