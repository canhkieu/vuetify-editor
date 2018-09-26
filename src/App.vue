<template>
  <v-app>    
    <v-content>
      <v-container fluid>
        <v-editor/>
      </v-container>
    </v-content>    
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import VEditor from "./components/VuetifyEditor";

export default {
  name: "App",
  components: {
    VEditor
  },
  data() {
    return {};
  }
};
</script>
