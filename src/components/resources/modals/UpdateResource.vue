<template>
  <modal>
    <h3 slot="header">Edit Resource</h3>

    <div :class="'form-group' + (errors.has('resource-title') ? ' has-error' : '')">
      <label for="resource-title" class="form-label">Title</label>
      <input type="text" name="resource-title" id="resource-title" class="form-control" v-model="details.title" v-validate="'required'" autofocus>
      <span v-show="errors.has('resource-title')">{{ errors.first('resource-title') }}</span>
    </div>

    <div :class="'form-group' + (errors.has('resource-description') ? ' has-error' : '')">
      <label for="resource-description" class="form-label">Description</label>
      <textarea name="resource-description" id="resource-description" cols="50" rows="7" class="form-control" v-model="details.description" v-validate="'required'"></textarea>
      <span v-show="errors.has('resource-description')">{{ errors.first('resource-description') }}</span>
    </div>

    <div :class="'form-group' + (errors.has('resource-url') ? ' has-error' : '')">
      <label for="resource-url" class="form-label">URL</label>
      <input type="text" name="resource-url" id="resource-url" class="form-control" v-model="details.url" v-validate="'required'">
      <span v-show="errors.has('resource-url')">{{ errors.first('resource-url') }}</span>
    </div>

    <!--
      Types are hardcoded for the demo. They don't seem to fit
      but at the time of design it seemed alright. I'll eventually
      remove them. For the time being, they will remain.
    -->
    <div :class="'form-group' + (errors.has('resource-type') ? ' has-error' : '')">
      <label for="resource-type" class="form-label">Type</label>
      <select name="resource-type" id="resource-type" class="form-control" v-model="details.type" v-validate="'required'">
        <option selected disabled>Select a Type</option>
        <option value="Article">Article</option>
        <option value="Video">Video</option>
      </select>
      <span v-show="errors.has('resource-type')">{{ errors.first('resource-type') }}</span>
    </div>

    <div class="form-group">
      <label for="resource-tags" class="form-label">Tags</label>
      <input-tag name="resource-tags" id="resource-tags" class="form-control" :tags="details.tags"></input-tag>
    </div>

    <div slot="footer">
      <button @click="cancel" class="btn btn-link">Cancel</button>
      <button @click="updateLocal" class="btn btn-primary">Update</button>
    </div>
  </modal>
</template>

<script>
  import { mapMutations } from 'vuex'
  import InputTag from 'vue-input-tag'
  import bus from 'bus'
  import Modal from 'components/Modal'

  export default {
    name: 'resource-edit',
    props: {
      resource: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      details: {
        title: '',
        description: '',
        url: '',
        type: '',
        tags: []
      }
    }),
    components: {
      InputTag,
      Modal
    },
    methods: {
      ...mapMutations('resources', ['update']),
      updateLocal() {
        this.$validator.validateAll().then(() => {
          if (!this.errors.errors.length) {
            this.update(this.details)

            bus.$emit('modal:close')
          }
        })
      },
      cancel() {
        bus.$emit('modal:close')
      }
    },
    mounted() {
      this.details = {...this.details, ...this.resource}
    }
  }
</script>

<style lang="scss" scoped>
  @import '~scss/variables';

  #resource-tags {
    padding: 0.4rem 0.4rem 0;
  }
</style>
