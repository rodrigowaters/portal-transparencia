<template>
    <div :data-page_id="page_id">
        <div>{{ nome }}</div>
        <div v-html="descricao"></div>

        <ul>
            <li v-for="pagina in menus_vinculados" v-bind:key="pagina.id">

                <router-link v-if="pagina.tipo === 4" :to=" getPageDownload( pagina.id )  " target="_blank">
                    {{ pagina.nome }}
                    <small>(Publicado em {{ pagina.data_inclusao }})</small>
                </router-link>
                <router-link v-if="pagina.tipo === 5" :to=" pagina.tag  " target="_blank">
                    {{ pagina.nome }}
                    <small>(Publicado em {{ pagina.data_inclusao }})</small>
                </router-link>

                <span v-else>{{ pagina.tipo }} - {{ pagina.nome }}</span>

            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name   : "dinamico",
        props  : ["page_id"],
        data()
        {
            return {
                nome            : "",
                descricao       : "",
                menus_vinculados: []
            };
        },
        methods: {
            getPageDownload(page_id)
            {
                return '/download/'.concat(page_id);
            },
            fetchPage: function ()
            {
                let pagina = this.$store.getters.paginas_dinamicas(this.page_id);
                this.nome = pagina.nome;
                this.descricao = pagina.descricao;
                this.menus_vinculados = pagina.menus_vinculados;
            }
        },
        updated: function ()
        {
            this.$nextTick(function ()
            {
                this.fetchPage();
            })
        },
        mounted()
        {
            this.fetchPage();
        }
    };
</script>