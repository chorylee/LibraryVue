<template>
  <ul class="tags" v-if="tags.length">
    <li v-if="!filter" v-for="tag in tags" class="tag">{{ tag }}</li>
    <li v-if="filter" @click="filter($event)" v-for="tag in tags" class="tag tag-filterable" :data-tag="tag">{{ tag }}</li>
  </ul>
</template>

<script>
  export default {
    name: 'tags',
    props: {
      tags: {
        type: Array,
        required: true
      },
      filter: {
        type: Function
      }
    }
  }
</script>

<style lang="scss">
  @import '~scss/variables';

  .tags {
    font-size: 1.1rem;
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem 0 0;
    padding: 0;
    list-style: none;
    text-transform: uppercase;
  }

  .tag {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    padding: 0.3rem 0.6rem;
    border: 1px solid $gray-light;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  .tag-filterable {
    cursor: pointer;
  }
</style>
