<template>
    <div>

        Mapa do Site

        <el-tree :data="menus" default-expand-all>
            <div slot-scope="{ node }">
                <span v-if="!node.data.url">{{ node.data.title }}</span>
                <router-link v-else :to="node.data.url">{{ node.data.title }}</router-link>
            </div>
        </el-tree>

    </div>
</template>

<script>
    export default {
        name: 'mapa-do-site',
        data()
        {
            return {
                menus: this.$store.getters.menus,
            };
        }
    }
</script>
