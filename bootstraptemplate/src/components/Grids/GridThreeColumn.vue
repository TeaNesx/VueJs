<template>
  <div class="container">
      <div class="row">
          <div class="col-4">
              <slot name="col-1">
                  col 1
              </slot>
          </div>

          <div class="col-4">
              <slot name="col-2">
                  col 2
              </slot>
          </div>

          <div class="col-4">
              <slot name="col-3">
                  col 3
              </slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>