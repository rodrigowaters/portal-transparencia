<template>
    <div>

        Busca Rapida -> {{query}}

        <v-tree :scope-data="menus">

            <div slot-scope="menuLevel">
                <div v-for="menuItem in menuLevel" v-bind:key="menuItem.title">
                    <router-link v-if=" showLink( menuItem, query ) " :to="menuItem.url">{{ menuItem.title }}</router-link>
                    <v-tree v-if="menuItem.children" :scope-data="menuItem.children"></v-tree>
                </div>
            </div>

        </v-tree>

    </div>
</template>

<script>
    export default {
        name   : 'busca-rapida',
        props  : ['query'],
        data()
        {
            return {
                menus: this.$store.getters.menus,
            };
        },
        methods: {
            showLink: (item, query) =>
            {
                let result = item.title.toLowerCase().match(new RegExp(query, 'i'))
                return Object.prototype.hasOwnProperty.call(item, 'url') && result != null;
            }
        }
    }
</script>
