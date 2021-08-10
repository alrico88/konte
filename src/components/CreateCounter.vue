<template lang="pug">
.card.text-center(v-if="!showAdd")
  .card-body.hoverer(@click="toggleShow")
    i.bi-plus-circle.display-6
    br
    | Add new counter

.card(v-if="showAdd")
  .card-body.text-start
    h5.card-title Create new counter
    form.form(@submit="handleSubmit")
      .form-group
        label.form-label Counter name
        input.form-control(
          type="text",
          v-model="form.name",
          placeholder="Ex.: My counter"
        )
      .row.row-cols-1.row-cols-md-3.mb-3
        .col
          .form-group
            label.form-label Starting value
            input.form-control(type="number", v-model.number="form.startVal")
        .col
          .form-group
            label.form-label Step up
            input.form-control(type="number", :min="1", v-model.number="form.stepUpVal")
        .col
          .form-group
            label.form-label Step down
            input.form-control(type="number", , :min="1", v-model.number="form.stepDownVal")
      .form-group
        ul.list-inline.mb-0
          li.list-inline-item
            button.btn.btn-primary(type="submit") Add counter
          li.list-inline-item
            button.btn.btn-secondary(type="button", @click="dismiss") Cancel
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const form = reactive({
  name: '',
  startVal: 0,
  stepUpVal: 1,
  stepDownVal: 1,
});

function reset() {
  form.name = '';
  form.startVal = 0;
  form.stepUpVal = 1;
  form.stepDownVal = 1;
}

const showAdd = ref(false);

function toggleShow() {
  showAdd.value = !showAdd.value;
}

function addCounter({
  name,
  startVal,
  stepUpVal,
  stepDownVal,
}) {
  store.dispatch('addCounter', {
    name,
    startVal,
    stepUpVal,
    stepDownVal,
  });
}

function handleSubmit() {
  addCounter({
    name: form.name,
    startVal: form.startVal,
    stepUpVal: form.stepUpVal,
    stepDownVal: form.stepDownVal,
  });

  toggleShow();
  reset();
}

function dismiss() {
  toggleShow();
  reset();
}
</script>

<style lang="scss" scoped>
.hoverer {
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
}
</style>
