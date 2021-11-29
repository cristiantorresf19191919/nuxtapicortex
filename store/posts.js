// State
export const state = () => ({
  _posts: [],
});

// Getters
export const getters = {
  getPosts(state) {
    return state._posts;
  },
  getTotal(state){
    return state._posts.length;
  }
};
//actions
export const actions = {
  async setPosts({ commit }) {
    let { data } = await this.$axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setPosts", data);
  },
};
//mutations
export const mutations = {
  setPosts(state, posts) {
    state._posts = posts;
  },
};
