<template>
  <div>
    <h1>Config inicial</h1>
  </div>
</template>

<script>
import countries from '../service/countries.js';

export default {
  name: 'Home',
  data() {
    return {
      countries: null
    }
  },
  created () {
    document.title = "Home";
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      this.countries = await countries.getCountries();
    }
  }
}
</script>

<style scoped>

</style>
