<template>
  <div style="height: 100%" id="app">
    <Header/>
    <main class="container-fluid">
      <aside>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/page-1">Page 1</router-link></li>
          <li><router-link to="/busca-rapida">Busca rápida</router-link></li>
        </ul>
      </aside>
      <section>
        <router-view/>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'home',
    assetsDir: 'assets/',
    components: {
      Header, Footer
    }
  }
</script>
