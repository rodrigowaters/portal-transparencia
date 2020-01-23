<template>
    <div style="height: 100%" id="app">
        <Header/>
        <main class="container-fluid">
            <aside>
                <Menu/>
            </aside>
            <section>
                <div style="margin-top: 5px">
                    <b-breadcrumb v-if="breadcrumb.length > 0" :items="breadcrumb"></b-breadcrumb>
                </div>
                <router-view/>
                <vue-progress-bar></vue-progress-bar>
            </section>
        </main>
        <Footer/>
    </div>
</template>

<script>

    import Header from '@/components/Header.vue'
    import Menu   from '@/components/Menu.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name      : 'home',
        assetsDir : 'assets/',
        components: {
            Header, Menu, Footer
        },
        data()
        {
            return {
                breadcrumb: []
            }
        },
        mounted()
        {
            this.$Progress.finish();
        },
        created()
        {
            // Inicia a Progressbar
            this.$Progress.start();

            this.$router.beforeEach((to, from, next) =>
            {
                if (to.meta.progress !== undefined)
                {
                    let meta = to.meta.progress;
                    this.$Progress.parseMeta(meta)
                }

                this.$Progress.start();
                next()
            });

            this.$router.afterEach((to) =>
            {
                // to, from
                // console.log(from.path, ' -> ', to.path);
                this.$store.dispatch('refreshBreadcrumb', to.path)
                this.$data.breadcrumb = this.$store.getters.breadcrumb;
                this.$Progress.finish();
            });
        }
    }
</script>
