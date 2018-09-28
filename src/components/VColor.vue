<template>
  <swatch-picker style="width:100%;user-select:none;" v-model="color" @input="change" />
</template>

<script>
import colors from "vuetify/es5/util/colors";
import { Swatches } from "vue-color";
export default {
  components: {
    SwatchPicker: Swatches
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      active: this.value,
      color: ""
    };
  },
  computed: {
    palette() {
      const palette = [];
      Object.values(colors).forEach(color => {
        palette.push(Object.values(color));
      });
      return palette;
    }
  },
  watch: {
    active: {
      handler() {
        this.color = { hex: this.findHex(this.active) };
      },
      immediate: true
    },
    value(val) {
      this.active = val;
    }
  },
  methods: {
    change(value) {
      this.$emit("input", value.hex);
    },
    // findName(value) {
    //   for (const [color, shades] of Object.entries(colors)) {
    //     for (const [name, hex] of Object.entries(shades)) {
    //       if (hex === value.toLowerCase())
    //         return `${color}${
    //           name === "base" ? "" : " " + this.parseColorName(name)
    //         }`;
    //     }
    //   }
    //   return value;
    // },
    findHex(value) {
      let part = value.split("");
      let part1 = part[0];
      let part2 = part[1] || "base";
      if (part1)
        for (const [color, shades] of Object.entries(colors)) {
          for (const [name, hex] of Object.entries(shades)) {
            if (color === part1.toLowerCase() && name === part2.toLowerCase())
              return hex;
          }
        }
      return value;
    }
    // parseColorName(val) {
    //   let num = val.charAt(val.length - 1);
    //   if (["1", "2", "3", "4", "5"].includes(num))
    //     return val.substr(0, val.length - 1) + "-" + num;
    //   return val;
    // }
  }
};
</script>
