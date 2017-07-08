<template>
  <div id="resources">
    <div class="container">
      <resource-list></resource-list>
      <add-resource v-if="addResourceModalOpen"></add-resource>
      <update-resource v-if="updateResourceModalOpen" :resource="resource"></update-resource>
    </div>
  </div>
</template>

<script>
  import bus from 'bus'
  import ResourceList from 'components/resources/ResourceList'
  import AddResource from 'components/resources/modals/AddResource'
  import UpdateResource from 'components/resources/modals/UpdateResource'

  export default {
    name: 'resources',
    data: () => ({
      addResourceModalOpen: false,
      updateResourceModalOpen: false,
      resource: {}
    }),
    components: {
      ResourceList,
      AddResource,
      UpdateResource
    },
    methods: {
      openAddResourceModal() {
        this.addResourceModalOpen = true
      },
      openUpdateResourceModal(resource) {
        this.updateResourceModalOpen = true
        this.resource = resource
      },
      closeModals() {
        this.addResourceModalOpen = false
        this.updateResourceModalOpen = false
      }
    },
    mounted() {
      bus.$on('resource:add', this.openAddResourceModal.bind(this))
      bus.$on('resource:update', this.openUpdateResourceModal.bind(this))
      bus.$on('modal:close', this.closeModals.bind(this))
    }
  }
</script>
