import { type Ref, isRef, onMounted, onUnmounted, ref, watch } from 'vue-demi'

import SmoothScrollbar from 'smooth-scrollbar'
import type { Scrollbar, ScrollbarOptions } from 'smooth-scrollbar/interfaces'

type OptionalScrollOptions = Partial<ScrollbarOptions>

export function useSmoothScrollbar<
  T extends HTMLElement,
>(options?: Ref<OptionalScrollOptions> | OptionalScrollOptions | undefined, plugins?: any[], gsap?: boolean) {
  const container = ref<T>()
  const scrollbar = ref<Scrollbar>()

  // if (isRef(options)) {
  //   watch(options, (newOptions, _) => {
  //     if (scrollbar.value)

  //   })
  // }

  onMounted(() => {
    if (container.value)
      scrollbar.value = SmoothScrollbar.init(container.value, isRef(options) ? options.value : options)
  })

  onUnmounted(() => {
    if (scrollbar.value)
      scrollbar.value.destroy()
  })

  return [container, scrollbar]
}
