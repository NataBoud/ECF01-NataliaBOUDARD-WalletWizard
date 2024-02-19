<script setup>
import { useWalletStore } from "@/stores/wallet";
import { storeToRefs } from "pinia";
import { ref, computed, reactive } from 'vue'

const store = useWalletStore();

const { walletListDebit,  walletListCredit} = storeToRefs(store);

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
    <h1>Solde : {{ solde }}  €</h1>

    <div class="debit-cards">
        <div>Débit total : {{ debitTotal }}  €</div>

        <div v-for="operation in walletListDebit" :key="operation.id" class="card">
            <ul>
                <li>{{ operation.description }}</li>
                <li>{{ operation.montant }} €</li>
            </ul>
        </div>
    </div>

    <div class="credit-cards">
        <div>Crédit total : {{ creditTotal }} €</div>

        <div v-for="operation in walletListCredit" :key="operation.id" class="card">
            <ul>
                <li>{{ operation.description }}</li>
                <li>{{ operation.montant }} €</li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>