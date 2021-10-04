<template>
    <section>
        <h3>Faça a viagem dos seus sonhos!</h3>

        <div>
            <form>
                <div>
                    <label for="paisOrigem">País de origem</label>
                    <select name="paisOrigem" id="paisOrigem">
                        <option value="0">Escolha o país de origem</option>
                    </select>
                </div>

                <div>
                    <label for="cidadeOrigem">Cidade de origem</label>
                    <select name="cidadeOrigem" id="cidadeOrigem">
                        <option value="0">Escolha a cidade de origem</option>
                    </select>
                </div>

                <div>
                    <label for="paisDestino">País de destino</label>
                    <select name="paisDestino" id="paisDestino">
                        <option value="0">Escolha o país de destino</option>
                    </select>
                </div>

                <div>
                    <label for="cidadeDestino">Cidade de destino</label>
                    <select name="cidadeDestino" id="cidadeDestino">
                        <option value="0">Escolha a cidade de destino</option>
                    </select>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style>
</style>