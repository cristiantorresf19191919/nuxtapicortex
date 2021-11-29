// Este sera nuestro almacenamiento central
export const state = () => ({
  _counter: 0,
});
// Accesores o getters
// Normalmente se llaman desde las propiedades
// computed desde lo componentes

export const getters = {
  getCounters(state) {
    return state._counter;
  },
  getBlaBla(state) {
    return "blabla";
  },
};
// Acciones
// Estas funciones sirven para llamar a las mutaciones
// a diferencias de las mutaciones pueden ser asincronos
// Pueden contener algo de logica de negocio y ademasd
//pueden llamar a varias mutaciones
export const actions = {
  /**
   * Esta funcione se ejecuta al inicializrse la APP
   * @param {*} vueContext commit, dispatch, state
   * @param {*} context es el mismo de asyncData y aqui tenemos acceso a toda la app, $axios, env, store
   */
  async nuxtServerInit({ dispatch }, context) {
    await dispatch("posts/setPosts");
  },
  sumTwo({ commit }) {
    commit("increment");
    commit("increment");
  },
  reset({ commit }) {
    commit("reset");
  },
  decrease({ commit }) {
    commit("decrease");
  },
};
// Mutadores
// El unico fin de los mutadores es mutar o modificar el state
// o almacenamiento
export const mutations = {
  increment(state) {
    state._counter++;
  },
  reset(state) {
    state._counter = 0;
  },
  decrease(state) {
    state._counter--;
  },
};
