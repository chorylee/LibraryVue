<template>
  <!-- This component is only intended to refresh data for the demo, nothing more. -->
  <button @click="refresh" class="toolbar-button"><i class="material-icons" title="Refresh resource test data">refresh</i></button>
</template>

<script>
  // This module will mutate the store to refresh
  // api stored both in the store and local storage.
  import { mapActions } from 'vuex'

  export default {
    name: 'toolbar-refresh',
    methods: mapActions('resources', ['refresh'])
  }
</script>
