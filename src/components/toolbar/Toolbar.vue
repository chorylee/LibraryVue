<template>
  <ul class="toolbar">
    <li v-if="resources.length" class="toolbar-item"><edit></edit></li>
    <li class="toolbar-item"><refresh></refresh></li>
    <li v-if="resources.length" class="toolbar-item"><remove></remove></li>
    <li class="toolbar-item"><add></add></li>
  </ul>
</template>

<script>
  // The buttons were broken out into their
  // own file as each one will do something
  // different and we don't want them coupled
  // to just one file.
  import { mapState } from 'vuex'
  import Add from 'components/toolbar/Add'
  import Remove from 'components/toolbar/Remove'
  import Edit from 'components/toolbar/Edit'
  import Refresh from 'components/toolbar/Refresh'

  export default {
    name: 'toolbar',
    computed: mapState('resources', ['resources']),
    components: {
      Add,
      Edit,
      Remove,
      Refresh
    }
  }
</script>

<style lang="scss">
  @import '~scss/variables';

  .toolbar {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;
  }

  .toolbar-item {
    margin-left: 2rem;
  }

  .toolbar-button {
    line-height: 1;
    padding: 0;
    border: 0;
    background: 0;
    outline: none;
    color: $gray;
    cursor: pointer;
  }
</style>
