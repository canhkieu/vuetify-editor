<template>
  <v-card class="editor">
    <v-toolbar flat dense class="pa-0">
      <v-overflow-btn :items="['Arial', 'Tahoma']" label="Select font" hide-details></v-overflow-btn>
      <v-divider vertical class="mx-2"></v-divider>

      <v-btn-toggle v-model="state.fontStyles" multiple class="transparent">
        <v-btn flat value="bold" @click="execCommand('bold')">
          <v-icon>format_bold</v-icon>
        </v-btn>
        <v-btn flat value="italic" @click="execCommand('italic')">
          <v-icon>format_italic</v-icon>
        </v-btn>
        <v-btn flat value="underline" @click="execCommand('underline')">
          <v-icon>format_underlined</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-divider vertical class="mx-2"></v-divider>
      <v-btn-toggle v-model="state.justify" class="transparent">
        <v-btn flat value="justifyLeft" @click="execCommand('justifyLeft')">
          <v-icon>format_align_left</v-icon>
        </v-btn>
        <v-btn flat value="justifyCenter" @click="execCommand('justifyCenter')">
          <v-icon>format_align_center</v-icon>
        </v-btn>
        <v-btn flat value="justifyRight" @click="execCommand('justifyRight')">
          <v-icon>format_align_right</v-icon>
        </v-btn>
        <v-btn flat value="justifyFull" @click="execCommand('justifyFull')">
          <v-icon>format_align_justify</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-divider vertical class="mx-2"></v-divider>
      <v-btn-toggle v-model="state.list" class="transparent">
        <v-btn flat value="insertOrderedList" @click="execCommand('insertOrderedList')">
          <v-icon>format_list_numbered</v-icon>
        </v-btn>
        <v-btn flat value="insertUnorderedList" @click="execCommand('insertUnorderedList')">
          <v-icon>format_list_bulleted</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
    <v-card-text ref="EditorContent" @change="log" contenteditable>
      <h1>Distinxit pondere posset: viseret titan</h1>
      <p>Fuerat undis. Os abscidit circumfluus. Vindice duae? Onus concordi tuti tegit. Reparabat suis effervescere margine triones occiduo. Ante his aera altae habitandae inter deus. Posset: erant sinistra effervescere piscibus pressa seductaque limitibus. Suis dominari pendebat dominari peregrinum quia concordi. Illi perpetuum aliud lanient?</p>
      <h2>Iapeto cingebant nec conversa manebat</h2>
      <h3>Quem iapeto peragebant sorbentur primaque</h3>
      <h4>Coercuit librata litem circumfluus legebantur</h4>
      <p>Militis animalia nubibus fabricator secrevit. Levius carmen locoque totidemque nabataeaque aeris nisi extendi galeae. Foret pace fronde pluviaque forma pressa! Caelo emicuit iapeto amphitrite nova fluminaque pontus mundi tenent lege.</p>
      <ul>
        <li>Terra mutatas militis formas cognati quisquis pronaque horrifer terris divino foret semine orba quin dixere deus persidaque terram mollia mortales volucres iapeto</li>
        <li>Litem rudis aurea caelum fulgura onerosior ventos erectos septemque tegit ambitae locavit pulsant inminet animalia zonae media</li>
        <li>Speciem colebat alta dissaepserat nitidis evolvit regat siccis valles pluvialibus nubes</li>
        <li>Umentia scythiam peragebant rectumque orbis numero nunc horrifer locavit dicere erant aethera tanto his piscibus</li>
        <li>Montibus fossae caeleste pondere solum alto homini caelumque deorum abscidit cesserunt imagine utramque ensis quoque timebat pinus undas recessit nova ille levitate animal</li>
      </ul>
      <p>Undas aquae manebat sic! Adspirate seductaque formaeque liquidum ultima pugnabant. Astra terram mea nisi secrevit extendi. Consistere montes undis onus liberioris ora pro pro. Nulli habentia zephyro litem caesa undas pondus terris diversa. Auroram totidemque melior tuba bracchia. Sata caelum satus alto supplex media.</p>
      <ol>
        <li>Cuncta longo temperiemque fontes duris media caligine militis tellus nam quarum montibus effervescere cesserunt seductaque chaos: terra circumfluus habentia nec regat facientes unda</li>
        <li>Elementaque utque invasit summaque dominari margine radiis undas proxima levitate nondum levius fronde</li>
        <li>Evolvit circumdare fronde nix peregrinum secrevit praebebat dispositam haec dextra cognati reparabat</li>
        <li>Erat terras inclusum mare tempora et quarum aer semina sinistra onerosior ita dispositam</li>
        <li>Aequalis ora tellus mollia certis sui tanto faecis origine nunc</li>
      </ol>
      <p>Fecit agitabilis concordi vis dextra uno primaque bracchia? Uno litem? Dissaepserat ipsa. Cuncta lucis freta. Securae terrarum margine campoque. Triones mollia. Utramque sublime erectos motura sed modo peregrinum nitidis locavit. Undas pronaque.</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "VuetifyEditor",
  data() {
    return {
      state: {
        fontStyles: [],
        justify: [],
        list: ""
      },
      inputTimeout: null
    };
  },
  methods: {
    execCommand(commandName, showDefaultUI = false, value = "") {
      document.execCommand(commandName, showDefaultUI, value);
    },
    log() {
      console.log("d");
    },
    test(e, c) {
      console.log({ e, c });
    },
    toggleItemArray(states, value, addItem = false, breakFound = false) {
      if (addItem) {
        // console.log("Thêm mới");
        !states.includes(value) ? states.push(value) : "";
      } else {
        // console.log("Xóa");
        // states = states.filter(item => item !== value);
        let index = states.indexOf(value);
        if (index !== -1) {
          states.splice(index, 1);
        }
      }
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
            // this.toolbar_items.forEach(item => {
            clearTimeout(this.inputTimeout);

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

            this.state.justify = document.queryCommandState("justifyLeft")
              ? "justifyLeft"
              : document.queryCommandState("justifyRight")
                ? "justifyRight"
                : document.queryCommandState("justifyCenter")
                  ? "justifyCenter"
                  : document.queryCommandState("justifyFull")
                    ? "justifyFull"
                    : "";

             this.state.list = document.queryCommandState("insertOrderedList") ? "insertOrderedList" :
             document.queryCommandState("insertUnorderedList") ? "insertUnorderedList" : ""


            // });
          }, 500);
          return false;
        },
        false
      );
    });
  }
};
</script>
