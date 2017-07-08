<template>
  <div id="app" :class="(editMode ? 'edit-mode' : '') + (scrolled ? ' scrolled' : '')">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Header from 'components/Header'

  export default {
    name: 'app',
    data: () => ({
      scrolled: false
    }),
    computed: mapState(['editMode']),
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 0
      }
    },
    components: {
      appHeader: Header
    },
    created() {
      window.addEventListener('scroll', this.handleScroll.bind(this))
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll.bind(this))
    }
  }
</script>

<style src="scss/app" lang="scss"></style>
