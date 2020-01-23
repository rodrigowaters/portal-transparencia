<template>
    <div>

        <b-card no-body>
            <b-tabs pills card vertical>
                <b-tab :title="letra" v-for="(termos, letra) in glossario" v-bind:key="letra">
                    <b-card-text>
                        <b-list-group>
                            <b-list-group-item href="#" class="flex-column align-items-start" v-for="(descricao, titulo) in termos" v-bind:key="titulo">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">{{titulo}}</h5>
                                </div>
                                <div class="mb-1 text-justify" v-html="descricao"></div>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>

    </div>
</template>

<script>

    export default {
        name: 'glossario',
        data()
        {
            return {
                glossario: this.$store.getters.glossario,
            };
        }
    }
</script>