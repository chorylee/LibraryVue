<template>
  <button @click="removeAll" class="toolbar-button" title="Remove all resources"><i class="material-icons">delete</i></button>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'toolbar-remove',
    methods: mapActions('resources', ['removeAll'])
  }
</script>
