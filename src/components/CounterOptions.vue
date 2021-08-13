<template lang="pug">
.d-md-flex.d-block.justify-content-center
  div.my-2.my-md-0
    button.btn.btn-sm.btn-warning.w-100.me-md-2(@click="resetCounter") Reset
  div
    button.btn.btn-sm.btn-danger.w-100.ms-md-2(@click="deleteCounter") Delete
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
