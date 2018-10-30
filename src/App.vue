<template lang="pug">
div#app(@click="onClick")
  StoreTest
</template>

<script lang="ts">
import { AppModule } from '@/store';
import { Component, Vue } from 'vue-property-decorator';
import StoreTest from './components/StoreTest.vue';

@Component({
  components: {
    StoreTest
  }
})
export default class App extends Vue {
    onClick() {
    AppModule.loadSampleApp()
  }

  created() {
    this.onClick()
  }
}
</script>

<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
