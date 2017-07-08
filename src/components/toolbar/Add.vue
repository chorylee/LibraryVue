<template>
  <button @click="add($event)" class="btn btn-danger" title="Add a new resource"><i class="material-icons">add</i></button>
</template>

<script>
  import bus from 'bus'

  export default {
    name: 'toolbar-add',
    methods: {
      add() {
        bus.$emit('resource:add')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn-danger {
    padding: 0.5rem;
  }
</style>
