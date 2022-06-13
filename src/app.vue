<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { onMounted, ref } from 'vue'
import ScrollTriggerPlugin from './scrolltrigger'

import { type ScrollbarOptions, useSmoothScrollbar } from '.'

gsap.registerPlugin(ScrollTrigger)

// const optionsNew = ref<Partial<ScrollbarOptions>>({
//   alwaysShowTracks: true,
//   damping: 0.3,
// })
const circle = ref()

const [container, scrollbar] = useSmoothScrollbar({
  alwaysShowTracks: false,
  damping: 0.1,
}, [OverscrollPlugin])

onMounted(() => {
  ScrollTrigger.scrollerProxy('.container', {
    scrollTop(value) {
      if (arguments.length)
        // @ts-expect-error aaa
        scrollbar.value.scrollTop = value

      return scrollbar?.value?.scrollTop
    },
  })

  scrollbar?.value?.addListener(ScrollTrigger.update)

  /* eslint-disable no-console */
  ScrollTrigger.defaults({
    scroller: container.value,
    pinType: 'transform',
  })
  console.log(circle.value)

  gsap.to(circle.value, {
    scrollTrigger: {
      trigger: circle.value,
      start: 'top top',
      end: () => `+=${innerHeight}`,
      pin: true,
      scrub: true,
      markers: true,
    },
  })

  gsap.to(circle.value, {
    x: 300,
  })

  if (document.querySelector('.gsap-marker-scroller-start')) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]')

    scrollbar?.value?.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y })
    })
  }
})
</script>

<template>
  <div ref="container" class="container">
    <div class="min-h">
      <div ref="circle" class="circle" />
    </div>
  </div>
</template>

<style>
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
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

  .circle {
    margin: 100px;
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
  }
</style>
