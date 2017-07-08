<template>
  <div class="resource-list">
    <div v-show="!resources.length" class="no-resources">
      <h1>You don't have any resources yet! </h1>
      <p>Click the red button in the top right hand corner to add some.</p>
    </div>

    <!-- We wrap out resources in a grid to have nice spacing -->
    <div v-show="resources.length" v-for="r in resources" class="resource-list-item">
      <resource :details="r" :key="r.id"></resource>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Resource from 'components/resources/Resource'

  export default {
    name: 'resource-list',

    // We tap into the "resources" module and then
    // the "resources" property on the state.
    computed: mapState('resources', ['resources']),
    components: {
      Resource
    }
  }
</script>

<style lang="scss">
  // The 20% extra is to accommodate the display flex
  // and negative margin offset.
  .resource-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 120%;
    margin: 0 -2rem;
    padding: 2rem 0;
  }

  .resource-list-item {
    width: 20%;
    min-width: 30rem;
    padding: 2rem;
  }

  .no-resources {
    text-align: center;
  }
</style>
