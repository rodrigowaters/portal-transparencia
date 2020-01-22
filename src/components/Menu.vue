<template>
    <el-tree :data="menus">
        <div slot-scope="{ node }">
            <span v-if="!node.data.url">{{ node.data.title }}</span>
            <router-link v-else :to="node.data.url">{{ node.data.title }}</router-link>
        </div>
    </el-tree>
</template>

<script>
    export default {
        name: 'Footer',
        data()
        {
            return {
                menus: this.$store.getters.menus,
            };
        }
    }
</script>
