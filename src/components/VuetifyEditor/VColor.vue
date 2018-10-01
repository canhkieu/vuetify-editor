<template>
  <v-card flat height="300" class="scroll-y">
    <v-layout row wrap>
      <v-flex v-for="(item, index) in palette" :key="index+'-color-group'" xs3 class="mb-1 text-xs-center">
        <v-btn v-for="(subitem,subindex) in item" :key="subindex+'-color-'+index" @click="$emit('input',subitem)" style="min-width:70px" class="ma-0 pa-0" small :style="{backgroundColor:subitem}">
          <v-icon v-show="subitem===value" color="white" class="check-icon">check</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import colors from "vuetify/es5/util/colors";
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    palette() {
      const palette = [];
      Object.values(colors).forEach(color => {
        palette.push(Object.values(color));
      });
      return palette;
    }
  }
};
</script>
<style>
.check-icon {
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
}
</style>
