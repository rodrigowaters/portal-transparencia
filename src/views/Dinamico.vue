<template>
  <div>
    {{ page_id }}
    <div>{{ header }}</div>
    <div>{{ content }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dinamico",
  props: ["page_id"],
  data() {
    return {
      header: "",
      content: ""
    };
  },
  mounted() {
    axios
      .get("http://ip-api.com/json/")
      .then(
        response => (
          (this.header = response.data.city), (this.content = response.data.isp)
        )
      );
  }
};
</script>