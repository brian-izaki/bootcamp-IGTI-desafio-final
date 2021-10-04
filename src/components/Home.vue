<template>
    <section>
        <h1>Bem vindo à agencia de viagens Isekai</h1>
        <router-link></router-link>
    </section>
</template>

<script>
import countries from '../service/countries.js';

export default {
    name: 'Home',
    data() {
        return {
            countries: null,
        };
    },
    created() {
        document.title = 'Home';
        this.fetchCountries();
    },
    methods: {
        async fetchCountries() {
            this.countries = await countries.getCountries();
        },
    },
};
</script>

<style scoped>
</style>
