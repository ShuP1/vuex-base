import { Module, MutationAction, VuexModule } from 'vuex-module-decorators';

export interface AppState {
  random: number[]
}

@Module({ name: 'app', namespaced: true })
export default class App extends VuexModule implements AppState{
  random = []

  @MutationAction({ mutate: ['random'] })
  async loadSampleApp() {
    return {
      random: new Array(5).fill(0).map(() => Math.floor(Math.random()*10))
    }
  }
}
