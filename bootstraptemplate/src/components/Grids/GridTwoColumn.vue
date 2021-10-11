<template>
  <div class="container">
      <div class="row">
          <div class="col-6">
              <slot name="col-1">
                  first Column
              </slot>
          </div>
          <div class="col-6">
              <slot name="col-2">
                  second Column
              </slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Two grid column'
}
</script>

<style>

</style>