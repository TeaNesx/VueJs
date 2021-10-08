<template>
  <section id="navigation">
    <Nav>
      <template v-slot:navLogo>
        <h2>
          SB UI Kit Pro
        </h2>
      </template>
    </Nav>
  </section>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'Navigation',
  components: { Nav }
}
</script>

<style>
  #navigation {
    background:#212832 !important;
    padding-top: 27px;
    padding-bottom: 27px;
  }

  h2 {
    color: white;
  }
</style>
