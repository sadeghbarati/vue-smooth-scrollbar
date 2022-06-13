<script lang="ts" setup>
import { useSmoothScrollbar } from '.'

const [container, scrollbar] = useSmoothScrollbar()

// eslint-disable-next-line no-console
console.log(scrollbar)
</script>

<template>
  <div ref="container">
    <div class="min-h">
      asdasdasd
    </div>
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  [data-scrollbar=true] {
    width: 100%;
    height: 100%;
  }

  .min-h {
    min-height: 300vh;
  }
</style>
