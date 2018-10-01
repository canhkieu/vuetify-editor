<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-editor v-model="content" :options="editor_options" />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import VEditor from "./components/VuetifyEditor/VuetifyEditor";

export default {
  name: "App",
  components: {
    VEditor
  },
  data() {
    return {
      editor_options: {
        paste_format: false,
        height: this.$vuetify.breakpoint.height - 150 + "px"
      },
      content: null
    };
  },
  watch: {
    content(val) {
      // Câp nhật nội dung vào Storage
      localStorage.setItem("content", val);
    }
  },
  mounted() {
    // Lấy Nội dung đã lưu từ Storage
    let content = localStorage.getItem("content");
    if (content) this.content = localStorage.getItem("content");
  }
};
</script>
