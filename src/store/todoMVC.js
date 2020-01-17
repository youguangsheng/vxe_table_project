const state = {
  todos: ["hello world!"]
};
const getters = {
  todos: state => state.todos
};
const mutations = {
  SET_ADD_TODO(state, todo) {
    state.todos.push(todo);
  },
  SET_REMOVE_TODO(state, index) {
    state.todos.slice(index, 1);
  }
};
const actions = {};

export default { state, getters, mutations, actions };
