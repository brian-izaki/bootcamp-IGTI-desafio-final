<template>
    <section>
        <h1>Bem vindo à agencia de viagens Isekai</h1>
        <router-link to="/portal">Agendar uma viagem</router-link>
    </section>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {};
    },
    created() {
        document.title = 'Home';
    },
    methods: {},
};
</script>

<style scoped>
</style>
