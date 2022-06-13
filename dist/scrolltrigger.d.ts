/*!
 * SmoothScrollbar GSAP ScrollTrigger Plugin
 *
 * @version 1.0.1
 * @author Artem Dordzhiev (Draft)
 */
import type Scrollbar from 'smooth-scrollbar';
import { ScrollbarPlugin } from 'smooth-scrollbar';
declare class ScrollTriggerPlugin extends ScrollbarPlugin {
    static pluginName: string;
    constructor(scrollbar: Scrollbar, options: any);
    setProxy(): void;
}
export default ScrollTriggerPlugin;
