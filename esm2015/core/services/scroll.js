/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function easeInOutCubic(t, b, c, d) {
    const cc = c - b;
    let tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
export class NzScrollService {
    constructor(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            el.scrollTop = topValue;
        }
    }
    /** Get position of `el` against window. */
    getOffset(el) {
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            const doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    getScroll(target, top = true) {
        if (typeof window === 'undefined') {
            return 0;
        }
        const method = top ? 'scrollTop' : 'scrollLeft';
        let result = 0;
        if (this.isWindow(target)) {
            result = target[top ? 'pageYOffset' : 'pageXOffset'];
        }
        else if (target instanceof Document) {
            result = target.documentElement[method];
        }
        else if (target) {
            result = target[method];
        }
        if (target && !this.isWindow(target) && typeof result !== 'number') {
            result = (target.ownerDocument || target).documentElement[method];
        }
        return result;
    }
    isWindow(obj) {
        return obj !== null && obj !== undefined && obj === obj.window;
    }
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param y Scroll to `top`, 0 by default
     */
    scrollTo(containerEl, y = 0, options = {}) {
        const target = containerEl ? containerEl : window;
        const scrollTop = this.getScroll(target);
        const startTime = Date.now();
        const { easing, callback, duration = 450 } = options;
        const frameFunc = () => {
            const timestamp = Date.now();
            const time = timestamp - startTime;
            const nextScrollTop = (easing || easeInOutCubic)(time > duration ? duration : time, scrollTop, y, duration);
            if (this.isWindow(target)) {
                target.scrollTo(window.pageXOffset, nextScrollTop);
            }
            else if (target instanceof HTMLDocument || target.constructor.name === 'HTMLDocument') {
                target.documentElement.scrollTop = nextScrollTop;
            }
            else {
                target.scrollTop = nextScrollTop;
            }
            if (time < duration) {
                reqAnimFrame(frameFunc);
            }
            else if (typeof callback === 'function') {
                callback();
            }
        };
        reqAnimFrame(frameFunc);
    }
}
NzScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzScrollService_Factory() { return new NzScrollService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzScrollService, providedIn: "root" });
NzScrollService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NzScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3Njcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFLM0QsU0FBUyxjQUFjLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztJQUNoRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNwQztTQUFNO1FBQ0wsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQztBQWNELE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQThCLEdBQWM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxZQUFZLENBQUMsRUFBb0IsRUFBRSxXQUFtQixDQUFDO1FBQ3JELElBQUksRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZ0IsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQ2hEO2FBQU07WUFDSixFQUFjLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsU0FBUyxDQUFDLEVBQVc7UUFDbkIsTUFBTSxHQUFHLEdBQUc7WUFDVixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQztRQUNGLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsYUFBYyxDQUFDLGVBQWUsQ0FBQztZQUM5QyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBSSxDQUFDLFVBQVUsQ0FBQztTQUN4QzthQUFNO1lBQ0wsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN0QjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELGlEQUFpRDtJQUNqRCwrREFBK0Q7SUFDL0QsU0FBUyxDQUFDLE1BQXlELEVBQUUsTUFBZSxJQUFJO1FBQ3RGLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QixNQUFNLEdBQUksTUFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEU7YUFBTSxJQUFJLE1BQU0sWUFBWSxRQUFRLEVBQUU7WUFDckMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixNQUFNLEdBQUksTUFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDbEUsTUFBTSxHQUFHLENBQUUsTUFBc0IsQ0FBQyxhQUFhLElBQUssTUFBbUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsRztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBYztRQUNyQixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUMsV0FBOEQsRUFBRSxJQUFZLENBQUMsRUFBRSxVQUE2QixFQUFFO1FBQ3JILE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNyRCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDbkMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1RyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDaEU7aUJBQU0sSUFBSSxNQUFNLFlBQVksWUFBWSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtnQkFDdEYsTUFBdUIsQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQzthQUNwRTtpQkFBTTtnQkFDSixNQUFzQixDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7YUFDbkQ7WUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLEVBQUU7Z0JBQ25CLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN6QjtpQkFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDekMsUUFBUSxFQUFFLENBQUM7YUFDWjtRQUNILENBQUMsQ0FBQztRQUNGLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O1lBakdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUljLE1BQU0sU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcG9seWZpbGwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgRWFzeWluZ0ZuID0gKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gbnVtYmVyO1xuXG5mdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBjYyA9IGMgLSBiO1xuICBsZXQgdHQgPSB0IC8gKGQgLyAyKTtcbiAgaWYgKHR0IDwgMSkge1xuICAgIHJldHVybiAoY2MgLyAyKSAqIHR0ICogdHQgKiB0dCArIGI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChjYyAvIDIpICogKCh0dCAtPSAyKSAqIHR0ICogdHQgKyAyKSArIGI7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOelNjcm9sbFRvT3B0aW9ucyB7XG4gIC8qKiBTY3JvbGwgY29udGFpbmVyLCBkZWZhdWx0IGFzIHdpbmRvdyAqL1xuICBlYXNpbmc/OiBFYXN5aW5nRm47XG4gIC8qKiBTY3JvbGwgZW5kIGNhbGxiYWNrICovXG4gIGNhbGxiYWNrPygpOiB2b2lkO1xuICAvKiogQW5pbWF0aW9uIGR1cmF0aW9uLCBkZWZhdWx0IGFzIDQ1MCAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTY3JvbGxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkb2M6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYzogTnpTYWZlQW55KSB7XG4gICAgdGhpcy5kb2MgPSBkb2M7XG4gIH1cblxuICAvKiogU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2Nyb2xsIGJhciBvZiBgZWxgLiAqL1xuICBzZXRTY3JvbGxUb3AoZWw6IEVsZW1lbnQgfCBXaW5kb3csIHRvcFZhbHVlOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKGVsID09PSB3aW5kb3cpIHtcbiAgICAgIHRoaXMuZG9jLmJvZHkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQhLnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZWwgYXMgRWxlbWVudCkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldCBwb3NpdGlvbiBvZiBgZWxgIGFnYWluc3Qgd2luZG93LiAqL1xuICBnZXRPZmZzZXQoZWw6IEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG4gICAgaWYgKCFlbCB8fCAhZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KSB7XG4gICAgICBjb25zdCBkb2MgPSBlbC5vd25lckRvY3VtZW50IS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICByZXQudG9wID0gcmVjdC50b3AgLSBkb2MhLmNsaWVudFRvcDtcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0IC0gZG9jIS5jbGllbnRMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQudG9wID0gcmVjdC50b3A7XG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIHNjb2xsIGJhciBvZiBgZWxgLiAqL1xuICAvLyBUT0RPOiByZW1vdmUgJ3wgV2luZG93JyBhcyB0aGUgZmFsbGJhY2sgYWxyZWFkeSBoYXBwZW5zIGhlcmVcbiAgZ2V0U2Nyb2xsKHRhcmdldD86IEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IFdpbmRvdyB8IERvY3VtZW50IHwgbnVsbCwgdG9wOiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gdG9wID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgaWYgKHRoaXMuaXNXaW5kb3codGFyZ2V0KSkge1xuICAgICAgcmVzdWx0ID0gKHRhcmdldCBhcyBXaW5kb3cpW3RvcCA/ICdwYWdlWU9mZnNldCcgOiAncGFnZVhPZmZzZXQnXTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICByZXN1bHQgPSB0YXJnZXQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG4gICAgfSBlbHNlIGlmICh0YXJnZXQpIHtcbiAgICAgIHJlc3VsdCA9ICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpW21ldGhvZF07XG4gICAgfVxuICAgIGlmICh0YXJnZXQgJiYgIXRoaXMuaXNXaW5kb3codGFyZ2V0KSAmJiB0eXBlb2YgcmVzdWx0ICE9PSAnbnVtYmVyJykge1xuICAgICAgcmVzdWx0ID0gKCh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm93bmVyRG9jdW1lbnQgfHwgKHRhcmdldCBhcyBEb2N1bWVudCkpLmRvY3VtZW50RWxlbWVudFttZXRob2RdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaXNXaW5kb3cob2JqOiBOelNhZmVBbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiA9PT0gb2JqLndpbmRvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgYGVsYCB0byBzb21lIHBvc2l0aW9uIHdpdGggYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gY29udGFpbmVyRWwgY29udGFpbmVyLCBgd2luZG93YCBieSBkZWZhdWx0XG4gICAqIEBwYXJhbSB5IFNjcm9sbCB0byBgdG9wYCwgMCBieSBkZWZhdWx0XG4gICAqL1xuICBzY3JvbGxUbyhjb250YWluZXJFbD86IEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IFdpbmRvdyB8IERvY3VtZW50IHwgbnVsbCwgeTogbnVtYmVyID0gMCwgb3B0aW9uczogTnpTY3JvbGxUb09wdGlvbnMgPSB7fSk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGNvbnRhaW5lckVsID8gY29udGFpbmVyRWwgOiB3aW5kb3c7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGwodGFyZ2V0KTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHsgZWFzaW5nLCBjYWxsYmFjaywgZHVyYXRpb24gPSA0NTAgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZnJhbWVGdW5jID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XG4gICAgICBjb25zdCBuZXh0U2Nyb2xsVG9wID0gKGVhc2luZyB8fCBlYXNlSW5PdXRDdWJpYykodGltZSA+IGR1cmF0aW9uID8gZHVyYXRpb24gOiB0aW1lLCBzY3JvbGxUb3AsIHksIGR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLmlzV2luZG93KHRhcmdldCkpIHtcbiAgICAgICAgKHRhcmdldCBhcyBXaW5kb3cpLnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCwgbmV4dFNjcm9sbFRvcCk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCB8fCB0YXJnZXQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0hUTUxEb2N1bWVudCcpIHtcbiAgICAgICAgKHRhcmdldCBhcyBIVE1MRG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBuZXh0U2Nyb2xsVG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRhcmdldCBhcyBIVE1MRWxlbWVudCkuc2Nyb2xsVG9wID0gbmV4dFNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XG4gIH1cbn1cbiJdfQ==