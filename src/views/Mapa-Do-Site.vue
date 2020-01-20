<template>
    <div>
        Mapa do Site

        <v-tree :scope-data="menus">
            <ul slot-scope="menuLevel">
                <li v-for="menuItem in menuLevel" v-bind:key="menuItem">
                    <router-link :to="menuItem.url">{{ menuItem.title }}</router-link>
                    <v-tree v-if="menuItem.children" :scope-data="menuItem.children"></v-tree>
                </li>
            </ul>
        </v-tree>

    </div>
</template>

<script>
    export default {
        name: 'mapa-do-site',
        data()
        {
            return {
                menus: this.$store.getters.menus
            }
        }
    }
</script>