<template lang="pug">
.hello
  p {{ random }}
</template>

<script lang="ts">
import { AppModule } from '@/store';
import { Component, Vue } from 'vue-property-decorator';
// import AppModule from "@/store/app";

@Component({})
export default class StoreTest extends Vue {
  get random(): number[] {
    return AppModule.random;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h3
  margin: 40px 0 0

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
