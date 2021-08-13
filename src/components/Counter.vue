<template lang="pug">
li.list-group-item
  .row.text-center.align-items-center
    .col-3.counterChild(@click="countDown")
      i.display-4.bi-dash-circle
    .col-6.counterChild
      p.lead.font-monospace.mb-1.fw-bold.display-5 {{ props.value }}
      a.hoverable.text-truncate.d-block(
        href="#",
        @click.prevent="toggleOptions",
      ) {{ getName(props.name) }}
        counter-dropdown(:toggled="showOptions", :hovered="isHovered")
      .row(v-show="showOptions")
        .col
          counter-options(:id="props.id", @close-options="() => showOptions = false")
    .col-3.counterChild(@click="countUp")
      i.display-4.bi-plus-circle
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import memoize from 'lodash/memoize';
import CounterOptions from './CounterOptions.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['count-up', 'count-down']);

const showOptions = ref(false);

function toggleOptions() {
  showOptions.value = !showOptions.value;
}

function countUp() {
  emit('count-up', props.id);
}

function countDown() {
  emit('count-down', props.id);
}

const getName = memoize((name) => name || '<unnamed counter>');
</script>

<style lang="scss" scoped>
.hoverable {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
