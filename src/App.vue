<template>
  <div style="height: 100%" id="app">
    <Header/>
    <main class="container-fluid">
      <aside>
        <Menu/>
      </aside>
      <section>
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
    name: 'home',
    assetsDir: 'assets/',
    components: {
      Header, Menu, Footer
    },
    mounted () {
      this.$Progress.finish();
    },
    created()
    {

      // Inicia a Progressbar
      this.$Progress.start();

      //
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

      //
      this.$router.afterEach(() =>
      {
        // to, from
        // console.log(from.path, ' -> ', to.path);
        this.$Progress.finish();
      });

    }
  }
</script>
