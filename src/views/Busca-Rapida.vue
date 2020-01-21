<template>
    <div>

        Busca Rapida -> {{query}}

        <el-tree :data="menus" default-expand-all>
            <div slot-scope="{ node }">
                <router-link v-if=" showLink( node.data, query ) " :to="node.data.url">{{ node.data.title }}</router-link>
            </div>
        </el-tree>

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
                return item.hasOwnProperty('url') && result != null;
            }
        }
    }
</script>