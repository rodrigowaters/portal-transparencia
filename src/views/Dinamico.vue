<template>
  <div>
    <div>{{ nome }}</div>
    <div v-html="descricao"></div>
  </div>
</template>

<script>
export default {
  name: "dinamico",
  props: ["page_id"],
  data() {
    return {
      nome     : "",
      descricao: ""
    };
  },
  mounted()
  {

    let pagina = this.$store.getters.paginas_dinamicas(this.page_id);
    this.nome = pagina.nome;
    this.descricao = pagina.descricao;

  }
};
</script>