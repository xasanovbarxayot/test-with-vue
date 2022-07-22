<template>
  <div class="box-suggestions">
    <ul>
      <li
        v-for="(item, index) in element.suggestions"
        :key="index"
         :class="select ?  check(item): ''"                       
        @click="$emit('selectResponse',item) "
      >
        {{ item.suggestion }}
      </li>
    </ul>
  </div>
</template>
<!--$emit('check',item) -->
<script>
export default {
  props: {
    element: Object,
    select:Boolean
  },
  methods:{
    check(item) {
      if (item.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
  }
};
</script>

<style></style>
