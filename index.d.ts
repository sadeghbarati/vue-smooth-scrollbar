import { type Ref } from 'vue-demi';
import type Scrollbar from 'smooth-scrollbar';
import type { ScrollbarPlugin } from 'smooth-scrollbar/plugin';
export interface ScrollbarOptions {
    /** Momentum reduction damping factor, a float value between `(0, 1)`. The lower the value is, the more smooth the scrolling will be (also the more paint frames). */
    damping: number;
    /** Minimal size for scrollbar thumbs. */
    thumbMinSize: number;
    /**
     * Render every frame in integer pixel values, set to `true` to **improve** scrolling performance.
     */
    renderByPixels: boolean;
    /**
     * Keep scrollbar tracks visible.
     */
    alwaysShowTracks: boolean;
    /**
     * Set to `true` to allow outer scrollbars continue scrolling when current scrollbar reaches edge.
     */
    continuousScrolling: boolean;
    /** Delegate wheel events and touch events to the given element. By default, the container element is used. This option will be useful for dealing with fixed elements. */
    delegateTo: EventTarget | null;
    /** @deprecated `wheelEventTarget` is deprecated and will be removed in the future, use `delegateTo` instead. */
    wheelEventTarget: EventTarget | null;
    /**
     * Options for plugins, see {@link https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/plugin.md Plugin System}.
     *
     * */
    plugins: any;
}
export declare function useSmoothScrollbar(options: Ref<Partial<ScrollbarOptions>> | Partial<ScrollbarOptions> | undefined, plugins?: (typeof ScrollbarPlugin)[]): [Ref<HTMLElement | undefined>, Ref<Scrollbar | undefined>];
