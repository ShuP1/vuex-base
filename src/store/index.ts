import Vue from 'vue';
import Vuex from 'vuex';
import { getModule } from 'vuex-module-decorators';
import App from './app';

Vue.use(Vuex);

export interface State {
  app: App;
}

const store = new Vuex.Store<State>({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    app: App
  }
})

export const AppModule = getModule(App, store)
export default store
