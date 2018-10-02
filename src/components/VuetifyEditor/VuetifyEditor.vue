<template>
  <v-card v-bind="$attrs" class="vuetify-editor">
    <v-card-title>
      <v-btn-toggle v-model="state.font_styles" multiple class="transparent elevation-0">
        <v-btn v-for="(item,index) in font_style_items" :key="index+'-fontstyle'" flat :value="item.value" @click="execCommand(item.value)">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-divider vertical style="height:32px;" class="mx-2"></v-divider>
      <v-btn style="min-width:40px;" class="pa-0 ma-0" flat @click="openDialogColor()">
        <v-icon :style="{color:state.foreColor}">format_color_text</v-icon>
      </v-btn>
      <v-divider vertical style="height:32px;" class="mx-2"></v-divider>
      <v-btn-toggle v-model="state.justify" class="transparent elevation-0">
        <v-btn v-for="(item,index) in justify_items" :key="index+'-justify'" flat :value="item.value" @click="execCommand(item.value)">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-divider vertical style="height:32px;" class="mx-2"></v-divider>
      <v-btn-toggle v-model="state.list" class="transparent elevation-0">
        <v-btn v-for="(item,index) in list_items" :key="index+'-justify'" flat :value="item.value" @click="execCommand(item.value)">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-divider vertical style="height:32px;" class="mx-2"></v-divider>
      <v-btn style="min-width:40px;" class="pa-0 ma-0" flat @click="openDialogLink()">
        <v-icon>link</v-icon>
      </v-btn>
      <v-btn style="min-width:40px;" class="pa-0 ma-0" flat @click="execCommand('unlink')">
        <v-icon>link_off</v-icon>
      </v-btn>
      <v-divider vertical style="height:32px;" class="mx-2"></v-divider>
      <v-btn style="min-width:40px;" class="pa-0 ma-0" flat @click="openDialogImage()">
        <v-icon>image</v-icon>
      </v-btn>
      <v-btn style="min-width:40px;" class="pa-0 ma-0" flat @click="openDialogVideo()">
        <v-icon>video_library</v-icon>
      </v-btn>
      <v-btn v-show="options.save_button_top" depressed @click="submitUpdate()" color="primary">submit update</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="vuetify-editor-content scroll-y" ref="EditorContent" @click="commandQuery" @keydown="commandQuery" @paste="onPaste" contenteditable v-html="value" @blur="selRange = saveSelection()" :style="[{height:options.height-(options.save_button_top?0:64)+'px'}]">
    </v-card-text>
    <!-- #region Dialog Media -->
    <v-dialog v-model="link_dialog" max-width="500px" transition="dialog-transition">
      <v-card>
        <v-card-title class="headline">
          Add Link
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="input_link" label="Link" @keyup.enter="addLink()"></v-text-field>
          <v-switch label="Opens the linked document in a new window or tab" v-model="input_link_options._blank"></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="link_dialog=false,input_link=null">Cancel</v-btn>
          <v-btn flat color="primary" @click="addLink()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="image_dialog" max-width="500px" transition="dialog-transition">
      <v-card v-if="image_dialog">
        <v-card-title class="headline">
          Add Picture
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="input_image" label="Link" @keyup.enter="addImage()"></v-text-field>
          <div>
            <v-btn color="primary" @click="$refs.image_input.click()">
              <v-icon left>backup</v-icon>
              Upload
            </v-btn>
            <input v-show="false" ref="image_input" type="file" :accept="input_image_options.accept" @change="uploadImageLocal">
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
            <v-btn flat color="primary" @click="addImage()">Submit</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="video_dialog" scrollable max-width="600px" transition="dialog-transition">
      <v-card v-if="video_dialog">
        <v-card-title class="headline">
          Add Video
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="input_video" label="Link" @keyup.enter="addVideo()"></v-text-field>
          <v-layout row class="my-3">
            <v-flex xs12 class="mr-3">
              <v-text-field type="number" label="Width" v-model="input_video_options.width"></v-text-field>
            </v-flex>
            <v-flex xs12 class="ml-3">
              <v-text-field type="number" label="Height" v-model="input_video_options.height"></v-text-field>
            </v-flex>
          </v-layout>
          <v-switch label="Youtube video" v-model="input_video_options.is_youtube"></v-switch>
          <v-switch v-show="input_video_options.is_youtube" label="Show title Youtube video" v-model="input_video_options.has_title_youtube"></v-switch>
          <v-subheader class="pa-0">Review:</v-subheader>
          <div v-if="input_video" class="text-xs-center">
            <iframe v-if="input_video_options.is_youtube" width="500" height="315" :src="'https://www.youtube.com/embed/'+input_video_options.id_youtube+'?rel=0'+(input_video_options.has_title_youtube?'':'&amp;showinfo=0')" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="max-width:100%;"></iframe>
            <video v-else width="500" height="315" controls playsinline :src="input_video" type="video/mp4" style="max-width:100%;">
              Your browser does not support the video tag.
            </video>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="video_dialog=false,input_video=null">Cancel</v-btn>
          <v-btn flat color="primary" @click="addVideo()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="color_dialog" max-width="400px" transition="dialog-transition">
      <v-card width="100%">
        <v-card-title class="title">
          Material Color Picker
        </v-card-title>
        <v-card-text>
          <p class="subheading">Hex Color: <span class="grey--text text--darken-1">{{input_color}}</span></p>
          <v-color v-model="input_color" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="color_dialog=false,input_color=null">Cancel</v-btn>
          <v-btn flat color="primary" @click="addForeColor()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- #endregion -->
    <template v-show="!options.save_button_top">
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed @click="submitUpdate()" color="primary">submit update</v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
import VColor from "./VColor.vue";
export default {
  name: "VuetifyEditor",
  components: {
    VColor
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "<p>Your Content</p"
    },
    options: {
      type: Object,
      default: () => {
        return {
          paste_format: true,
          height: "",
          save_button_top: true
        };
      }
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
        height: null,
        accept: "image/gif, image/jpg, image/png, image/jpeg"
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
        font_styles: [],
        justify: [],
        list: "",
        foreColor: ""
      },
      inputTimeout: null,
      font_style_items: [
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
        },
        {
          icon: "strikethrough_s",
          value: "strikeThrough"
        }
      ],
      justify_items: [
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
      ],
      list_items: [
        {
          icon: "format_list_numbered",
          value: "insertOrderedList"
        },
        {
          icon: "format_list_bulleted",
          value: "insertUnorderedList"
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
          return error;
          // console.log(error);
        }
      } else {
        this.input_video_options.is_youtube = false;
      }
    }
  },
  methods: {
    /**
     * Save range selection
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
     * Restore range Selection
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
    addLink() {
      this.restoreSelection(this.selRange);
      this.execCommand("createLink", false, this.input_link);
      // Add attribute target _blank open new tab
      if (this.input_link_options._blank)
        this.sel_select.anchorNode.parentElement.target = "_blank";
      this.link_dialog = false;
      this.input_link = null;
      this.input_link_options._blank = true;
    },
    /**
     * Tạo Hình Ảnh
     */
    addImage() {
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
      // reset image options
      this.input_image = null;
      this.review_image = false;
      this.input_image_options.width = 200;
      this.input_image_options.height = null;
    },
    /**
     * Tạo Video
     */
    addVideo() {
      this.restoreSelection(this.selRange);

      let content_video = "";
      if (this.input_video_options.is_youtube) {
        content_video = `<iframe ${
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
        }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen  style="max-width:100%;"></iframe>`;
      } else {
        content_video = `<video ${
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
          </video>`;
      }
      // Thêm $nbsp; đầu và cuối thẻ video/iframe để có thể chọn bởi người dùng
      content_video = `<p>&nbsp;${content_video}&nbsp;</p>`;
      // Thực thi thêm mã vào vùng đã chọn
      this.execCommand("insertHTML", false, content_video);

      this.video_dialog = false;
      // Reset video options
      this.input_video = null;
      this.$set(this, "input_video", {
        width: 500,
        height: 310,
        is_youtube: false,
        id_youtube: null,
        has_title_youtube: true
      });
    },
    /**
     * Tạo fore Color
     */
    addForeColor() {
      // Thực thi thêm mã vào vùng đã chọn
      this.execCommand("foreColor", false, this.input_color);
      this.color_dialog = false;
      // Reset color
      this.input_color = null;
    },
    /**
     * Mở Dialog tác vụ
     */
    openDialogColor() {
      this.color_dialog = true;
    },
    openDialogLink() {
      this.link_dialog = true;
      // Kiểm tra vùng chọn và lấy thuộc tính thẻ <a> nếu có (Mục đích để đổ data lên form chỉnh sửa thẻ đang được chọn)
      let el_select = this.sel_select.anchorNode.parentElement;
      if (el_select && el_select.tagName === "A") {
        this.input_link = el_select.href;
        this.input_link_options._blank = el_select.target;
      }
    },
    openDialogImage() {
      this.image_dialog = true;
      // Kiểm tra vùng chọn và lấy thuộc tính thẻ <img> nếu có (Mục đích để đổ data lên form chỉnh sửa thẻ đang được chọn)
      let range_select = this.selRange.cloneContents();
      if (
        range_select &&
        range_select.firstChild &&
        range_select.firstChild.tagName === "IMG"
      ) {
        this.input_image = range_select.firstChild.src;
        this.input_image_options.width = range_select.firstChild.width;
        this.input_image_options.height = range_select.firstChild.height;
      }
    },
    openDialogVideo() {
      this.video_dialog = true;
      // Kiểm tra vùng chọn và lấy thuộc tính thẻ <vide>/<iframe> nếu có (Mục đích để đổ data lên form chỉnh sửa thẻ đang được chọn)
      let range_select = this.selRange.cloneContents();
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
        } else if (range_select.firstChild.nextSibling.tagName === "IFRAME") {
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
    },
    /**
     * Tải lên hình ảnh, lấy ảnh dưới dạng mã hóa base64
     */
    uploadImageLocal(e) {
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
     * Emmit value editor (v-model)
     */
    submitUpdate() {
      this.$emit("input", this.$refs.EditorContent.innerHTML);
    },
    /**
     * Bật tắt trạng thái của chức năng trên toolbar phù hợp với định dạng nội dung vùng chọn
     */
    toggleItemArray(states, value, addItem = false) {
      if (addItem) {
        !states.includes(value) ? states.push(value) : "";
      } else {
        let index = states.indexOf(value);
        if (index !== -1) {
          states.splice(index, 1);
        }
      }
    },
    /**
     * Chuyển màu rgb sang hex  rgb(r,g,b) -> #xxxxxx
     */
    rgb2hex(rgb) {
      // Chỉ chấp nhận mã màu rgb() tất cả màu rgba() sẽ được hiển thị màu #000
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
    },
    onPaste(e) {
      if (!this.options.paste_format) {
        e.preventDefault();
        document.execCommand(
          "insertHTML",
          false,
          e.clipboardData.getData("text/plain")
        );
      }
    },
    commandQuery() {
      clearTimeout(this.inputTimeout);
      this.inputTimeout = setTimeout(() => {
        // this.saveSelection();
        clearTimeout(this.inputTimeout);
        this.toggleItemArray(
          this.state.font_styles,
          "bold",
          document.queryCommandState("bold")
        );
        this.toggleItemArray(
          this.state.font_styles,
          "italic",
          document.queryCommandState("italic")
        );
        this.toggleItemArray(
          this.state.font_styles,
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
    }
  }
};
</script>
<style>
.vuetify-editor-content {
  font-size: 16px;
}
.vuetify-editor .vuetify-editor-toolbar > div {
  display: inline-flex;
  padding: 10px;
}
.vuetify-editor .vuetify-editor-content {
  outline: none;
}
</style>
