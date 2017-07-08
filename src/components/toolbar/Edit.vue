<template>
  <button @click="toggleEditMode" class="toolbar-button" title="Enter edit mode"><i class="material-icons">mode_edit</i></button>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'toolbar-edit',

    methods: mapMutations([
      'toggleEditMode'
    ])
  }
</script>

<style lang="scss" scoped>
  @import '~scss/variables';

  .edit-mode .toolbar-button {
    color: $red;
  }
</style>
