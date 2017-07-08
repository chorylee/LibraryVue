<template>
  <div class="resource">
    <div class="resource-header" :style="{ backgroundColor: details.color }">
      <i class="material-icons resource-icon">{{ details.icon }}</i>
      <span class="resource-type">{{ details.type }}</span>
    </div>

    <div class="resource-body">
      <h3 class="resource-title"><a :href="details.url" class="resource-link" target="_blank">{{ details.title }}</a></h3>
      <p class="resource-description"><a :href="details.url" class="resource-link" target="_blank">{{ details.description }}</a></p>
    </div>

    <div class="resource-footer">
      <tags :tags="details.tags" :filter="filterLocal"></tags>

      <div v-if="editMode" class="resource-controls">
        <button @click="update($event)" class="btn btn-primary btn-edit" :data-id="details.id"><i class="material-icons">mode_edit</i></button>
        <button @click="removeLocal($event)" class="btn btn-danger btn-remove" :data-id="details.id"><i class="material-icons">delete</i></button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import bus from 'bus'
  import Tags from 'components/Tags'

  export default {
    name: 'resource',
    props: ['details'],
    computed: {
      ...mapState(['editMode']),
      ...mapGetters('resources', ['resource'])
    },
    components: {
      Tags
    },
    methods: {
      ...mapMutations('resources', ['filter', 'remove']),
      filterLocal(e) {
        const target = e.target
        const parent = target.parentNode
        const tag = target.dataset.tag || parent.dataset.tag || ''

        this.filter(tag)
      },
      removeLocal(e) {
        const target = e.target
        const parent = target.parentNode
        const id = target.dataset.id || parent.dataset.id || ''

        this.remove(id)
      },
      update(e) {
        const target = e.target
        const parent = target.parentNode
        const id = target.dataset.id || parent.dataset.id || ''
        const resource = this.resource(id)

        bus.$emit('resource:update', resource)
      }
    }
  }
</script>

<style lang="scss">
  @import '~scss/variables';

  .resource {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-shadow: 0 0.4rem 0.2rem $gray-light;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  .resource-header,
  .resource-body,
  .resource-footer {
    padding: 1rem;
  }

  .resource-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $red;
    color: $white;
  }

  .resource-body {
    flex: 1;
  }

  .resource-link {
    font-weight: 400;
  }

  .resource-controls {
    display: flex;
    margin-top: 1rem;

    .btn {
      flex: 1;
    }

    .btn-edit {
      margin-right: 0.5rem;
    }

    .btn-remove {
      margin-left: 0.5rem;
    }
  }
</style>
