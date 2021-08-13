<template lang="pug">
.container.text-center
  .row.justify-content-center
    .col-12.col-md-8
      .row.py-3
        .col
          img.rounded(:src="logo", height="50")
      .row.mb-2(v-if="counters.length > 0")
        .col
          ul.list-group
            counter(
              v-for="counter of counters",
              :key="counter.id",
              :id="counter.id",
              :name="counter.name",
              :value="counter.value"
              @count-up="countUp",
              @count-down="countDown",
            )
      .row.pb-3
        .col
          create-counter
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Counter from './components/Counter.vue';
import CreateCounter from './components/CreateCounter.vue';
import logo from './assets/logo.png';

const store = useStore();

const counters = computed(() => store.state.counters);

function countUp(id) {
  store.dispatch('countUp', id);
}

function countDown(id) {
  store.dispatch('countDown', id);
}

function resetCounter(id) {
  store.dispatch('resetCounter', id);
}

function deleteCounter(id) {
  store.dispatch('deleteCounter', id);
}
</script>
