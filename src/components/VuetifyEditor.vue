<template>
  <v-card class="vuetify-editor">
    <v-card class="vuetify-editor-toolbar" ref="EditorToolbar">
      <!-- <v-overflow-btn style="max-width:150px" :items="['Arial', 'Tahoma']" label="Select font" hide-details></v-overflow-btn> -->
      <template v-for="(item, index) in toolbars">
        <div v-if="item.btn_toggle" :key="'bar-'+index">
          <v-btn-toggle v-model="state[item.state]" :multiple="item.multiple" class="transparent elevation-0">
            <v-btn v-for="(subitem,subindex ) in item.items" :key="'item-'+subindex+'-bar-'+index" flat :value="subitem.value" @click="subitem.dialog?openDialog(subitem.dialog):execCommand(subitem.value)">
              <v-icon>{{subitem.icon}}</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
        <div v-else-if="item.btn_toggle_status" :key="'bar-'+index">
          <v-btn v-for="(subitem,subindex ) in item.items" :key="'item-'+subindex+'-bar-'+index" style="min-width:36px;" class="pa-0 ma-0" flat @click="subitem.dialog?openDialog(subitem.dialog):execCommand(subitem.value)">
            <v-icon :style="{color:item.state==='foreColor'?state.foreColor:'auto'}">{{subitem.icon}}</v-icon>
          </v-btn>
        </div>
        <!-- <div v-else-if="item.select" :key="'bar-'+index">
          <v-overflow-btn v-for="(subitem,subindex ) in item.items" :value="state[item.state]" :key="'item-'+subindex+'-bar-'+index" @change="changeSelect($event,subitem)" style="width:150px" :items="subitem.items" label="Select font" hide-details @click.native="object_click=subitem.value"></v-overflow-btn>

        </div> -->
      </template>
      <v-btn class="mb-2 mt-0" @click="save()" color="primary">Save</v-btn>
    </v-card>
    <v-card-text class="vuetify-editor-content scroll-y" ref="EditorContent" @change="log" contenteditable v-html="value" @blur="selRange = saveSelection()" :style="[{height:$vuetify.breakpoint.height-150+'px'}]">
    </v-card-text>
    <v-dialog v-model="link_dialog" max-width="500px" transition="dialog-transition">
      <v-card>
        <v-card-title class="title">
          Create Link
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="input_link" label="Link" @keyup.enter="createLink()"></v-text-field>
          <v-switch label="Blank" v-model="input_link_options._blank"></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="link_dialog=false,input_link=null">Cancel</v-btn>
          <v-btn flat color="primary" @click="createLink()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="image_dialog" max-width="500px" transition="dialog-transition">
      <v-card v-if="image_dialog">
        <v-card-title class="title">
          Add Image
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="input_image" label="Link" @keyup.enter="createImage()"></v-text-field>
          <div>
            <v-btn color="primary" @click="$refs.image_input.click()">
              <v-icon left>backup</v-icon>
              Upload
            </v-btn>
            <input v-show="false" ref="image_input" type="file" accept="image/gif, image/jpg, image/png, image/jpeg" @change="loadImage">
            <v-layout row class="my-3">
              <v-flex xs12 class="mr-3">
                <v-text-field type="number" label="Width" v-model="input_image_options.width"></v-text-field>
              </v-flex>
              <v-flex xs12 class="ml-3">
                <v-text-field type="number" label="Height" v-model="input_image_options.height"></v-text-field>
              </v-flex>
            </v-layout>
          </div>
        </v-card-text>
        <v-subheader>Review:</v-subheader>
        <v-card-text class="text-xs-center">
          <img v-show="review_image" :width="input_image_options.width" :height="input_image_options.height" @error="review_image=false" @load="review_image=true" :src="input_image" alt="Image" style="max-width:100%;">
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="image_dialog=false,input_image=null">Cancel</v-btn>
            <v-btn flat color="primary" @click="createImage()">Submit</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="video_dialog" max-width="600px" transition="dialog-transition">
      <v-card v-if="video_dialog">
        <v-card-title class="title">
          Add Video
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="input_video" label="Link" @keyup.enter="createVideo()"></v-text-field>
          <v-layout row class="my-3">
            <v-flex xs12 class="mr-3">
              <v-text-field type="number" label="Width" v-model="input_video_options.width"></v-text-field>
            </v-flex>
            <v-flex xs12 class="ml-3">
              <v-text-field type="number" label="Height" v-model="input_video_options.height"></v-text-field>
            </v-flex>
          </v-layout>
          <v-switch label="Is Youtube video" v-model="input_video_options.is_youtube"></v-switch>
          <v-switch v-show="input_video_options.is_youtube" label="Show title Youtube video" v-model="input_video_options.has_title_youtube"></v-switch>
        </v-card-text>
        <v-subheader>Review:</v-subheader>
        <v-card-text class="text-xs-center">
          <iframe v-if="input_video_options.is_youtube" width="500" height="315" :src="'https://www.youtube.com/embed/'+input_video_options.id_youtube+'?rel=0'+(input_video_options.has_title_youtube?'':'&amp;showinfo=0')" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="max-width:100%;"></iframe>
          <video v-else width="500" height="315" controls playsinline :src="input_video" type="video/mp4" style="max-width:100%;">
            Your browser does not support the video tag.
          </video>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="video_dialog=false,input_video=null">Cancel</v-btn>
          <v-btn flat color="primary" @click="createVideo()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="color_dialog" max-width="400px" transition="dialog-transition">
      <v-card width="100%">
        <v-card-title class="title">
          Material Color Picker
        </v-card-title>
        <v-card-text>
          <p class="subheading">Color Name: <span class="grey--text text--darken-1">{{input_color}}</span></p>
          <v-color v-model="input_color" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="color_dialog=false,input_color=null">Cancel</v-btn>
          <v-btn flat color="primary" @click="createForeColor()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div id="colorTep"></div>
  </v-card>
</template>

<script>
import VColor from "./VColor.vue";
export default {
  name: "VuetifyEditor",
  components: {
    VColor
  },
  props: {
    value: {
      type: String,
      default: "<p>Your Content</p"
    }
  },
  data() {
    return {
      color_dialog: false, // Trạng thái Dialog Color Picker
      input_color: "", // Giá trị color trong Dialog Color Picker
      link_dialog: false, // Trang thái Dialog tạo Link
      input_link: null, // Giá trị link trong Dialog Link
      input_link_options: {
        // Option mặc định cho Link
        _blank: true
      },
      image_dialog: false, // Trang thái Dialog add Image
      input_image: null, // Giá trị image link trong Dialog Link
      input_image_options: {
        // Option mặc định cho Image
        width: 200,
        height: null
      },
      review_image: false, // Hiển thị ảnh xem trước
      video_dialog: false, // Trang Thái Dialog add Video
      input_video: null, // Giá trị Video link trong Dialog Link
      input_video_options: {
        // Option mặc định cho Video
        width: 500,
        height: 310,
        is_youtube: false, // Là Video Youtube
        id_youtube: null, // ID Video Youtube
        has_title_youtube: true // Hiển thị Title video youtube
      },
      sel_select: null, // Biến chứa vùng select
      selRange: null, // Object đang được select
      state: {
        // State toolbar
        fontStyles: [],
        justify: [],
        list: "",
        link: "createLink",
        history: "",
        media: "",
        foreColor: ""
      },
      inputTimeout: null,
      toolbars: [
        {
          panel_name: "Font Styles",
          btn_toggle: true,
          state: "fontStyles",
          multiple: true,
          items: [
            {
              icon: "format_bold",
              value: "bold"
            },
            {
              icon: "format_italic",
              value: "italic"
            },
            {
              icon: "format_underline",
              value: "underline"
            }
          ]
        },
        {
          panel_name: "Color",
          btn_toggle_status: true,
          state: "foreColor",
          items: [
            {
              icon: "format_color_text",
              value: "foreColor",
              dialog: "color_dialog"
            }
          ]
        },
        {
          panel_name: "Justify",
          btn_toggle: true,
          state: "justify",
          items: [
            {
              icon: "format_align_left",
              value: "justifyLeft"
            },
            {
              icon: "format_align_center",
              value: "justifyCenter"
            },
            {
              icon: "format_align_right",
              value: "justifyRight"
            },
            {
              icon: "format_align_justify",
              value: "justifyFull"
            }
          ]
        },
        {
          panel_name: "List",
          btn_toggle: true,
          state: "list",
          items: [
            {
              icon: "format_list_numbered",
              value: "insertOrderedList"
            },
            {
              icon: "format_list_bulleted",
              value: "insertUnorderedList"
            }
          ]
        },
        {
          panel_name: "Link",
          btn_toggle_status: true,
          state: "link",
          items: [
            {
              icon: "link",
              value: "createLink",
              dialog: "link_dialog"
            },
            {
              icon: "link_off",
              value: "unlink"
            }
          ]
        },
        {
          panel_name: "Media",
          btn_toggle_status: true,
          state: "media",
          items: [
            {
              icon: "image",
              value: "insertImage",
              dialog: "image_dialog"
            },
            {
              icon: "video_library",
              value: "insertHTML",
              dialog: "video_dialog"
            }
          ]
        }
      ]
    };
  },
  watch: {
    input_video(val) {
      /**
       * Kiểm tra Link Nhập vào có phải Youtube
       */
      let is_youtube = new RegExp(/https:\/\/www.youtube.com(.*)\w+/g);
      if (val && is_youtube.test(val)) {
        this.input_video_options.is_youtube = true;
        //
        try {
          this.input_video_options.id_youtube = val
            .split("?v=")[1]
            .split("&")[0];
        } catch (error) {
          console.log(error);
        }
      } else {
        this.input_video_options.is_youtube = false;
      }
    }
  },
  methods: {
    /**
     * Lấy đối tượng this để sử dụng trên template
     */
    vm() {
      return this;
    },
    /**
     * Lưu lại vị trí đang select
     */
    saveSelection() {
      if (window.getSelection) {
        this.sel_select = window.getSelection();
        if (this.sel_select.getRangeAt && this.sel_select.rangeCount) {
          return this.sel_select.getRangeAt(0);
        }
      } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
      }
      return null;
    },

    /**
     * Khôi phục ví trí select
     */
    restoreSelection(range) {
      if (range) {
        if (window.getSelection) {
          this.sel_select = window.getSelection();
          this.sel_select.removeAllRanges();
          this.sel_select.addRange(range);
        } else if (document.selection && range.select) {
          range.select();
        }
      }
    },
    /**
     * Tạo liên kết
     */
    createLink() {
      this.restoreSelection(this.selRange);
      this.execCommand("createLink", false, this.input_link);
      // document.execCommand('createLink', true, url);
      if (this.input_link_options._blank)
        this.sel_select.anchorNode.parentElement.target = "_blank";
      this.link_dialog = false;
      this.input_link = null;
    },
    /**
     * Tạo Hình Ảnh
     */
    createImage() {
      this.restoreSelection(this.selRange);
      this.execCommand(
        "insertHTML",
        false,
        `<img ${
          this.input_image_options.width
            ? 'width="' + this.input_image_options.width + '" '
            : ""
        } ${
          this.input_image_options.height
            ? 'height="' + this.input_image_options.height + '"'
            : ""
        } src="${this.input_image}" alt="Image" style="max-width:100%;"/>`
      );
      this.image_dialog = false;
      this.input_image = null;
      this.review_image = false;
    },
    /**
     * Tạo Video
     */
    createVideo() {
      this.restoreSelection(this.selRange);

      let content_video = "";
      if (this.input_video_options.is_youtube) {
        content_video = `<p>&nbsp;<iframe ${
          this.input_video_options.width
            ? 'width="' + this.input_video_options.width + '" '
            : ""
        } ${
          this.input_video_options.height
            ? 'height="' + this.input_video_options.height + '"'
            : ""
        } src="https://www.youtube.com/embed/${
          this.input_video_options.id_youtube
        }?rel=0${
          this.input_video_options.has_title_youtube ? "" : "&amp;showinfo=0"
        }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen  style="max-width:100%;"></iframe>&nbsp;</p>`;
      } else {
        content_video = `<p>&nbsp;<video ${
          this.input_video_options.width
            ? 'width="' + this.input_video_options.width + '" '
            : ""
        } ${
          this.input_video_options.height
            ? 'height="' + this.input_video_options.height + '"'
            : ""
        } controls playsinline src="${
          this.input_video
        }" type="video/mp4"  style="max-width:100%;">
            Your browser does not support the video tag.
          </video>&nbsp;</p>`;
      }
      this.execCommand("insertHTML", false, content_video);
      this.video_dialog = false;
      this.input_video = null;
    },
    /**
     * Tạo fore Color
     */
    createForeColor() {
      this.restoreSelection(this.selRange);
      this.execCommand("foreColor", false, this.input_color);
      this.color_dialog = false;
      this.input_color = null;
    },
    /**
     * Mở Dialog tác vụ
     */
    openDialog(dialog) {
      this[dialog] = true;
      // Lấy attributes của element đang select để modify
      switch (dialog) {
        case "image_dialog": {
          let range_select = this.selRange.cloneContents();
          console.dir(range_select.firstChild);
          if (
            range_select &&
            range_select.firstChild &&
            range_select.firstChild.tagName === "IMG"
          ) {
            this.input_image = range_select.firstChild.src;
            this.input_image_options.width = range_select.firstChild.width;
            this.input_image_options.height = range_select.firstChild.height;
          }
          break;
        }
        case "video_dialog": {
          let range_select = this.selRange.cloneContents();
          console.dir(range_select.firstChild);
          if (
            range_select &&
            range_select.firstChild &&
            range_select.firstChild.nextSibling
          ) {
            if (range_select.firstChild.nextSibling.tagName === "VIDEO") {
              this.input_video = range_select.firstChild.nextSibling.src;
              this.input_video_options.width =
                range_select.firstChild.nextSibling.width;
              this.input_video_options.height =
                range_select.firstChild.nextSibling.height;
              this.input_video_options.is_youtube = false;
            } else if (
              range_select.firstChild.nextSibling.tagName === "IFRAME"
            ) {
              let src = range_select.firstChild.nextSibling.src
                .split("/embed/")[1]
                .split("?")[0];
              this.input_video = `https://www.youtube.com/watch?v=${src}`;
              this.input_video_options.width =
                range_select.firstChild.nextSibling.width;
              this.input_video_options.height =
                range_select.firstChild.nextSibling.height;
              this.input_video_options.has_title_youtube =
                (range_select.firstChild.nextSibling.src || "").indexOf(
                  "showinfo=0"
                ) === -1;
              this.input_video_options.is_youtube = true;
            }
          }
          break;
        }
        case "link_dialog": {
          let el_select = this.sel_select.anchorNode.parentElement;
          if (el_select && el_select.tagName === "A") {
            this.input_link = el_select.href;
            this.input_link_options._blank = el_select.target;
          }
          break;
        }

        default:
          break;
      }
    },
    /**
     * Lấy Hình ảnh local
     */
    loadImage(e) {
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = ev => {
          this.input_image = ev.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    /**
     * Thực thi execCommand
     */
    execCommand(commandName, showDefaultUI = false, value = "") {
      document.execCommand(commandName, showDefaultUI, value);
    },
    /**
     * Accept data đang chỉnh sửa và đẩy vào value  (v-model)
     */
    save() {
      this.$emit("input", this.$refs.EditorContent.innerHTML);
    },
    log() {
      console.log("d");
    },
    test(e, c) {
      console.log({ e, c });
    },
    toggleItemArray(states, value, addItem = false) {
      if (addItem) {
        // console.log("Thêm mới");
        !states.includes(value) ? states.push(value) : "";
      } else {
        // console.log("Xóa");
        // states = states.filter(item => item !== value);
        let index = states.indexOf(value);
        if (index !== -1) {
          console.log("states", states);
          states.splice(index, 1);
        }
      }
    },
    /**
     * Chuyển màu rgb sang hex  rgb(r,g,b) -> #xxxxxx
     */
    rgb2hex(rgb) {
      if (rgb.indexOf("rgba") === -1) {
        return (
          "#" +
          rgb
            .substr(4, rgb.indexOf(")") - 4)
            .split(",")
            .map(color => parseInt(color).toString(16))
            .join("")
        );
      }
      return "#000000";
    }
  },
  mounted() {
    let editor = this.$refs.EditorContent;
    ["click", "keydown"].forEach(e => {
      editor.addEventListener(
        e,
        () => {
          clearTimeout(this.inputTimeout);
          this.inputTimeout = setTimeout(() => {
            clearTimeout(this.inputTimeout);
            // Get attributes element select
            // this.saveSelection();
            //

            this.toggleItemArray(
              this.state.fontStyles,
              "bold",
              document.queryCommandState("bold")
            );
            this.toggleItemArray(
              this.state.fontStyles,
              "italic",
              document.queryCommandState("italic")
            );
            this.toggleItemArray(
              this.state.fontStyles,
              "underline",
              document.queryCommandState("underline")
            );

            this.$set(
              this.state,
              "justify",
              document.queryCommandState("justifyLeft")
                ? "justifyLeft"
                : document.queryCommandState("justifyRight")
                  ? "justifyRight"
                  : document.queryCommandState("justifyCenter")
                    ? "justifyCenter"
                    : document.queryCommandState("justifyFull")
                      ? "justifyFull"
                      : ""
            );
            this.$set(
              this.state,
              "list",
              document.queryCommandState("insertOrderedList")
                ? "insertOrderedList"
                : document.queryCommandState("insertUnorderedList")
                  ? "insertUnorderedList"
                  : ""
            );
            this.$set(
              this.state,
              "foreColor",
              this.rgb2hex(document.queryCommandValue("foreColor"))
            );
            this.input_color = this.state.foreColor;
          }, 500);
          return false;
        },
        false
      );
    });
  }
};
</script>
<style>
.vuetify-editor {
}
.vuetify-editor .vuetify-editor-toolbar > div {
  display: inline-flex;
  padding: 10px;
}
.vuetify-editor .vuetify-editor-content {
  outline: none;
}
/* font[size="7"] {
}
font[size="6"] {
}
font[size="5"] {
} */
</style>
