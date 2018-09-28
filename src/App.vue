<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-editor v-model="content" />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2018</span>
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
    return {
      content: `<h1>Distinxit pondere posset: viseret titan</h1>
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
   `
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
