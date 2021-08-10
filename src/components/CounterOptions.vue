<template lang="pug">
ul.list-inline.mb-0.mt-2
  li.list-inline-item
    button.btn.btn-sm.btn-warning(@click="resetCounter") Reset
  li.list-inline-item
    button.btn.btn-sm.btn-danger(@click="deleteCounter") Delete
</template>

<script setup>
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { defineEmits, defineProps } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close-options']);

function resetCounter() {
  store.dispatch('resetCounter', props.id);
  emit('close-options');
}

function deleteCounter() {
  const confirmation = confirm('Do you want to delete this counter?');

  if (confirmation === true) {
    store.dispatch('deleteCounter', props.id);
  }
}
</script>
