<template>
  <div class="modal">
    <div @click="close" class="modal-mask"></div>
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header">Modal Header</slot>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from 'bus'

  export default {
    name: 'modal',
    methods: {
      close() {
        bus.$emit('modal:close')
      }
    }
  }
</script>

<style lang="scss">
  @import '~scss/variables';

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .modal-mask {
    width: 100%;
    height: 100%;
    background: rgba($white, 0.8);
    position: fixed;
    top: 0;
    left: 0;
  }

  .modal-content {
    max-width: 50rem;
    background: $white;
    box-shadow: 0 0.4rem 0.2rem $gray-light;
    border-radius: 0.4rem;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .modal-header {
    padding: 1rem;
    background: $red;
    color: $white;
  }

  .modal-body {
    padding: 1rem;
  }

  .modal-footer {
    padding: 1rem;
    text-align: right;
  }
</style>
