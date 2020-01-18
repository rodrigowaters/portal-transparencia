<template>
    <div>
        Mapa do Site
        {{ menus }}
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