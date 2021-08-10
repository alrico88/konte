import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import CounterItem from '../helpers/counter';

function cloneArray(array) {
  return JSON.parse(JSON.stringify(array));
}

function getItemToModify(array, id) {
  const pos = array.findIndex((d) => d.id === id);

  return {
    position: pos,
    item: array[pos],
    array,
  };
}

export default createStore({
  state: {
    counters: [],
  },
  mutations: {
    changeCounters(state, newCounters) {
      state.counters = newCounters;
    },
  },
  actions: {
    addCounter(context, {
      name,
      startVal,
      stepUpVal,
      stepDownVal,
    }) {
      const counters = cloneArray(context.state.counters);

      counters.push(new CounterItem(name, startVal, stepUpVal, stepDownVal));

      context.commit('changeCounters', counters);
    },
    deleteCounter(context, id) {
      const { position, array } = getItemToModify(cloneArray(context.state.counters), id);
      array.splice(position, 1);

      context.commit('changeCounters', array);
    },
    resetCounter(context, id) {
      const { position, item, array } = getItemToModify(cloneArray(context.state.counters), id);

      item.value = item.startingValue;
      array[position] = item;

      context.commit('changeCounters', array);
    },
    countUp(context, id) {
      const { position, item, array } = getItemToModify(cloneArray(context.state.counters), id);

      item.value += item.stepUp;
      array[position] = item;

      context.commit('changeCounters', array);
    },
    countDown(context, id) {
      const { position, item, array } = getItemToModify(cloneArray(context.state.counters), id);

      item.value -= item.stepDown;
      array[position] = item;

      context.commit('changeCounters', array);
    },
  },
  plugins: [createPersistedState()],
});
