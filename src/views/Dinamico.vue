<template>
    <div :data-page_id="page_id">
        <div>{{ nome }}</div>
        <div v-html="descricao"></div>
    </div>
</template>

<script>
    export default {
        name   : "dinamico",
        props  : ["page_id"],
        data()
        {
            return {
                nome     : "",
                descricao: ""
            };
        },
        methods: {
            fetchPage: function ()
            {
                let pagina = this.$store.getters.paginas_dinamicas(this.page_id);
                this.nome = pagina.nome;
                this.descricao = pagina.descricao;
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