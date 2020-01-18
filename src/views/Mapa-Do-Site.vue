<template>
    <div>
        Mapa do Site

        <v-tree :scope-data="menus">
            <ul slot-scope="menuLevel">
                <li v-for="menuItem in menuLevel" v-bind:key="menuItem">
                    <a :href="menuItem.url">{{ menuItem.title }}</a>
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