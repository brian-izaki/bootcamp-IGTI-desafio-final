<template>
    <section class="container mx-auto">
        <div class="mt-4 text-center">
            <h2 class="text-3xl mb-4">Faça a viagem dos seus sonhos!</h2>

            <p>
                Use milhas para ter os melhores pacotes de viagens e aproveite
                suas férias!
            </p>
        </div>

        <div class="flex items-start justify-center gap-24 mt-4">
            <form class="dataContainer">
                <div class="flex gap-5">
                    <div class="select-data">
                        <label for="originCountry">País de origem:</label>
                        <select
                            v-model="form.originCountry"
                            id="originCountry"
                            class="form-select select-item"
                        >
                            <option value="">Escolha o país de origem</option>
                            <option
                                v-for="(country, index) in countriesOpt"
                                :key="index"
                                :value="country.name"
                            >
                                {{ country.name }}
                            </option>
                        </select>
                    </div>

                    <div class="select-data">
                        <label for="originCity">Cidade de origem:</label>
                        <select
                            v-model="form.originCity"
                            :disabled="!hasOriginCountry"
                            id="originCity"
                            class="form-select select-item"
                        >
                            <option value="">Escolha a cidade de origem</option>
                            <option
                                v-for="(city, index) in citiesOpt"
                                :key="index"
                                :value="city.name"
                            >
                                {{ city.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="flex gap-5">
                    <div class="select-data">
                        <label for="destinyCountry">País de destino:</label>
                        <select
                            v-model="form.destinyCountry"
                            id="destinyCountry"
                            class="form-select select-item"
                        >
                            <option value="">Escolha o país de destino</option>
                            <option
                                v-for="(country, index) in countriesOpt"
                                :key="index"
                                :value="country.name"
                            >
                                {{ country.name }}
                            </option>
                        </select>
                    </div>

                    <div class="select-data">
                        <label for="destinyCity">Cidade de destino:</label>
                        <select
                            v-model="form.destinyCity"
                            :disabled="!hasDestinyCountry"
                            id="destinyCity"
                            class="form-select select-item"
                        >
                            <option value="">
                                Escolha a cidade de destino
                            </option>
                            <option
                                v-for="(city, index) in citiesDestinyOpt"
                                :key="index"
                                :value="city.name"
                            >
                                {{ city.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div>
                    <div>
                        <label for="quantityAdult">Adultos:</label>
                        <div>
                            <button type="button">-</button>
                            <input
                                v-model="form.quantityAdult"
                                type="number"
                                id="quantityAdult"
                            />
                            <button type="button">+</button>
                        </div>
                    </div>

                    <div>
                        <label for="quantityKid">Crianças:</label>
                        <div>
                            <button type="button">-</button>
                            <input
                                v-model="form.quantityKid"
                                type="number"
                                id="quantityKid"
                            />
                            <button type="button">+</button>
                        </div>
                    </div>
                </div>

                <div>
                    <input
                        v-model="form.typeTravel"
                        type="radio"
                        id="economic"
                        value="economic"
                    />
                    <label for="economic">Econômica</label>

                    <input
                        v-model="form.typeTravel"
                        type="radio"
                        id="executive"
                        value="executive"
                    />
                    <label for="executive">Executiva</label>
                </div>

                <div>
                    <label for="miles"
                        >Utilizar <span>{{ form.miles }}</span> milhas:</label
                    >
                    <input
                        type="range"
                        v-model="form.miles"
                        id="miles"
                        value="0"
                    />
                </div>
            </form>

            <div class="dataContainer">
                <h4>Resumo da viagem</h4>
                <p>Origem: {{ form.originCountry }} ({{ form.originCity }})</p>
                <p>
                    Destino: {{ form.destinyCountry }} ({{ form.destinyCity }})
                </p>

                <p>Distância: ??</p>

                <p>
                    {{ form.quantityAdult }} adulto(s),
                    {{ form.quantityKid }} criança(s)
                </p>
                <p>Tipo de vôo: Classe {{ typeTravel }}</p>

                <p>R$ ?? por adulto</p>
                <p>R$ ?? por criança</p>

                <p>Milhas: {{ form.miles }}</p>
                <p>Valor abatido por milhas: R$ ??</p>
                <p>Total: R$ ??</p>
            </div>
        </div>
    </section>
</template>

<script>
import countries from '../service/countries';

export default {
    name: 'Portal',
    data() {
        return {
            countries: [],
            countriesOpt: [],
            citiesOpt: [],
            citiesDestinyOpt: [],

            form: {
                originCountry: '',
                originCity: '',
                destinyCountry: '',
                destinyCity: '',
                quantityAdult: 0,
                quantityKid: 0,
                typeTravel: '',
                miles: 0,
            },
        };
    },
    created() {
        document.title = 'Agendar viagem';
        this.fetchCountries();
    },
    methods: {
        async fetchCountries() {
            this.countries = await countries.getCountries();
            this.countriesOpt = this.countries.map((country) => ({
                name: country.country,
            }));
        },
    },
    computed: {
        hasOriginCountry() {
            return Boolean(this.form.originCountry);
        },
        hasDestinyCountry() {
            return Boolean(this.form.destinyCountry);
        },
        typeTravel() {
            const types = {
                economic: 'Econômica',
                executive: 'Executiva',
            };

            return types[this.form.typeTravel];
        },
    },
    watch: {
        'form.originCountry'() {
            if (this.form.originCountry) {
                const citiesList = this.countries.find(
                    (country) => country.country === this.form.originCountry
                );

                this.form.originCity = '';

                this.citiesOpt =
                    citiesList.cities.map((city) => ({
                        name: city.city,
                    })) || [];
            }
        },
        'form.destinyCountry'() {
            if (this.form.destinyCountry) {
                const citiesList = this.countries.find(
                    (country) => country.country === this.form.destinyCountry
                );

                this.form.destinyCity = '';

                this.citiesDestinyOpt =
                    citiesList.cities.map((city) => ({
                        name: city.city,
                    })) || [];
            }
        },
    },
};
</script>

<style scoped>
.dataContainer {
    @apply flex flex-col flex-nowrap gap-5;
    @apply bg-purple-50 h-full p-5 rounded-sm;
}

.select-data {
    @apply flex flex-col items-start gap-2;
}

.select-item {
    @apply bg-gray-50 rounded-md p-2 pr-8 border-purple-500;
}
.select-item:focus {
    @apply outline-none border-purple-600;
}

.select-item:disabled {
    @apply opacity-50 bg-gray-50;
}
</style>