<template>
  <div id="app">
    <Header/>
    <main class="container-fluid">
      <aside>
        <ul>
          <li><a href="#page-1">Page 1</a></li>
          <li><a href="#page-2">Page 2</a></li>
          <li><a href="#page-3">Page 3</a></li>
          <li><a href="#page-4">Page 4</a></li>
        </ul>
      </aside>
      <section>
        <router-view/>
      </section>
    </main>
    <Footer/>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
    <!--
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    -->
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
