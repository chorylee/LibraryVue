<template>
  <header id="header">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="logo">Library</router-link>
      <toolbar></toolbar>
    </div>
  </header>
</template>

<script>
  import Search from 'components/Search'
  import Toolbar from 'components/toolbar/Toolbar'

  export default {
    name: 'header',
    components: {
      Search,
      Toolbar
    }
  }
</script>

<style lang="scss">
  @import '~scss/variables';

  // Assigning body padding here to keep
  // in line with the header height.
  body {
    padding-top: 7.8rem;
  }

  #header {
    width: 100%;
    padding: 2rem 0;
    box-shadow: 0 0 0 0.1rem $gray-light;
    background: $white;
    transition: box-shadow 0.1s;
    position: fixed;
    top: 0;
    left: 0;

    .scrolled & {
      box-shadow: 0 0.4rem 0.2rem $gray-light;
      border: 0;
    }

    .logo {
      font-family: $font-family-header;
      font-size: 2.5rem;
      font-weight: lighter;
    }

    .container {
      display: flex;
      align-items: center;
    }
  }
</style>
