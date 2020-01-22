<template>
    <header id="header" class="container-fluid" role="banner">
        <div class="row">
            <div class="col">
                <ul role="menubar">
                    <li role="menuitem"><a href="#">Ir para o conteúdo</a></li>
                    <li role="menuitem"><a href="#">Ir para o menu</a></li>
                    <li role="menuitem"><a href="#">Ir para a busca</a></li>
                    <li role="menuitem"><a href="#">Ir para o rodapé</a></li>
                </ul>
            </div>
            <div class="col">
                <ul class="menu-borda" role="menubar">
                    <li role="menuitem"><a href="#">A+</a></li>
                    <li role="menuitem"><a href="#">A-</a></li>
                    <li role="menuitem"><a href="#">ACESSIBILIDADE</a></li>
                    <li role="menuitem"><a href="#">ALTO CONSTRATE</a></li>
                    <li role="menuitem">
                        <router-link to="/mapa-do-site">MAPA DO SITE</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col logo">
                <h1>
                    <router-link to="/">Portal da Transparência</router-link>
                </h1>
                <span>Prefeitura Municipal de São Leopoldo</span>
            </div>
        </div>
        <div class="row" id="busca-rapida">
            <div class="col"></div>
            <div class="col">
                <form v-on:submit="onSubmitForm">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Procurar</span>
                        </div>
                        <input class="form-control" type="text" placeholder="Search..." name="" id="search" v-model="search">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit">
                                <b-icon-search></b-icon-search>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col"></div>
        </div>
    </header>
</template>

<script>
    export default {
        name   : 'Header',
        data()
        {
            return {
                search: ''
            }
        },
        methods: {
            onSubmitForm: function (e)
            {
                e.preventDefault();

                let url = '/busca-rapida/'.concat(this.search);

                this.$router.push(url);

            }
        }
    }
</script>
