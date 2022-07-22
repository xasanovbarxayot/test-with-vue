<template>
  <div :class="{ 'box-score': true, active: score_show }">
    <!-- v-if="score_show" -->
    <h2>
      <slot name="header"> </slot>
    </h2>
    <h2>
      <slot name="score" >  </slot>
      / {{ questions.length }}
    </h2>
    <div class="btn-restart">
      <button @click="$emit('restart')">
        <slot name="button"> </slot>
      </button>
    </div>
    <span @click="$emit('restart')"> X </span>
  </div>
</template>

<script>
export default {
  props: {
    score_show: Boolean,
    questions: Array,
  },
};
</script>

<style></style>
