/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    n,
    r,
    o = {
      907: (e, t, n) => {
        n.r(t),
          n.d(t, {
            Headers: () => a,
            Request: () => s,
            Response: () => l,
            default: () => i,
            fetch: () => o,
          });
        var r = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== n.g) return n.g;
          throw new Error("unable to locate global object");
        })();
        const o = r.fetch,
          i = r.fetch.bind(r),
          a = r.Headers,
          s = r.Request,
          l = r.Response;
      },
      972: (e, t, n) => {
        n.d(t, { A: () => s });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          e.id,
          "/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  inset: 0px;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.right-2 {\n  right: 0.5rem;\n}\n.right-4 {\n  right: 1rem;\n}\n.top-2 {\n  top: 0.5rem;\n}\n.top-4 {\n  top: 1rem;\n}\n.top-\\[50\\%\\] {\n  top: 50%;\n}\n.z-50 {\n  z-index: 50;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mt-10 {\n  margin-top: 2.5rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.grid {\n  display: grid;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-11 {\n  height: 2.75rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.h-\\[100px\\] {\n  height: 100px;\n}\n.h-\\[70vh\\] {\n  height: 70vh;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-\\[100px\\] {\n  width: 100px;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.translate-x-\\[-50\\%\\] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[-50\\%\\] {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-black\\/80 {\n  background-color: rgb(0 0 0 / 0.8);\n}\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-green-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 128 61 / var(--tw-bg-opacity));\n}\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\n.bg-zinc-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(228 228 231 / var(--tw-bg-opacity));\n}\n.bg-zinc-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(82 82 91 / var(--tw-bg-opacity));\n}\n.bg-zinc-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity));\n}\n.bg-zinc-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 24 27 / var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.leading-none {\n  line-height: 1;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.text-violet-800 {\n  --tw-text-opacity: 1;\n  color: rgb(91 33 182 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.underline-offset-4 {\n  text-underline-offset: 4px;\n}\n.opacity-70 {\n  opacity: 0.7;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:ring-2:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-offset-2:focus-visible {\n  --tw-ring-offset-width: 2px;\n}\n.disabled\\:pointer-events-none:disabled {\n  pointer-events: none;\n}\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n@media (min-width: 640px) {\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:rounded-lg {\n    border-radius: 0.5rem;\n  }\n\n  .sm\\:text-left {\n    text-align: left;\n  }\n}",
          "",
        ]);
        const s = a;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (a[l] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var c = [].concat(e[u]);
                (r && a[c[0]]) ||
                  (void 0 !== i &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = i)),
                  n &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = n))
                      : (c[2] = n)),
                  o &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = o))
                      : (c[4] = "".concat(o))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      551: (e, t, n) => {
        var r = n(540),
          o = n(982);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var a = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
        }
        var c = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          p = {};
        function m(e, t, n, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(h, e) &&
                      (f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          j = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var I = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function z(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var R,
          $ = Object.assign;
        function U(e) {
          if (void 0 === R)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              R = (t && t[1]) || "";
            }
          return "\n" + R + e;
        }
        var F = !1;
        function D(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && "string" == typeof t.stack) {
              for (
                var o = t.stack.split("\n"),
                  i = r.stack.split("\n"),
                  a = o.length - 1,
                  s = i.length - 1;
                1 <= a && 0 <= s && o[a] !== i[s];

              )
                s--;
              for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== i[s]) {
                  if (1 !== a || 1 !== s)
                    do {
                      if ((a--, 0 > --s || o[a] !== i[s])) {
                        var l = "\n" + o[a].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= a && 0 <= s);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function M(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = D(e.type, !1));
            case 11:
              return (e = D(e.type.render, !1));
            case 1:
              return (e = D(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case _:
              return "Fragment";
            case x:
              return "Portal";
            case E:
              return "Profiler";
            case S:
              return "StrictMode";
            case O:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case j:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (e) {}
            }
          return null;
        }
        function G(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" == typeof t)
                return t.displayName || t.name || null;
              if ("string" == typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function W(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return $({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Y(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          Y(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return $({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ae(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var he = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (he.hasOwnProperty(e) && he[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(he).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]);
          });
        });
        var ye = $(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          _e = null,
          Se = null;
        function Ee(e) {
          if ((e = wo(e))) {
            if ("function" != typeof xe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = xo(t)), xe(e.stateNode, e.type, t));
          }
        }
        function je(e) {
          _e ? (Se ? Se.push(e) : (Se = [e])) : (_e = e);
        }
        function Ce() {
          if (_e) {
            var e = _e,
              t = Se;
            if (((Se = _e = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Oe() {}
        var Pe = !1;
        function Le(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return Te(e, t, n);
          } finally {
            (Pe = !1), (null !== _e || null !== Se) && (Oe(), Ce());
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ie = !1;
        if (c)
          try {
            var Ae = {};
            Object.defineProperty(Ae, "passive", {
              get: function () {
                Ie = !0;
              },
            }),
              window.addEventListener("test", Ae, Ae),
              window.removeEventListener("test", Ae, Ae);
          } catch (ce) {
            Ie = !1;
          }
        function ze(e, t, n, r, o, i, a, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (e) {
            this.onError(e);
          }
        }
        var Re = !1,
          $e = null,
          Ue = !1,
          Fe = null,
          De = {
            onError: function (e) {
              (Re = !0), ($e = e);
            },
          };
        function Me(e, t, n, r, o, i, a, s, l) {
          (Re = !1), ($e = null), ze.apply(De, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              !!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ge(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Be(e) !== e) throw Error(i(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return He(o), e;
                    if (a === r) return He(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var s = !1, l = o.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = o), (r = a);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = o), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = a.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = a), (r = o);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = a), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var We = o.unstable_scheduleCallback,
          Ke = o.unstable_cancelCallback,
          Je = o.unstable_shouldYield,
          Qe = o.unstable_requestPaint,
          Ye = o.unstable_now,
          Xe = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          it = null;
        var at = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            i = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var s = a & ~o;
            0 !== s ? (r = dt(s)) : 0 !== (i &= a) && (r = dt(i));
          } else 0 !== (a = n & ~o) ? (r = dt(a)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            !(t & o) &&
            ((o = r & -r) >= (i = t & -t) || (16 === o && 4194240 & i))
          )
            return t;
          if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function ht(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return !(4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - at(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - at(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 268435455 & e
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          _t,
          St,
          Et,
          jt = !1,
          Ct = [],
          Tt = null,
          Ot = null,
          Pt = null,
          Lt = new Map(),
          Nt = new Map(),
          It = [],
          At =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Rt(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function $t(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ge(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      _t(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function Dt() {
          (jt = !1),
            null !== Tt && Ut(Tt) && (Tt = null),
            null !== Ot && Ut(Ot) && (Ot = null),
            null !== Pt && Ut(Pt) && (Pt = null),
            Lt.forEach(Ft),
            Nt.forEach(Ft);
        }
        function Mt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            jt ||
              ((jt = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Dt)));
        }
        function Bt(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Ct.length) {
            Mt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Mt(Tt, e),
              null !== Ot && Mt(Ot, e),
              null !== Pt && Mt(Pt, e),
              Lt.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < It.length;
            n++
          )
            (r = It[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < It.length && null === (n = It[0]).blockedOn; )
            $t(n), null === n.blockedOn && It.shift();
        }
        var Gt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Vt(e, t, n, r) {
          var o = bt,
            i = Gt.transition;
          Gt.transition = null;
          try {
            (bt = 1), Wt(e, t, n, r);
          } finally {
            (bt = o), (Gt.transition = i);
          }
        }
        function qt(e, t, n, r) {
          var o = bt,
            i = Gt.transition;
          Gt.transition = null;
          try {
            (bt = 4), Wt(e, t, n, r);
          } finally {
            (bt = o), (Gt.transition = i);
          }
        }
        function Wt(e, t, n, r) {
          if (Ht) {
            var o = Jt(e, t, n, r);
            if (null === o) Hr(e, t, r, Kt, n), zt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Tt = Rt(Tt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Ot = Rt(Ot, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Pt = Rt(Pt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var i = o.pointerId;
                    return Lt.set(i, Rt(Lt.get(i) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (i = o.pointerId),
                      Nt.set(i, Rt(Nt.get(i) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < At.indexOf(e))) {
              for (; null !== o; ) {
                var i = wo(o);
                if (
                  (null !== i && kt(i),
                  null === (i = Jt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  i === o)
                )
                  break;
                o = i;
              }
              null !== o && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Jt(e, t, n, r) {
          if (((Kt = null), null !== (e = bo((e = ke(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ge(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            o = "value" in Yt ? Yt.value : Yt.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, i) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            $(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          dn = $({}, un, { view: 0, detail: 0 }),
          fn = on(dn),
          hn = $({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((an = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = an = 0),
                    (ln = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          pn = on(hn),
          mn = on($({}, hn, { dataTransfer: 0 })),
          gn = on($({}, dn, { relatedTarget: 0 })),
          yn = on(
            $({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = $({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(vn),
          wn = on($({}, un, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          _n = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = _n[e]) && !!t[e];
        }
        function En() {
          return Sn;
        }
        var jn = $({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = on(jn),
          Tn = on(
            $({}, hn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = on(
            $({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Pn = on(
            $({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = $({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = on(Ln),
          In = [9, 13, 27, 32],
          An = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var Rn = c && "TextEvent" in window && !zn,
          $n = c && (!An || (zn && 8 < zn && 11 >= zn)),
          Un = String.fromCharCode(32),
          Fn = !1;
        function Dn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== In.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Gn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Gn[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          je(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Wn = null;
        function Kn(e) {
          Ur(e, 0);
        }
        function Jn(e) {
          if (W(ko(e))) return e;
        }
        function Qn(e, t) {
          if ("change" === e) return t;
        }
        var Yn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" == typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Yn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Wn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn(Wn)) {
            var t = [];
            Vn(t, Wn, e, ke(e)), Le(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Wn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn(Wn);
        }
        function ir(e, t) {
          if ("click" === e) return Jn(t);
        }
        function ar(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var sr =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  i = Math.min(r.start, o);
                (r = void 0 === r.end ? i : Math.min(r.end, o)),
                  !e.extend && i > r && ((o = r), (r = i), (i = o)),
                  (o = cr(n, i));
                var a = cr(n, r);
                o &&
                  a &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== a.node ||
                    e.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" == typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && lr(vr, r)) ||
              ((vr = r),
              0 < (r = qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          _r = {},
          Sr = {};
        function Er(e) {
          if (_r[e]) return _r[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (_r[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var jr = Er("animationend"),
          Cr = Er("animationiteration"),
          Tr = Er("animationstart"),
          Or = Er("transitionend"),
          Pr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Nr(e, t) {
          Pr.set(e, t), l(t, [e]);
        }
        for (var Ir = 0; Ir < Lr.length; Ir++) {
          var Ar = Lr[Ir];
          Nr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        Nr(jr, "onAnimationEnd"),
          Nr(Cr, "onAnimationIteration"),
          Nr(Tr, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(Or, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Rr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function $r(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, s, l, u) {
              if ((Me.apply(this, arguments), Re)) {
                if (!Re) throw Error(i(198));
                var c = $e;
                (Re = !1), ($e = null), Ue || ((Ue = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = !!(4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var s = r[a],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== i && o.isPropagationStopped()))
                    break e;
                  $r(o, s, u), (i = l);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((l = (s = r[a]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && o.isPropagationStopped())
                  )
                    break e;
                  $r(o, s, u), (i = l);
                }
            }
          }
          if (Ue) throw ((e = Fe), (Ue = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Gr(t, e, 2, !1), n.add(r));
        }
        function Dr(e, t, n) {
          var r = 0;
          t && (r |= 4), Gr(n, e, r, t);
        }
        var Mr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Mr]) {
            (e[Mr] = !0),
              a.forEach(function (t) {
                "selectionchange" !== t &&
                  (Rr.has(t) || Dr(t, !1, e), Dr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Mr] || ((t[Mr] = !0), Dr("selectionchange", !1, t));
          }
        }
        function Gr(e, t, n, r) {
          switch (Qt(t)) {
            case 1:
              var o = Vt;
              break;
            case 4:
              o = qt;
              break;
            default:
              o = Wt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ie ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, o) {
          var i = r;
          if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var s = r.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var l = a.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = a.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== s; ) {
                  if (null === (a = bo(s))) return;
                  if (5 === (l = a.tag) || 6 === l) {
                    r = i = a;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = i,
              o = ke(n),
              a = [];
            e: {
              var s = Pr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = On;
                    break;
                  case jr:
                  case Cr:
                  case Tr:
                    l = yn;
                    break;
                  case Or:
                    l = Pn;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Tn;
                }
                var c = !!(4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var m = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== m &&
                      ((h = m),
                      null !== f &&
                        null != (m = Ne(p, f)) &&
                        c.push(Vr(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, o)),
                  a.push({ event: s, listeners: c }));
              }
            }
            if (!(7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (l || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? bo(u)
                          : null) &&
                        (u !== (d = Be(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = pn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : ko(l)),
                  (h = null == u ? s : ko(u)),
                  ((s = new c(m, p + "leave", l, n, o)).target = d),
                  (s.relatedTarget = h),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(f, p + "enter", u, n, o)).target = h),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, p = 0, h = c = l; h; h = Wr(h)) p++;
                    for (h = 0, m = f; m; m = Wr(m)) h++;
                    for (; 0 < p - h; ) (c = Wr(c)), p--;
                    for (; 0 < h - p; ) (f = Wr(f)), h--;
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Wr(c)), (f = Wr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Kr(a, s, l, c, !1),
                  null !== u && null !== d && Kr(a, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? ko(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Qn;
              else if (Hn(s))
                if (Yn) g = ar;
                else {
                  g = or;
                  var y = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ir);
              switch (
                (g && (g = g(e, r))
                  ? Vn(a, g, n, o)
                  : (y && y(e, s, r),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = r ? ko(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(a, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(a, n, o);
              }
              var v;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Dn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                ($n &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (v = en())
                    : ((Xt = "value" in (Yt = o) ? Yt.value : Yt.textContent),
                      (Bn = !0))),
                0 < (y = qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  a.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Mn(n)) && (b.data = v))),
                (v = Rn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!An && Dn(e, t))
                          ? ((e = en()), (Zt = Xt = Yt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return $n && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  a.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            Ur(a, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i),
              null != (i = Ne(e, n)) && r.unshift(Vr(e, i, o)),
              null != (i = Ne(e, t)) && r.push(Vr(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function Wr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, o) {
          for (var i = t._reactName, a = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              o
                ? null != (l = Ne(n, i)) && a.unshift(Vr(n, l, s))
                : o || (null != (l = Ne(n, i)) && a.push(Vr(n, l, s)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var Jr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace(Qr, "");
        }
        function Xr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" == typeof setTimeout ? setTimeout : void 0,
          oo = "function" == typeof clearTimeout ? clearTimeout : void 0,
          io = "function" == typeof Promise ? Promise : void 0,
          ao =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== io
              ? function (e) {
                  return io.resolve(null).then(e).catch(so);
                }
              : ro;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Bt(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          ho = "__reactFiber$" + fo,
          po = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          go = "__reactEvents$" + fo,
          yo = "__reactListeners$" + fo,
          vo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[ho];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[ho])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[ho])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[ho] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ko(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function xo(e) {
          return e[po] || null;
        }
        var _o = [],
          So = -1;
        function Eo(e) {
          return { current: e };
        }
        function jo(e) {
          0 > So || ((e.current = _o[So]), (_o[So] = null), So--);
        }
        function Co(e, t) {
          So++, (_o[So] = e.current), (e.current = t);
        }
        var To = {},
          Oo = Eo(To),
          Po = Eo(!1),
          Lo = To;
        function No(e, t) {
          var n = e.type.contextTypes;
          if (!n) return To;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Io(e) {
          return null != (e = e.childContextTypes);
        }
        function Ao() {
          jo(Po), jo(Oo);
        }
        function zo(e, t, n) {
          if (Oo.current !== To) throw Error(i(168));
          Co(Oo, t), Co(Po, n);
        }
        function Ro(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(i(108, G(e) || "Unknown", o));
          return $({}, n, r);
        }
        function $o(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              To),
            (Lo = Oo.current),
            Co(Oo, e),
            Co(Po, Po.current),
            !0
          );
        }
        function Uo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Ro(e, t, Lo)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              jo(Po),
              jo(Oo),
              Co(Oo, e))
            : jo(Po),
            Co(Po, n);
        }
        var Fo = null,
          Do = !1,
          Mo = !1;
        function Bo(e) {
          null === Fo ? (Fo = [e]) : Fo.push(e);
        }
        function Go() {
          if (!Mo && null !== Fo) {
            Mo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fo = null), (Do = !1);
            } catch (t) {
              throw (null !== Fo && (Fo = Fo.slice(e + 1)), We(Ze, Go), t);
            } finally {
              (bt = t), (Mo = !1);
            }
          }
          return null;
        }
        var Ho = [],
          Vo = 0,
          qo = null,
          Wo = 0,
          Ko = [],
          Jo = 0,
          Qo = null,
          Yo = 1,
          Xo = "";
        function Zo(e, t) {
          (Ho[Vo++] = Wo), (Ho[Vo++] = qo), (qo = e), (Wo = t);
        }
        function ei(e, t, n) {
          (Ko[Jo++] = Yo), (Ko[Jo++] = Xo), (Ko[Jo++] = Qo), (Qo = e);
          var r = Yo;
          e = Xo;
          var o = 32 - at(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var i = 32 - at(t) + o;
          if (30 < i) {
            var a = o - (o % 5);
            (i = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (o -= a),
              (Yo = (1 << (32 - at(t) + o)) | (n << o) | r),
              (Xo = i + e);
          } else (Yo = (1 << i) | (n << o) | r), (Xo = e);
        }
        function ti(e) {
          null !== e.return && (Zo(e, 1), ei(e, 1, 0));
        }
        function ni(e) {
          for (; e === qo; )
            (qo = Ho[--Vo]), (Ho[Vo] = null), (Wo = Ho[--Vo]), (Ho[Vo] = null);
          for (; e === Qo; )
            (Qo = Ko[--Jo]),
              (Ko[Jo] = null),
              (Xo = Ko[--Jo]),
              (Ko[Jo] = null),
              (Yo = Ko[--Jo]),
              (Ko[Jo] = null);
        }
        var ri = null,
          oi = null,
          ii = !1,
          ai = null;
        function si(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ri = e), (oi = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ri = e), (oi = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qo ? { id: Yo, overflow: Xo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ri = e),
                (oi = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ui(e) {
          return !(!(1 & e.mode) || 128 & e.flags);
        }
        function ci(e) {
          if (ii) {
            var t = oi;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (ui(e)) throw Error(i(418));
                t = uo(n.nextSibling);
                var r = ri;
                t && li(e, t)
                  ? si(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e));
              }
            } else {
              if (ui(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e);
            }
          }
        }
        function di(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ri = e;
        }
        function fi(e) {
          if (e !== ri) return !1;
          if (!ii) return di(e), (ii = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oi))
          ) {
            if (ui(e)) throw (hi(), Error(i(418)));
            for (; t; ) si(e, t), (t = uo(t.nextSibling));
          }
          if ((di(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oi = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oi = null;
            }
          } else oi = ri ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function hi() {
          for (var e = oi; e; ) e = uo(e.nextSibling);
        }
        function pi() {
          (oi = ri = null), (ii = !1);
        }
        function mi(e) {
          null === ai ? (ai = [e]) : ai.push(e);
        }
        var gi = w.ReactCurrentBatchConfig;
        function yi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = r,
                a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function vi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function bi(e) {
          return (0, e._init)(e._payload);
        }
        function wi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = $u(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === _
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" == typeof i &&
                    null !== i &&
                    i.$$typeof === N &&
                    bi(i) === t.type))
              ? (((r = o(t, n.props)).ref = yi(e, t, n)), (r.return = e), r)
              : (((r = Au(n.type, n.key, n.props, null, e.mode, r)).ref = yi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = zu(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return ((t = $u("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Au(t.type, t.key, t.props, null, e.mode, n)).ref = yi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Uu(t, e.mode, n)).return = e), t;
                case N:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = zu(t, e.mode, n, null)).return = e), t;
              vi(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== o ? null : l(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o ? u(e, t, n, r) : null;
                case x:
                  return n.key === o ? c(e, t, n, r) : null;
                case N:
                  return h(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== o ? null : d(e, t, n, r, null);
              vi(e, n);
            }
            return null;
          }
          function p(e, t, n, r, o) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return l(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case N:
                  return p(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || z(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              vi(t, r);
            }
            return null;
          }
          function m(o, i, s, l) {
            for (
              var u = null, c = null, d = i, m = (i = 0), g = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = h(o, d, s[m], l);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (i = a(y, i, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = g);
            }
            if (m === s.length) return n(o, d), ii && Zo(o, m), u;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(o, s[m], l)) &&
                  ((i = a(d, i, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ii && Zo(o, m), u;
            }
            for (d = r(o, d); m < s.length; m++)
              null !== (g = p(d, o, m, s[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (i = a(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              ii && Zo(o, m),
              u
            );
          }
          function g(o, s, l, u) {
            var c = z(l);
            if ("function" != typeof c) throw Error(i(150));
            if (null == (l = c.call(l))) throw Error(i(151));
            for (
              var d = (c = null), m = s, g = (s = 0), y = null, v = l.next();
              null !== m && !v.done;
              g++, v = l.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = h(o, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (s = a(b, s, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (v.done) return n(o, m), ii && Zo(o, g), c;
            if (null === m) {
              for (; !v.done; g++, v = l.next())
                null !== (v = f(o, v.value, u)) &&
                  ((s = a(v, s, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ii && Zo(o, g), c;
            }
            for (m = r(o, m); !v.done; g++, v = l.next())
              null !== (v = p(m, o, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (s = a(v, s, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              ii && Zo(o, g),
              c
            );
          }
          return function e(r, i, a, l) {
            if (
              ("object" == typeof a &&
                null !== a &&
                a.type === _ &&
                null === a.key &&
                (a = a.props.children),
              "object" == typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case k:
                  e: {
                    for (var u = a.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = a.type) === _) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = o(c, a.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" == typeof u &&
                            null !== u &&
                            u.$$typeof === N &&
                            bi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = o(c, a.props)).ref = yi(r, c, a)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    a.type === _
                      ? (((i = zu(a.props.children, r.mode, l, a.key)).return =
                          r),
                        (r = i))
                      : (((l = Au(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          l
                        )).ref = yi(r, i, a)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case x:
                  e: {
                    for (c = a.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === a.containerInfo &&
                          i.stateNode.implementation === a.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = o(i, a.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Uu(a, r.mode, l)).return = r), (r = i);
                  }
                  return s(r);
                case N:
                  return e(r, i, (c = a._init)(a._payload), l);
              }
              if (te(a)) return m(r, i, a, l);
              if (z(a)) return g(r, i, a, l);
              vi(r, a);
            }
            return ("string" == typeof a && "" !== a) || "number" == typeof a
              ? ((a = "" + a),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = o(i, a)).return = r), (r = i))
                  : (n(r, i), ((i = $u(a, r.mode, l)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var ki = wi(!0),
          xi = wi(!1),
          _i = Eo(null),
          Si = null,
          Ei = null,
          ji = null;
        function Ci() {
          ji = Ei = Si = null;
        }
        function Ti(e) {
          var t = _i.current;
          jo(_i), (e._currentValue = t);
        }
        function Oi(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Pi(e, t) {
          (Si = e),
            (ji = Ei = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (!!(e.lanes & t) && (bs = !0), (e.firstContext = null));
        }
        function Li(e) {
          var t = e._currentValue;
          if (ji !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Ei)
            ) {
              if (null === Si) throw Error(i(308));
              (Ei = e), (Si.dependencies = { lanes: 0, firstContext: e });
            } else Ei = Ei.next = e;
          return t;
        }
        var Ni = null;
        function Ii(e) {
          null === Ni ? (Ni = [e]) : Ni.push(e);
        }
        function Ai(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Ii(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            zi(e, r)
          );
        }
        function zi(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ri = !1;
        function $i(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ui(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fi(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Di(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & Tl)) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              zi(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ii(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            zi(e, n)
          );
        }
        function Mi(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Bi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Gi(e, t, n, r) {
          var o = e.updateQueue;
          Ri = !1;
          var i = o.firstBaseUpdate,
            a = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === a ? (i = u) : (a.next = u), (a = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== a &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = o.baseState;
            for (a = 0, c = u = l = null, s = i; ; ) {
              var f = s.lane,
                h = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = s;
                  switch (((f = t), (h = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (p = m.payload)) {
                        d = p.call(h, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (f =
                          "function" == typeof (p = m.payload)
                            ? p.call(h, d, f)
                            : p)
                      )
                        break e;
                      d = $({}, d, f);
                      break e;
                    case 2:
                      Ri = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [s]) : f.push(s));
              } else
                (h = {
                  eventTime: h,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
                  (a |= f);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (o.baseState = l),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (a |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === i && (o.shared.lanes = 0);
            (Rl |= a), (e.lanes = a), (e.memoizedState = d);
          }
        }
        function Hi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" != typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var Vi = {},
          qi = Eo(Vi),
          Wi = Eo(Vi),
          Ki = Eo(Vi);
        function Ji(e) {
          if (e === Vi) throw Error(i(174));
          return e;
        }
        function Qi(e, t) {
          switch ((Co(Ki, t), Co(Wi, e), Co(qi, Vi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          jo(qi), Co(qi, t);
        }
        function Yi() {
          jo(qi), jo(Wi), jo(Ki);
        }
        function Xi(e) {
          Ji(Ki.current);
          var t = Ji(qi.current),
            n = le(t, e.type);
          t !== n && (Co(Wi, e), Co(qi, n));
        }
        function Zi(e) {
          Wi.current === e && (jo(qi), jo(Wi));
        }
        var ea = Eo(0);
        function ta(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (128 & t.flags) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var na = [];
        function ra() {
          for (var e = 0; e < na.length; e++)
            na[e]._workInProgressVersionPrimary = null;
          na.length = 0;
        }
        var oa = w.ReactCurrentDispatcher,
          ia = w.ReactCurrentBatchConfig,
          aa = 0,
          sa = null,
          la = null,
          ua = null,
          ca = !1,
          da = !1,
          fa = 0,
          ha = 0;
        function pa() {
          throw Error(i(321));
        }
        function ma(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function ga(e, t, n, r, o, a) {
          if (
            ((aa = a),
            (sa = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (oa.current = null === e || null === e.memoizedState ? Za : es),
            (e = n(r, o)),
            da)
          ) {
            a = 0;
            do {
              if (((da = !1), (fa = 0), 25 <= a)) throw Error(i(301));
              (a += 1),
                (ua = la = null),
                (t.updateQueue = null),
                (oa.current = ts),
                (e = n(r, o));
            } while (da);
          }
          if (
            ((oa.current = Xa),
            (t = null !== la && null !== la.next),
            (aa = 0),
            (ua = la = sa = null),
            (ca = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function ya() {
          var e = 0 !== fa;
          return (fa = 0), e;
        }
        function va() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ua ? (sa.memoizedState = ua = e) : (ua = ua.next = e), ua
          );
        }
        function ba() {
          if (null === la) {
            var e = sa.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = la.next;
          var t = null === ua ? sa.memoizedState : ua.next;
          if (null !== t) (ua = t), (la = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (la = e).memoizedState,
              baseState: la.baseState,
              baseQueue: la.baseQueue,
              queue: la.queue,
              next: null,
            }),
              null === ua ? (sa.memoizedState = ua = e) : (ua = ua.next = e);
          }
          return ua;
        }
        function wa(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function ka(e) {
          var t = ba(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = la,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var s = o.next;
              (o.next = a.next), (a.next = s);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (a = o.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = a;
            do {
              var d = c.lane;
              if ((aa & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (s = r)) : (u = u.next = f),
                  (sa.lanes |= d),
                  (Rl |= d);
              }
              c = c.next;
            } while (null !== c && c !== a);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (bs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (a = o.lane), (sa.lanes |= a), (Rl |= a), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function xa(e) {
          var t = ba(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (a = e(a, s.action)), (s = s.next);
            } while (s !== o);
            sr(a, t.memoizedState) || (bs = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function _a() {}
        function Sa(e, t) {
          var n = sa,
            r = ba(),
            o = t(),
            a = !sr(r.memoizedState, o);
          if (
            (a && ((r.memoizedState = o), (bs = !0)),
            (r = r.queue),
            Ra(Ca.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              a ||
              (null !== ua && 1 & ua.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              La(9, ja.bind(null, n, r, o, t), void 0, null),
              null === Ol)
            )
              throw Error(i(349));
            30 & aa || Ea(n, t, o);
          }
          return o;
        }
        function Ea(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = sa.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (sa.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function ja(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ta(t) && Oa(e);
        }
        function Ca(e, t, n) {
          return n(function () {
            Ta(t) && Oa(e);
          });
        }
        function Ta(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Oa(e) {
          var t = zi(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Pa(e) {
          var t = va();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wa,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Ka.bind(null, sa, e)),
            [t.memoizedState, e]
          );
        }
        function La(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = sa.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (sa.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Na() {
          return ba().memoizedState;
        }
        function Ia(e, t, n, r) {
          var o = va();
          (sa.flags |= e),
            (o.memoizedState = La(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Aa(e, t, n, r) {
          var o = ba();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== la) {
            var a = la.memoizedState;
            if (((i = a.destroy), null !== r && ma(r, a.deps)))
              return void (o.memoizedState = La(t, n, i, r));
          }
          (sa.flags |= e), (o.memoizedState = La(1 | t, n, i, r));
        }
        function za(e, t) {
          return Ia(8390656, 8, e, t);
        }
        function Ra(e, t) {
          return Aa(2048, 8, e, t);
        }
        function $a(e, t) {
          return Aa(4, 2, e, t);
        }
        function Ua(e, t) {
          return Aa(4, 4, e, t);
        }
        function Fa(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Da(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            Aa(4, 4, Fa.bind(null, t, e), n)
          );
        }
        function Ma() {}
        function Ba(e, t) {
          var n = ba();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ma(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ga(e, t) {
          var n = ba();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ma(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ha(e, t, n) {
          return 21 & aa
            ? (sr(n, t) ||
                ((n = mt()), (sa.lanes |= n), (Rl |= n), (e.baseState = !0)),
              t)
            : (e.baseState && ((e.baseState = !1), (bs = !0)),
              (e.memoizedState = n));
        }
        function Va(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ia.transition;
          ia.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ia.transition = r);
          }
        }
        function qa() {
          return ba().memoizedState;
        }
        function Wa(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ja(e))
          )
            Qa(t, n);
          else if (null !== (n = Ai(e, t, n, r))) {
            nu(n, e, r, eu()), Ya(n, t, r);
          }
        }
        function Ka(e, t, n) {
          var r = tu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ja(e)) Qa(t, o);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  s = i(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), sr(s, a))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((o.next = o), Ii(t))
                      : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (e) {}
            null !== (n = Ai(e, t, o, r)) &&
              (nu(n, e, r, (o = eu())), Ya(n, t, r));
          }
        }
        function Ja(e) {
          var t = e.alternate;
          return e === sa || (null !== t && t === sa);
        }
        function Qa(e, t) {
          da = ca = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Ya(e, t, n) {
          if (4194240 & n) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var Xa = {
            readContext: Li,
            useCallback: pa,
            useContext: pa,
            useEffect: pa,
            useImperativeHandle: pa,
            useInsertionEffect: pa,
            useLayoutEffect: pa,
            useMemo: pa,
            useReducer: pa,
            useRef: pa,
            useState: pa,
            useDebugValue: pa,
            useDeferredValue: pa,
            useTransition: pa,
            useMutableSource: pa,
            useSyncExternalStore: pa,
            useId: pa,
            unstable_isNewReconciler: !1,
          },
          Za = {
            readContext: Li,
            useCallback: function (e, t) {
              return (va().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Li,
            useEffect: za,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Ia(4194308, 4, Fa.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ia(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ia(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = va();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = va();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Wa.bind(null, sa, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (va().memoizedState = e);
            },
            useState: Pa,
            useDebugValue: Ma,
            useDeferredValue: function (e) {
              return (va().memoizedState = e);
            },
            useTransition: function () {
              var e = Pa(!1),
                t = e[0];
              return (
                (e = Va.bind(null, e[1])), (va().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = sa,
                o = va();
              if (ii) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Ol)) throw Error(i(349));
                30 & aa || Ea(r, t, n);
              }
              o.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (o.queue = a),
                za(Ca.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                La(9, ja.bind(null, r, a, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = va(),
                t = Ol.identifierPrefix;
              if (ii) {
                var n = Xo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Yo & ~(1 << (32 - at(Yo) - 1))).toString(32) + n)),
                  0 < (n = fa++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ha++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Li,
            useCallback: Ba,
            useContext: Li,
            useEffect: Ra,
            useImperativeHandle: Da,
            useInsertionEffect: $a,
            useLayoutEffect: Ua,
            useMemo: Ga,
            useReducer: ka,
            useRef: Na,
            useState: function () {
              return ka(wa);
            },
            useDebugValue: Ma,
            useDeferredValue: function (e) {
              return Ha(ba(), la.memoizedState, e);
            },
            useTransition: function () {
              return [ka(wa)[0], ba().memoizedState];
            },
            useMutableSource: _a,
            useSyncExternalStore: Sa,
            useId: qa,
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Li,
            useCallback: Ba,
            useContext: Li,
            useEffect: Ra,
            useImperativeHandle: Da,
            useInsertionEffect: $a,
            useLayoutEffect: Ua,
            useMemo: Ga,
            useReducer: xa,
            useRef: Na,
            useState: function () {
              return xa(wa);
            },
            useDebugValue: Ma,
            useDeferredValue: function (e) {
              var t = ba();
              return null === la
                ? (t.memoizedState = e)
                : Ha(t, la.memoizedState, e);
            },
            useTransition: function () {
              return [xa(wa)[0], ba().memoizedState];
            },
            useMutableSource: _a,
            useSyncExternalStore: Sa,
            useId: qa,
            unstable_isNewReconciler: !1,
          };
        function ns(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = $({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rs(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : $({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var os = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              o = tu(e),
              i = Fi(r, o);
            (i.payload = t),
              null != n && (i.callback = n),
              null !== (t = Di(e, i, o)) && (nu(t, e, o, r), Mi(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              o = tu(e),
              i = Fi(r, o);
            (i.tag = 1),
              (i.payload = t),
              null != n && (i.callback = n),
              null !== (t = Di(e, i, o)) && (nu(t, e, o, r), Mi(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              o = Fi(n, r);
            (o.tag = 2),
              null != t && (o.callback = t),
              null !== (t = Di(e, o, r)) && (nu(t, e, r, n), Mi(t, e, r));
          },
        };
        function is(e, t, n, r, o, i, a) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(o, i);
        }
        function as(e, t, n) {
          var r = !1,
            o = To,
            i = t.contextType;
          return (
            "object" == typeof i && null !== i
              ? (i = Li(i))
              : ((o = Io(t) ? Lo : Oo.current),
                (i = (r = null != (r = t.contextTypes)) ? No(e, o) : To)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = os),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function ss(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && os.enqueueReplaceState(t, t.state, null);
        }
        function ls(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = {}), $i(e);
          var i = t.contextType;
          "object" == typeof i && null !== i
            ? (o.context = Li(i))
            : ((i = Io(t) ? Lo : Oo.current), (o.context = No(e, i))),
            (o.state = e.memoizedState),
            "function" == typeof (i = t.getDerivedStateFromProps) &&
              (rs(e, t, i, n), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount &&
                "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && os.enqueueReplaceState(o, o.state, null),
              Gi(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" == typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function us(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += M(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function cs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var fs = "function" == typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          ((n = Fi(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hl || ((Hl = !0), (Vl = r)), ds(0, t);
            }),
            n
          );
        }
        function ps(e, t, n) {
          (n = Fi(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                ds(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" == typeof i.componentDidCatch &&
              (n.callback = function () {
                ds(0, t),
                  "function" != typeof r &&
                    (null === ql ? (ql = new Set([this])) : ql.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function gs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, o) {
          return 1 & e.mode
            ? ((e.flags |= 65536), (e.lanes = o), e)
            : (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fi(-1, 1)).tag = 2), Di(n, t, 1))),
                  (n.lanes |= 1)),
              e);
        }
        var vs = w.ReactCurrentOwner,
          bs = !1;
        function ws(e, t, n, r) {
          t.child = null === e ? xi(t, null, n, r) : ki(t, e.child, n, r);
        }
        function ks(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            Pi(t, o),
            (r = ga(e, t, n, r, i, o)),
            (n = ya()),
            null === e || bs
              ? (ii && n && ti(t), (t.flags |= 1), ws(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Hs(e, t, o))
          );
        }
        function xs(e, t, n, r, o) {
          if (null === e) {
            var i = n.type;
            return "function" != typeof i ||
              Nu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Au(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), _s(e, t, i, r, o));
          }
          if (((i = e.child), !(e.lanes & o))) {
            var a = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(a, r) &&
              e.ref === t.ref
            )
              return Hs(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Iu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _s(e, t, n, r, o) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((bs = !1), (t.pendingProps = r = i), !(e.lanes & o)))
                return (t.lanes = e.lanes), Hs(e, t, o);
              131072 & e.flags && (bs = !0);
            }
          }
          return js(e, t, n, r, o);
        }
        function Ss(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (1 & t.mode) {
              if (!(1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Co(Il, Nl),
                  (Nl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Co(Il, Nl),
                (Nl |= r);
            } else
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Co(Il, Nl),
                (Nl |= n);
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Co(Il, Nl),
              (Nl |= r);
          return ws(e, t, o, n), t.child;
        }
        function Es(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function js(e, t, n, r, o) {
          var i = Io(n) ? Lo : Oo.current;
          return (
            (i = No(t, i)),
            Pi(t, o),
            (n = ga(e, t, n, r, i, o)),
            (r = ya()),
            null === e || bs
              ? (ii && r && ti(t), (t.flags |= 1), ws(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Hs(e, t, o))
          );
        }
        function Cs(e, t, n, r, o) {
          if (Io(n)) {
            var i = !0;
            $o(t);
          } else i = !1;
          if ((Pi(t, o), null === t.stateNode))
            Gs(e, t), as(t, n, r), ls(t, n, r, o), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              s = t.memoizedProps;
            a.props = s;
            var l = a.context,
              u = n.contextType;
            "object" == typeof u && null !== u
              ? (u = Li(u))
              : (u = No(t, (u = Io(n) ? Lo : Oo.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof a.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((s !== r || l !== u) && ss(t, a, r, u)),
              (Ri = !1);
            var f = t.memoizedState;
            (a.state = f),
              Gi(t, r, a, o),
              (l = t.memoizedState),
              s !== r || f !== l || Po.current || Ri
                ? ("function" == typeof c &&
                    (rs(t, n, c, r), (l = t.memoizedState)),
                  (s = Ri || is(t, n, s, r, f, l, u))
                    ? (d ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (a.props = r),
                  (a.state = l),
                  (a.context = u),
                  (r = s))
                : ("function" == typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Ui(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ns(t.type, s)),
              (a.props = u),
              (d = t.pendingProps),
              (f = a.context),
              "object" == typeof (l = n.contextType) && null !== l
                ? (l = Li(l))
                : (l = No(t, (l = Io(n) ? Lo : Oo.current)));
            var h = n.getDerivedStateFromProps;
            (c =
              "function" == typeof h ||
              "function" == typeof a.getSnapshotBeforeUpdate) ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((s !== d || f !== l) && ss(t, a, r, l)),
              (Ri = !1),
              (f = t.memoizedState),
              (a.state = f),
              Gi(t, r, a, o);
            var p = t.memoizedState;
            s !== d || f !== p || Po.current || Ri
              ? ("function" == typeof h &&
                  (rs(t, n, h, r), (p = t.memoizedState)),
                (u = Ri || is(t, n, u, r, f, p, l) || !1)
                  ? (c ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate &&
                        "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, p, l),
                      "function" == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof a.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = l),
                (r = u))
              : ("function" != typeof a.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ts(e, t, n, r, i, o);
        }
        function Ts(e, t, n, r, o, i) {
          Es(e, t);
          var a = !!(128 & t.flags);
          if (!r && !a) return o && Uo(t, n, !1), Hs(e, t, i);
          (r = t.stateNode), (vs.current = t);
          var s =
            a && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = ki(t, e.child, null, i)),
                (t.child = ki(t, null, s, i)))
              : ws(e, t, s, i),
            (t.memoizedState = r.state),
            o && Uo(t, n, !0),
            t.child
          );
        }
        function Os(e) {
          var t = e.stateNode;
          t.pendingContext
            ? zo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zo(0, t.context, !1),
            Qi(e, t.containerInfo);
        }
        function Ps(e, t, n, r, o) {
          return pi(), mi(o), (t.flags |= 256), ws(e, t, n, r), t.child;
        }
        var Ls,
          Ns,
          Is,
          As,
          zs = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Rs(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function $s(e, t, n) {
          var r,
            o = t.pendingProps,
            a = ea.current,
            s = !1,
            l = !!(128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && !!(2 & a)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (a |= 1),
            Co(ea, 1 & a),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (1 & t.mode
                    ? "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824)
                    : (t.lanes = 1),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      1 & o || null === s
                        ? (s = Ru(l, o, 0, null))
                        : ((s.childLanes = 0), (s.pendingProps = l)),
                      (e = zu(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Rs(n)),
                      (t.memoizedState = zs),
                      e)
                    : Us(t, l))
            );
          if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
            return (function (e, t, n, r, o, a, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fs(e, t, s, (r = cs(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = r.fallback),
                    (o = t.mode),
                    (r = Ru(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((a = zu(a, o, s, null)).flags |= 2),
                    (r.return = t),
                    (a.return = t),
                    (r.sibling = a),
                    (t.child = r),
                    1 & t.mode && ki(t, e.child, null, s),
                    (t.child.memoizedState = Rs(s)),
                    (t.memoizedState = zs),
                    a);
              if (!(1 & t.mode)) return Fs(e, t, s, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Fs(e, t, s, (r = cs((a = Error(i(419))), r, void 0)))
                );
              }
              if (((l = !!(s & e.childLanes)), bs || l)) {
                if (null !== (r = Ol)) {
                  switch (s & -s) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = o & (r.suspendedLanes | s) ? 0 : o) &&
                    o !== a.retryLane &&
                    ((a.retryLane = o), zi(e, o), nu(r, e, o, -1));
                }
                return mu(), Fs(e, t, s, (r = cs(Error(i(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = a.treeContext),
                  (oi = uo(o.nextSibling)),
                  (ri = t),
                  (ii = !0),
                  (ai = null),
                  null !== e &&
                    ((Ko[Jo++] = Yo),
                    (Ko[Jo++] = Xo),
                    (Ko[Jo++] = Qo),
                    (Yo = e.id),
                    (Xo = e.overflow),
                    (Qo = t)),
                  (t = Us(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, o, r, a, n);
          if (s) {
            (s = o.fallback), (l = t.mode), (r = (a = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              1 & l || t.child === a
                ? ((o = Iu(a, u)).subtreeFlags = 14680064 & a.subtreeFlags)
                : (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null)),
              null !== r
                ? (s = Iu(r, s))
                : ((s = zu(s, l, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              (o = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Rs(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = zs),
              o
            );
          }
          return (
            (e = (s = e.child).sibling),
            (o = Iu(s, { mode: "visible", children: o.children })),
            !(1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Us(e, t) {
          return (
            ((t = Ru(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fs(e, t, n, r) {
          return (
            null !== r && mi(r),
            ki(t, e.child, null, n),
            ((e = Us(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ds(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Oi(e.return, t, n);
        }
        function Ms(e, t, n, r, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o));
        }
        function Bs(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((ws(e, t, r.children, n), 2 & (r = ea.current)))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 128 & e.flags)
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ds(e, n, t);
                else if (19 === e.tag) Ds(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Co(ea, r), 1 & t.mode))
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ta(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Ms(t, !1, o, n, i);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ta(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ms(t, !0, n, null, i);
                break;
              case "together":
                Ms(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          else t.memoizedState = null;
          return t.child;
        }
        function Gs(e, t) {
          !(1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Rl |= t.lanes),
            !(n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Iu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Iu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vs(e, t) {
          if (!ii)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ws(e, t, n) {
          var r = t.pendingProps;
          switch ((ni(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qs(t), null;
            case 1:
            case 17:
              return Io(t.type) && Ao(), qs(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Yi(),
                jo(Po),
                jo(Oo),
                ra(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ai && (au(ai), (ai = null)))),
                Ns(e, t),
                qs(t),
                null
              );
            case 5:
              Zi(t);
              var o = Ji(Ki.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Is(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return qs(t), null;
                }
                if (((e = Ji(qi.current)), fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (((r[ho] = t), (r[po] = a), (e = !!(1 & t.mode)), n)) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < zr.length; o++) Fr(zr[o], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Q(r, a), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      oe(r, a), Fr("invalid", r);
                  }
                  for (var l in (ve(n, a), (o = null), a))
                    if (a.hasOwnProperty(l)) {
                      var u = a[l];
                      "children" === l
                        ? "string" == typeof u
                          ? r.textContent !== u &&
                            (!0 !== a.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" == typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== a.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), Z(r, a, !0);
                      break;
                    case "textarea":
                      q(r), ae(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof a.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[ho] = t),
                    (e[po] = r),
                    Ls(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < zr.length; o++) Fr(zr[o], e);
                        o = r;
                        break;
                      case "source":
                        Fr("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (o = r);
                        break;
                      case "details":
                        Fr("toggle", e), (o = r);
                        break;
                      case "input":
                        Q(e, r), (o = J(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = $({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Fr("invalid", e);
                    }
                    for (a in (ve(n, o), (u = o)))
                      if (u.hasOwnProperty(a)) {
                        var c = u[a];
                        "style" === a
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === a
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === a
                          ? "string" == typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" == typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== a &&
                            "suppressHydrationWarning" !== a &&
                            "autoFocus" !== a &&
                            (s.hasOwnProperty(a)
                              ? null != c && "onScroll" === a && Fr("scroll", e)
                              : null != c && b(e, a, c, l));
                      }
                    switch (n) {
                      case "input":
                        q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        q(e), ae(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? ne(e, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qs(t), null;
            case 6:
              if (e && null != t.stateNode) As(e, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = Ji(Ki.current)), Ji(qi.current), fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[ho] = t),
                    (a = r.nodeValue !== n) && null !== (e = ri))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, !!(1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, !!(1 & e.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[ho] = t),
                    (t.stateNode = r);
              }
              return qs(t), null;
            case 13:
              if (
                (jo(ea),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (ii && null !== oi && 1 & t.mode && !(128 & t.flags))
                  hi(), pi(), (t.flags |= 98560), (a = !1);
                else if (((a = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(i(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(i(317));
                    a[ho] = t;
                  } else
                    pi(),
                      !(128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qs(t), (a = !1);
                } else null !== ai && (au(ai), (ai = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 128 & t.flags
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    1 & t.mode &&
                      (null === e || 1 & ea.current
                        ? 0 === Al && (Al = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qs(t),
                  null);
            case 4:
              return (
                Yi(),
                Ns(e, t),
                null === e && Br(t.stateNode.containerInfo),
                qs(t),
                null
              );
            case 10:
              return Ti(t.type._context), qs(t), null;
            case 19:
              if ((jo(ea), null === (a = t.memoizedState))) return qs(t), null;
              if (((r = !!(128 & t.flags)), null === (l = a.rendering)))
                if (r) Vs(a, !1);
                else {
                  if (0 !== Al || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ta(e))) {
                        for (
                          t.flags |= 128,
                            Vs(a, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((a = n).flags &= 14680066),
                            null === (l = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = e),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = l.childLanes),
                                (a.lanes = l.lanes),
                                (a.child = l.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = l.memoizedProps),
                                (a.memoizedState = l.memoizedState),
                                (a.updateQueue = l.updateQueue),
                                (a.type = l.type),
                                (e = l.dependencies),
                                (a.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Co(ea, (1 & ea.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    Ye() > Bl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vs(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ta(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vs(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !l.alternate &&
                        !ii)
                    )
                      return qs(t), null;
                  } else
                    2 * Ye() - a.renderingStartTime > Bl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vs(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = a.last) ? (n.sibling = l) : (t.child = l),
                    (a.last = l));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = ea.current),
                  Co(ea, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qs(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 1 & t.mode
                  ? !!(1073741824 & Nl) &&
                    (qs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qs(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Ks(e, t) {
          switch ((ni(t), t.tag)) {
            case 1:
              return (
                Io(t.type) && Ao(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Yi(),
                jo(Po),
                jo(Oo),
                ra(),
                65536 & (e = t.flags) && !(128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zi(t), null;
            case 13:
              if (
                (jo(ea),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return jo(ea), null;
            case 4:
              return Yi(), null;
            case 10:
              return Ti(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ls = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ns = function () {}),
          (Is = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), Ji(qi.current);
              var i,
                a = null;
              switch (n) {
                case "input":
                  (o = J(e, o)), (r = J(e, r)), (a = []);
                  break;
                case "select":
                  (o = $({}, o, { value: void 0 })),
                    (r = $({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (a = []);
                  break;
                default:
                  "function" != typeof o.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var l = o[c];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? a || (a = [])
                        : (a = a || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          l[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (a || (a = []), a.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (a = a || []).push(c, u))
                      : "children" === c
                      ? ("string" != typeof u && "number" != typeof u) ||
                        (a = a || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            a || l === u || (a = []))
                          : (a = a || []).push(c, u));
              }
              n && (a = a || []).push("style", n);
              var c = a;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (As = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Js = !1,
          Qs = !1,
          Ys = "function" == typeof WeakSet ? WeakSet : Set,
          Xs = null;
        function Zs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                Su(e, t, n);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (n) {
            Su(e, t, n);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), void 0 !== i && el(t, n, i);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ol(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[ho],
              delete t[po],
              delete t[go],
              delete t[yo],
              delete t[vo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function al(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || al(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var cl = null,
          dl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (it && "function" == typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(ot, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              Qs || Zs(n, t);
            case 6:
              var r = cl,
                o = dl;
              (cl = null),
                fl(e, t, n),
                (dl = o),
                null !== (cl = r) &&
                  (dl
                    ? ((e = cl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cl.removeChild(n.stateNode));
              break;
            case 18:
              null !== cl &&
                (dl
                  ? ((e = cl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lo(e.parentNode, n)
                      : 1 === e.nodeType && lo(e, n),
                    Bt(e))
                  : lo(cl, n.stateNode));
              break;
            case 4:
              (r = cl),
                (o = dl),
                (cl = n.stateNode.containerInfo),
                (dl = !0),
                fl(e, t, n),
                (cl = r),
                (dl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Qs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var i = o,
                    a = i.destroy;
                  (i = i.tag),
                    void 0 !== a && (2 & i || 4 & i) && el(n, t, a),
                    (o = o.next);
                } while (o !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !Qs &&
                (Zs(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  Su(n, t, e);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Qs = (r = Qs) || null !== n.memoizedState),
                  fl(e, t, n),
                  (Qs = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function pl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ys()),
              t.forEach(function (t) {
                var r = Tu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var a = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (cl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (cl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === cl) throw Error(i(160));
                hl(a, s, o), (cl = null), (dl = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (e) {
                Su(o, t, e);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), yl(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (t) {
                  Su(e, e.return, t);
                }
                try {
                  nl(5, e, e.return);
                } catch (t) {
                  Su(e, e.return, t);
                }
              }
              break;
            case 1:
              ml(t, e), yl(e), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                yl(e),
                512 & r && null !== n && Zs(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  fe(o, "");
                } catch (t) {
                  Su(e, e.return, t);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var a = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : a,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === a.type &&
                      null != a.name &&
                      Y(o, a),
                      be(l, s);
                    var c = be(l, a);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? ge(o, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(o, f)
                        : "children" === d
                        ? fe(o, f)
                        : b(o, d, f, c);
                    }
                    switch (l) {
                      case "input":
                        X(o, a);
                        break;
                      case "textarea":
                        ie(o, a);
                        break;
                      case "select":
                        var h = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var p = a.value;
                        null != p
                          ? ne(o, !!a.multiple, p, !1)
                          : h !== !!a.multiple &&
                            (null != a.defaultValue
                              ? ne(o, !!a.multiple, a.defaultValue, !0)
                              : ne(o, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    o[po] = a;
                  } catch (t) {
                    Su(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (o = e.stateNode), (a = e.memoizedProps);
                try {
                  o.nodeValue = a;
                } catch (t) {
                  Su(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (t) {
                  Su(e, e.return, t);
                }
              break;
            case 4:
            default:
              ml(t, e), yl(e);
              break;
            case 13:
              ml(t, e),
                yl(e),
                8192 & (o = e.child).flags &&
                  ((a = null !== o.memoizedState),
                  (o.stateNode.isHidden = a),
                  !a ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Ml = Ye())),
                4 & r && pl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Qs = (c = Qs) || d), ml(t, e), (Qs = c))
                  : ml(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 1 & e.mode)
                )
                  for (Xs = e, d = e.child; null !== d; ) {
                    for (f = Xs = d; null !== Xs; ) {
                      switch (((p = (h = Xs).child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, h, h.return);
                          break;
                        case 1:
                          Zs(h, h.return);
                          var m = h.stateNode;
                          if ("function" == typeof m.componentWillUnmount) {
                            (r = h), (n = h.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (e) {
                              Su(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          Zs(h, h.return);
                          break;
                        case 22:
                          if (null !== h.memoizedState) {
                            kl(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = h), (Xs = p)) : kl(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          c
                            ? "function" == typeof (a = o.style).setProperty
                              ? a.setProperty("display", "none", "important")
                              : (a.display = "none")
                            : ((l = f.stateNode),
                              (s =
                                null != (u = f.memoizedProps.style) &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (t) {
                        Su(e, e.return, t);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (t) {
                        Su(e, e.return, t);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), yl(e), 4 & r && pl(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (al(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ""), (r.flags &= -33)),
                    ul(e, sl(e), o);
                  break;
                case 3:
                case 4:
                  var a = r.stateNode.containerInfo;
                  ll(e, sl(e), a);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (t) {
              Su(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vl(e, t, n) {
          (Xs = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = !!(1 & e.mode); null !== Xs; ) {
            var o = Xs,
              i = o.child;
            if (22 === o.tag && r) {
              var a = null !== o.memoizedState || Js;
              if (!a) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Qs;
                s = Js;
                var u = Qs;
                if (((Js = a), (Qs = l) && !u))
                  for (Xs = o; null !== Xs; )
                    (l = (a = Xs).child),
                      22 === a.tag && null !== a.memoizedState
                        ? xl(o)
                        : null !== l
                        ? ((l.return = a), (Xs = l))
                        : xl(o);
                for (; null !== i; ) (Xs = i), bl(i, t, n), (i = i.sibling);
                (Xs = o), (Js = s), (Qs = u);
              }
              wl(e);
            } else
              8772 & o.subtreeFlags && null !== i
                ? ((i.return = o), (Xs = i))
                : wl(e);
          }
        }
        function wl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (8772 & t.flags) {
              var n = t.alternate;
              try {
                if (8772 & t.flags)
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qs || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Qs)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ns(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && Hi(t, a, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Hi(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Bt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Qs || (512 & t.flags && ol(t));
              } catch (e) {
                Su(t, t.return, e);
              }
            }
            if (t === e) {
              Xs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function kl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (t === e) {
              Xs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function xl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (e) {
                    Su(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      Su(t, o, e);
                    }
                  }
                  var i = t.return;
                  try {
                    ol(t);
                  } catch (e) {
                    Su(t, i, e);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    ol(t);
                  } catch (e) {
                    Su(t, a, e);
                  }
              }
            } catch (e) {
              Su(t, t.return, e);
            }
            if (t === e) {
              Xs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Xs = s);
              break;
            }
            Xs = t.return;
          }
        }
        var _l,
          Sl = Math.ceil,
          El = w.ReactCurrentDispatcher,
          jl = w.ReactCurrentOwner,
          Cl = w.ReactCurrentBatchConfig,
          Tl = 0,
          Ol = null,
          Pl = null,
          Ll = 0,
          Nl = 0,
          Il = Eo(0),
          Al = 0,
          zl = null,
          Rl = 0,
          $l = 0,
          Ul = 0,
          Fl = null,
          Dl = null,
          Ml = 0,
          Bl = 1 / 0,
          Gl = null,
          Hl = !1,
          Vl = null,
          ql = null,
          Wl = !1,
          Kl = null,
          Jl = 0,
          Ql = 0,
          Yl = null,
          Xl = -1,
          Zl = 0;
        function eu() {
          return 6 & Tl ? Ye() : -1 !== Xl ? Xl : (Xl = Ye());
        }
        function tu(e) {
          return 1 & e.mode
            ? 2 & Tl && 0 !== Ll
              ? Ll & -Ll
              : null !== gi.transition
              ? (0 === Zl && (Zl = mt()), Zl)
              : 0 !== (e = bt)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Qt(e.type))
            : 1;
        }
        function nu(e, t, n, r) {
          if (50 < Ql) throw ((Ql = 0), (Yl = null), Error(i(185)));
          yt(e, n, r),
            (2 & Tl && e === Ol) ||
              (e === Ol && (!(2 & Tl) && ($l |= n), 4 === Al && su(e, Ll)),
              ru(e, r),
              1 === n &&
                0 === Tl &&
                !(1 & t.mode) &&
                ((Bl = Ye() + 500), Do && Go()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var a = 31 - at(i),
                s = 1 << a,
                l = o[a];
              -1 === l
                ? (s & n && !(s & r)) || (o[a] = ht(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Ol ? Ll : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Do = !0), Bo(e);
                  })(lu.bind(null, e))
                : Bo(lu.bind(null, e)),
                ao(function () {
                  !(6 & Tl) && Go();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ou(e, t) {
          if (((Xl = -1), (Zl = 0), 6 & Tl)) throw Error(i(327));
          var n = e.callbackNode;
          if (xu() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ol ? Ll : 0);
          if (0 === r) return null;
          if (30 & r || r & e.expiredLanes || t) t = gu(e, r);
          else {
            t = r;
            var o = Tl;
            Tl |= 2;
            var a = pu();
            for (
              (Ol === e && Ll === t) ||
              ((Gl = null), (Bl = Ye() + 500), fu(e, t));
              ;

            )
              try {
                vu();
                break;
              } catch (t) {
                hu(e, t);
              }
            Ci(),
              (El.current = a),
              (Tl = o),
              null !== Pl ? (t = 0) : ((Ol = null), (Ll = 0), (t = Al));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = pt(e)) && ((r = o), (t = iu(e, o))),
              1 === t)
            )
              throw ((n = zl), fu(e, 0), su(e, r), ru(e, Ye()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((o = e.current.alternate),
                !(
                  30 & r ||
                  (function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              i = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(i(), o)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) ||
                  ((t = gu(e, r)),
                  2 === t &&
                    ((a = pt(e)), 0 !== a && ((r = a), (t = iu(e, a)))),
                  1 !== t)
                ))
              )
                throw ((n = zl), fu(e, 0), su(e, r), ru(e, Ye()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  ku(e, Dl, Gl);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Ml + 500 - Ye()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(ku.bind(null, e, Dl, Gl), t);
                    break;
                  }
                  ku(e, Dl, Gl);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var s = 31 - at(r);
                    (a = 1 << s), (s = t[s]) > o && (o = s), (r &= ~a);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Sl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(ku.bind(null, e, Dl, Gl), r);
                    break;
                  }
                  ku(e, Dl, Gl);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ru(e, Ye()), e.callbackNode === n ? ou.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Fl;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Dl), (Dl = n), null !== t && au(t)),
            e
          );
        }
        function au(e) {
          null === Dl ? (Dl = e) : Dl.push.apply(Dl, e);
        }
        function su(e, t) {
          for (
            t &= ~Ul,
              t &= ~$l,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - at(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lu(e) {
          if (6 & Tl) throw Error(i(327));
          xu();
          var t = ft(e, 0);
          if (!(1 & t)) return ru(e, Ye()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = zl), fu(e, 0), su(e, t), ru(e, Ye()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Dl, Gl),
            ru(e, Ye()),
            null
          );
        }
        function uu(e, t) {
          var n = Tl;
          Tl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Tl = n) && ((Bl = Ye() + 500), Do && Go());
          }
        }
        function cu(e) {
          null !== Kl && 0 === Kl.tag && !(6 & Tl) && xu();
          var t = Tl;
          Tl |= 1;
          var n = Cl.transition,
            r = bt;
          try {
            if (((Cl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Cl.transition = n), !(6 & (Tl = t)) && Go();
          }
        }
        function du() {
          (Nl = Il.current), jo(Il);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Pl))
            for (n = Pl.return; null !== n; ) {
              var r = n;
              switch ((ni(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && Ao();
                  break;
                case 3:
                  Yi(), jo(Po), jo(Oo), ra();
                  break;
                case 5:
                  Zi(r);
                  break;
                case 4:
                  Yi();
                  break;
                case 13:
                case 19:
                  jo(ea);
                  break;
                case 10:
                  Ti(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ol = e),
            (Pl = e = Iu(e.current, null)),
            (Ll = Nl = t),
            (Al = 0),
            (zl = null),
            (Ul = $l = Rl = 0),
            (Dl = Fl = null),
            null !== Ni)
          ) {
            for (t = 0; t < Ni.length; t++)
              if (null !== (r = (n = Ni[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  i = n.pending;
                if (null !== i) {
                  var a = i.next;
                  (i.next = o), (r.next = a);
                }
                n.pending = r;
              }
            Ni = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Pl;
            try {
              if ((Ci(), (oa.current = Xa), ca)) {
                for (var r = sa.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ca = !1;
              }
              if (
                ((aa = 0),
                (ua = la = sa = null),
                (da = !1),
                (fa = 0),
                (jl.current = null),
                null === n || null === n.return)
              ) {
                (Al = 1), (zl = t), (Pl = null);
                break;
              }
              e: {
                var a = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Ll),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    f = d.tag;
                  if (!(1 & d.mode || (0 !== f && 11 !== f && 15 !== f))) {
                    var h = d.alternate;
                    h
                      ? ((d.updateQueue = h.updateQueue),
                        (d.memoizedState = h.memoizedState),
                        (d.lanes = h.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = gs(s);
                  if (null !== p) {
                    (p.flags &= -257),
                      ys(p, s, l, 0, t),
                      1 & p.mode && ms(a, c, t),
                      (u = c);
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (!(1 & t)) {
                    ms(a, c, t), mu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ii && 1 & l.mode) {
                  var y = gs(s);
                  if (null !== y) {
                    !(65536 & y.flags) && (y.flags |= 256),
                      ys(y, s, l, 0, t),
                      mi(us(u, l));
                    break e;
                  }
                }
                (a = u = us(u, l)),
                  4 !== Al && (Al = 2),
                  null === Fl ? (Fl = [a]) : Fl.push(a),
                  (a = s);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Bi(a, hs(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var v = a.type,
                        b = a.stateNode;
                      if (
                        !(
                          128 & a.flags ||
                          ("function" != typeof v.getDerivedStateFromError &&
                            (null === b ||
                              "function" != typeof b.componentDidCatch ||
                              (null !== ql && ql.has(b))))
                        )
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          Bi(a, ps(a, l, t));
                        break e;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              wu(n);
            } catch (e) {
              (t = e), Pl === n && null !== n && (Pl = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var e = El.current;
          return (El.current = Xa), null === e ? Xa : e;
        }
        function mu() {
          (0 !== Al && 3 !== Al && 2 !== Al) || (Al = 4),
            null === Ol ||
              (!(268435455 & Rl) && !(268435455 & $l)) ||
              su(Ol, Ll);
        }
        function gu(e, t) {
          var n = Tl;
          Tl |= 2;
          var r = pu();
          for ((Ol === e && Ll === t) || ((Gl = null), fu(e, t)); ; )
            try {
              yu();
              break;
            } catch (t) {
              hu(e, t);
            }
          if ((Ci(), (Tl = n), (El.current = r), null !== Pl))
            throw Error(i(261));
          return (Ol = null), (Ll = 0), Al;
        }
        function yu() {
          for (; null !== Pl; ) bu(Pl);
        }
        function vu() {
          for (; null !== Pl && !Je(); ) bu(Pl);
        }
        function bu(e) {
          var t = _l(e.alternate, e, Nl);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Pl = t),
            (jl.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 32768 & t.flags)) {
              if (null !== (n = Ks(n, t)))
                return (n.flags &= 32767), void (Pl = n);
              if (null === e) return (Al = 6), void (Pl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            } else if (null !== (n = Ws(n, t, Nl))) return void (Pl = n);
            if (null !== (t = t.sibling)) return void (Pl = t);
            Pl = t = e;
          } while (null !== t);
          0 === Al && (Al = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            o = Cl.transition;
          try {
            (Cl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xu();
                } while (null !== Kl);
                if (6 & Tl) throw Error(i(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var a = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - at(n),
                        i = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
                    }
                  })(e, a),
                  e === Ol && ((Pl = Ol = null), (Ll = 0)),
                  (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
                    Wl ||
                    ((Wl = !0),
                    Ou(tt, function () {
                      return xu(), null;
                    })),
                  (a = !!(15990 & n.flags)),
                  !!(15990 & n.subtreeFlags) || a)
                ) {
                  (a = Cl.transition), (Cl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Tl;
                  (Tl |= 4),
                    (jl.current = null),
                    (function (e, t) {
                      if (((eo = Ht), hr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                h = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (l = s + o),
                                    f !== a ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (h = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (h === n && ++c === o && (l = s),
                                    h === a && ++d === r && (u = s),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  h = (f = h).parentNode;
                                }
                                f = p;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Xs = t;
                        null !== Xs;

                      )
                        if (
                          ((e = (t = Xs).child),
                          1028 & t.subtreeFlags && null !== e)
                        )
                          (e.return = t), (Xs = e);
                        else
                          for (; null !== Xs; ) {
                            t = Xs;
                            try {
                              var m = t.alternate;
                              if (1024 & t.flags)
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ns(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (e) {
                              Su(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xs = e);
                              break;
                            }
                            Xs = t.return;
                          }
                      (m = tl), (tl = !1);
                    })(e, n),
                    gl(n, e),
                    pr(to),
                    (Ht = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    vl(n, e, o),
                    Qe(),
                    (Tl = l),
                    (bt = s),
                    (Cl.transition = a);
                } else e.current = n;
                if (
                  (Wl && ((Wl = !1), (Kl = e), (Jl = o)),
                  (a = e.pendingLanes),
                  0 === a && (ql = null),
                  (function (e) {
                    if (it && "function" == typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          !(128 & ~e.current.flags)
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  ru(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Hl) throw ((Hl = !1), (e = Vl), (Vl = null), e);
                !!(1 & Jl) && 0 !== e.tag && xu(),
                  (a = e.pendingLanes),
                  1 & a ? (e === Yl ? Ql++ : ((Ql = 0), (Yl = e))) : (Ql = 0),
                  Go();
              })(e, t, n, r);
          } finally {
            (Cl.transition = o), (bt = r);
          }
          return null;
        }
        function xu() {
          if (null !== Kl) {
            var e = wt(Jl),
              t = Cl.transition,
              n = bt;
            try {
              if (((Cl.transition = null), (bt = 16 > e ? 16 : e), null === Kl))
                var r = !1;
              else {
                if (((e = Kl), (Kl = null), (Jl = 0), 6 & Tl))
                  throw Error(i(331));
                var o = Tl;
                for (Tl |= 4, Xs = e.current; null !== Xs; ) {
                  var a = Xs,
                    s = a.child;
                  if (16 & Xs.flags) {
                    var l = a.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Xs = c; null !== Xs; ) {
                          var d = Xs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, a);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Xs = f);
                          else
                            for (; null !== Xs; ) {
                              var h = (d = Xs).sibling,
                                p = d.return;
                              if ((il(d), d === c)) {
                                Xs = null;
                                break;
                              }
                              if (null !== h) {
                                (h.return = p), (Xs = h);
                                break;
                              }
                              Xs = p;
                            }
                        }
                      }
                      var m = a.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Xs = a;
                    }
                  }
                  if (2064 & a.subtreeFlags && null !== s)
                    (s.return = a), (Xs = s);
                  else
                    e: for (; null !== Xs; ) {
                      if (2048 & (a = Xs).flags)
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, a, a.return);
                        }
                      var v = a.sibling;
                      if (null !== v) {
                        (v.return = a.return), (Xs = v);
                        break e;
                      }
                      Xs = a.return;
                    }
                }
                var b = e.current;
                for (Xs = b; null !== Xs; ) {
                  var w = (s = Xs).child;
                  if (2064 & s.subtreeFlags && null !== w)
                    (w.return = s), (Xs = w);
                  else
                    e: for (s = b; null !== Xs; ) {
                      if (2048 & (l = Xs).flags)
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (e) {
                          Su(l, l.return, e);
                        }
                      if (l === s) {
                        Xs = null;
                        break e;
                      }
                      var k = l.sibling;
                      if (null !== k) {
                        (k.return = l.return), (Xs = k);
                        break e;
                      }
                      Xs = l.return;
                    }
                }
                if (
                  ((Tl = o),
                  Go(),
                  it && "function" == typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(ot, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Cl.transition = t);
            }
          }
          return !1;
        }
        function _u(e, t, n) {
          (e = Di(e, (t = hs(0, (t = us(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (yt(e, 1, t), ru(e, t));
        }
        function Su(e, t, n) {
          if (3 === e.tag) _u(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _u(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === ql || !ql.has(r)))
                ) {
                  (t = Di(t, (e = ps(t, (e = us(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (yt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ol === e &&
              (Ll & n) === n &&
              (4 === Al ||
              (3 === Al && (130023424 & Ll) === Ll && 500 > Ye() - Ml)
                ? fu(e, 0)
                : (Ul |= n)),
            ru(e, t);
        }
        function ju(e, t) {
          0 === t &&
            (1 & e.mode
              ? ((t = ct), !(130023424 & (ct <<= 1)) && (ct = 4194304))
              : (t = 1));
          var n = eu();
          null !== (e = zi(e, t)) && (yt(e, t, n), ru(e, n));
        }
        function Cu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), ju(e, n);
        }
        function Tu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), ju(e, n);
        }
        function Ou(e, t) {
          return We(e, t);
        }
        function Pu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, n, r) {
          return new Pu(e, t, n, r);
        }
        function Nu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Iu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Au(e, t, n, r, o, a) {
          var s = 2;
          if (((r = e), "function" == typeof e)) Nu(e) && (s = 1);
          else if ("string" == typeof e) s = 5;
          else
            e: switch (e) {
              case _:
                return zu(n.children, o, a, t);
              case S:
                (s = 8), (o |= 8);
                break;
              case E:
                return (
                  ((e = Lu(12, n, t, 2 | o)).elementType = E), (e.lanes = a), e
                );
              case O:
                return (
                  ((e = Lu(13, n, t, o)).elementType = O), (e.lanes = a), e
                );
              case P:
                return (
                  ((e = Lu(19, n, t, o)).elementType = P), (e.lanes = a), e
                );
              case I:
                return Ru(n, o, a, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case j:
                      s = 10;
                      break e;
                    case C:
                      s = 9;
                      break e;
                    case T:
                      s = 11;
                      break e;
                    case L:
                      s = 14;
                      break e;
                    case N:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(s, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function zu(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function Ru(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = I),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function $u(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function Uu(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Du(e, t, n, r, o, i, a, s, l) {
          return (
            (e = new Fu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Lu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            $i(i),
            e
          );
        }
        function Mu(e) {
          if (!e) return To;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Io(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Io(n)) return Ro(e, n, t);
          }
          return t;
        }
        function Bu(e, t, n, r, o, i, a, s, l) {
          return (
            ((e = Du(n, r, !0, e, 0, i, 0, s, l)).context = Mu(null)),
            (n = e.current),
            ((i = Fi((r = eu()), (o = tu(n)))).callback = null != t ? t : null),
            Di(n, i, o),
            (e.current.lanes = o),
            yt(e, o, r),
            ru(e, r),
            e
          );
        }
        function Gu(e, t, n, r) {
          var o = t.current,
            i = eu(),
            a = tu(o);
          return (
            (n = Mu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fi(i, a)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Di(o, t, a)) && (nu(e, o, a, i), Mi(e, o, a)),
            a
          );
        }
        function Hu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Vu(e, t), (e = e.alternate) && Vu(e, t);
        }
        _l = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Po.current) bs = !0;
            else {
              if (!(e.lanes & n || 128 & t.flags))
                return (
                  (bs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Os(t), pi();
                        break;
                      case 5:
                        Xi(t);
                        break;
                      case 1:
                        Io(t.type) && $o(t);
                        break;
                      case 4:
                        Qi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Co(_i, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Co(ea, 1 & ea.current), (t.flags |= 128), null)
                            : n & t.child.childLanes
                            ? $s(e, t, n)
                            : (Co(ea, 1 & ea.current),
                              null !== (e = Hs(e, t, n)) ? e.sibling : null);
                        Co(ea, 1 & ea.current);
                        break;
                      case 19:
                        if (((r = !!(n & t.childLanes)), 128 & e.flags)) {
                          if (r) return Bs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Co(ea, ea.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ss(e, t, n);
                    }
                    return Hs(e, t, n);
                  })(e, t, n)
                );
              bs = !!(131072 & e.flags);
            }
          else (bs = !1), ii && 1048576 & t.flags && ei(t, Wo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Gs(e, t), (e = t.pendingProps);
              var o = No(t, Oo.current);
              Pi(t, n), (o = ga(null, t, r, e, o, n));
              var a = ya();
              return (
                (t.flags |= 1),
                "object" == typeof o &&
                null !== o &&
                "function" == typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Io(r) ? ((a = !0), $o(t)) : (a = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    $i(t),
                    (o.updater = os),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    ls(t, r, e, n),
                    (t = Ts(null, t, r, !0, a, n)))
                  : ((t.tag = 0),
                    ii && a && ti(t),
                    ws(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Gs(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Nu(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ns(r, e)),
                  o)
                ) {
                  case 0:
                    t = js(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Cs(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xs(null, t, r, ns(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                js(e, t, r, (o = t.elementType === r ? o : ns(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Cs(e, t, r, (o = t.elementType === r ? o : ns(r, o)), n)
              );
            case 3:
              e: {
                if ((Os(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (o = (a = t.memoizedState).element),
                  Ui(e, t),
                  Gi(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Ps(e, t, r, n, (o = us(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Ps(e, t, r, n, (o = us(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    oi = uo(t.stateNode.containerInfo.firstChild),
                      ri = t,
                      ii = !0,
                      ai = null,
                      n = xi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === o)) {
                    t = Hs(e, t, n);
                    break e;
                  }
                  ws(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xi(t),
                null === e && ci(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (s = o.children),
                no(r, o)
                  ? (s = null)
                  : null !== a && no(r, a) && (t.flags |= 32),
                Es(e, t),
                ws(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return $s(e, t, n);
            case 4:
              return (
                Qi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ki(t, null, r, n)) : ws(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                ks(e, t, r, (o = t.elementType === r ? o : ns(r, o)), n)
              );
            case 7:
              return ws(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ws(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (a = t.memoizedProps),
                  (s = o.value),
                  Co(_i, r._currentValue),
                  (r._currentValue = s),
                  null !== a)
                )
                  if (sr(a.value, s)) {
                    if (a.children === o.children && !Po.current) {
                      t = Hs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var l = a.dependencies;
                      if (null !== l) {
                        s = a.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === a.tag) {
                              (u = Fi(-1, n & -n)).tag = 2;
                              var c = a.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (a.lanes |= n),
                              null !== (u = a.alternate) && (u.lanes |= n),
                              Oi(a.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === a.tag)
                        s = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (s = a.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Oi(s, n, t),
                          (s = a.sibling);
                      } else s = a.child;
                      if (null !== s) s.return = a;
                      else
                        for (s = a; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (a = s.sibling)) {
                            (a.return = s.return), (s = a);
                            break;
                          }
                          s = s.return;
                        }
                      a = s;
                    }
                ws(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Pi(t, n),
                (r = r((o = Li(o)))),
                (t.flags |= 1),
                ws(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = ns((r = t.type), t.pendingProps)),
                xs(e, t, r, (o = ns(r.type, o)), n)
              );
            case 15:
              return _s(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ns(r, o)),
                Gs(e, t),
                (t.tag = 1),
                Io(r) ? ((e = !0), $o(t)) : (e = !1),
                Pi(t, n),
                as(t, r, o),
                ls(t, r, o, n),
                Ts(null, t, r, !0, e, n)
              );
            case 19:
              return Bs(e, t, n);
            case 22:
              return Ss(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Wu =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Qu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xu() {}
        function Zu(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var a = i;
            if ("function" == typeof o) {
              var s = o;
              o = function () {
                var e = Hu(a);
                s.call(e);
              };
            }
            Gu(t, a, e, o);
          } else
            a = (function (e, t, n, r, o) {
              if (o) {
                if ("function" == typeof r) {
                  var i = r;
                  r = function () {
                    var e = Hu(a);
                    i.call(e);
                  };
                }
                var a = Bu(t, r, e, 0, null, !1, 0, "", Xu);
                return (
                  (e._reactRootContainer = a),
                  (e[mo] = a.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  a
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" == typeof r) {
                var s = r;
                r = function () {
                  var e = Hu(l);
                  s.call(e);
                };
              }
              var l = Du(e, 0, !1, null, 0, !1, 0, "", Xu);
              return (
                (e._reactRootContainer = l),
                (e[mo] = l.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Gu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, o, r);
          return Hu(a);
        }
        (Ju.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Gu(e, t, null, null);
          }),
          (Ju.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Gu(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < It.length && 0 !== t && t < It[n].priority;
                n++
              );
              It.splice(n, 0, e), 0 === n && $t(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    ru(t, Ye()),
                    !(6 & Tl) && ((Bl = Ye() + 500), Go()));
                }
                break;
              case 13:
                cu(function () {
                  var t = zi(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = zi(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              qu(e, 134217728);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = zi(e, t);
              if (null !== n) nu(n, e, t, eu());
              qu(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = xo(r);
                      if (!o) throw Error(i(90));
                      W(r), X(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = uu),
          (Oe = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [wo, ko, xo, je, Ce, uu],
          },
          tc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (ot = rc.inject(nc)), (it = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Qu(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Qu(e)) throw Error(i(299));
            var n = !1,
              r = "",
              o = Wu;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Du(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yu(t)) throw Error(i(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Qu(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              a = "",
              s = Wu;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Bu(t, null, e, 1, null != n ? n : null, o, 0, a, s)),
              (e[mo] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yu(t)) throw Error(i(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      338: (e, t, n) => {
        var r = n(961);
        (t.H = r.createRoot), r.hydrateRoot;
      },
      961: (e, t, n) => {
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(551));
      },
      20: (e, t, n) => {
        var r = n(540),
          o = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            a.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: s.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      287: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          _ = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var o,
            i = {},
            a = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              x.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: s,
            props: i,
            _owner: _.current,
          };
        }
        function j(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function T(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, o, i, a) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = e))),
              (e = "" === i ? "." + T(l, 0) : i),
              k(a)
                ? ((o = ""),
                  null != e && (o = e.replace(C, "$&/") + "/"),
                  O(a, t, o, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (j(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (l && l.key === a.key)
                          ? ""
                          : ("" + a.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + T((s = e[u]), u);
              l += O(s, t, o, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += O((s = s.value), t, o, (c = i + T(s, u++)), a);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          I = { transition: null },
          A = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: _,
          };
        function z() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!j(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.act = z),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = m({}, e.props),
              i = e.key,
              a = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (s = _.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                x.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: a,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = j),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = I.transition;
            I.transition = {};
            try {
              e();
            } finally {
              I.transition = t;
            }
          }),
          (t.unstable_act = z),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      540: (e, t, n) => {
        e.exports = n(287);
      },
      848: (e, t, n) => {
        e.exports = n(20);
      },
      463: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < i(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(l, n))
                u < o && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < o && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          y = "function" == typeof setTimeout ? setTimeout : null,
          v = "function" == typeof clearTimeout ? clearTimeout : null,
          b = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), I(x);
            else {
              var t = r(c);
              null !== t && A(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), v(j), (j = -1)), (p = !0);
          var i = h;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !O()));

            ) {
              var a = f.callback;
              if ("function" == typeof a) {
                (f.callback = null), (h = f.priorityLevel);
                var s = a(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof s
                    ? (f.callback = s)
                    : f === r(u) && o(u),
                  w(n);
              } else o(u);
              f = r(u);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(c);
              null !== d && A(k, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (h = i), (p = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var _,
          S = !1,
          E = null,
          j = -1,
          C = 5,
          T = -1;
        function O() {
          return !(t.unstable_now() - T < C);
        }
        function P() {
          if (null !== E) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? _() : ((S = !1), (E = null));
            }
          } else S = !1;
        }
        if ("function" == typeof b)
          _ = function () {
            b(P);
          };
        else if ("undefined" != typeof MessageChannel) {
          var L = new MessageChannel(),
            N = L.port2;
          (L.port1.onmessage = P),
            (_ = function () {
              N.postMessage(null);
            });
        } else
          _ = function () {
            y(P, 0);
          };
        function I(e) {
          (E = e), S || ((S = !0), _());
        }
        function A(e, n) {
          j = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), I(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var a = t.unstable_now();
            switch (
              ("object" == typeof i && null !== i
                ? (i = "number" == typeof (i = i.delay) && 0 < i ? a + i : a)
                : (i = a),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > a
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(j), (j = -1)) : (g = !0), A(k, i - a)))
                : ((e.sortIndex = s), n(u, e), m || p || ((m = !0), I(x))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      982: (e, t, n) => {
        e.exports = n(463);
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var l = e[s],
              u = r.base ? l[0] + r.base : l[0],
              c = i[u] || 0,
              d = "".concat(u, " ").concat(c);
            i[u] = c + 1;
            var f = n(d),
              h = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(h);
            else {
              var p = o(h, r);
              (r.byIndex = s),
                t.splice(s, 0, { identifier: d, updater: p, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          n.update(e);
          return function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap &&
                t.supports === e.supports &&
                t.layer === e.layer
              )
                return;
              n.update((e = t));
            } else n.remove();
          };
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              t[s].references--;
            }
            for (var l = r(e, o), u = 0; u < i.length; u++) {
              var c = n(i[u]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            i = l;
          };
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      159: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    i = {};
  function a(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var n = (i[e] = { id: e, exports: {} });
    return o[e](n, n.exports, a), n.exports;
  }
  (a.m = o),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var o = Object.create(null);
      a.r(o);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & r && n; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => n[e]));
      return (i.default = () => n), a.d(o, i), o;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) => e + ".bundle.js"),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (r = "new-folder:"),
    (a.l = (e, t, o, i) => {
      if (n[e]) n[e].push(t);
      else {
        var s, l;
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName("script"), c = 0;
            c < u.length;
            c++
          ) {
            var d = u[c];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == r + o
            ) {
              s = d;
              break;
            }
          }
        s ||
          ((l = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          a.nc && s.setAttribute("nonce", a.nc),
          s.setAttribute("data-webpack", r + o),
          (s.src = e)),
          (n[e] = [t]);
        var f = (t, r) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var o = n[e];
            if (
              (delete n[e],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          h = setTimeout(
            f.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = f.bind(null, s.onerror)),
          (s.onload = f.bind(null, s.onload)),
          l && document.head.appendChild(s);
      }
    }),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
          for (var r = n.length - 1; r > -1 && (!e || !/^http(s?):/.test(e)); )
            e = n[r--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e);
    })(),
    (() => {
      var e = { 792: 0 };
      a.f.j = (t, n) => {
        var r = a.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var o = new Promise((n, o) => (r = e[t] = [n, o]));
            n.push((r[2] = o));
            var i = a.p + a.u(t),
              s = new Error();
            a.l(
              i,
              (n) => {
                if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = i),
                    r[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var r,
            o,
            [i, s, l] = n,
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (r in s) a.o(s, r) && (a.m[r] = s[r]);
            if (l) l(a);
          }
          for (t && t(n); u < i.length; u++)
            (o = i[u]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        n = (self.webpackChunknew_folder = self.webpackChunknew_folder || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (a.nc = void 0),
    (() => {
      var e = a(338);
      class t extends Error {
        constructor(e, t = "FunctionsError", n) {
          super(e), (this.name = t), (this.context = n);
        }
      }
      class n extends t {
        constructor(e) {
          super(
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            e
          );
        }
      }
      class r extends t {
        constructor(e) {
          super(
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            e
          );
        }
      }
      class o extends t {
        constructor(e) {
          super(
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            e
          );
        }
      }
      var i;
      !(function (e) {
        (e.Any = "any"),
          (e.ApNortheast1 = "ap-northeast-1"),
          (e.ApNortheast2 = "ap-northeast-2"),
          (e.ApSouth1 = "ap-south-1"),
          (e.ApSoutheast1 = "ap-southeast-1"),
          (e.ApSoutheast2 = "ap-southeast-2"),
          (e.CaCentral1 = "ca-central-1"),
          (e.EuCentral1 = "eu-central-1"),
          (e.EuWest1 = "eu-west-1"),
          (e.EuWest2 = "eu-west-2"),
          (e.EuWest3 = "eu-west-3"),
          (e.SaEast1 = "sa-east-1"),
          (e.UsEast1 = "us-east-1"),
          (e.UsWest1 = "us-west-1"),
          (e.UsWest2 = "us-west-2");
      })(i || (i = {}));
      var s = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      class l {
        constructor(
          e,
          { headers: t = {}, customFetch: n, region: r = i.Any } = {}
        ) {
          (this.url = e),
            (this.headers = t),
            (this.region = r),
            (this.fetch = ((e) => {
              let t;
              return (
                (t =
                  e ||
                  ("undefined" == typeof fetch
                    ? (...e) =>
                        Promise.resolve()
                          .then(a.bind(a, 907))
                          .then(({ default: t }) => t(...e))
                    : fetch)),
                (...e) => t(...e)
              );
            })(n));
        }
        setAuth(e) {
          this.headers.Authorization = `Bearer ${e}`;
        }
        invoke(e, t = {}) {
          var i;
          return s(this, void 0, void 0, function* () {
            try {
              const { headers: a, method: s, body: l } = t;
              let u,
                c = {},
                { region: d } = t;
              d || (d = this.region),
                d && "any" !== d && (c["x-region"] = d),
                l &&
                  ((a &&
                    !Object.prototype.hasOwnProperty.call(a, "Content-Type")) ||
                    !a) &&
                  (("undefined" != typeof Blob && l instanceof Blob) ||
                  l instanceof ArrayBuffer
                    ? ((c["Content-Type"] = "application/octet-stream"),
                      (u = l))
                    : "string" == typeof l
                    ? ((c["Content-Type"] = "text/plain"), (u = l))
                    : "undefined" != typeof FormData && l instanceof FormData
                    ? (u = l)
                    : ((c["Content-Type"] = "application/json"),
                      (u = JSON.stringify(l))));
              const f = yield this.fetch(`${this.url}/${e}`, {
                  method: s || "POST",
                  headers: Object.assign(
                    Object.assign(Object.assign({}, c), this.headers),
                    a
                  ),
                  body: u,
                }).catch((e) => {
                  throw new n(e);
                }),
                h = f.headers.get("x-relay-error");
              if (h && "true" === h) throw new r(f);
              if (!f.ok) throw new o(f);
              let p,
                m = (
                  null !== (i = f.headers.get("Content-Type")) && void 0 !== i
                    ? i
                    : "text/plain"
                )
                  .split(";")[0]
                  .trim();
              return (
                (p =
                  "application/json" === m
                    ? yield f.json()
                    : "application/octet-stream" === m
                    ? yield f.blob()
                    : "text/event-stream" === m
                    ? f
                    : "multipart/form-data" === m
                    ? yield f.formData()
                    : yield f.text()),
                { data: p, error: null }
              );
            } catch (e) {
              return { data: null, error: e };
            }
          });
        }
      }
      var u = a(907);
      class c extends Error {
        constructor(e) {
          super(e.message),
            (this.name = "PostgrestError"),
            (this.details = e.details),
            (this.hint = e.hint),
            (this.code = e.code);
        }
      }
      class d {
        constructor(e) {
          (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = e.headers),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = e.shouldThrowOnError),
            (this.signal = e.signal),
            (this.isMaybeSingle = e.isMaybeSingle),
            e.fetch
              ? (this.fetch = e.fetch)
              : "undefined" == typeof fetch
              ? (this.fetch = u.default)
              : (this.fetch = fetch);
        }
        throwOnError() {
          return (this.shouldThrowOnError = !0), this;
        }
        then(e, t) {
          void 0 === this.schema ||
            (["GET", "HEAD"].includes(this.method)
              ? (this.headers["Accept-Profile"] = this.schema)
              : (this.headers["Content-Profile"] = this.schema)),
            "GET" !== this.method &&
              "HEAD" !== this.method &&
              (this.headers["Content-Type"] = "application/json");
          let n = (0, this.fetch)(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
          }).then(async (e) => {
            var t, n, r;
            let o = null,
              i = null,
              a = null,
              s = e.status,
              l = e.statusText;
            if (e.ok) {
              if ("HEAD" !== this.method) {
                const t = await e.text();
                "" === t ||
                  (i =
                    "text/csv" === this.headers.Accept ||
                    (this.headers.Accept &&
                      this.headers.Accept.includes(
                        "application/vnd.pgrst.plan+text"
                      ))
                      ? t
                      : JSON.parse(t));
              }
              const r =
                  null === (t = this.headers.Prefer) || void 0 === t
                    ? void 0
                    : t.match(/count=(exact|planned|estimated)/),
                u =
                  null === (n = e.headers.get("content-range")) || void 0 === n
                    ? void 0
                    : n.split("/");
              r && u && u.length > 1 && (a = parseInt(u[1])),
                this.isMaybeSingle &&
                  "GET" === this.method &&
                  Array.isArray(i) &&
                  (i.length > 1
                    ? ((o = {
                        code: "PGRST116",
                        details: `Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message:
                          "JSON object requested, multiple (or no) rows returned",
                      }),
                      (i = null),
                      (a = null),
                      (s = 406),
                      (l = "Not Acceptable"))
                    : (i = 1 === i.length ? i[0] : null));
            } else {
              const t = await e.text();
              try {
                (o = JSON.parse(t)),
                  Array.isArray(o) &&
                    404 === e.status &&
                    ((i = []), (o = null), (s = 200), (l = "OK"));
              } catch (n) {
                404 === e.status && "" === t
                  ? ((s = 204), (l = "No Content"))
                  : (o = { message: t });
              }
              if (
                (o &&
                  this.isMaybeSingle &&
                  (null === (r = null == o ? void 0 : o.details) || void 0 === r
                    ? void 0
                    : r.includes("0 rows")) &&
                  ((o = null), (s = 200), (l = "OK")),
                o && this.shouldThrowOnError)
              )
                throw new c(o);
            }
            return { error: o, data: i, count: a, status: s, statusText: l };
          });
          return (
            this.shouldThrowOnError ||
              (n = n.catch((e) => {
                var t, n, r;
                return {
                  error: {
                    message: `${
                      null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                        ? t
                        : "FetchError"
                    }: ${null == e ? void 0 : e.message}`,
                    details: `${
                      null !== (n = null == e ? void 0 : e.stack) &&
                      void 0 !== n
                        ? n
                        : ""
                    }`,
                    hint: "",
                    code: `${
                      null !== (r = null == e ? void 0 : e.code) && void 0 !== r
                        ? r
                        : ""
                    }`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                };
              })),
            n.then(e, t)
          );
        }
      }
      class f extends d {
        select(e) {
          let t = !1;
          const n = (null != e ? e : "*")
            .split("")
            .map((e) => (/\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)))
            .join("");
          return (
            this.url.searchParams.set("select", n),
            this.headers.Prefer && (this.headers.Prefer += ","),
            (this.headers.Prefer += "return=representation"),
            this
          );
        }
        order(
          e,
          {
            ascending: t = !0,
            nullsFirst: n,
            foreignTable: r,
            referencedTable: o = r,
          } = {}
        ) {
          const i = o ? `${o}.order` : "order",
            a = this.url.searchParams.get(i);
          return (
            this.url.searchParams.set(
              i,
              `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${
                void 0 === n ? "" : n ? ".nullsfirst" : ".nullslast"
              }`
            ),
            this
          );
        }
        limit(e, { foreignTable: t, referencedTable: n = t } = {}) {
          const r = void 0 === n ? "limit" : `${n}.limit`;
          return this.url.searchParams.set(r, `${e}`), this;
        }
        range(e, t, { foreignTable: n, referencedTable: r = n } = {}) {
          const o = void 0 === r ? "offset" : `${r}.offset`,
            i = void 0 === r ? "limit" : `${r}.limit`;
          return (
            this.url.searchParams.set(o, `${e}`),
            this.url.searchParams.set(i, "" + (t - e + 1)),
            this
          );
        }
        abortSignal(e) {
          return (this.signal = e), this;
        }
        single() {
          return (
            (this.headers.Accept = "application/vnd.pgrst.object+json"), this
          );
        }
        maybeSingle() {
          return (
            "GET" === this.method
              ? (this.headers.Accept = "application/json")
              : (this.headers.Accept = "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
          );
        }
        csv() {
          return (this.headers.Accept = "text/csv"), this;
        }
        geojson() {
          return (this.headers.Accept = "application/geo+json"), this;
        }
        explain({
          analyze: e = !1,
          verbose: t = !1,
          settings: n = !1,
          buffers: r = !1,
          wal: o = !1,
          format: i = "text",
        } = {}) {
          var a;
          const s = [
              e ? "analyze" : null,
              t ? "verbose" : null,
              n ? "settings" : null,
              r ? "buffers" : null,
              o ? "wal" : null,
            ]
              .filter(Boolean)
              .join("|"),
            l =
              null !== (a = this.headers.Accept) && void 0 !== a
                ? a
                : "application/json";
          return (
            (this.headers.Accept = `application/vnd.pgrst.plan+${i}; for="${l}"; options=${s};`),
            this
          );
        }
        rollback() {
          var e;
          return (
            (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim()
              .length > 0
              ? (this.headers.Prefer += ",tx=rollback")
              : (this.headers.Prefer = "tx=rollback"),
            this
          );
        }
        returns() {
          return this;
        }
      }
      class h extends f {
        eq(e, t) {
          return this.url.searchParams.append(e, `eq.${t}`), this;
        }
        neq(e, t) {
          return this.url.searchParams.append(e, `neq.${t}`), this;
        }
        gt(e, t) {
          return this.url.searchParams.append(e, `gt.${t}`), this;
        }
        gte(e, t) {
          return this.url.searchParams.append(e, `gte.${t}`), this;
        }
        lt(e, t) {
          return this.url.searchParams.append(e, `lt.${t}`), this;
        }
        lte(e, t) {
          return this.url.searchParams.append(e, `lte.${t}`), this;
        }
        like(e, t) {
          return this.url.searchParams.append(e, `like.${t}`), this;
        }
        likeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
          );
        }
        likeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
          );
        }
        ilike(e, t) {
          return this.url.searchParams.append(e, `ilike.${t}`), this;
        }
        ilikeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
          );
        }
        ilikeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
          );
        }
        is(e, t) {
          return this.url.searchParams.append(e, `is.${t}`), this;
        }
        in(e, t) {
          const n = Array.from(new Set(t))
            .map((e) =>
              "string" == typeof e && new RegExp("[,()]").test(e)
                ? `"${e}"`
                : `${e}`
            )
            .join(",");
          return this.url.searchParams.append(e, `in.(${n})`), this;
        }
        contains(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cs.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
            this
          );
        }
        containedBy(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cd.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
            this
          );
        }
        rangeGt(e, t) {
          return this.url.searchParams.append(e, `sr.${t}`), this;
        }
        rangeGte(e, t) {
          return this.url.searchParams.append(e, `nxl.${t}`), this;
        }
        rangeLt(e, t) {
          return this.url.searchParams.append(e, `sl.${t}`), this;
        }
        rangeLte(e, t) {
          return this.url.searchParams.append(e, `nxr.${t}`), this;
        }
        rangeAdjacent(e, t) {
          return this.url.searchParams.append(e, `adj.${t}`), this;
        }
        overlaps(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `ov.${t}`)
              : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
            this
          );
        }
        textSearch(e, t, { config: n, type: r } = {}) {
          let o = "";
          "plain" === r
            ? (o = "pl")
            : "phrase" === r
            ? (o = "ph")
            : "websearch" === r && (o = "w");
          const i = void 0 === n ? "" : `(${n})`;
          return this.url.searchParams.append(e, `${o}fts${i}.${t}`), this;
        }
        match(e) {
          return (
            Object.entries(e).forEach(([e, t]) => {
              this.url.searchParams.append(e, `eq.${t}`);
            }),
            this
          );
        }
        not(e, t, n) {
          return this.url.searchParams.append(e, `not.${t}.${n}`), this;
        }
        or(e, { foreignTable: t, referencedTable: n = t } = {}) {
          const r = n ? `${n}.or` : "or";
          return this.url.searchParams.append(r, `(${e})`), this;
        }
        filter(e, t, n) {
          return this.url.searchParams.append(e, `${t}.${n}`), this;
        }
      }
      class p {
        constructor(e, { headers: t = {}, schema: n, fetch: r }) {
          (this.url = e),
            (this.headers = t),
            (this.schema = n),
            (this.fetch = r);
        }
        select(e, { head: t = !1, count: n } = {}) {
          const r = t ? "HEAD" : "GET";
          let o = !1;
          const i = (null != e ? e : "*")
            .split("")
            .map((e) => (/\s/.test(e) && !o ? "" : ('"' === e && (o = !o), e)))
            .join("");
          return (
            this.url.searchParams.set("select", i),
            n && (this.headers.Prefer = `count=${n}`),
            new h({
              method: r,
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        insert(e, { count: t, defaultToNull: n = !0 } = {}) {
          const r = [];
          if (
            (this.headers.Prefer && r.push(this.headers.Prefer),
            t && r.push(`count=${t}`),
            n || r.push("missing=default"),
            (this.headers.Prefer = r.join(",")),
            Array.isArray(e))
          ) {
            const t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              const e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new h({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        upsert(
          e,
          {
            onConflict: t,
            ignoreDuplicates: n = !1,
            count: r,
            defaultToNull: o = !0,
          } = {}
        ) {
          const i = [`resolution=${n ? "ignore" : "merge"}-duplicates`];
          if (
            (void 0 !== t && this.url.searchParams.set("on_conflict", t),
            this.headers.Prefer && i.push(this.headers.Prefer),
            r && i.push(`count=${r}`),
            o || i.push("missing=default"),
            (this.headers.Prefer = i.join(",")),
            Array.isArray(e))
          ) {
            const t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              const e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new h({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        update(e, { count: t } = {}) {
          const n = [];
          return (
            this.headers.Prefer && n.push(this.headers.Prefer),
            t && n.push(`count=${t}`),
            (this.headers.Prefer = n.join(",")),
            new h({
              method: "PATCH",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: e,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        delete({ count: e } = {}) {
          const t = [];
          return (
            e && t.push(`count=${e}`),
            this.headers.Prefer && t.unshift(this.headers.Prefer),
            (this.headers.Prefer = t.join(",")),
            new h({
              method: "DELETE",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      const m = { "X-Client-Info": "postgrest-js/1.15.2" };
      class g {
        constructor(e, { headers: t = {}, schema: n, fetch: r } = {}) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, m), t)),
            (this.schemaName = n),
            (this.fetch = r);
        }
        from(e) {
          const t = new URL(`${this.url}/${e}`);
          return new p(t, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
          });
        }
        schema(e) {
          return new g(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
          });
        }
        rpc(e, t = {}, { head: n = !1, get: r = !1, count: o } = {}) {
          let i;
          const a = new URL(`${this.url}/rpc/${e}`);
          let s;
          n || r
            ? ((i = n ? "HEAD" : "GET"),
              Object.entries(t)
                .filter(([e, t]) => void 0 !== t)
                .map(([e, t]) => [
                  e,
                  Array.isArray(t) ? `{${t.join(",")}}` : `${t}`,
                ])
                .forEach(([e, t]) => {
                  a.searchParams.append(e, t);
                }))
            : ((i = "POST"), (s = t));
          const l = Object.assign({}, this.headers);
          return (
            o && (l.Prefer = `count=${o}`),
            new h({
              method: i,
              url: a,
              headers: l,
              schema: this.schemaName,
              body: s,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      const y = { "X-Client-Info": "realtime-js/2.9.5" };
      var v, b, w, k, x, _, S;
      !(function (e) {
        (e[(e.connecting = 0)] = "connecting"),
          (e[(e.open = 1)] = "open"),
          (e[(e.closing = 2)] = "closing"),
          (e[(e.closed = 3)] = "closed");
      })(v || (v = {})),
        (function (e) {
          (e.closed = "closed"),
            (e.errored = "errored"),
            (e.joined = "joined"),
            (e.joining = "joining"),
            (e.leaving = "leaving");
        })(b || (b = {})),
        (function (e) {
          (e.close = "phx_close"),
            (e.error = "phx_error"),
            (e.join = "phx_join"),
            (e.reply = "phx_reply"),
            (e.leave = "phx_leave"),
            (e.access_token = "access_token");
        })(w || (w = {})),
        (function (e) {
          e.websocket = "websocket";
        })(k || (k = {})),
        (function (e) {
          (e.Connecting = "connecting"),
            (e.Open = "open"),
            (e.Closing = "closing"),
            (e.Closed = "closed");
        })(x || (x = {}));
      class E {
        constructor(e, t) {
          (this.callback = e),
            (this.timerCalc = t),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = t);
        }
        reset() {
          (this.tries = 0), clearTimeout(this.timer);
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              (this.tries = this.tries + 1), this.callback();
            }, this.timerCalc(this.tries + 1)));
        }
      }
      class j {
        constructor() {
          this.HEADER_LENGTH = 1;
        }
        decode(e, t) {
          return e.constructor === ArrayBuffer
            ? t(this._binaryDecode(e))
            : t("string" == typeof e ? JSON.parse(e) : {});
        }
        _binaryDecode(e) {
          const t = new DataView(e),
            n = new TextDecoder();
          return this._decodeBroadcast(e, t, n);
        }
        _decodeBroadcast(e, t, n) {
          const r = t.getUint8(1),
            o = t.getUint8(2);
          let i = this.HEADER_LENGTH + 2;
          const a = n.decode(e.slice(i, i + r));
          i += r;
          const s = n.decode(e.slice(i, i + o));
          i += o;
          return {
            ref: null,
            topic: a,
            event: s,
            payload: JSON.parse(n.decode(e.slice(i, e.byteLength))),
          };
        }
      }
      class C {
        constructor(e, t, n = {}, r = 1e4) {
          (this.channel = e),
            (this.event = t),
            (this.payload = n),
            (this.timeout = r),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null);
        }
        resend(e) {
          (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
        }
        send() {
          this._hasReceived("timeout") ||
            (this.startTimeout(),
            (this.sent = !0),
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref,
              join_ref: this.channel._joinRef(),
            }));
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
        receive(e, t) {
          var n;
          return (
            this._hasReceived(e) &&
              t(
                null === (n = this.receivedResp) || void 0 === n
                  ? void 0
                  : n.response
              ),
            this.recHooks.push({ status: e, callback: t }),
            this
          );
        }
        startTimeout() {
          if (this.timeoutTimer) return;
          (this.ref = this.channel.socket._makeRef()),
            (this.refEvent = this.channel._replyEventName(this.ref));
          this.channel._on(this.refEvent, {}, (e) => {
            this._cancelRefEvent(),
              this._cancelTimeout(),
              (this.receivedResp = e),
              this._matchReceive(e);
          }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger("timeout", {});
            }, this.timeout));
        }
        trigger(e, t) {
          this.refEvent &&
            this.channel._trigger(this.refEvent, { status: e, response: t });
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
        _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
        }
        _matchReceive({ status: e, response: t }) {
          this.recHooks
            .filter((t) => t.status === e)
            .forEach((e) => e.callback(t));
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }
      !(function (e) {
        (e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave");
      })(_ || (_ = {}));
      class T {
        constructor(e, t) {
          (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            });
          const n = (null == t ? void 0 : t.events) || {
            state: "presence_state",
            diff: "presence_diff",
          };
          this.channel._on(n.state, {}, (e) => {
            const { onJoin: t, onLeave: n, onSync: r } = this.caller;
            (this.joinRef = this.channel._joinRef()),
              (this.state = T.syncState(this.state, e, t, n)),
              this.pendingDiffs.forEach((e) => {
                this.state = T.syncDiff(this.state, e, t, n);
              }),
              (this.pendingDiffs = []),
              r();
          }),
            this.channel._on(n.diff, {}, (e) => {
              const { onJoin: t, onLeave: n, onSync: r } = this.caller;
              this.inPendingSyncState()
                ? this.pendingDiffs.push(e)
                : ((this.state = T.syncDiff(this.state, e, t, n)), r());
            }),
            this.onJoin((e, t, n) => {
              this.channel._trigger("presence", {
                event: "join",
                key: e,
                currentPresences: t,
                newPresences: n,
              });
            }),
            this.onLeave((e, t, n) => {
              this.channel._trigger("presence", {
                event: "leave",
                key: e,
                currentPresences: t,
                leftPresences: n,
              });
            }),
            this.onSync(() => {
              this.channel._trigger("presence", { event: "sync" });
            });
        }
        static syncState(e, t, n, r) {
          const o = this.cloneDeep(e),
            i = this.transformState(t),
            a = {},
            s = {};
          return (
            this.map(o, (e, t) => {
              i[e] || (s[e] = t);
            }),
            this.map(i, (e, t) => {
              const n = o[e];
              if (n) {
                const r = t.map((e) => e.presence_ref),
                  o = n.map((e) => e.presence_ref),
                  i = t.filter((e) => o.indexOf(e.presence_ref) < 0),
                  l = n.filter((e) => r.indexOf(e.presence_ref) < 0);
                i.length > 0 && (a[e] = i), l.length > 0 && (s[e] = l);
              } else a[e] = t;
            }),
            this.syncDiff(o, { joins: a, leaves: s }, n, r)
          );
        }
        static syncDiff(e, t, n, r) {
          const { joins: o, leaves: i } = {
            joins: this.transformState(t.joins),
            leaves: this.transformState(t.leaves),
          };
          return (
            n || (n = () => {}),
            r || (r = () => {}),
            this.map(o, (t, r) => {
              var o;
              const i = null !== (o = e[t]) && void 0 !== o ? o : [];
              if (((e[t] = this.cloneDeep(r)), i.length > 0)) {
                const n = e[t].map((e) => e.presence_ref),
                  r = i.filter((e) => n.indexOf(e.presence_ref) < 0);
                e[t].unshift(...r);
              }
              n(t, i, r);
            }),
            this.map(i, (t, n) => {
              let o = e[t];
              if (!o) return;
              const i = n.map((e) => e.presence_ref);
              (o = o.filter((e) => i.indexOf(e.presence_ref) < 0)),
                (e[t] = o),
                r(t, o, n),
                0 === o.length && delete e[t];
            }),
            e
          );
        }
        static map(e, t) {
          return Object.getOwnPropertyNames(e).map((n) => t(n, e[n]));
        }
        static transformState(e) {
          return (
            (e = this.cloneDeep(e)),
            Object.getOwnPropertyNames(e).reduce((t, n) => {
              const r = e[n];
              return (
                (t[n] =
                  "metas" in r
                    ? r.metas.map(
                        (e) => (
                          (e.presence_ref = e.phx_ref),
                          delete e.phx_ref,
                          delete e.phx_ref_prev,
                          e
                        )
                      )
                    : r),
                t
              );
            }, {})
          );
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
        onJoin(e) {
          this.caller.onJoin = e;
        }
        onLeave(e) {
          this.caller.onLeave = e;
        }
        onSync(e) {
          this.caller.onSync = e;
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      }
      !(function (e) {
        (e.abstime = "abstime"),
          (e.bool = "bool"),
          (e.date = "date"),
          (e.daterange = "daterange"),
          (e.float4 = "float4"),
          (e.float8 = "float8"),
          (e.int2 = "int2"),
          (e.int4 = "int4"),
          (e.int4range = "int4range"),
          (e.int8 = "int8"),
          (e.int8range = "int8range"),
          (e.json = "json"),
          (e.jsonb = "jsonb"),
          (e.money = "money"),
          (e.numeric = "numeric"),
          (e.oid = "oid"),
          (e.reltime = "reltime"),
          (e.text = "text"),
          (e.time = "time"),
          (e.timestamp = "timestamp"),
          (e.timestamptz = "timestamptz"),
          (e.timetz = "timetz"),
          (e.tsrange = "tsrange"),
          (e.tstzrange = "tstzrange");
      })(S || (S = {}));
      const O = (e, t, n = {}) => {
          var r;
          const o = null !== (r = n.skipTypes) && void 0 !== r ? r : [];
          return Object.keys(t).reduce(
            (n, r) => ((n[r] = P(r, e, t, o)), n),
            {}
          );
        },
        P = (e, t, n, r) => {
          const o = t.find((t) => t.name === e),
            i = null == o ? void 0 : o.type,
            a = n[e];
          return i && !r.includes(i) ? L(i, a) : N(a);
        },
        L = (e, t) => {
          if ("_" === e.charAt(0)) {
            const n = e.slice(1, e.length);
            return R(t, n);
          }
          switch (e) {
            case S.bool:
              return I(t);
            case S.float4:
            case S.float8:
            case S.int2:
            case S.int4:
            case S.int8:
            case S.numeric:
            case S.oid:
              return A(t);
            case S.json:
            case S.jsonb:
              return z(t);
            case S.timestamp:
              return $(t);
            case S.abstime:
            case S.date:
            case S.daterange:
            case S.int4range:
            case S.int8range:
            case S.money:
            case S.reltime:
            case S.text:
            case S.time:
            case S.timestamptz:
            case S.timetz:
            case S.tsrange:
            case S.tstzrange:
            default:
              return N(t);
          }
        },
        N = (e) => e,
        I = (e) => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e;
          }
        },
        A = (e) => {
          if ("string" == typeof e) {
            const t = parseFloat(e);
            if (!Number.isNaN(t)) return t;
          }
          return e;
        },
        z = (e) => {
          if ("string" == typeof e)
            try {
              return JSON.parse(e);
            } catch (t) {
              return console.log(`JSON parse error: ${t}`), e;
            }
          return e;
        },
        R = (e, t) => {
          if ("string" != typeof e) return e;
          const n = e.length - 1,
            r = e[n];
          if ("{" === e[0] && "}" === r) {
            let r;
            const o = e.slice(1, n);
            try {
              r = JSON.parse("[" + o + "]");
            } catch (e) {
              r = o ? o.split(",") : [];
            }
            return r.map((e) => L(t, e));
          }
          return e;
        },
        $ = (e) => ("string" == typeof e ? e.replace(" ", "T") : e);
      var U, F, D;
      !(function (e) {
        (e.ALL = "*"),
          (e.INSERT = "INSERT"),
          (e.UPDATE = "UPDATE"),
          (e.DELETE = "DELETE");
      })(U || (U = {})),
        (function (e) {
          (e.BROADCAST = "broadcast"),
            (e.PRESENCE = "presence"),
            (e.POSTGRES_CHANGES = "postgres_changes");
        })(F || (F = {})),
        (function (e) {
          (e.SUBSCRIBED = "SUBSCRIBED"),
            (e.TIMED_OUT = "TIMED_OUT"),
            (e.CLOSED = "CLOSED"),
            (e.CHANNEL_ERROR = "CHANNEL_ERROR");
        })(D || (D = {}));
      class M {
        constructor(e, t = { config: {} }, n) {
          (this.topic = e),
            (this.params = t),
            (this.socket = n),
            (this.bindings = {}),
            (this.state = b.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.subTopic = e.replace(/^realtime:/i, "")),
            (this.params.config = Object.assign(
              { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
              t.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new C(this, w.join, this.params, this.timeout)),
            (this.rejoinTimer = new E(
              () => this._rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive("ok", () => {
              (this.state = b.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e) => e.send()),
                (this.pushBuffer = []);
            }),
            this._onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  "channel",
                  `close ${this.topic} ${this._joinRef()}`
                ),
                (this.state = b.closed),
                this.socket._remove(this);
            }),
            this._onError((e) => {
              this._isLeaving() ||
                this._isClosed() ||
                (this.socket.log("channel", `error ${this.topic}`, e),
                (this.state = b.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
              this._isJoining() &&
                (this.socket.log(
                  "channel",
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
                ),
                (this.state = b.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this._on(w.reply, {}, (e, t) => {
              this._trigger(this._replyEventName(t), e);
            }),
            (this.presence = new T(this)),
            (this.broadcastEndpointURL = this._broadcastEndpointURL());
        }
        subscribe(e, t = this.timeout) {
          var n, r;
          if (
            (this.socket.isConnected() || this.socket.connect(),
            this.joinedOnce)
          )
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            const {
              config: { broadcast: o, presence: i },
            } = this.params;
            this._onError((t) => e && e("CHANNEL_ERROR", t)),
              this._onClose(() => e && e("CLOSED"));
            const a = {},
              s = {
                broadcast: o,
                presence: i,
                postgres_changes:
                  null !==
                    (r =
                      null === (n = this.bindings.postgres_changes) ||
                      void 0 === n
                        ? void 0
                        : n.map((e) => e.filter)) && void 0 !== r
                    ? r
                    : [],
              };
            this.socket.accessToken &&
              (a.access_token = this.socket.accessToken),
              this.updateJoinPayload(Object.assign({ config: s }, a)),
              (this.joinedOnce = !0),
              this._rejoin(t),
              this.joinPush
                .receive("ok", ({ postgres_changes: t }) => {
                  var n;
                  if (
                    (this.socket.accessToken &&
                      this.socket.setAuth(this.socket.accessToken),
                    void 0 !== t)
                  ) {
                    const r = this.bindings.postgres_changes,
                      o =
                        null !== (n = null == r ? void 0 : r.length) &&
                        void 0 !== n
                          ? n
                          : 0,
                      i = [];
                    for (let n = 0; n < o; n++) {
                      const o = r[n],
                        {
                          filter: { event: a, schema: s, table: l, filter: u },
                        } = o,
                        c = t && t[n];
                      if (
                        !c ||
                        c.event !== a ||
                        c.schema !== s ||
                        c.table !== l ||
                        c.filter !== u
                      )
                        return (
                          this.unsubscribe(),
                          void (
                            e &&
                            e(
                              "CHANNEL_ERROR",
                              new Error(
                                "mismatch between server and client bindings for postgres changes"
                              )
                            )
                          )
                        );
                      i.push(Object.assign(Object.assign({}, o), { id: c.id }));
                    }
                    return (
                      (this.bindings.postgres_changes = i),
                      void (e && e("SUBSCRIBED"))
                    );
                  }
                  e && e("SUBSCRIBED");
                })
                .receive("error", (t) => {
                  e &&
                    e(
                      "CHANNEL_ERROR",
                      new Error(
                        JSON.stringify(Object.values(t).join(", ") || "error")
                      )
                    );
                })
                .receive("timeout", () => {
                  e && e("TIMED_OUT");
                });
          }
          return this;
        }
        presenceState() {
          return this.presence.state;
        }
        async track(e, t = {}) {
          return await this.send(
            { type: "presence", event: "track", payload: e },
            t.timeout || this.timeout
          );
        }
        async untrack(e = {}) {
          return await this.send({ type: "presence", event: "untrack" }, e);
        }
        on(e, t, n) {
          return this._on(e, t, n);
        }
        async send(e, t = {}) {
          var n, r;
          if (this._canPush() || "broadcast" !== e.type)
            return new Promise((n) => {
              var r, o, i;
              const a = this._push(e.type, e, t.timeout || this.timeout);
              "broadcast" !== e.type ||
                (null ===
                  (i =
                    null ===
                      (o =
                        null === (r = this.params) || void 0 === r
                          ? void 0
                          : r.config) || void 0 === o
                      ? void 0
                      : o.broadcast) || void 0 === i
                  ? void 0
                  : i.ack) ||
                n("ok"),
                a.receive("ok", () => n("ok")),
                a.receive("error", () => n("error")),
                a.receive("timeout", () => n("timed out"));
            });
          {
            const { event: o, payload: i } = e,
              a = {
                method: "POST",
                headers: {
                  apikey:
                    null !== (n = this.socket.apiKey) && void 0 !== n ? n : "",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [{ topic: this.subTopic, event: o, payload: i }],
                }),
              };
            try {
              return (
                await this._fetchWithTimeout(
                  this.broadcastEndpointURL,
                  a,
                  null !== (r = t.timeout) && void 0 !== r ? r : this.timeout
                )
              ).ok
                ? "ok"
                : "error";
            } catch (e) {
              return "AbortError" === e.name ? "timed out" : "error";
            }
          }
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
        unsubscribe(e = this.timeout) {
          this.state = b.leaving;
          const t = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this._trigger(w.close, "leave", this._joinRef());
          };
          return (
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            new Promise((n) => {
              const r = new C(this, w.leave, {}, e);
              r
                .receive("ok", () => {
                  t(), n("ok");
                })
                .receive("timeout", () => {
                  t(), n("timed out");
                })
                .receive("error", () => {
                  n("error");
                }),
                r.send(),
                this._canPush() || r.trigger("ok", {});
            })
          );
        }
        _broadcastEndpointURL() {
          let e = this.socket.endPoint;
          return (
            (e = e.replace(/^ws/i, "http")),
            (e = e.replace(
              /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
              ""
            )),
            e.replace(/\/+$/, "") + "/api/broadcast"
          );
        }
        async _fetchWithTimeout(e, t, n) {
          const r = new AbortController(),
            o = setTimeout(() => r.abort(), n),
            i = await this.socket.fetch(
              e,
              Object.assign(Object.assign({}, t), { signal: r.signal })
            );
          return clearTimeout(o), i;
        }
        _push(e, t, n = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let r = new C(this, e, t, n);
          return (
            this._canPush()
              ? r.send()
              : (r.startTimeout(), this.pushBuffer.push(r)),
            r
          );
        }
        _onMessage(e, t, n) {
          return t;
        }
        _isMember(e) {
          return this.topic === e;
        }
        _joinRef() {
          return this.joinPush.ref;
        }
        _trigger(e, t, n) {
          var r, o;
          const i = e.toLocaleLowerCase(),
            { close: a, error: s, leave: l, join: u } = w;
          if (n && [a, s, l, u].indexOf(i) >= 0 && n !== this._joinRef())
            return;
          let c = this._onMessage(i, t, n);
          if (t && !c)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(i)
            ? null === (r = this.bindings.postgres_changes) ||
              void 0 === r ||
              r
                .filter((e) => {
                  var t, n, r;
                  return (
                    "*" ===
                      (null === (t = e.filter) || void 0 === t
                        ? void 0
                        : t.event) ||
                    (null ===
                      (r =
                        null === (n = e.filter) || void 0 === n
                          ? void 0
                          : n.event) || void 0 === r
                      ? void 0
                      : r.toLocaleLowerCase()) === i
                  );
                })
                .map((e) => e.callback(c, n))
            : null === (o = this.bindings[i]) ||
              void 0 === o ||
              o
                .filter((e) => {
                  var n, r, o, a, s, l;
                  if (
                    ["broadcast", "presence", "postgres_changes"].includes(i)
                  ) {
                    if ("id" in e) {
                      const i = e.id,
                        a =
                          null === (n = e.filter) || void 0 === n
                            ? void 0
                            : n.event;
                      return (
                        i &&
                        (null === (r = t.ids) || void 0 === r
                          ? void 0
                          : r.includes(i)) &&
                        ("*" === a ||
                          (null == a ? void 0 : a.toLocaleLowerCase()) ===
                            (null === (o = t.data) || void 0 === o
                              ? void 0
                              : o.type.toLocaleLowerCase()))
                      );
                    }
                    {
                      const n =
                        null ===
                          (s =
                            null === (a = null == e ? void 0 : e.filter) ||
                            void 0 === a
                              ? void 0
                              : a.event) || void 0 === s
                          ? void 0
                          : s.toLocaleLowerCase();
                      return (
                        "*" === n ||
                        n ===
                          (null === (l = null == t ? void 0 : t.event) ||
                          void 0 === l
                            ? void 0
                            : l.toLocaleLowerCase())
                      );
                    }
                  }
                  return e.type.toLocaleLowerCase() === i;
                })
                .map((e) => {
                  if ("object" == typeof c && "ids" in c) {
                    const e = c.data,
                      {
                        schema: t,
                        table: n,
                        commit_timestamp: r,
                        type: o,
                        errors: i,
                      } = e,
                      a = {
                        schema: t,
                        table: n,
                        commit_timestamp: r,
                        eventType: o,
                        new: {},
                        old: {},
                        errors: i,
                      };
                    c = Object.assign(
                      Object.assign({}, a),
                      this._getPayloadRecords(e)
                    );
                  }
                  e.callback(c, n);
                });
        }
        _isClosed() {
          return this.state === b.closed;
        }
        _isJoined() {
          return this.state === b.joined;
        }
        _isJoining() {
          return this.state === b.joining;
        }
        _isLeaving() {
          return this.state === b.leaving;
        }
        _replyEventName(e) {
          return `chan_reply_${e}`;
        }
        _on(e, t, n) {
          const r = e.toLocaleLowerCase(),
            o = { type: r, filter: t, callback: n };
          return (
            this.bindings[r]
              ? this.bindings[r].push(o)
              : (this.bindings[r] = [o]),
            this
          );
        }
        _off(e, t) {
          const n = e.toLocaleLowerCase();
          return (
            (this.bindings[n] = this.bindings[n].filter((e) => {
              var r;
              return !(
                (null === (r = e.type) || void 0 === r
                  ? void 0
                  : r.toLocaleLowerCase()) === n && M.isEqual(e.filter, t)
              );
            })),
            this
          );
        }
        static isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (const n in e) if (e[n] !== t[n]) return !1;
          return !0;
        }
        _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this._rejoin();
        }
        _onClose(e) {
          this._on(w.close, {}, e);
        }
        _onError(e) {
          this._on(w.error, {}, (t) => e(t));
        }
        _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
        _rejoin(e = this.timeout) {
          this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic),
            (this.state = b.joining),
            this.joinPush.resend(e));
        }
        _getPayloadRecords(e) {
          const t = { new: {}, old: {} };
          return (
            ("INSERT" !== e.type && "UPDATE" !== e.type) ||
              (t.new = O(e.columns, e.record)),
            ("UPDATE" !== e.type && "DELETE" !== e.type) ||
              (t.old = O(e.columns, e.old_record)),
            t
          );
        }
      }
      const B = () => {},
        G = "undefined" != typeof WebSocket;
      class H {
        constructor(e, t) {
          var n;
          (this.accessToken = null),
            (this.apiKey = null),
            (this.channels = []),
            (this.endPoint = ""),
            (this.headers = y),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.heartbeatIntervalMs = 3e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = B),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new j()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this._resolveFetch = (e) => {
              let t;
              return (
                (t =
                  e ||
                  ("undefined" == typeof fetch
                    ? (...e) =>
                        Promise.resolve()
                          .then(a.bind(a, 907))
                          .then(({ default: t }) => t(...e))
                    : fetch)),
                (...e) => t(...e)
              );
            }),
            (this.endPoint = `${e}/${k.websocket}`),
            (null == t ? void 0 : t.transport)
              ? (this.transport = t.transport)
              : (this.transport = null),
            (null == t ? void 0 : t.params) && (this.params = t.params),
            (null == t ? void 0 : t.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                t.headers
              )),
            (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
            (null == t ? void 0 : t.logger) && (this.logger = t.logger),
            (null == t ? void 0 : t.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
          const r =
            null === (n = null == t ? void 0 : t.params) || void 0 === n
              ? void 0
              : n.apikey;
          r && ((this.accessToken = r), (this.apiKey = r)),
            (this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs)
              ? t.reconnectAfterMs
              : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
            (this.encode = (null == t ? void 0 : t.encode)
              ? t.encode
              : (e, t) => t(JSON.stringify(e))),
            (this.decode = (null == t ? void 0 : t.decode)
              ? t.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new E(async () => {
              this.disconnect(), this.connect();
            }, this.reconnectAfterMs)),
            (this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch));
        }
        connect() {
          if (!this.conn)
            if (this.transport)
              this.conn = new this.transport(this._endPointURL(), void 0, {
                headers: this.headers,
              });
            else {
              if (G)
                return (
                  (this.conn = new WebSocket(this._endPointURL())),
                  void this.setupConnection()
                );
              (this.conn = new V(this._endPointURL(), void 0, {
                close: () => {
                  this.conn = null;
                },
              })),
                a
                  .e(591)
                  .then(a.t.bind(a, 591, 23))
                  .then(({ default: e }) => {
                    (this.conn = new e(this._endPointURL(), void 0, {
                      headers: this.headers,
                    })),
                      this.setupConnection();
                  });
            }
        }
        disconnect(e, t) {
          this.conn &&
            ((this.conn.onclose = function () {}),
            e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
            (this.conn = null),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset());
        }
        getChannels() {
          return this.channels;
        }
        async removeChannel(e) {
          const t = await e.unsubscribe();
          return 0 === this.channels.length && this.disconnect(), t;
        }
        async removeAllChannels() {
          const e = await Promise.all(
            this.channels.map((e) => e.unsubscribe())
          );
          return this.disconnect(), e;
        }
        log(e, t, n) {
          this.logger(e, t, n);
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case v.connecting:
              return x.Connecting;
            case v.open:
              return x.Open;
            case v.closing:
              return x.Closing;
            default:
              return x.Closed;
          }
        }
        isConnected() {
          return this.connectionState() === x.Open;
        }
        channel(e, t = { config: {} }) {
          const n = new M(`realtime:${e}`, t, this);
          return this.channels.push(n), n;
        }
        push(e) {
          const { topic: t, event: n, payload: r, ref: o } = e,
            i = () => {
              this.encode(e, (e) => {
                var t;
                null === (t = this.conn) || void 0 === t || t.send(e);
              });
            };
          this.log("push", `${t} ${n} (${o})`, r),
            this.isConnected() ? i() : this.sendBuffer.push(i);
        }
        setAuth(e) {
          (this.accessToken = e),
            this.channels.forEach((t) => {
              e && t.updateJoinPayload({ access_token: e }),
                t.joinedOnce &&
                  t._isJoined() &&
                  t._push(w.access_token, { access_token: e });
            });
        }
        _makeRef() {
          let e = this.ref + 1;
          return (
            e === this.ref ? (this.ref = 0) : (this.ref = e),
            this.ref.toString()
          );
        }
        _leaveOpenTopic(e) {
          let t = this.channels.find(
            (t) => t.topic === e && (t._isJoined() || t._isJoining())
          );
          t &&
            (this.log("transport", `leaving duplicate topic "${e}"`),
            t.unsubscribe());
        }
        _remove(e) {
          this.channels = this.channels.filter(
            (t) => t._joinRef() !== e._joinRef()
          );
        }
        setupConnection() {
          this.conn &&
            ((this.conn.binaryType = "arraybuffer"),
            (this.conn.onopen = () => this._onConnOpen()),
            (this.conn.onerror = (e) => this._onConnError(e)),
            (this.conn.onmessage = (e) => this._onConnMessage(e)),
            (this.conn.onclose = (e) => this._onConnClose(e)));
        }
        _endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: "1.0.0" })
          );
        }
        _onConnMessage(e) {
          this.decode(e.data, (e) => {
            let { topic: t, event: n, payload: r, ref: o } = e;
            ((o && o === this.pendingHeartbeatRef) ||
              n === (null == r ? void 0 : r.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                "receive",
                `${r.status || ""} ${t} ${n} ${(o && "(" + o + ")") || ""}`,
                r
              ),
              this.channels
                .filter((e) => e._isMember(t))
                .forEach((e) => e._trigger(n, r, o)),
              this.stateChangeCallbacks.message.forEach((t) => t(e));
          });
        }
        _onConnOpen() {
          this.log("transport", `connected to ${this._endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((e) => e());
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((t) => t(e));
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((t) => t(e));
        }
        _triggerChanError() {
          this.channels.forEach((e) => e._trigger(w.error));
        }
        _appendParams(e, t) {
          if (0 === Object.keys(t).length) return e;
          const n = e.match(/\?/) ? "&" : "?";
          return `${e}${n}${new URLSearchParams(t)}`;
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef)
              return (
                (this.pendingHeartbeatRef = null),
                this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
                ),
                void (
                  null === (e = this.conn) ||
                  void 0 === e ||
                  e.close(1e3, "hearbeat timeout")
                )
              );
            (this.pendingHeartbeatRef = this._makeRef()),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken);
          }
        }
      }
      class V {
        constructor(e, t, n) {
          (this.binaryType = "arraybuffer"),
            (this.onclose = () => {}),
            (this.onerror = () => {}),
            (this.onmessage = () => {}),
            (this.onopen = () => {}),
            (this.readyState = v.connecting),
            (this.send = () => {}),
            (this.url = null),
            (this.url = e),
            (this.close = n.close);
        }
      }
      class q extends Error {
        constructor(e) {
          super(e), (this.__isStorageError = !0), (this.name = "StorageError");
        }
      }
      function W(e) {
        return "object" == typeof e && null !== e && "__isStorageError" in e;
      }
      class K extends q {
        constructor(e, t) {
          super(e), (this.name = "StorageApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      }
      class J extends q {
        constructor(e, t) {
          super(e),
            (this.name = "StorageUnknownError"),
            (this.originalError = t);
        }
      }
      var Q = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      const Y = (e) => {
        let t;
        return (
          (t =
            e ||
            ("undefined" == typeof fetch
              ? (...e) =>
                  Promise.resolve()
                    .then(a.bind(a, 907))
                    .then(({ default: t }) => t(...e))
              : fetch)),
          (...e) => t(...e)
        );
      };
      var X = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      const Z = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        ee = (e, t) =>
          X(void 0, void 0, void 0, function* () {
            const n = yield Q(void 0, void 0, void 0, function* () {
              return "undefined" == typeof Response
                ? (yield Promise.resolve().then(a.bind(a, 907))).Response
                : Response;
            });
            e instanceof n
              ? e
                  .json()
                  .then((n) => {
                    t(new K(Z(n), e.status || 500));
                  })
                  .catch((e) => {
                    t(new J(Z(e), e));
                  })
              : t(new J(Z(e), e));
          }),
        te = (e, t, n, r) => {
          const o = {
            method: e,
            headers: (null == t ? void 0 : t.headers) || {},
          };
          return "GET" === e
            ? o
            : ((o.headers = Object.assign(
                { "Content-Type": "application/json" },
                null == t ? void 0 : t.headers
              )),
              (o.body = JSON.stringify(r)),
              Object.assign(Object.assign({}, o), n));
        };
      function ne(e, t, n, r, o, i) {
        return X(this, void 0, void 0, function* () {
          return new Promise((a, s) => {
            e(n, te(t, r, o, i))
              .then((e) => {
                if (!e.ok) throw e;
                return (null == r ? void 0 : r.noResolveJson) ? e : e.json();
              })
              .then((e) => a(e))
              .catch((e) => ee(e, s));
          });
        });
      }
      function re(e, t, n, r) {
        return X(this, void 0, void 0, function* () {
          return ne(e, "GET", t, n, r);
        });
      }
      function oe(e, t, n, r, o) {
        return X(this, void 0, void 0, function* () {
          return ne(e, "POST", t, r, o, n);
        });
      }
      function ie(e, t, n, r, o) {
        return X(this, void 0, void 0, function* () {
          return ne(e, "DELETE", t, r, o, n);
        });
      }
      var ae = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      const se = {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        },
        le = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1,
        };
      class ue {
        constructor(e, t = {}, n, r) {
          (this.url = e),
            (this.headers = t),
            (this.bucketId = n),
            (this.fetch = Y(r));
        }
        uploadOrUpdate(e, t, n, r) {
          return ae(this, void 0, void 0, function* () {
            try {
              let o;
              const i = Object.assign(Object.assign({}, le), r),
                a = Object.assign(
                  Object.assign({}, this.headers),
                  "POST" === e && { "x-upsert": String(i.upsert) }
                );
              "undefined" != typeof Blob && n instanceof Blob
                ? ((o = new FormData()),
                  o.append("cacheControl", i.cacheControl),
                  o.append("", n))
                : "undefined" != typeof FormData && n instanceof FormData
                ? ((o = n), o.append("cacheControl", i.cacheControl))
                : ((o = n),
                  (a["cache-control"] = `max-age=${i.cacheControl}`),
                  (a["content-type"] = i.contentType));
              const s = this._removeEmptyFolders(t),
                l = this._getFinalPath(s),
                u = yield this.fetch(
                  `${this.url}/object/${l}`,
                  Object.assign(
                    { method: e, body: o, headers: a },
                    (null == i ? void 0 : i.duplex) ? { duplex: i.duplex } : {}
                  )
                ),
                c = yield u.json();
              if (u.ok)
                return {
                  data: { path: s, id: c.Id, fullPath: c.Key },
                  error: null,
                };
              return { data: null, error: c };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        upload(e, t, n) {
          return ae(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, t, n);
          });
        }
        uploadToSignedUrl(e, t, n, r) {
          return ae(this, void 0, void 0, function* () {
            const o = this._removeEmptyFolders(e),
              i = this._getFinalPath(o),
              a = new URL(this.url + `/object/upload/sign/${i}`);
            a.searchParams.set("token", t);
            try {
              let e;
              const t = Object.assign({ upsert: le.upsert }, r),
                i = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(t.upsert),
                });
              "undefined" != typeof Blob && n instanceof Blob
                ? ((e = new FormData()),
                  e.append("cacheControl", t.cacheControl),
                  e.append("", n))
                : "undefined" != typeof FormData && n instanceof FormData
                ? ((e = n), e.append("cacheControl", t.cacheControl))
                : ((e = n),
                  (i["cache-control"] = `max-age=${t.cacheControl}`),
                  (i["content-type"] = t.contentType));
              const s = yield this.fetch(a.toString(), {
                  method: "PUT",
                  body: e,
                  headers: i,
                }),
                l = yield s.json();
              if (s.ok)
                return { data: { path: o, fullPath: l.Key }, error: null };
              return { data: null, error: l };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUploadUrl(e) {
          return ae(this, void 0, void 0, function* () {
            try {
              let t = this._getFinalPath(e);
              const n = yield oe(
                  this.fetch,
                  `${this.url}/object/upload/sign/${t}`,
                  {},
                  { headers: this.headers }
                ),
                r = new URL(this.url + n.url),
                o = r.searchParams.get("token");
              if (!o) throw new q("No token returned by API");
              return {
                data: { signedUrl: r.toString(), path: e, token: o },
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        update(e, t, n) {
          return ae(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, t, n);
          });
        }
        move(e, t) {
          return ae(this, void 0, void 0, function* () {
            try {
              return {
                data: yield oe(
                  this.fetch,
                  `${this.url}/object/move`,
                  { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        copy(e, t) {
          return ae(this, void 0, void 0, function* () {
            try {
              return {
                data: {
                  path: (yield oe(
                    this.fetch,
                    `${this.url}/object/copy`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                    },
                    { headers: this.headers }
                  )).Key,
                },
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrl(e, t, n) {
          return ae(this, void 0, void 0, function* () {
            try {
              let r = this._getFinalPath(e),
                o = yield oe(
                  this.fetch,
                  `${this.url}/object/sign/${r}`,
                  Object.assign(
                    { expiresIn: t },
                    (null == n ? void 0 : n.transform)
                      ? { transform: n.transform }
                      : {}
                  ),
                  { headers: this.headers }
                );
              const i = (null == n ? void 0 : n.download)
                ? `&download=${!0 === n.download ? "" : n.download}`
                : "";
              return (
                (o = { signedUrl: encodeURI(`${this.url}${o.signedURL}${i}`) }),
                { data: o, error: null }
              );
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrls(e, t, n) {
          return ae(this, void 0, void 0, function* () {
            try {
              const r = yield oe(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: t, paths: e },
                  { headers: this.headers }
                ),
                o = (null == n ? void 0 : n.download)
                  ? `&download=${!0 === n.download ? "" : n.download}`
                  : "";
              return {
                data: r.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    signedUrl: e.signedURL
                      ? encodeURI(`${this.url}${e.signedURL}${o}`)
                      : null,
                  })
                ),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        download(e, t) {
          return ae(this, void 0, void 0, function* () {
            const n =
                void 0 !== (null == t ? void 0 : t.transform)
                  ? "render/image/authenticated"
                  : "object",
              r = this.transformOptsToQueryString(
                (null == t ? void 0 : t.transform) || {}
              ),
              o = r ? `?${r}` : "";
            try {
              const t = this._getFinalPath(e),
                r = yield re(this.fetch, `${this.url}/${n}/${t}${o}`, {
                  headers: this.headers,
                  noResolveJson: !0,
                });
              return { data: yield r.blob(), error: null };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getPublicUrl(e, t) {
          const n = this._getFinalPath(e),
            r = [],
            o = (null == t ? void 0 : t.download)
              ? `download=${!0 === t.download ? "" : t.download}`
              : "";
          "" !== o && r.push(o);
          const i =
              void 0 !== (null == t ? void 0 : t.transform)
                ? "render/image"
                : "object",
            a = this.transformOptsToQueryString(
              (null == t ? void 0 : t.transform) || {}
            );
          "" !== a && r.push(a);
          let s = r.join("&");
          return (
            "" !== s && (s = `?${s}`),
            {
              data: {
                publicUrl: encodeURI(`${this.url}/${i}/public/${n}${s}`),
              },
            }
          );
        }
        remove(e) {
          return ae(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ie(
                  this.fetch,
                  `${this.url}/object/${this.bucketId}`,
                  { prefixes: e },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        list(e, t, n) {
          return ae(this, void 0, void 0, function* () {
            try {
              const r = Object.assign(Object.assign(Object.assign({}, se), t), {
                prefix: e || "",
              });
              return {
                data: yield oe(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  r,
                  { headers: this.headers },
                  n
                ),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        _getFinalPath(e) {
          return `${this.bucketId}/${e}`;
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        transformOptsToQueryString(e) {
          const t = [];
          return (
            e.width && t.push(`width=${e.width}`),
            e.height && t.push(`height=${e.height}`),
            e.resize && t.push(`resize=${e.resize}`),
            e.format && t.push(`format=${e.format}`),
            e.quality && t.push(`quality=${e.quality}`),
            t.join("&")
          );
        }
      }
      const ce = { "X-Client-Info": "storage-js/2.5.5" };
      var de = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      class fe {
        constructor(e, t = {}, n) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, ce), t)),
            (this.fetch = Y(n));
        }
        listBuckets() {
          return de(this, void 0, void 0, function* () {
            try {
              return {
                data: yield re(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getBucket(e) {
          return de(this, void 0, void 0, function* () {
            try {
              return {
                data: yield re(this.fetch, `${this.url}/bucket/${e}`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createBucket(e, t = { public: !1 }) {
          return de(this, void 0, void 0, function* () {
            try {
              return {
                data: yield oe(
                  this.fetch,
                  `${this.url}/bucket`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        updateBucket(e, t) {
          return de(this, void 0, void 0, function* () {
            try {
              const n = yield (function (e, t, n, r, o) {
                return X(this, void 0, void 0, function* () {
                  return ne(e, "PUT", t, r, o, n);
                });
              })(
                this.fetch,
                `${this.url}/bucket/${e}`,
                {
                  id: e,
                  name: e,
                  public: t.public,
                  file_size_limit: t.fileSizeLimit,
                  allowed_mime_types: t.allowedMimeTypes,
                },
                { headers: this.headers }
              );
              return { data: n, error: null };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        emptyBucket(e) {
          return de(this, void 0, void 0, function* () {
            try {
              return {
                data: yield oe(
                  this.fetch,
                  `${this.url}/bucket/${e}/empty`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        deleteBucket(e) {
          return de(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ie(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (W(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
      }
      class he extends fe {
        constructor(e, t = {}, n) {
          super(e, t, n);
        }
        from(e) {
          return new ue(this.url, this.headers, e, this.fetch);
        }
      }
      let pe = "";
      pe =
        "undefined" != typeof Deno
          ? "deno"
          : "undefined" != typeof document
          ? "web"
          : "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? "react-native"
          : "node";
      const me = { headers: { "X-Client-Info": `supabase-js-${pe}/2.43.2` } },
        ge = { schema: "public" },
        ye = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit",
        },
        ve = {};
      var be = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      const we = (e) => {
          let t;
          return (
            (t = e || ("undefined" == typeof fetch ? u.default : fetch)),
            (...e) => t(...e)
          );
        },
        ke = (e, t, n) => {
          const r = we(n),
            o = "undefined" == typeof Headers ? u.Headers : Headers;
          return (n, i) =>
            be(void 0, void 0, void 0, function* () {
              var a;
              const s = null !== (a = yield t()) && void 0 !== a ? a : e;
              let l = new o(null == i ? void 0 : i.headers);
              return (
                l.has("apikey") || l.set("apikey", e),
                l.has("Authorization") || l.set("Authorization", `Bearer ${s}`),
                r(n, Object.assign(Object.assign({}, i), { headers: l }))
              );
            });
        };
      const xe = "2.64.2",
        _e = { "X-Client-Info": `gotrue-js/${xe}` },
        Se = "X-Supabase-Api-Version",
        Ee = {
          "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01",
          },
        };
      const je = () => "undefined" != typeof document,
        Ce = { tested: !1, writable: !1 },
        Te = () => {
          if (!je()) return !1;
          try {
            if ("object" != typeof globalThis.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          if (Ce.tested) return Ce.writable;
          const e = `lswt-${Math.random()}${Math.random()}`;
          try {
            globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              (Ce.tested = !0),
              (Ce.writable = !0);
          } catch (e) {
            (Ce.tested = !0), (Ce.writable = !1);
          }
          return Ce.writable;
        };
      function Oe(e) {
        const t = {},
          n = new URL(e);
        if (n.hash && "#" === n.hash[0])
          try {
            new URLSearchParams(n.hash.substring(1)).forEach((e, n) => {
              t[n] = e;
            });
          } catch (e) {}
        return (
          n.searchParams.forEach((e, n) => {
            t[n] = e;
          }),
          t
        );
      }
      const Pe = (e) => {
          let t;
          return (
            (t =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(a.bind(a, 907))
                      .then(({ default: t }) => t(...e))
                : fetch)),
            (...e) => t(...e)
          );
        },
        Le = (e) =>
          "object" == typeof e &&
          null !== e &&
          "status" in e &&
          "ok" in e &&
          "json" in e &&
          "function" == typeof e.json,
        Ne = async (e, t, n) => {
          await e.setItem(t, JSON.stringify(n));
        },
        Ie = async (e, t) => {
          const n = await e.getItem(t);
          if (!n) return null;
          try {
            return JSON.parse(n);
          } catch (e) {
            return n;
          }
        },
        Ae = async (e, t) => {
          await e.removeItem(t);
        };
      class ze {
        constructor() {
          this.promise = new ze.promiseConstructor((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      function Re(e) {
        const t = e.split(".");
        if (3 !== t.length)
          throw new Error("JWT is not valid: not a JWT structure");
        if (
          !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
            t[1]
          )
        )
          throw new Error(
            "JWT is not valid: payload is not in base64url format"
          );
        const n = t[1];
        return JSON.parse(
          (function (e) {
            const t =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let n,
              r,
              o,
              i,
              a,
              s,
              l,
              u = "",
              c = 0;
            for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
              (i = t.indexOf(e.charAt(c++))),
                (a = t.indexOf(e.charAt(c++))),
                (s = t.indexOf(e.charAt(c++))),
                (l = t.indexOf(e.charAt(c++))),
                (n = (i << 2) | (a >> 4)),
                (r = ((15 & a) << 4) | (s >> 2)),
                (o = ((3 & s) << 6) | l),
                (u += String.fromCharCode(n)),
                64 != s && 0 != r && (u += String.fromCharCode(r)),
                64 != l && 0 != o && (u += String.fromCharCode(o));
            return u;
          })(n)
        );
      }
      function $e(e) {
        return ("0" + e.toString(16)).substr(-2);
      }
      async function Ue(e) {
        if (
          !(
            "undefined" != typeof crypto &&
            void 0 !== crypto.subtle &&
            "undefined" != typeof TextEncoder
          )
        )
          return (
            console.warn(
              "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            e
          );
        const t = await (async function (e) {
          const t = new TextEncoder().encode(e),
            n = await crypto.subtle.digest("SHA-256", t),
            r = new Uint8Array(n);
          return Array.from(r)
            .map((e) => String.fromCharCode(e))
            .join("");
        })(e);
        return btoa(t)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
      }
      async function Fe(e, t, n = !1) {
        const r = (function () {
          const e = new Uint32Array(56);
          if ("undefined" == typeof crypto) {
            const e =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
              t = e.length;
            let n = "";
            for (let r = 0; r < 56; r++)
              n += e.charAt(Math.floor(Math.random() * t));
            return n;
          }
          return crypto.getRandomValues(e), Array.from(e, $e).join("");
        })();
        let o = r;
        n && (o += "/PASSWORD_RECOVERY"), await Ne(e, `${t}-code-verifier`, o);
        const i = await Ue(r);
        return [i, r === i ? "plain" : "s256"];
      }
      ze.promiseConstructor = Promise;
      const De = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
      class Me extends Error {
        constructor(e, t, n) {
          super(e),
            (this.__isAuthError = !0),
            (this.name = "AuthError"),
            (this.status = t),
            (this.code = n);
        }
      }
      function Be(e) {
        return "object" == typeof e && null !== e && "__isAuthError" in e;
      }
      class Ge extends Me {
        constructor(e, t, n) {
          super(e, t, n),
            (this.name = "AuthApiError"),
            (this.status = t),
            (this.code = n);
        }
      }
      class He extends Me {
        constructor(e, t) {
          super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
        }
      }
      class Ve extends Me {
        constructor(e, t, n, r) {
          super(e, n, r), (this.name = t), (this.status = n);
        }
      }
      class qe extends Ve {
        constructor() {
          super(
            "Auth session missing!",
            "AuthSessionMissingError",
            400,
            void 0
          );
        }
      }
      class We extends Ve {
        constructor() {
          super(
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500,
            void 0
          );
        }
      }
      class Ke extends Ve {
        constructor(e) {
          super(e, "AuthInvalidCredentialsError", 400, void 0);
        }
      }
      class Je extends Ve {
        constructor(e, t = null) {
          super(e, "AuthImplicitGrantRedirectError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class Qe extends Ve {
        constructor(e, t = null) {
          super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class Ye extends Ve {
        constructor(e, t) {
          super(e, "AuthRetryableFetchError", t, void 0);
        }
      }
      function Xe(e) {
        return Be(e) && "AuthRetryableFetchError" === e.name;
      }
      class Ze extends Ve {
        constructor(e, t, n) {
          super(e, "AuthWeakPasswordError", t, "weak_password"),
            (this.reasons = n);
        }
      }
      var et = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      const tt = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        nt = [502, 503, 504];
      async function rt(e) {
        var t;
        if (!Le(e)) throw new Ye(tt(e), 0);
        if (nt.includes(e.status)) throw new Ye(tt(e), e.status);
        let n, r;
        try {
          n = await e.json();
        } catch (e) {
          throw new He(tt(e), e);
        }
        const o = (function (e) {
          const t = e.headers.get(Se);
          if (!t) return null;
          if (!t.match(De)) return null;
          try {
            return new Date(`${t}T00:00:00.0Z`);
          } catch (e) {
            return null;
          }
        })(e);
        if (
          (o &&
          o.getTime() >= Ee["2024-01-01"].timestamp &&
          "object" == typeof n &&
          n &&
          "string" == typeof n.code
            ? (r = n.code)
            : "object" == typeof n &&
              n &&
              "string" == typeof n.error_code &&
              (r = n.error_code),
          r)
        ) {
          if ("weak_password" === r)
            throw new Ze(
              tt(n),
              e.status,
              (null === (t = n.weak_password) || void 0 === t
                ? void 0
                : t.reasons) || []
            );
        } else if (
          "object" == typeof n &&
          n &&
          "object" == typeof n.weak_password &&
          n.weak_password &&
          Array.isArray(n.weak_password.reasons) &&
          n.weak_password.reasons.length &&
          n.weak_password.reasons.reduce(
            (e, t) => e && "string" == typeof t,
            !0
          )
        )
          throw new Ze(tt(n), e.status, n.weak_password.reasons);
        throw new Ge(tt(n), e.status || 500, r);
      }
      const ot = (e, t, n, r) => {
        const o = {
          method: e,
          headers: (null == t ? void 0 : t.headers) || {},
        };
        return "GET" === e
          ? o
          : ((o.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              null == t ? void 0 : t.headers
            )),
            (o.body = JSON.stringify(r)),
            Object.assign(Object.assign({}, o), n));
      };
      async function it(e, t, n, r) {
        var o;
        const i = Object.assign({}, null == r ? void 0 : r.headers);
        i[Se] || (i[Se] = Ee["2024-01-01"].name),
          (null == r ? void 0 : r.jwt) && (i.Authorization = `Bearer ${r.jwt}`);
        const a =
          null !== (o = null == r ? void 0 : r.query) && void 0 !== o ? o : {};
        (null == r ? void 0 : r.redirectTo) && (a.redirect_to = r.redirectTo);
        const s = Object.keys(a).length
            ? "?" + new URLSearchParams(a).toString()
            : "",
          l = await (async function (e, t, n, r, o, i) {
            const a = ot(t, r, o, i);
            let s;
            try {
              s = await e(n, Object.assign({}, a));
            } catch (e) {
              throw (console.error(e), new Ye(tt(e), 0));
            }
            s.ok || (await rt(s));
            if (null == r ? void 0 : r.noResolveJson) return s;
            try {
              return await s.json();
            } catch (e) {
              await rt(e);
            }
          })(
            e,
            t,
            n + s,
            { headers: i, noResolveJson: null == r ? void 0 : r.noResolveJson },
            {},
            null == r ? void 0 : r.body
          );
        return (null == r ? void 0 : r.xform)
          ? null == r
            ? void 0
            : r.xform(l)
          : { data: Object.assign({}, l), error: null };
      }
      function at(e) {
        var t;
        let n = null;
        var r;
        (function (e) {
          return e.access_token && e.refresh_token && e.expires_in;
        })(e) &&
          ((n = Object.assign({}, e)),
          e.expires_at ||
            (n.expires_at =
              ((r = e.expires_in), Math.round(Date.now() / 1e3) + r)));
        return {
          data: {
            session: n,
            user: null !== (t = e.user) && void 0 !== t ? t : e,
          },
          error: null,
        };
      }
      function st(e) {
        const t = at(e);
        return (
          !t.error &&
            e.weak_password &&
            "object" == typeof e.weak_password &&
            Array.isArray(e.weak_password.reasons) &&
            e.weak_password.reasons.length &&
            e.weak_password.message &&
            "string" == typeof e.weak_password.message &&
            e.weak_password.reasons.reduce(
              (e, t) => e && "string" == typeof t,
              !0
            ) &&
            (t.data.weak_password = e.weak_password),
          t
        );
      }
      function lt(e) {
        var t;
        return {
          data: { user: null !== (t = e.user) && void 0 !== t ? t : e },
          error: null,
        };
      }
      function ut(e) {
        return { data: e, error: null };
      }
      function ct(e) {
        const {
            action_link: t,
            email_otp: n,
            hashed_token: r,
            redirect_to: o,
            verification_type: i,
          } = e,
          a = et(e, [
            "action_link",
            "email_otp",
            "hashed_token",
            "redirect_to",
            "verification_type",
          ]);
        return {
          data: {
            properties: {
              action_link: t,
              email_otp: n,
              hashed_token: r,
              redirect_to: o,
              verification_type: i,
            },
            user: Object.assign({}, a),
          },
          error: null,
        };
      }
      function dt(e) {
        return e;
      }
      var ft = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      class ht {
        constructor({ url: e = "", headers: t = {}, fetch: n }) {
          (this.url = e),
            (this.headers = t),
            (this.fetch = Pe(n)),
            (this.mfa = {
              listFactors: this._listFactors.bind(this),
              deleteFactor: this._deleteFactor.bind(this),
            });
        }
        async signOut(e, t = "global") {
          try {
            return (
              await it(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0,
              }),
              { data: null, error: null }
            );
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
        async inviteUserByEmail(e, t = {}) {
          try {
            return await it(this.fetch, "POST", `${this.url}/invite`, {
              body: { email: e, data: t.data },
              headers: this.headers,
              redirectTo: t.redirectTo,
              xform: lt,
            });
          } catch (e) {
            if (Be(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async generateLink(e) {
          try {
            const { options: t } = e,
              n = ft(e, ["options"]),
              r = Object.assign(Object.assign({}, n), t);
            return (
              "newEmail" in n &&
                ((r.new_email = null == n ? void 0 : n.newEmail),
                delete r.newEmail),
              await it(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: r,
                headers: this.headers,
                xform: ct,
                redirectTo: null == t ? void 0 : t.redirectTo,
              })
            );
          } catch (e) {
            if (Be(e))
              return { data: { properties: null, user: null }, error: e };
            throw e;
          }
        }
        async createUser(e) {
          try {
            return await it(this.fetch, "POST", `${this.url}/admin/users`, {
              body: e,
              headers: this.headers,
              xform: lt,
            });
          } catch (e) {
            if (Be(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async listUsers(e) {
          var t, n, r, o, i, a, s;
          try {
            const l = { nextPage: null, lastPage: 0, total: 0 },
              u = await it(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    null !==
                      (n =
                        null === (t = null == e ? void 0 : e.page) ||
                        void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== n
                      ? n
                      : "",
                  per_page:
                    null !==
                      (o =
                        null === (r = null == e ? void 0 : e.perPage) ||
                        void 0 === r
                          ? void 0
                          : r.toString()) && void 0 !== o
                      ? o
                      : "",
                },
                xform: dt,
              });
            if (u.error) throw u.error;
            const c = await u.json(),
              d =
                null !== (i = u.headers.get("x-total-count")) && void 0 !== i
                  ? i
                  : 0,
              f =
                null !==
                  (s =
                    null === (a = u.headers.get("link")) || void 0 === a
                      ? void 0
                      : a.split(",")) && void 0 !== s
                  ? s
                  : [];
            return (
              f.length > 0 &&
                (f.forEach((e) => {
                  const t = parseInt(
                      e.split(";")[0].split("=")[1].substring(0, 1)
                    ),
                    n = JSON.parse(e.split(";")[1].split("=")[1]);
                  l[`${n}Page`] = t;
                }),
                (l.total = parseInt(d))),
              { data: Object.assign(Object.assign({}, c), l), error: null }
            );
          } catch (e) {
            if (Be(e)) return { data: { users: [] }, error: e };
            throw e;
          }
        }
        async getUserById(e) {
          try {
            return await it(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
              headers: this.headers,
              xform: lt,
            });
          } catch (e) {
            if (Be(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUserById(e, t) {
          try {
            return await it(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
              body: t,
              headers: this.headers,
              xform: lt,
            });
          } catch (e) {
            if (Be(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async deleteUser(e, t = !1) {
          try {
            return await it(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e}`,
              {
                headers: this.headers,
                body: { should_soft_delete: t },
                xform: lt,
              }
            );
          } catch (e) {
            if (Be(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async _listFactors(e) {
          try {
            const { data: t, error: n } = await it(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e.userId}/factors`,
              {
                headers: this.headers,
                xform: (e) => ({ data: { factors: e }, error: null }),
              }
            );
            return { data: t, error: n };
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _deleteFactor(e) {
          try {
            return {
              data: await it(
                this.fetch,
                "DELETE",
                `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                { headers: this.headers }
              ),
              error: null,
            };
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
      }
      const pt = {
        getItem: (e) => (Te() ? globalThis.localStorage.getItem(e) : null),
        setItem: (e, t) => {
          Te() && globalThis.localStorage.setItem(e, t);
        },
        removeItem: (e) => {
          Te() && globalThis.localStorage.removeItem(e);
        },
      };
      function mt(e = {}) {
        return {
          getItem: (t) => e[t] || null,
          setItem: (t, n) => {
            e[t] = n;
          },
          removeItem: (t) => {
            delete e[t];
          },
        };
      }
      const gt = !!(
        globalThis &&
        Te() &&
        globalThis.localStorage &&
        "true" ===
          globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")
      );
      class yt extends Error {
        constructor(e) {
          super(e), (this.isAcquireTimeout = !0);
        }
      }
      class vt extends yt {}
      async function bt(e, t, n) {
        gt &&
          console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
        const r = new globalThis.AbortController();
        return (
          t > 0 &&
            setTimeout(() => {
              r.abort(),
                gt &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock acquire timed out",
                    e
                  );
            }, t),
          await globalThis.navigator.locks.request(
            e,
            0 === t
              ? { mode: "exclusive", ifAvailable: !0 }
              : { mode: "exclusive", signal: r.signal },
            async (r) => {
              if (!r) {
                if (0 === t)
                  throw (
                    (gt &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: not immediately available",
                        e
                      ),
                    new vt(
                      `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                    ))
                  );
                if (gt)
                  try {
                    const e = await globalThis.navigator.locks.query();
                    console.log(
                      "@supabase/gotrue-js: Navigator LockManager state",
                      JSON.stringify(e, null, "  ")
                    );
                  } catch (e) {
                    console.warn(
                      "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                      e
                    );
                  }
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                  ),
                  await n()
                );
              }
              gt &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: acquired",
                  e,
                  r.name
                );
              try {
                return await n();
              } finally {
                gt &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: released",
                    e,
                    r.name
                  );
              }
            }
          )
        );
      }
      !(function () {
        if ("object" != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this;
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__;
          } catch (e) {
            "undefined" != typeof self && (self.globalThis = self);
          }
      })();
      const wt = {
          url: "http://localhost:9999",
          storageKey: "supabase.auth.token",
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          headers: _e,
          flowType: "implicit",
          debug: !1,
          hasCustomAuthorizationHeader: !1,
        },
        kt = 3e4;
      async function xt(e, t, n) {
        return await n();
      }
      class _t {
        constructor(e) {
          var t, n;
          (this.memoryStorage = null),
            (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.hasCustomAuthorizationHeader = !1),
            (this.suppressGetSessionWarning = !1),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.logger = console.log),
            (this.instanceID = _t.nextInstanceID),
            (_t.nextInstanceID += 1),
            this.instanceID > 0 &&
              je() &&
              console.warn(
                "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
              );
          const r = Object.assign(Object.assign({}, wt), e);
          if (
            ((this.logDebugMessages = !!r.debug),
            "function" == typeof r.debug && (this.logger = r.debug),
            (this.persistSession = r.persistSession),
            (this.storageKey = r.storageKey),
            (this.autoRefreshToken = r.autoRefreshToken),
            (this.admin = new ht({
              url: r.url,
              headers: r.headers,
              fetch: r.fetch,
            })),
            (this.url = r.url),
            (this.headers = r.headers),
            (this.fetch = Pe(r.fetch)),
            (this.lock = r.lock || xt),
            (this.detectSessionInUrl = r.detectSessionInUrl),
            (this.flowType = r.flowType),
            (this.hasCustomAuthorizationHeader =
              r.hasCustomAuthorizationHeader),
            r.lock
              ? (this.lock = r.lock)
              : je() &&
                (null ===
                  (t =
                    null === globalThis || void 0 === globalThis
                      ? void 0
                      : globalThis.navigator) || void 0 === t
                  ? void 0
                  : t.locks)
              ? (this.lock = bt)
              : (this.lock = xt),
            (this.mfa = {
              verify: this._verify.bind(this),
              enroll: this._enroll.bind(this),
              unenroll: this._unenroll.bind(this),
              challenge: this._challenge.bind(this),
              listFactors: this._listFactors.bind(this),
              challengeAndVerify: this._challengeAndVerify.bind(this),
              getAuthenticatorAssuranceLevel:
                this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession
              ? r.storage
                ? (this.storage = r.storage)
                : Te()
                ? (this.storage = pt)
                : ((this.memoryStorage = {}),
                  (this.storage = mt(this.memoryStorage)))
              : ((this.memoryStorage = {}),
                (this.storage = mt(this.memoryStorage))),
            je() &&
              globalThis.BroadcastChannel &&
              this.persistSession &&
              this.storageKey)
          ) {
            try {
              this.broadcastChannel = new globalThis.BroadcastChannel(
                this.storageKey
              );
            } catch (e) {
              console.error(
                "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                e
              );
            }
            null === (n = this.broadcastChannel) ||
              void 0 === n ||
              n.addEventListener("message", async (e) => {
                this._debug(
                  "received broadcast notification from other tab or client",
                  e
                ),
                  await this._notifyAllSubscribers(
                    e.data.event,
                    e.data.session,
                    !1
                  );
              });
          }
          this.initialize();
        }
        _debug(...e) {
          return (
            this.logDebugMessages &&
              this.logger(
                `GoTrueClient@${
                  this.instanceID
                } (${xe}) ${new Date().toISOString()}`,
                ...e
              ),
            this
          );
        }
        async initialize() {
          return (
            this.initializePromise ||
              (this.initializePromise = (async () =>
                await this._acquireLock(
                  -1,
                  async () => await this._initialize()
                ))()),
            await this.initializePromise
          );
        }
        async _initialize() {
          try {
            const e = !!je() && (await this._isPKCEFlow());
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", e),
              e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
            ) {
              const { data: t, error: n } = await this._getSessionFromURL(e);
              if (n)
                return (
                  this._debug(
                    "#_initialize()",
                    "error detecting session from URL",
                    n
                  ),
                  "Identity is already linked" ===
                    (null == n ? void 0 : n.message) ||
                    "Identity is already linked to another user" ===
                      (null == n ? void 0 : n.message) ||
                    (await this._removeSession()),
                  { error: n }
                );
              const { session: r, redirectType: o } = t;
              return (
                this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  r,
                  "redirect type",
                  o
                ),
                await this._saveSession(r),
                setTimeout(async () => {
                  "recovery" === o
                    ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", r)
                    : await this._notifyAllSubscribers("SIGNED_IN", r);
                }, 0),
                { error: null }
              );
            }
            return await this._recoverAndRefresh(), { error: null };
          } catch (e) {
            return Be(e)
              ? { error: e }
              : { error: new He("Unexpected error during initialization", e) };
          } finally {
            await this._handleVisibilityChange(),
              this._debug("#_initialize()", "end");
          }
        }
        async signInAnonymously(e) {
          var t, n, r;
          try {
            await this._removeSession();
            const o = await it(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                  data:
                    null !==
                      (n =
                        null === (t = null == e ? void 0 : e.options) ||
                        void 0 === t
                          ? void 0
                          : t.data) && void 0 !== n
                      ? n
                      : {},
                  gotrue_meta_security: {
                    captcha_token:
                      null === (r = null == e ? void 0 : e.options) ||
                      void 0 === r
                        ? void 0
                        : r.captchaToken,
                  },
                },
                xform: at,
              }),
              { data: i, error: a } = o;
            if (a || !i)
              return { data: { user: null, session: null }, error: a };
            const s = i.session,
              l = i.user;
            return (
              i.session &&
                (await this._saveSession(i.session),
                await this._notifyAllSubscribers("SIGNED_IN", s)),
              { data: { user: l, session: s }, error: null }
            );
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signUp(e) {
          var t, n, r;
          try {
            let o;
            if ((await this._removeSession(), "email" in e)) {
              const { email: n, password: r, options: i } = e;
              let a = null,
                s = null;
              "pkce" === this.flowType &&
                ([a, s] = await Fe(this.storage, this.storageKey)),
                (o = await it(this.fetch, "POST", `${this.url}/signup`, {
                  headers: this.headers,
                  redirectTo: null == i ? void 0 : i.emailRedirectTo,
                  body: {
                    email: n,
                    password: r,
                    data:
                      null !== (t = null == i ? void 0 : i.data) && void 0 !== t
                        ? t
                        : {},
                    gotrue_meta_security: {
                      captcha_token: null == i ? void 0 : i.captchaToken,
                    },
                    code_challenge: a,
                    code_challenge_method: s,
                  },
                  xform: at,
                }));
            } else {
              if (!("phone" in e))
                throw new Ke(
                  "You must provide either an email or phone number and a password"
                );
              {
                const { phone: t, password: i, options: a } = e;
                o = await it(this.fetch, "POST", `${this.url}/signup`, {
                  headers: this.headers,
                  body: {
                    phone: t,
                    password: i,
                    data:
                      null !== (n = null == a ? void 0 : a.data) && void 0 !== n
                        ? n
                        : {},
                    channel:
                      null !== (r = null == a ? void 0 : a.channel) &&
                      void 0 !== r
                        ? r
                        : "sms",
                    gotrue_meta_security: {
                      captcha_token: null == a ? void 0 : a.captchaToken,
                    },
                  },
                  xform: at,
                });
              }
            }
            const { data: i, error: a } = o;
            if (a || !i)
              return { data: { user: null, session: null }, error: a };
            const s = i.session,
              l = i.user;
            return (
              i.session &&
                (await this._saveSession(i.session),
                await this._notifyAllSubscribers("SIGNED_IN", s)),
              { data: { user: l, session: s }, error: null }
            );
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithPassword(e) {
          try {
            let t;
            if ((await this._removeSession(), "email" in e)) {
              const { email: n, password: r, options: o } = e;
              t = await it(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    email: n,
                    password: r,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                  },
                  xform: st,
                }
              );
            } else {
              if (!("phone" in e))
                throw new Ke(
                  "You must provide either an email or phone number and a password"
                );
              {
                const { phone: n, password: r, options: o } = e;
                t = await it(
                  this.fetch,
                  "POST",
                  `${this.url}/token?grant_type=password`,
                  {
                    headers: this.headers,
                    body: {
                      phone: n,
                      password: r,
                      gotrue_meta_security: {
                        captcha_token: null == o ? void 0 : o.captchaToken,
                      },
                    },
                    xform: st,
                  }
                );
              }
            }
            const { data: n, error: r } = t;
            return r
              ? { data: { user: null, session: null }, error: r }
              : n && n.session && n.user
              ? (n.session &&
                  (await this._saveSession(n.session),
                  await this._notifyAllSubscribers("SIGNED_IN", n.session)),
                {
                  data: Object.assign(
                    { user: n.user, session: n.session },
                    n.weak_password ? { weakPassword: n.weak_password } : null
                  ),
                  error: r,
                })
              : { data: { user: null, session: null }, error: new We() };
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOAuth(e) {
          var t, n, r, o;
          return (
            await this._removeSession(),
            await this._handleProviderSignIn(e.provider, {
              redirectTo:
                null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.redirectTo,
              scopes:
                null === (n = e.options) || void 0 === n ? void 0 : n.scopes,
              queryParams:
                null === (r = e.options) || void 0 === r
                  ? void 0
                  : r.queryParams,
              skipBrowserRedirect:
                null === (o = e.options) || void 0 === o
                  ? void 0
                  : o.skipBrowserRedirect,
            })
          );
        }
        async exchangeCodeForSession(e) {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          );
        }
        async _exchangeCodeForSession(e) {
          const t = await Ie(this.storage, `${this.storageKey}-code-verifier`),
            [n, r] = (null != t ? t : "").split("/"),
            { data: o, error: i } = await it(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=pkce`,
              {
                headers: this.headers,
                body: { auth_code: e, code_verifier: n },
                xform: at,
              }
            );
          return (
            await Ae(this.storage, `${this.storageKey}-code-verifier`),
            i
              ? {
                  data: { user: null, session: null, redirectType: null },
                  error: i,
                }
              : o && o.session && o.user
              ? (o.session &&
                  (await this._saveSession(o.session),
                  await this._notifyAllSubscribers("SIGNED_IN", o.session)),
                {
                  data: Object.assign(Object.assign({}, o), {
                    redirectType: null != r ? r : null,
                  }),
                  error: i,
                })
              : {
                  data: { user: null, session: null, redirectType: null },
                  error: new We(),
                }
          );
        }
        async signInWithIdToken(e) {
          await this._removeSession();
          try {
            const {
                options: t,
                provider: n,
                token: r,
                access_token: o,
                nonce: i,
              } = e,
              a = await it(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=id_token`,
                {
                  headers: this.headers,
                  body: {
                    provider: n,
                    id_token: r,
                    access_token: o,
                    nonce: i,
                    gotrue_meta_security: {
                      captcha_token: null == t ? void 0 : t.captchaToken,
                    },
                  },
                  xform: at,
                }
              ),
              { data: s, error: l } = a;
            return l
              ? { data: { user: null, session: null }, error: l }
              : s && s.session && s.user
              ? (s.session &&
                  (await this._saveSession(s.session),
                  await this._notifyAllSubscribers("SIGNED_IN", s.session)),
                { data: s, error: l })
              : { data: { user: null, session: null }, error: new We() };
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOtp(e) {
          var t, n, r, o, i;
          try {
            if ((await this._removeSession(), "email" in e)) {
              const { email: r, options: o } = e;
              let i = null,
                a = null;
              "pkce" === this.flowType &&
                ([i, a] = await Fe(this.storage, this.storageKey));
              const { error: s } = await it(
                this.fetch,
                "POST",
                `${this.url}/otp`,
                {
                  headers: this.headers,
                  body: {
                    email: r,
                    data:
                      null !== (t = null == o ? void 0 : o.data) && void 0 !== t
                        ? t
                        : {},
                    create_user:
                      null === (n = null == o ? void 0 : o.shouldCreateUser) ||
                      void 0 === n ||
                      n,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                    code_challenge: i,
                    code_challenge_method: a,
                  },
                  redirectTo: null == o ? void 0 : o.emailRedirectTo,
                }
              );
              return { data: { user: null, session: null }, error: s };
            }
            if ("phone" in e) {
              const { phone: t, options: n } = e,
                { data: a, error: s } = await it(
                  this.fetch,
                  "POST",
                  `${this.url}/otp`,
                  {
                    headers: this.headers,
                    body: {
                      phone: t,
                      data:
                        null !== (r = null == n ? void 0 : n.data) &&
                        void 0 !== r
                          ? r
                          : {},
                      create_user:
                        null ===
                          (o = null == n ? void 0 : n.shouldCreateUser) ||
                        void 0 === o ||
                        o,
                      gotrue_meta_security: {
                        captcha_token: null == n ? void 0 : n.captchaToken,
                      },
                      channel:
                        null !== (i = null == n ? void 0 : n.channel) &&
                        void 0 !== i
                          ? i
                          : "sms",
                    },
                  }
                );
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == a ? void 0 : a.message_id,
                },
                error: s,
              };
            }
            throw new Ke("You must provide either an email or phone number.");
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async verifyOtp(e) {
          var t, n;
          try {
            let r, o;
            "email_change" !== e.type &&
              "phone_change" !== e.type &&
              (await this._removeSession()),
              "options" in e &&
                ((r =
                  null === (t = e.options) || void 0 === t
                    ? void 0
                    : t.redirectTo),
                (o =
                  null === (n = e.options) || void 0 === n
                    ? void 0
                    : n.captchaToken));
            const { data: i, error: a } = await it(
              this.fetch,
              "POST",
              `${this.url}/verify`,
              {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                  gotrue_meta_security: { captcha_token: o },
                }),
                redirectTo: r,
                xform: at,
              }
            );
            if (a) throw a;
            if (!i) throw new Error("An error occurred on token verification.");
            const s = i.session,
              l = i.user;
            return (
              (null == s ? void 0 : s.access_token) &&
                (await this._saveSession(s),
                await this._notifyAllSubscribers(
                  "recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                  s
                )),
              { data: { user: l, session: s }, error: null }
            );
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithSSO(e) {
          var t, n, r;
          try {
            await this._removeSession();
            let o = null,
              i = null;
            return (
              "pkce" === this.flowType &&
                ([o, i] = await Fe(this.storage, this.storageKey)),
              await it(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {},
                          "providerId" in e
                            ? { provider_id: e.providerId }
                            : null
                        ),
                        "domain" in e ? { domain: e.domain } : null
                      ),
                      {
                        redirect_to:
                          null !==
                            (n =
                              null === (t = e.options) || void 0 === t
                                ? void 0
                                : t.redirectTo) && void 0 !== n
                            ? n
                            : void 0,
                      }
                    ),
                    (
                      null === (r = null == e ? void 0 : e.options) ||
                      void 0 === r
                        ? void 0
                        : r.captchaToken
                    )
                      ? {
                          gotrue_meta_security: {
                            captcha_token: e.options.captchaToken,
                          },
                        }
                      : null
                  ),
                  {
                    skip_http_redirect: !0,
                    code_challenge: o,
                    code_challenge_method: i,
                  }
                ),
                headers: this.headers,
                xform: ut,
              })
            );
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
        async reauthenticate() {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._reauthenticate()
            )
          );
        }
        async _reauthenticate() {
          try {
            return await this._useSession(async (e) => {
              const {
                data: { session: t },
                error: n,
              } = e;
              if (n) throw n;
              if (!t) throw new qe();
              const { error: r } = await it(
                this.fetch,
                "GET",
                `${this.url}/reauthenticate`,
                { headers: this.headers, jwt: t.access_token }
              );
              return { data: { user: null, session: null }, error: r };
            });
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async resend(e) {
          try {
            "email_change" != e.type &&
              "phone_change" != e.type &&
              (await this._removeSession());
            const t = `${this.url}/resend`;
            if ("email" in e) {
              const { email: n, type: r, options: o } = e,
                { error: i } = await it(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    email: n,
                    type: r,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                  },
                  redirectTo: null == o ? void 0 : o.emailRedirectTo,
                });
              return { data: { user: null, session: null }, error: i };
            }
            if ("phone" in e) {
              const { phone: n, type: r, options: o } = e,
                { data: i, error: a } = await it(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    phone: n,
                    type: r,
                    gotrue_meta_security: {
                      captcha_token: null == o ? void 0 : o.captchaToken,
                    },
                  },
                });
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == i ? void 0 : i.message_id,
                },
                error: a,
              };
            }
            throw new Ke(
              "You must provide either an email or phone number and a type"
            );
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async getSession() {
          await this.initializePromise;
          return await this._acquireLock(-1, async () =>
            this._useSession(async (e) => e)
          );
        }
        async _acquireLock(e, t) {
          this._debug("#_acquireLock", "begin", e);
          try {
            if (this.lockAcquired) {
              const e = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
                n = (async () => (await e, await t()))();
              return (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await n;
                    } catch (e) {}
                  })()
                ),
                n
              );
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
              this._debug(
                "#_acquireLock",
                "lock acquired for storage key",
                this.storageKey
              );
              try {
                this.lockAcquired = !0;
                const e = t();
                for (
                  this.pendingInLock.push(
                    (async () => {
                      try {
                        await e;
                      } catch (e) {}
                    })()
                  ),
                    await e;
                  this.pendingInLock.length;

                ) {
                  const e = [...this.pendingInLock];
                  await Promise.all(e), this.pendingInLock.splice(0, e.length);
                }
                return await e;
              } finally {
                this._debug(
                  "#_acquireLock",
                  "lock released for storage key",
                  this.storageKey
                ),
                  (this.lockAcquired = !1);
              }
            });
          } finally {
            this._debug("#_acquireLock", "end");
          }
        }
        async _useSession(e) {
          this._debug("#_useSession", "begin");
          try {
            const t = await this.__loadSession();
            return await e(t);
          } finally {
            this._debug("#_useSession", "end");
          }
        }
        async __loadSession() {
          this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
              this._debug(
                "#__loadSession()",
                "used outside of an acquired lock!",
                new Error().stack
              );
          try {
            let e = null;
            const t = await Ie(this.storage, this.storageKey);
            if (
              (this._debug("#getSession()", "session from storage", t),
              null !== t &&
                (this._isValidSession(t)
                  ? (e = t)
                  : (this._debug(
                      "#getSession()",
                      "session from storage is not valid"
                    ),
                    await this._removeSession())),
              !e)
            )
              return { data: { session: null }, error: null };
            const n = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (
              (this._debug(
                "#__loadSession()",
                `session has${n ? "" : " not"} expired`,
                "expires_at",
                e.expires_at
              ),
              !n)
            ) {
              if (this.storage.isServer) {
                const t = this.suppressGetSessionWarning;
                e = new Proxy(e, {
                  get: (e, n, r) => (
                    t ||
                      "user" !== n ||
                      console.warn(
                        "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                      ),
                    Reflect.get(e, n, r)
                  ),
                });
              }
              return { data: { session: e }, error: null };
            }
            const { session: r, error: o } = await this._callRefreshToken(
              e.refresh_token
            );
            return o
              ? { data: { session: null }, error: o }
              : { data: { session: r }, error: null };
          } finally {
            this._debug("#__loadSession()", "end");
          }
        }
        async getUser(e) {
          if (e) return await this._getUser(e);
          await this.initializePromise;
          return await this._acquireLock(-1, async () => await this._getUser());
        }
        async _getUser(e) {
          try {
            return e
              ? await it(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt: e,
                  xform: lt,
                })
              : await this._useSession(async (e) => {
                  var t, n, r;
                  const { data: o, error: i } = e;
                  if (i) throw i;
                  return (null === (t = o.session) || void 0 === t
                    ? void 0
                    : t.access_token) || this.hasCustomAuthorizationHeader
                    ? await it(this.fetch, "GET", `${this.url}/user`, {
                        headers: this.headers,
                        jwt:
                          null !==
                            (r =
                              null === (n = o.session) || void 0 === n
                                ? void 0
                                : n.access_token) && void 0 !== r
                            ? r
                            : void 0,
                        xform: lt,
                      })
                    : { data: { user: null }, error: new qe() };
                });
          } catch (e) {
            if (Be(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUser(e, t = {}) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._updateUser(e, t)
            )
          );
        }
        async _updateUser(e, t = {}) {
          try {
            return await this._useSession(async (n) => {
              const { data: r, error: o } = n;
              if (o) throw o;
              if (!r.session) throw new qe();
              const i = r.session;
              let a = null,
                s = null;
              "pkce" === this.flowType &&
                null != e.email &&
                ([a, s] = await Fe(this.storage, this.storageKey));
              const { data: l, error: u } = await it(
                this.fetch,
                "PUT",
                `${this.url}/user`,
                {
                  headers: this.headers,
                  redirectTo: null == t ? void 0 : t.emailRedirectTo,
                  body: Object.assign(Object.assign({}, e), {
                    code_challenge: a,
                    code_challenge_method: s,
                  }),
                  jwt: i.access_token,
                  xform: lt,
                }
              );
              if (u) throw u;
              return (
                (i.user = l.user),
                await this._saveSession(i),
                await this._notifyAllSubscribers("USER_UPDATED", i),
                { data: { user: i.user }, error: null }
              );
            });
          } catch (e) {
            if (Be(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        _decodeJWT(e) {
          return Re(e);
        }
        async setSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._setSession(e))
          );
        }
        async _setSession(e) {
          try {
            if (!e.access_token || !e.refresh_token) throw new qe();
            const t = Date.now() / 1e3;
            let n = t,
              r = !0,
              o = null;
            const i = Re(e.access_token);
            if ((i.exp && ((n = i.exp), (r = n <= t)), r)) {
              const { session: t, error: n } = await this._callRefreshToken(
                e.refresh_token
              );
              if (n) return { data: { user: null, session: null }, error: n };
              if (!t)
                return { data: { user: null, session: null }, error: null };
              o = t;
            } else {
              const { data: r, error: i } = await this._getUser(e.access_token);
              if (i) throw i;
              (o = {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                user: r.user,
                token_type: "bearer",
                expires_in: n - t,
                expires_at: n,
              }),
                await this._saveSession(o),
                await this._notifyAllSubscribers("SIGNED_IN", o);
            }
            return { data: { user: o.user, session: o }, error: null };
          } catch (e) {
            if (Be(e)) return { data: { session: null, user: null }, error: e };
            throw e;
          }
        }
        async refreshSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._refreshSession(e)
            )
          );
        }
        async _refreshSession(e) {
          try {
            return await this._useSession(async (t) => {
              var n;
              if (!e) {
                const { data: r, error: o } = t;
                if (o) throw o;
                e = null !== (n = r.session) && void 0 !== n ? n : void 0;
              }
              if (!(null == e ? void 0 : e.refresh_token)) throw new qe();
              const { session: r, error: o } = await this._callRefreshToken(
                e.refresh_token
              );
              return o
                ? { data: { user: null, session: null }, error: o }
                : r
                ? { data: { user: r.user, session: r }, error: null }
                : { data: { user: null, session: null }, error: null };
            });
          } catch (e) {
            if (Be(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async _getSessionFromURL(e) {
          try {
            if (!je()) throw new Je("No browser detected.");
            if ("implicit" === this.flowType && !this._isImplicitGrantFlow())
              throw new Je("Not a valid implicit grant flow url.");
            if ("pkce" == this.flowType && !e)
              throw new Qe("Not a valid PKCE flow url.");
            const t = Oe(window.location.href);
            if (e) {
              if (!t.code) throw new Qe("No code detected.");
              const { data: e, error: n } = await this._exchangeCodeForSession(
                t.code
              );
              if (n) throw n;
              const r = new URL(window.location.href);
              return (
                r.searchParams.delete("code"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  r.toString()
                ),
                {
                  data: { session: e.session, redirectType: null },
                  error: null,
                }
              );
            }
            if (t.error || t.error_description || t.error_code)
              throw new Je(
                t.error_description ||
                  "Error in URL with unspecified error_description",
                {
                  error: t.error || "unspecified_error",
                  code: t.error_code || "unspecified_code",
                }
              );
            const {
              provider_token: n,
              provider_refresh_token: r,
              access_token: o,
              refresh_token: i,
              expires_in: a,
              expires_at: s,
              token_type: l,
            } = t;
            if (!(o && a && i && l)) throw new Je("No session defined in URL");
            const u = Math.round(Date.now() / 1e3),
              c = parseInt(a);
            let d = u + c;
            s && (d = parseInt(s));
            const f = d - u;
            1e3 * f <= kt &&
              console.warn(
                `@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${c}s`
              );
            const h = d - c;
            u - h >= 120
              ? console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                  h,
                  d,
                  u
                )
              : u - h < 0 &&
                console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                  h,
                  d,
                  u
                );
            const { data: p, error: m } = await this._getUser(o);
            if (m) throw m;
            const g = {
              provider_token: n,
              provider_refresh_token: r,
              access_token: o,
              expires_in: c,
              expires_at: d,
              refresh_token: i,
              token_type: l,
              user: p.user,
            };
            return (
              (window.location.hash = ""),
              this._debug(
                "#_getSessionFromURL()",
                "clearing window.location.hash"
              ),
              { data: { session: g, redirectType: t.type }, error: null }
            );
          } catch (e) {
            if (Be(e))
              return { data: { session: null, redirectType: null }, error: e };
            throw e;
          }
        }
        _isImplicitGrantFlow() {
          const e = Oe(window.location.href);
          return !(!je() || (!e.access_token && !e.error_description));
        }
        async _isPKCEFlow() {
          const e = Oe(window.location.href),
            t = await Ie(this.storage, `${this.storageKey}-code-verifier`);
          return !(!e.code || !t);
        }
        async signOut(e = { scope: "global" }) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._signOut(e))
          );
        }
        async _signOut({ scope: e } = { scope: "global" }) {
          return await this._useSession(async (t) => {
            var n;
            const { data: r, error: o } = t;
            if (o) return { error: o };
            const i =
              null === (n = r.session) || void 0 === n
                ? void 0
                : n.access_token;
            if (i) {
              const { error: t } = await this.admin.signOut(i, e);
              if (
                t &&
                (!(function (e) {
                  return Be(e) && "AuthApiError" === e.name;
                })(t) ||
                  (404 !== t.status && 401 !== t.status && 403 !== t.status))
              )
                return { error: t };
            }
            return (
              "others" !== e &&
                (await this._removeSession(),
                await Ae(this.storage, `${this.storageKey}-code-verifier`),
                await this._notifyAllSubscribers("SIGNED_OUT", null)),
              { error: null }
            );
          });
        }
        onAuthStateChange(e) {
          const t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                const t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            ),
            n = {
              id: t,
              callback: e,
              unsubscribe: () => {
                this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  t
                ),
                  this.stateChangeEmitters.delete(t);
              },
            };
          return (
            this._debug(
              "#onAuthStateChange()",
              "registered callback with id",
              t
            ),
            this.stateChangeEmitters.set(t, n),
            (async () => {
              await this.initializePromise,
                await this._acquireLock(-1, async () => {
                  this._emitInitialSession(t);
                });
            })(),
            { data: { subscription: n } }
          );
        }
        async _emitInitialSession(e) {
          return await this._useSession(async (t) => {
            var n, r;
            try {
              const {
                data: { session: r },
                error: o,
              } = t;
              if (o) throw o;
              await (null === (n = this.stateChangeEmitters.get(e)) ||
              void 0 === n
                ? void 0
                : n.callback("INITIAL_SESSION", r)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", r);
            } catch (t) {
              await (null === (r = this.stateChangeEmitters.get(e)) ||
              void 0 === r
                ? void 0
                : r.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                console.error(t);
            }
          });
        }
        async resetPasswordForEmail(e, t = {}) {
          let n = null,
            r = null;
          "pkce" === this.flowType &&
            ([n, r] = await Fe(this.storage, this.storageKey, !0));
          try {
            return await it(this.fetch, "POST", `${this.url}/recover`, {
              body: {
                email: e,
                code_challenge: n,
                code_challenge_method: r,
                gotrue_meta_security: { captcha_token: t.captchaToken },
              },
              headers: this.headers,
              redirectTo: t.redirectTo,
            });
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
        async getUserIdentities() {
          var e;
          try {
            const { data: t, error: n } = await this.getUser();
            if (n) throw n;
            return {
              data: {
                identities:
                  null !== (e = t.user.identities) && void 0 !== e ? e : [],
              },
              error: null,
            };
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
        async linkIdentity(e) {
          var t;
          try {
            const { data: n, error: r } = await this._useSession(async (t) => {
              var n, r, o, i, a;
              const { data: s, error: l } = t;
              if (l) throw l;
              const u = await this._getUrlForProvider(
                `${this.url}/user/identities/authorize`,
                e.provider,
                {
                  redirectTo:
                    null === (n = e.options) || void 0 === n
                      ? void 0
                      : n.redirectTo,
                  scopes:
                    null === (r = e.options) || void 0 === r
                      ? void 0
                      : r.scopes,
                  queryParams:
                    null === (o = e.options) || void 0 === o
                      ? void 0
                      : o.queryParams,
                  skipBrowserRedirect: !0,
                }
              );
              return await it(this.fetch, "GET", u, {
                headers: this.headers,
                jwt:
                  null !==
                    (a =
                      null === (i = s.session) || void 0 === i
                        ? void 0
                        : i.access_token) && void 0 !== a
                    ? a
                    : void 0,
              });
            });
            if (r) throw r;
            return (
              je() &&
                !(null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.skipBrowserRedirect) &&
                window.location.assign(null == n ? void 0 : n.url),
              {
                data: { provider: e.provider, url: null == n ? void 0 : n.url },
                error: null,
              }
            );
          } catch (t) {
            if (Be(t))
              return { data: { provider: e.provider, url: null }, error: t };
            throw t;
          }
        }
        async unlinkIdentity(e) {
          try {
            return await this._useSession(async (t) => {
              var n, r;
              const { data: o, error: i } = t;
              if (i) throw i;
              return await it(
                this.fetch,
                "DELETE",
                `${this.url}/user/identities/${e.identity_id}`,
                {
                  headers: this.headers,
                  jwt:
                    null !==
                      (r =
                        null === (n = o.session) || void 0 === n
                          ? void 0
                          : n.access_token) && void 0 !== r
                      ? r
                      : void 0,
                }
              );
            });
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _refreshAccessToken(e) {
          const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
          this._debug(t, "begin");
          try {
            const o = Date.now();
            return await ((n = async (n) => (
              n > 0 &&
                (await (async function (e) {
                  return await new Promise((t) => {
                    setTimeout(() => t(null), e);
                  });
                })(200 * Math.pow(2, n - 1))),
              this._debug(t, "refreshing attempt", n),
              await it(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=refresh_token`,
                { body: { refresh_token: e }, headers: this.headers, xform: at }
              )
            )),
            (r = (e, t) => {
              const n = 200 * Math.pow(2, e);
              return t && Xe(t) && Date.now() + n - o < kt;
            }),
            new Promise((e, t) => {
              (async () => {
                for (let o = 0; o < 1 / 0; o++)
                  try {
                    const t = await n(o);
                    if (!r(o, null, t)) return void e(t);
                  } catch (e) {
                    if (!r(o, e)) return void t(e);
                  }
              })();
            }));
          } catch (e) {
            if ((this._debug(t, "error", e), Be(e)))
              return { data: { session: null, user: null }, error: e };
            throw e;
          } finally {
            this._debug(t, "end");
          }
          var n, r;
        }
        _isValidSession(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "access_token" in e &&
            "refresh_token" in e &&
            "expires_at" in e
          );
        }
        async _handleProviderSignIn(e, t) {
          const n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes,
            queryParams: t.queryParams,
          });
          return (
            this._debug(
              "#_handleProviderSignIn()",
              "provider",
              e,
              "options",
              t,
              "url",
              n
            ),
            je() && !t.skipBrowserRedirect && window.location.assign(n),
            { data: { provider: e, url: n }, error: null }
          );
        }
        async _recoverAndRefresh() {
          var e;
          const t = "#_recoverAndRefresh()";
          this._debug(t, "begin");
          try {
            const n = await Ie(this.storage, this.storageKey);
            if (
              (this._debug(t, "session from storage", n),
              !this._isValidSession(n))
            )
              return (
                this._debug(t, "session is not valid"),
                void (null !== n && (await this._removeSession()))
              );
            const r = Math.round(Date.now() / 1e3),
              o =
                (null !== (e = n.expires_at) && void 0 !== e ? e : 1 / 0) <
                r + 10;
            if (
              (this._debug(
                t,
                `session has${o ? "" : " not"} expired with margin of 10s`
              ),
              o)
            ) {
              if (this.autoRefreshToken && n.refresh_token) {
                const { error: e } = await this._callRefreshToken(
                  n.refresh_token
                );
                e &&
                  (console.error(e),
                  Xe(e) ||
                    (this._debug(
                      t,
                      "refresh failed with a non-retryable error, removing the session",
                      e
                    ),
                    await this._removeSession()));
              }
            } else await this._notifyAllSubscribers("SIGNED_IN", n);
          } catch (e) {
            return this._debug(t, "error", e), void console.error(e);
          } finally {
            this._debug(t, "end");
          }
        }
        async _callRefreshToken(e) {
          var t, n;
          if (!e) throw new qe();
          if (this.refreshingDeferred) return this.refreshingDeferred.promise;
          const r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
          this._debug(r, "begin");
          try {
            this.refreshingDeferred = new ze();
            const { data: t, error: n } = await this._refreshAccessToken(e);
            if (n) throw n;
            if (!t.session) throw new qe();
            await this._saveSession(t.session),
              await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
            const r = { session: t.session, error: null };
            return this.refreshingDeferred.resolve(r), r;
          } catch (e) {
            if ((this._debug(r, "error", e), Be(e))) {
              const n = { session: null, error: e };
              return (
                Xe(e) ||
                  (await this._removeSession(),
                  await this._notifyAllSubscribers("SIGNED_OUT", null)),
                null === (t = this.refreshingDeferred) ||
                  void 0 === t ||
                  t.resolve(n),
                n
              );
            }
            throw (
              (null === (n = this.refreshingDeferred) ||
                void 0 === n ||
                n.reject(e),
              e)
            );
          } finally {
            (this.refreshingDeferred = null), this._debug(r, "end");
          }
        }
        async _notifyAllSubscribers(e, t, n = !0) {
          const r = `#_notifyAllSubscribers(${e})`;
          this._debug(r, "begin", t, `broadcast = ${n}`);
          try {
            this.broadcastChannel &&
              n &&
              this.broadcastChannel.postMessage({ event: e, session: t });
            const r = [],
              o = Array.from(this.stateChangeEmitters.values()).map(
                async (n) => {
                  try {
                    await n.callback(e, t);
                  } catch (e) {
                    r.push(e);
                  }
                }
              );
            if ((await Promise.all(o), r.length > 0)) {
              for (let e = 0; e < r.length; e += 1) console.error(r[e]);
              throw r[0];
            }
          } finally {
            this._debug(r, "end");
          }
        }
        async _saveSession(e) {
          this._debug("#_saveSession()", e),
            (this.suppressGetSessionWarning = !0),
            await Ne(this.storage, this.storageKey, e);
        }
        async _removeSession() {
          this._debug("#_removeSession()"),
            await Ae(this.storage, this.storageKey);
        }
        _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          const e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e &&
              je() &&
              (null === window || void 0 === window
                ? void 0
                : window.removeEventListener) &&
              window.removeEventListener("visibilitychange", e);
          } catch (e) {
            console.error("removing visibilitychange callback failed", e);
          }
        }
        async _startAutoRefresh() {
          await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
          const e = setInterval(() => this._autoRefreshTokenTick(), kt);
          (this.autoRefreshTicker = e),
            e && "object" == typeof e && "function" == typeof e.unref
              ? e.unref()
              : "undefined" != typeof Deno &&
                "function" == typeof Deno.unrefTimer &&
                Deno.unrefTimer(e),
            setTimeout(async () => {
              await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
        }
        async _stopAutoRefresh() {
          this._debug("#_stopAutoRefresh()");
          const e = this.autoRefreshTicker;
          (this.autoRefreshTicker = null), e && clearInterval(e);
        }
        async startAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
          this._debug("#_autoRefreshTokenTick()", "begin");
          try {
            await this._acquireLock(0, async () => {
              try {
                const e = Date.now();
                try {
                  return await this._useSession(async (t) => {
                    const {
                      data: { session: n },
                    } = t;
                    if (!n || !n.refresh_token || !n.expires_at)
                      return void this._debug(
                        "#_autoRefreshTokenTick()",
                        "no session"
                      );
                    const r = Math.floor((1e3 * n.expires_at - e) / kt);
                    this._debug(
                      "#_autoRefreshTokenTick()",
                      `access token expires in ${r} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                    ),
                      r <= 3 && (await this._callRefreshToken(n.refresh_token));
                  });
                } catch (e) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    e
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (!(e.isAcquireTimeout || e instanceof yt)) throw e;
            this._debug("auto refresh token tick lock not available");
          }
        }
        async _handleVisibilityChange() {
          if (
            (this._debug("#_handleVisibilityChange()"),
            !je() ||
              !(null === window || void 0 === window
                ? void 0
                : window.addEventListener))
          )
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
          try {
            (this.visibilityChangedCallback = async () =>
              await this._onVisibilityChanged(!1)),
              null === window ||
                void 0 === window ||
                window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
                ),
              await this._onVisibilityChanged(!0);
          } catch (e) {
            console.error("_handleVisibilityChange", e);
          }
        }
        async _onVisibilityChanged(e) {
          const t = `#_onVisibilityChanged(${e})`;
          this._debug(t, "visibilityState", document.visibilityState),
            "visible" === document.visibilityState
              ? (this.autoRefreshToken && this._startAutoRefresh(),
                e ||
                  (await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                    "visible" === document.visibilityState
                      ? await this._recoverAndRefresh()
                      : this._debug(
                          t,
                          "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                        );
                  })))
              : "hidden" === document.visibilityState &&
                this.autoRefreshToken &&
                this._stopAutoRefresh();
        }
        async _getUrlForProvider(e, t, n) {
          const r = [`provider=${encodeURIComponent(t)}`];
          if (
            ((null == n ? void 0 : n.redirectTo) &&
              r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
            (null == n ? void 0 : n.scopes) &&
              r.push(`scopes=${encodeURIComponent(n.scopes)}`),
            "pkce" === this.flowType)
          ) {
            const [e, t] = await Fe(this.storage, this.storageKey),
              n = new URLSearchParams({
                code_challenge: `${encodeURIComponent(e)}`,
                code_challenge_method: `${encodeURIComponent(t)}`,
              });
            r.push(n.toString());
          }
          if (null == n ? void 0 : n.queryParams) {
            const e = new URLSearchParams(n.queryParams);
            r.push(e.toString());
          }
          return (
            (null == n ? void 0 : n.skipBrowserRedirect) &&
              r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
            `${e}?${r.join("&")}`
          );
        }
        async _unenroll(e) {
          try {
            return await this._useSession(async (t) => {
              var n;
              const { data: r, error: o } = t;
              return o
                ? { data: null, error: o }
                : await it(
                    this.fetch,
                    "DELETE",
                    `${this.url}/factors/${e.factorId}`,
                    {
                      headers: this.headers,
                      jwt:
                        null === (n = null == r ? void 0 : r.session) ||
                        void 0 === n
                          ? void 0
                          : n.access_token,
                    }
                  );
            });
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _enroll(e) {
          try {
            return await this._useSession(async (t) => {
              var n, r;
              const { data: o, error: i } = t;
              if (i) return { data: null, error: i };
              const { data: a, error: s } = await it(
                this.fetch,
                "POST",
                `${this.url}/factors`,
                {
                  body: {
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType,
                    issuer: e.issuer,
                  },
                  headers: this.headers,
                  jwt:
                    null === (n = null == o ? void 0 : o.session) ||
                    void 0 === n
                      ? void 0
                      : n.access_token,
                }
              );
              return s
                ? { data: null, error: s }
                : ((null === (r = null == a ? void 0 : a.totp) || void 0 === r
                    ? void 0
                    : r.qr_code) &&
                    (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                  { data: a, error: null });
            });
          } catch (e) {
            if (Be(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _verify(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var n;
                const { data: r, error: o } = t;
                if (o) return { data: null, error: o };
                const { data: i, error: a } = await it(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/verify`,
                  {
                    body: { code: e.code, challenge_id: e.challengeId },
                    headers: this.headers,
                    jwt:
                      null === (n = null == r ? void 0 : r.session) ||
                      void 0 === n
                        ? void 0
                        : n.access_token,
                  }
                );
                return a
                  ? { data: null, error: a }
                  : (await this._saveSession(
                      Object.assign(
                        {
                          expires_at:
                            Math.round(Date.now() / 1e3) + i.expires_in,
                        },
                        i
                      )
                    ),
                    await this._notifyAllSubscribers(
                      "MFA_CHALLENGE_VERIFIED",
                      i
                    ),
                    { data: i, error: a });
              });
            } catch (e) {
              if (Be(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challenge(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var n;
                const { data: r, error: o } = t;
                return o
                  ? { data: null, error: o }
                  : await it(
                      this.fetch,
                      "POST",
                      `${this.url}/factors/${e.factorId}/challenge`,
                      {
                        headers: this.headers,
                        jwt:
                          null === (n = null == r ? void 0 : r.session) ||
                          void 0 === n
                            ? void 0
                            : n.access_token,
                      }
                    );
              });
            } catch (e) {
              if (Be(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challengeAndVerify(e) {
          const { data: t, error: n } = await this._challenge({
            factorId: e.factorId,
          });
          return n
            ? { data: null, error: n }
            : await this._verify({
                factorId: e.factorId,
                challengeId: t.id,
                code: e.code,
              });
        }
        async _listFactors() {
          const {
            data: { user: e },
            error: t,
          } = await this.getUser();
          if (t) return { data: null, error: t };
          const n = (null == e ? void 0 : e.factors) || [],
            r = n.filter(
              (e) => "totp" === e.factor_type && "verified" === e.status
            );
          return { data: { all: n, totp: r }, error: null };
        }
        async _getAuthenticatorAssuranceLevel() {
          return this._acquireLock(
            -1,
            async () =>
              await this._useSession(async (e) => {
                var t, n;
                const {
                  data: { session: r },
                  error: o,
                } = e;
                if (o) return { data: null, error: o };
                if (!r)
                  return {
                    data: {
                      currentLevel: null,
                      nextLevel: null,
                      currentAuthenticationMethods: [],
                    },
                    error: null,
                  };
                const i = this._decodeJWT(r.access_token);
                let a = null;
                i.aal && (a = i.aal);
                let s = a;
                (null !==
                  (n =
                    null === (t = r.user.factors) || void 0 === t
                      ? void 0
                      : t.filter((e) => "verified" === e.status)) &&
                void 0 !== n
                  ? n
                  : []
                ).length > 0 && (s = "aal2");
                return {
                  data: {
                    currentLevel: a,
                    nextLevel: s,
                    currentAuthenticationMethods: i.amr || [],
                  },
                  error: null,
                };
              })
          );
        }
      }
      _t.nextInstanceID = 0;
      const St = _t;
      class Et extends St {
        constructor(e) {
          super(e);
        }
      }
      var jt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      class Ct {
        constructor(e, t, n) {
          var r, o, i, a, s, l, u, c;
          if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
            throw new Error("supabaseUrl is required.");
          if (!t) throw new Error("supabaseKey is required.");
          const d = e.replace(/\/$/, "");
          (this.realtimeUrl = `${d}/realtime/v1`.replace(/^http/i, "ws")),
            (this.authUrl = `${d}/auth/v1`),
            (this.storageUrl = `${d}/storage/v1`),
            (this.functionsUrl = `${d}/functions/v1`);
          const f = `sb-${
              new URL(this.authUrl).hostname.split(".")[0]
            }-auth-token`,
            h = (function (e, t) {
              const { db: n, auth: r, realtime: o, global: i } = e,
                { db: a, auth: s, realtime: l, global: u } = t;
              return {
                db: Object.assign(Object.assign({}, a), n),
                auth: Object.assign(Object.assign({}, s), r),
                realtime: Object.assign(Object.assign({}, l), o),
                global: Object.assign(Object.assign({}, u), i),
              };
            })(null != n ? n : {}, {
              db: ge,
              realtime: ve,
              auth: Object.assign(Object.assign({}, ye), { storageKey: f }),
              global: me,
            });
          (this.storageKey =
            null !==
              (o =
                null === (r = h.auth) || void 0 === r
                  ? void 0
                  : r.storageKey) && void 0 !== o
              ? o
              : ""),
            (this.headers =
              null !==
                (a =
                  null === (i = h.global) || void 0 === i
                    ? void 0
                    : i.headers) && void 0 !== a
                ? a
                : {}),
            (this.auth = this._initSupabaseAuthClient(
              null !== (s = h.auth) && void 0 !== s ? s : {},
              this.headers,
              null === (l = h.global) || void 0 === l ? void 0 : l.fetch
            )),
            (this.fetch = ke(
              t,
              this._getAccessToken.bind(this),
              null === (u = h.global) || void 0 === u ? void 0 : u.fetch
            )),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, h.realtime)
            )),
            (this.rest = new g(`${d}/rest/v1`, {
              headers: this.headers,
              schema: null === (c = h.db) || void 0 === c ? void 0 : c.schema,
              fetch: this.fetch,
            })),
            this._listenForAuthEvents();
        }
        get functions() {
          return new l(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
          });
        }
        get storage() {
          return new he(this.storageUrl, this.headers, this.fetch);
        }
        from(e) {
          return this.rest.from(e);
        }
        schema(e) {
          return this.rest.schema(e);
        }
        rpc(e, t = {}, n = {}) {
          return this.rest.rpc(e, t, n);
        }
        channel(e, t = { config: {} }) {
          return this.realtime.channel(e, t);
        }
        getChannels() {
          return this.realtime.getChannels();
        }
        removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
        removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
        _getAccessToken() {
          var e, t;
          return jt(this, void 0, void 0, function* () {
            const { data: n } = yield this.auth.getSession();
            return null !==
              (t =
                null === (e = n.session) || void 0 === e
                  ? void 0
                  : e.access_token) && void 0 !== t
              ? t
              : null;
          });
        }
        _initSupabaseAuthClient(
          {
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: n,
            storage: r,
            storageKey: o,
            flowType: i,
            debug: a,
          },
          s,
          l
        ) {
          var u;
          const c = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
          };
          return new Et({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, c), s),
            storageKey: o,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: n,
            storage: r,
            flowType: i,
            debug: a,
            fetch: l,
            hasCustomAuthorizationHeader:
              null !== (u = "Authorization" in this.headers) &&
              void 0 !== u &&
              u,
          });
        }
        _initRealtimeClient(e) {
          return new H(
            this.realtimeUrl,
            Object.assign(Object.assign({}, e), {
              params: Object.assign(
                { apikey: this.supabaseKey },
                null == e ? void 0 : e.params
              ),
            })
          );
        }
        _listenForAuthEvents() {
          return this.auth.onAuthStateChange((e, t) => {
            this._handleTokenChanged(
              e,
              "CLIENT",
              null == t ? void 0 : t.access_token
            );
          });
        }
        _handleTokenChanged(e, t, n) {
          ("TOKEN_REFRESHED" !== e && "SIGNED_IN" !== e) ||
          this.changedAccessToken === n
            ? "SIGNED_OUT" === e &&
              (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == t && this.auth.signOut(),
              (this.changedAccessToken = void 0))
            : (this.realtime.setAuth(null != n ? n : null),
              (this.changedAccessToken = n));
        }
      }
      const Tt = (e, t, n) => new Ct(e, t, n);
      var Ot = a(540);
      function Pt(e) {
        return (
          (Pt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Pt(e)
        );
      }
      function Lt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Nt(r.key), r);
        }
      }
      function Nt(e) {
        var t = (function (e, t) {
          if ("object" != Pt(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != Pt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Pt(t) ? t : t + "";
      }
      var It = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        return (
          (t = e),
          (r = [
            {
              key: "init",
              value: function (t, n) {
                (e.superbase = t), (e.projectSpecs = n);
              },
            },
          ]),
          (n = null) && Lt(t.prototype, n),
          r && Lt(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, n, r;
      })();
      function At() {
        return (
          (At = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          At.apply(this, arguments)
        );
      }
      function zt(...e) {
        return (t) =>
          e.forEach((e) =>
            (function (e, t) {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            })(e, t)
          );
      }
      const Rt = (0, Ot.forwardRef)((e, t) => {
        const { children: n, ...r } = e,
          o = Ot.Children.toArray(n),
          i = o.find(Ft);
        if (i) {
          const e = i.props.children,
            n = o.map((t) =>
              t === i
                ? Ot.Children.count(e) > 1
                  ? Ot.Children.only(null)
                  : (0, Ot.isValidElement)(e)
                  ? e.props.children
                  : null
                : t
            );
          return (0, Ot.createElement)(
            $t,
            At({}, r, { ref: t }),
            (0, Ot.isValidElement)(e)
              ? (0, Ot.cloneElement)(e, void 0, n)
              : null
          );
        }
        return (0, Ot.createElement)($t, At({}, r, { ref: t }), n);
      });
      Rt.displayName = "Slot";
      const $t = (0, Ot.forwardRef)((e, t) => {
        const { children: n, ...r } = e;
        return (0, Ot.isValidElement)(n)
          ? (0, Ot.cloneElement)(n, {
              ...Dt(r, n.props),
              ref: t ? zt(t, n.ref) : n.ref,
            })
          : Ot.Children.count(n) > 1
          ? Ot.Children.only(null)
          : null;
      });
      $t.displayName = "SlotClone";
      const Ut = ({ children: e }) =>
        (0, Ot.createElement)(Ot.Fragment, null, e);
      function Ft(e) {
        return (0, Ot.isValidElement)(e) && e.type === Ut;
      }
      function Dt(e, t) {
        const n = { ...t };
        for (const r in t) {
          const o = e[r],
            i = t[r];
          /^on[A-Z]/.test(r)
            ? o && i
              ? (n[r] = (...e) => {
                  i(...e), o(...e);
                })
              : o && (n[r] = o)
            : "style" === r
            ? (n[r] = { ...o, ...i })
            : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
        }
        return { ...e, ...n };
      }
      function Mt(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = Mt(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      function Bt() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = Mt(e)) && (r && (r += " "), (r += t));
        return r;
      }
      const Gt = (e) =>
          "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
        Ht = Bt;
      function Vt(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
              e[t] && (n = Vt(e[t])) && (r && (r += " "), (r += n));
          } else for (n in e) e[n] && (r && (r += " "), (r += n));
        return r;
      }
      function qt() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) && (t = Vt(e)) && (r && (r += " "), (r += t));
        return r;
      }
      const Wt = "-";
      function Kt(e) {
        const t = (function (e) {
            const { theme: t, prefix: n } = e,
              r = { nextPart: new Map(), validators: [] },
              o = (function (e, t) {
                if (!t) return e;
                return e.map(([e, n]) => [
                  e,
                  n.map((e) =>
                    "string" == typeof e
                      ? t + e
                      : "object" == typeof e
                      ? Object.fromEntries(
                          Object.entries(e).map(([e, n]) => [t + e, n])
                        )
                      : e
                  ),
                ]);
              })(Object.entries(e.classGroups), n);
            return (
              o.forEach(([e, n]) => {
                Yt(n, r, e, t);
              }),
              r
            );
          })(e),
          { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
          getClassGroupId: function (e) {
            const n = e.split(Wt);
            return (
              "" === n[0] && 1 !== n.length && n.shift(),
              Jt(n, t) ||
                (function (e) {
                  if (Qt.test(e)) {
                    const t = Qt.exec(e)[1],
                      n = t?.substring(0, t.indexOf(":"));
                    if (n) return "arbitrary.." + n;
                  }
                })(e)
            );
          },
          getConflictingClassGroupIds: function (e, t) {
            const o = n[e] || [];
            return t && r[e] ? [...o, ...r[e]] : o;
          },
        };
      }
      function Jt(e, t) {
        if (0 === e.length) return t.classGroupId;
        const n = e[0],
          r = t.nextPart.get(n),
          o = r ? Jt(e.slice(1), r) : void 0;
        if (o) return o;
        if (0 === t.validators.length) return;
        const i = e.join(Wt);
        return t.validators.find(({ validator: e }) => e(i))?.classGroupId;
      }
      const Qt = /^\[(.+)\]$/;
      function Yt(e, t, n, r) {
        e.forEach((e) => {
          if ("string" != typeof e) {
            if ("function" == typeof e)
              return e.isThemeGetter
                ? void Yt(e(r), t, n, r)
                : void t.validators.push({ validator: e, classGroupId: n });
            Object.entries(e).forEach(([e, o]) => {
              Yt(o, Xt(t, e), n, r);
            });
          } else {
            ("" === e ? t : Xt(t, e)).classGroupId = n;
          }
        });
      }
      function Xt(e, t) {
        let n = e;
        return (
          t.split(Wt).forEach((e) => {
            n.nextPart.has(e) ||
              n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(e));
          }),
          n
        );
      }
      function Zt(e) {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
          n = new Map(),
          r = new Map();
        function o(o, i) {
          n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        }
        return {
          get(e) {
            let t = n.get(e);
            return void 0 !== t
              ? t
              : void 0 !== (t = r.get(e))
              ? (o(e, t), t)
              : void 0;
          },
          set(e, t) {
            n.has(e) ? n.set(e, t) : o(e, t);
          },
        };
      }
      const en = "!";
      function tn(e) {
        const t = e.separator,
          n = 1 === t.length,
          r = t[0],
          o = t.length;
        return function (e) {
          const i = [];
          let a,
            s = 0,
            l = 0;
          for (let u = 0; u < e.length; u++) {
            let c = e[u];
            if (0 === s) {
              if (c === r && (n || e.slice(u, u + o) === t)) {
                i.push(e.slice(l, u)), (l = u + o);
                continue;
              }
              if ("/" === c) {
                a = u;
                continue;
              }
            }
            "[" === c ? s++ : "]" === c && s--;
          }
          const u = 0 === i.length ? e : e.substring(l),
            c = u.startsWith(en);
          return {
            modifiers: i,
            hasImportantModifier: c,
            baseClassName: c ? u.substring(1) : u,
            maybePostfixModifierPosition: a && a > l ? a - l : void 0,
          };
        };
      }
      const nn = /\s+/;
      function rn() {
        let e,
          t,
          n = 0,
          r = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) && (t = on(e)) && (r && (r += " "), (r += t));
        return r;
      }
      function on(e) {
        if ("string" == typeof e) return e;
        let t,
          n = "";
        for (let r = 0; r < e.length; r++)
          e[r] && (t = on(e[r])) && (n && (n += " "), (n += t));
        return n;
      }
      function an(e, ...t) {
        let n,
          r,
          o,
          i = function (s) {
            const l = t.reduce((e, t) => t(e), e());
            return (
              (n = (function (e) {
                return {
                  cache: Zt(e.cacheSize),
                  splitModifiers: tn(e),
                  ...Kt(e),
                };
              })(l)),
              (r = n.cache.get),
              (o = n.cache.set),
              (i = a),
              a(s)
            );
          };
        function a(e) {
          const t = r(e);
          if (t) return t;
          const i = (function (e, t) {
            const {
                splitModifiers: n,
                getClassGroupId: r,
                getConflictingClassGroupIds: o,
              } = t,
              i = new Set();
            return e
              .trim()
              .split(nn)
              .map((e) => {
                const {
                  modifiers: t,
                  hasImportantModifier: o,
                  baseClassName: i,
                  maybePostfixModifierPosition: a,
                } = n(e);
                let s = r(a ? i.substring(0, a) : i),
                  l = Boolean(a);
                if (!s) {
                  if (!a) return { isTailwindClass: !1, originalClassName: e };
                  if (((s = r(i)), !s))
                    return { isTailwindClass: !1, originalClassName: e };
                  l = !1;
                }
                const u = (function (e) {
                  if (e.length <= 1) return e;
                  const t = [];
                  let n = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...n.sort(), e), (n = []))
                        : n.push(e);
                    }),
                    t.push(...n.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: o ? u + en : u,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: l,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                const {
                    modifierId: t,
                    classGroupId: n,
                    hasPostfixModifier: r,
                  } = e,
                  a = t + n;
                return (
                  !i.has(a) &&
                  (i.add(a), o(n, r).forEach((e) => i.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, n);
          return o(e, i), i;
        }
        return function () {
          return i(rn.apply(null, arguments));
        };
      }
      function sn(e) {
        const t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      const ln = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        un = /^\d+\/\d+$/,
        cn = new Set(["px", "full", "screen"]),
        dn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        fn =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        hn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        pn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        mn =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function gn(e) {
        return vn(e) || cn.has(e) || un.test(e);
      }
      function yn(e) {
        return Ln(e, "length", Nn);
      }
      function vn(e) {
        return Boolean(e) && !Number.isNaN(Number(e));
      }
      function bn(e) {
        return Ln(e, "number", vn);
      }
      function wn(e) {
        return Boolean(e) && Number.isInteger(Number(e));
      }
      function kn(e) {
        return e.endsWith("%") && vn(e.slice(0, -1));
      }
      function xn(e) {
        return ln.test(e);
      }
      function _n(e) {
        return dn.test(e);
      }
      const Sn = new Set(["length", "size", "percentage"]);
      function En(e) {
        return Ln(e, Sn, In);
      }
      function jn(e) {
        return Ln(e, "position", In);
      }
      const Cn = new Set(["image", "url"]);
      function Tn(e) {
        return Ln(e, Cn, zn);
      }
      function On(e) {
        return Ln(e, "", An);
      }
      function Pn() {
        return !0;
      }
      function Ln(e, t, n) {
        const r = ln.exec(e);
        return (
          !!r &&
          (r[1] ? ("string" == typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
        );
      }
      function Nn(e) {
        return fn.test(e) && !hn.test(e);
      }
      function In() {
        return !1;
      }
      function An(e) {
        return pn.test(e);
      }
      function zn(e) {
        return mn.test(e);
      }
      Symbol.toStringTag;
      function Rn() {
        const e = sn("colors"),
          t = sn("spacing"),
          n = sn("blur"),
          r = sn("brightness"),
          o = sn("borderColor"),
          i = sn("borderRadius"),
          a = sn("borderSpacing"),
          s = sn("borderWidth"),
          l = sn("contrast"),
          u = sn("grayscale"),
          c = sn("hueRotate"),
          d = sn("invert"),
          f = sn("gap"),
          h = sn("gradientColorStops"),
          p = sn("gradientColorStopPositions"),
          m = sn("inset"),
          g = sn("margin"),
          y = sn("opacity"),
          v = sn("padding"),
          b = sn("saturate"),
          w = sn("scale"),
          k = sn("sepia"),
          x = sn("skew"),
          _ = sn("space"),
          S = sn("translate"),
          E = () => ["auto", xn, t],
          j = () => [xn, t],
          C = () => ["", gn, yn],
          T = () => ["auto", vn, xn],
          O = () => ["", "0", xn],
          P = () => [vn, bn],
          L = () => [vn, xn];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [Pn],
            spacing: [gn, yn],
            blur: ["none", "", _n, xn],
            brightness: P(),
            borderColor: [e],
            borderRadius: ["none", "", "full", _n, xn],
            borderSpacing: j(),
            borderWidth: C(),
            contrast: P(),
            grayscale: O(),
            hueRotate: L(),
            invert: O(),
            gap: j(),
            gradientColorStops: [e],
            gradientColorStopPositions: [kn, yn],
            inset: E(),
            margin: E(),
            opacity: P(),
            padding: j(),
            saturate: P(),
            scale: P(),
            sepia: O(),
            skew: L(),
            space: j(),
            translate: j(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", xn] }],
            container: ["container"],
            columns: [{ columns: [_n] }],
            "break-after": [
              {
                "break-after": [
                  "auto",
                  "avoid",
                  "all",
                  "avoid-page",
                  "page",
                  "left",
                  "right",
                  "column",
                ],
              },
            ],
            "break-before": [
              {
                "break-before": [
                  "auto",
                  "avoid",
                  "all",
                  "avoid-page",
                  "page",
                  "left",
                  "right",
                  "column",
                ],
              },
            ],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [
              {
                object: [
                  "bottom",
                  "center",
                  "left",
                  "left-bottom",
                  "left-top",
                  "right",
                  "right-bottom",
                  "right-top",
                  "top",
                  xn,
                ],
              },
            ],
            overflow: [
              { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            "overflow-x": [
              { "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            "overflow-y": [
              { "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            overscroll: [{ overscroll: ["auto", "contain", "none"] }],
            "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
            "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [m] }],
            "inset-x": [{ "inset-x": [m] }],
            "inset-y": [{ "inset-y": [m] }],
            start: [{ start: [m] }],
            end: [{ end: [m] }],
            top: [{ top: [m] }],
            right: [{ right: [m] }],
            bottom: [{ bottom: [m] }],
            left: [{ left: [m] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", wn, xn] }],
            basis: [{ basis: E() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", xn] }],
            grow: [{ grow: O() }],
            shrink: [{ shrink: O() }],
            order: [{ order: ["first", "last", "none", wn, xn] }],
            "grid-cols": [{ "grid-cols": [Pn] }],
            "col-start-end": [
              { col: ["auto", { span: ["full", wn, xn] }, xn] },
            ],
            "col-start": [{ "col-start": T() }],
            "col-end": [{ "col-end": T() }],
            "grid-rows": [{ "grid-rows": [Pn] }],
            "row-start-end": [{ row: ["auto", { span: [wn, xn] }, xn] }],
            "row-start": [{ "row-start": T() }],
            "row-end": [{ "row-end": T() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", xn] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", xn] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [
              {
                justify: [
                  "normal",
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                ],
              },
            ],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [
              {
                content: [
                  "normal",
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                  "baseline",
                ],
              },
            ],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [
              {
                "place-content": [
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                  "baseline",
                ],
              },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [v] }],
            px: [{ px: [v] }],
            py: [{ py: [v] }],
            ps: [{ ps: [v] }],
            pe: [{ pe: [v] }],
            pt: [{ pt: [v] }],
            pr: [{ pr: [v] }],
            pb: [{ pb: [v] }],
            pl: [{ pl: [v] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [_] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [_] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", xn, t] },
            ],
            "min-w": [{ "min-w": [xn, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  xn,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [_n] },
                  _n,
                ],
              },
            ],
            h: [
              { h: [xn, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [xn, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [xn, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [xn, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", _n, yn] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  bn,
                ],
              },
            ],
            "font-family": [{ font: [Pn] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  xn,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", vn, bn] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  gn,
                  xn,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", xn] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", xn] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [y] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [y] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [
              {
                decoration: [
                  "solid",
                  "dashed",
                  "dotted",
                  "double",
                  "none",
                  "wavy",
                ],
              },
            ],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", gn, yn] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", gn, xn] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: j() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  xn,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", xn] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [y] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [
              {
                bg: [
                  "bottom",
                  "center",
                  "left",
                  "left-bottom",
                  "left-top",
                  "right",
                  "right-bottom",
                  "right-top",
                  "top",
                  jn,
                ],
              },
            ],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", En] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  Tn,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [p] }],
            "gradient-via-pos": [{ via: [p] }],
            "gradient-to-pos": [{ to: [p] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [y] }],
            "border-style": [
              {
                border: [
                  "solid",
                  "dashed",
                  "dotted",
                  "double",
                  "none",
                  "hidden",
                ],
              },
            ],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [y] }],
            "divide-style": [
              { divide: ["solid", "dashed", "dotted", "double", "none"] },
            ],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [
              { outline: ["", "solid", "dashed", "dotted", "double", "none"] },
            ],
            "outline-offset": [{ "outline-offset": [gn, xn] }],
            "outline-w": [{ outline: [gn, yn] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: C() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [y] }],
            "ring-offset-w": [{ "ring-offset": [gn, yn] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", _n, On] }],
            "shadow-color": [{ shadow: [Pn] }],
            opacity: [{ opacity: [y] }],
            "mix-blend": [
              {
                "mix-blend": [
                  "normal",
                  "multiply",
                  "screen",
                  "overlay",
                  "darken",
                  "lighten",
                  "color-dodge",
                  "color-burn",
                  "hard-light",
                  "soft-light",
                  "difference",
                  "exclusion",
                  "hue",
                  "saturation",
                  "color",
                  "luminosity",
                  "plus-lighter",
                  "plus-darker",
                ],
              },
            ],
            "bg-blend": [
              {
                "bg-blend": [
                  "normal",
                  "multiply",
                  "screen",
                  "overlay",
                  "darken",
                  "lighten",
                  "color-dodge",
                  "color-burn",
                  "hard-light",
                  "soft-light",
                  "difference",
                  "exclusion",
                  "hue",
                  "saturation",
                  "color",
                  "luminosity",
                ],
              },
            ],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", _n, xn] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [b] }],
            sepia: [{ sepia: [k] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [n] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [y] }],
            "backdrop-saturate": [{ "backdrop-saturate": [b] }],
            "backdrop-sepia": [{ "backdrop-sepia": [k] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  xn,
                ],
              },
            ],
            duration: [{ duration: L() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", xn] }],
            delay: [{ delay: L() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", xn] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [w] }],
            "scale-x": [{ "scale-x": [w] }],
            "scale-y": [{ "scale-y": [w] }],
            rotate: [{ rotate: [wn, xn] }],
            "translate-x": [{ "translate-x": [S] }],
            "translate-y": [{ "translate-y": [S] }],
            "skew-x": [{ "skew-x": [x] }],
            "skew-y": [{ "skew-y": [x] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  xn,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  xn,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": j() }],
            "scroll-mx": [{ "scroll-mx": j() }],
            "scroll-my": [{ "scroll-my": j() }],
            "scroll-ms": [{ "scroll-ms": j() }],
            "scroll-me": [{ "scroll-me": j() }],
            "scroll-mt": [{ "scroll-mt": j() }],
            "scroll-mr": [{ "scroll-mr": j() }],
            "scroll-mb": [{ "scroll-mb": j() }],
            "scroll-ml": [{ "scroll-ml": j() }],
            "scroll-p": [{ "scroll-p": j() }],
            "scroll-px": [{ "scroll-px": j() }],
            "scroll-py": [{ "scroll-py": j() }],
            "scroll-ps": [{ "scroll-ps": j() }],
            "scroll-pe": [{ "scroll-pe": j() }],
            "scroll-pt": [{ "scroll-pt": j() }],
            "scroll-pr": [{ "scroll-pr": j() }],
            "scroll-pb": [{ "scroll-pb": j() }],
            "scroll-pl": [{ "scroll-pl": j() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": ["auto", "scroll", "contents", "transform", xn],
              },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [gn, yn, bn] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      }
      const $n = an(Rn);
      function Un() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return $n(qt(t));
      }
      var Fn = a(848);
      function Dn(e) {
        return (
          (Dn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Dn(e)
        );
      }
      var Mn = ["className", "variant", "size", "asChild"];
      function Bn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Gn(e, t, n) {
        var r;
        return (
          (r = (function (e, t) {
            if ("object" != Dn(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != Dn(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string")),
          (t = "symbol" == Dn(r) ? r : r + "") in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Hn(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var Vn,
        qn,
        Wn =
          ((Vn =
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"),
          (qn = {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }),
          (e) => {
            var t;
            if (null == (null == qn ? void 0 : qn.variants))
              return Ht(
                Vn,
                null == e ? void 0 : e.class,
                null == e ? void 0 : e.className
              );
            const { variants: n, defaultVariants: r } = qn,
              o = Object.keys(n).map((t) => {
                const o = null == e ? void 0 : e[t],
                  i = null == r ? void 0 : r[t];
                if (null === o) return null;
                const a = Gt(o) || Gt(i);
                return n[t][a];
              }),
              i =
                e &&
                Object.entries(e).reduce((e, t) => {
                  let [n, r] = t;
                  return void 0 === r || (e[n] = r), e;
                }, {}),
              a =
                null == qn || null === (t = qn.compoundVariants) || void 0 === t
                  ? void 0
                  : t.reduce((e, t) => {
                      let { class: n, className: o, ...a } = t;
                      return Object.entries(a).every((e) => {
                        let [t, n] = e;
                        return Array.isArray(n)
                          ? n.includes({ ...r, ...i }[t])
                          : { ...r, ...i }[t] === n;
                      })
                        ? [...e, n, o]
                        : e;
                    }, []);
            return Ht(
              Vn,
              o,
              a,
              null == e ? void 0 : e.class,
              null == e ? void 0 : e.className
            );
          }),
        Kn = Ot.forwardRef(function (e, t) {
          var n = e.className,
            r = e.variant,
            o = e.size,
            i = e.asChild,
            a = void 0 !== i && i,
            s = Hn(e, Mn),
            l = a ? Rt : "button";
          return (0, Fn.jsx)(
            l,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Bn(Object(n), !0).forEach(function (t) {
                      Gn(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Bn(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })(
              {
                className: Un(Wn({ variant: r, size: o, className: n })),
                ref: t,
              },
              s
            )
          );
        });
      function Jn(e) {
        return (
          (Jn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Jn(e)
        );
      }
      function Qn() {
        Qn = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, "_invoke", { value: j(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          m = "completed",
          g = {};
        function y() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          x = k && k(k(L([])));
        x && x !== n && r.call(x, a) && (w = x);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var u = l.arg,
                c = u.value;
              return c && "object" == Jn(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (u.value = e), a(u);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    }
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = C(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = d(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : h), u.arg === g)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function C(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                C(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Jn(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          o(_, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(b, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          S(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(_),
          u(_, l, "Generator"),
          u(_, a, function () {
            return this;
          }),
          u(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (l && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function Yn(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function Xn(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              Yn(i, r, o, a, s, "next", e);
            }
            function s(e) {
              Yn(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      Kn.displayName = "Button";
      var Zn = (function () {
          var e = Xn(
            Qn().mark(function e(t) {
              var n, r, o, i;
              return Qn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.email),
                        (e.next = 3),
                        It.superbase.auth.signInWithOtp({
                          email: n,
                          options: { shouldCreateUser: !0 },
                        })
                      );
                    case 3:
                      if (((r = e.sent), (o = r.data), !(i = r.error))) {
                        e.next = 11;
                        break;
                      }
                      return (
                        console.error("Error signing in with OTP:", i),
                        e.abrupt("return", null)
                      );
                    case 11:
                      return e.abrupt("return", o);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        er = (function () {
          var e = Xn(
            Qn().mark(function e(t) {
              var n, r, o, i, a;
              return Qn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.otp),
                        (r = t.email),
                        (e.next = 3),
                        It.superbase.auth.verifyOtp({
                          email: r,
                          token: n,
                          type: "email",
                        })
                      );
                    case 3:
                      if (
                        ((o = e.sent), (i = o.data), (a = o.error), !i.user)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", i.user);
                    case 10:
                      return (
                        console.error("Error verifying OTP:", a),
                        e.abrupt("return", null)
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        tr = (function () {
          var e = Xn(
            Qn().mark(function e() {
              var t, n;
              return Qn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          It.superbase.auth.getUser()
                        );
                      case 3:
                        return (
                          (t = e.sent), (n = t.data), e.abrupt("return", n.user)
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.error("Error fetching user details:", e.t0),
                          e.abrupt("return", null)
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        nr = (function () {
          var e = Xn(
            Qn().mark(function e() {
              var t;
              return Qn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), tr();
                    case 2:
                      return (t = e.sent), e.abrupt("return", !!t);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        rr = (function () {
          var e = Xn(
            Qn().mark(function e(t) {
              var n, r;
              return Qn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          It.superbase.from("Users").select("*").eq("Email", t)
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          (r = n.data),
                          e.abrupt(
                            "return",
                            (null == r
                              ? void 0
                              : r.find(function () {
                                  return !0;
                                })) || null
                          )
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.error("Error fetching user details:", e.t0),
                          e.abrupt("return", null)
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        or = (function () {
          var e = Xn(
            Qn().mark(function e(t) {
              var n, r, o, i, a, s;
              return Qn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.id),
                          (r = t.Name),
                          (o = t.Email),
                          (i = t.Photo),
                          (e.prev = 1),
                          (e.next = 4),
                          It.superbase
                            .from("Users")
                            .update({ Name: r, Email: o, Photo: i })
                            .eq("id", n)
                            .select("*")
                        );
                      case 4:
                        if (((a = e.sent), (s = a.data), !o)) {
                          e.next = 9;
                          break;
                        }
                        return (
                          (e.next = 9),
                          It.superbase.auth.updateUser({ email: o })
                        );
                      case 9:
                        if (!(s && s.length > 0)) {
                          e.next = 13;
                          break;
                        }
                        return e.abrupt("return", s[0]);
                      case 13:
                        return e.abrupt("return", null);
                      case 14:
                        e.next = 20;
                        break;
                      case 16:
                        return (
                          (e.prev = 16),
                          (e.t0 = e.catch(1)),
                          console.error("Error updating user details:", e.t0),
                          e.abrupt("return", null)
                        );
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 16]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ir = (function () {
          var e = Xn(
            Qn().mark(function e() {
              return Qn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          It.superbase.auth.signOut()
                        );
                      case 3:
                        parent.location.reload(), (e.next = 9);
                        break;
                      case 6:
                        (e.prev = 6),
                          (e.t0 = e.catch(0)),
                          console.error("Error logging out user:", e.t0);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 6]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ar = (function () {
          var e = Xn(
            Qn().mark(function e(t, n, r) {
              var o, i, a, s, l, u;
              return Qn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          "http://localhost:3000",
                          (e.next = 4),
                          It.superbase
                            .from("WebPages")
                            .select("id")
                            .eq("Url", "http://localhost:3000")
                        );
                      case 4:
                        if (
                          ((i = e.sent),
                          (a = i.data),
                          !(s =
                            null == a ||
                            null ===
                              (o = a.find(function () {
                                return !0;
                              })) ||
                            void 0 === o
                              ? void 0
                              : o.id))
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (
                          (e.next = 10),
                          It.superbase
                            .from("Conversation")
                            .select(
                              "id, CreationDate, PageId, PrimaryCommentId(id, Text, UserId(id, Name, Email))"
                            )
                            .eq("PageId", s)
                            .order(t, { ascending: !1 })
                            .range(n, r)
                        );
                      case 10:
                        return (
                          (l = e.sent), (u = l.data), e.abrupt("return", u)
                        );
                      case 13:
                        e.next = 18;
                        break;
                      case 15:
                        (e.prev = 15), (e.t0 = e.catch(0)), console.log(e.t0);
                      case 18:
                        return e.abrupt("return", null);
                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 15]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        sr = (function () {
          var e = Xn(
            Qn().mark(function e(t) {
              var n, r;
              return Qn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        It.superbase,
                        (e.next = 3),
                        It.superbase.from("Likes").select("*").eq("Comment", t)
                      );
                    case 3:
                      return (n = e.sent), (r = n.data), e.abrupt("return", r);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        lr = (function () {
          var e = Xn(
            Qn().mark(function e(t, n) {
              var r, o;
              return Qn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        It.superbase
                          .from("Likes")
                          .insert([{ Comment: t, User: n }])
                          .select("*")
                      );
                    case 2:
                      if (((r = e.sent), !(o = r.data))) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", o[0]);
                    case 8:
                      return (
                        console.log("Error posting like"),
                        e.abrupt("return", null)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        ur = (function () {
          var e = Xn(
            Qn().mark(function e(t) {
              var n, r;
              return Qn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        It.superbase
                          .from("Likes")
                          .delete()
                          .eq("id", t)
                          .select("*")
                      );
                    case 2:
                      if (((n = e.sent), !(r = n.data))) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", r[0]);
                    case 8:
                      return (
                        console.log("Error posting like"),
                        e.abrupt("return", null)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        cr = (function () {
          var e = Xn(
            Qn().mark(function e(t) {
              var n, r, o, i, a, s, l, u, c;
              return Qn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.comment), (e.next = 3), tr();
                    case 3:
                      return (
                        (o = e.sent),
                        (e.next = 6),
                        rr((null == o ? void 0 : o.email) || "")
                      );
                    case 6:
                      if (((i = e.sent), o && i)) {
                        e.next = 10;
                        break;
                      }
                      return (
                        console.log("User not found"), e.abrupt("return", null)
                      );
                    case 10:
                      return (
                        (e.next = 12),
                        It.superbase
                          .from("Comments")
                          .insert([{ Text: r, UserId: i.id }])
                          .select("id")
                      );
                    case 12:
                      if (
                        ((a = e.sent),
                        (s = a.data),
                        !(l =
                          null == s ||
                          null ===
                            (n = s.find(function () {
                              return !0;
                            })) ||
                          void 0 === n
                            ? void 0
                            : n.id))
                      ) {
                        e.next = 28;
                        break;
                      }
                      return (
                        (e.next = 18),
                        It.superbase
                          .from("Conversation")
                          .insert([{ PageId: 1, PrimaryCommentId: l }])
                          .select(
                            "id, CreationDate, PageId, PrimaryCommentId(id, Text, UserId(id, Name, Email))"
                          )
                      );
                    case 18:
                      if (((u = e.sent), !(c = u.data))) {
                        e.next = 24;
                        break;
                      }
                      return e.abrupt("return", c[0]);
                    case 24:
                      return (
                        console.log("Error posting comment"),
                        e.abrupt("return", null)
                      );
                    case 26:
                      e.next = 30;
                      break;
                    case 28:
                      return (
                        console.log("comment id not found"),
                        e.abrupt("return", null)
                      );
                    case 30:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      const dr = (...e) =>
        e.filter((e, t, n) => Boolean(e) && n.indexOf(e) === t).join(" ");
      var fr = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      const hr = (0, Ot.forwardRef)(
          (
            {
              color: e = "currentColor",
              size: t = 24,
              strokeWidth: n = 2,
              absoluteStrokeWidth: r,
              className: o = "",
              children: i,
              iconNode: a,
              ...s
            },
            l
          ) =>
            (0, Ot.createElement)(
              "svg",
              {
                ref: l,
                ...fr,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (24 * Number(n)) / Number(t) : n,
                className: dr("lucide", o),
                ...s,
              },
              [
                ...a.map(([e, t]) => (0, Ot.createElement)(e, t)),
                ...(Array.isArray(i) ? i : [i]),
              ]
            )
        ),
        pr = (e, t) => {
          const n = (0, Ot.forwardRef)(({ className: n, ...r }, o) => {
            return (0, Ot.createElement)(hr, {
              ref: o,
              iconNode: t,
              className: dr(
                `lucide-${
                  ((i = e),
                  i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())
                }`,
                n
              ),
              ...r,
            });
            var i;
          });
          return (n.displayName = `${e}`), n;
        },
        mr = pr("Loader", [
          ["path", { d: "M12 2v4", key: "3427ic" }],
          ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
          ["path", { d: "M18 12h4", key: "wj9ykh" }],
          ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
          ["path", { d: "M12 18v4", key: "jadmvz" }],
          ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
          ["path", { d: "M2 12h4", key: "j09sii" }],
          ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
        ]);
      function gr(e) {
        return (
          (gr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          gr(e)
        );
      }
      function yr() {
        yr = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, "_invoke", { value: j(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          m = "completed",
          g = {};
        function y() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          x = k && k(k(L([])));
        x && x !== n && r.call(x, a) && (w = x);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var u = l.arg,
                c = u.value;
              return c && "object" == gr(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (u.value = e), a(u);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    }
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = C(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = d(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : h), u.arg === g)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function C(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                C(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(gr(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          o(_, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(b, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          S(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(_),
          u(_, l, "Generator"),
          u(_, a, function () {
            return this;
          }),
          u(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (l && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function vr(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function br(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              vr(i, r, o, a, s, "next", e);
            }
            function s(e) {
              vr(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function wr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return kr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return kr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function kr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var xr = function (e) {
        var t = e.onClose,
          n = e.setIsLogin,
          r = wr((0, Ot.useState)(""), 2),
          o = r[0],
          i = r[1],
          a = wr((0, Ot.useState)(""), 2),
          s = a[0],
          l = a[1],
          u = wr((0, Ot.useState)(!1), 2),
          c = u[0],
          d = u[1],
          f = wr((0, Ot.useState)(!1), 2),
          h = f[0],
          p = f[1];
        return (0, Fn.jsxs)("div", {
          className:
            "flex flex-col items-center justify-center text-white gap-4",
          children: [
            (0, Fn.jsx)("p", { children: "Verify your identity" }),
            c
              ? (0, Fn.jsx)("input", {
                  type: "text",
                  value: s,
                  placeholder: "Otp",
                  className:
                    "w-full p-2 mb-2 rounded-md bg-zinc-600 text-black",
                  onChange: function (e) {
                    return l(e.target.value);
                  },
                })
              : (0, Fn.jsx)("input", {
                  type: "text",
                  value: o,
                  placeholder: "Email",
                  className:
                    "w-full p-2 mb-2 rounded-md bg-zinc-600 text-black",
                  onChange: function (e) {
                    return i(e.target.value);
                  },
                }),
            c
              ? (0, Fn.jsx)(Kn, {
                  disabled: h,
                  onClick: br(
                    yr().mark(function e() {
                      return yr().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  p(!0),
                                  (e.next = 4),
                                  er({ otp: s, email: o })
                                );
                              case 4:
                                d(!1), n(!0), t(), (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  console.log("Error verifying OTP:", e.t0);
                              case 12:
                                return (e.prev = 12), p(!1), e.finish(12);
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9, 12, 15]]
                      );
                    })
                  ),
                  className: "bg-green-700",
                  children: h
                    ? (0, Fn.jsx)(mr, { className: "animate-spin" })
                    : "Verify OTP",
                })
              : (0, Fn.jsx)(Kn, {
                  disabled: h,
                  onClick: br(
                    yr().mark(function e() {
                      return yr().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  p(!0),
                                  (e.next = 4),
                                  Zn({ email: o })
                                );
                              case 4:
                                d(!0), (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(0)),
                                  console.log(
                                    "Error signing in with OTP:",
                                    e.t0
                                  );
                              case 10:
                                return (e.prev = 10), p(!1), e.finish(10);
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7, 10, 13]]
                      );
                    })
                  ),
                  className: "bg-green-700",
                  children: h
                    ? (0, Fn.jsx)(mr, { className: "animate-spin" })
                    : "Send OTP",
                }),
          ],
        });
      };
      const _r = function (e) {
        var t = e.isOpen,
          n = e.onClose,
          r = e.children;
        return t
          ? (0, Fn.jsx)("div", {
              className:
                "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
              children: (0, Fn.jsxs)("div", {
                className:
                  "relative bg-zinc-800 p-5 rounded-lg max-w-md w-full",
                children: [
                  (0, Fn.jsx)("button", {
                    className:
                      "absolute top-2 right-2 text-lg bg-red-400 px-2 flex items-center justify-center rounded-lg pb-1",
                    onClick: n,
                    children: "×",
                  }),
                  (0, Fn.jsx)("div", { className: "mt-10", children: r }),
                ],
              }),
            })
          : null;
      };
      function Sr(e) {
        return (
          (Sr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Sr(e)
        );
      }
      function Er() {
        Er = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, "_invoke", { value: j(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          m = "completed",
          g = {};
        function y() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          x = k && k(k(L([])));
        x && x !== n && r.call(x, a) && (w = x);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var u = l.arg,
                c = u.value;
              return c && "object" == Sr(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (u.value = e), a(u);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    }
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = C(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = d(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : h), u.arg === g)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function C(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                C(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Sr(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          o(_, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(b, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          S(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(_),
          u(_, l, "Generator"),
          u(_, a, function () {
            return this;
          }),
          u(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (l && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function jr(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function Cr(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              jr(i, r, o, a, s, "next", e);
            }
            function s(e) {
              jr(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Tr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Tr(Object(n), !0).forEach(function (t) {
                Pr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Tr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Pr(e, t, n) {
        var r;
        return (
          (r = (function (e, t) {
            if ("object" != Sr(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != Sr(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string")),
          (t = "symbol" == Sr(r) ? r : r + "") in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Lr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Nr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Nr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Nr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ir = function () {
        var e,
          t,
          n = Lr((0, Ot.useState)(!1), 2),
          r = n[0],
          o = n[1],
          i = Lr(
            (0, Ot.useState)({ id: 0, Name: "", Email: "", Photo: "" }),
            2
          ),
          a = i[0],
          s = i[1],
          l = function (e) {
            var t = e.target,
              n = t.name,
              r = t.value;
            s(function (e) {
              return Or(Or({}, e), {}, Pr({}, n, r));
            });
          };
        return (
          (0, Ot.useEffect)(function () {
            Cr(
              Er().mark(function e() {
                var t, n;
                return Er().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), tr();
                      case 2:
                        if (!(t = e.sent) || !t.email) {
                          e.next = 8;
                          break;
                        }
                        return (e.next = 6), rr(t.email);
                      case 6:
                        (n = e.sent) && s(n);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          }, []),
          (0, Fn.jsxs)("div", {
            className:
              "flex flex-col gap-3 text-white items-center justify-center w-full",
            children: [
              (0, Fn.jsx)("p", { children: "User Profile" }),
              (0, Fn.jsx)("input", {
                onChange: l,
                name: "Name",
                value: null !== (e = a.Name) && void 0 !== e ? e : "",
                placeholder: "Name",
                className: "w-full p-2 mb-2 rounded-md bg-zinc-600 text-black",
              }),
              (0, Fn.jsx)("input", {
                onChange: l,
                name: "Email",
                value: null !== (t = a.Email) && void 0 !== t ? t : "",
                placeholder: "Email",
                className: "w-full p-2 mb-2 rounded-md bg-zinc-600 text-black",
              }),
              (0, Fn.jsx)(Kn, {
                disabled: r,
                className: "bg-green-700",
                onClick: Cr(
                  Er().mark(function e() {
                    return Er().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), o(!0), (e.next = 4), or(a);
                            case 4:
                              e.next = 9;
                              break;
                            case 6:
                              (e.prev = 6),
                                (e.t0 = e.catch(0)),
                                console.log(
                                  "Error updating user details:",
                                  e.t0
                                );
                            case 9:
                              return (e.prev = 9), o(!1), e.finish(9);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6, 9, 12]]
                    );
                  })
                ),
                children: r
                  ? (0, Fn.jsx)(mr, { className: "animate-spin" })
                  : "Save",
              }),
              (0, Fn.jsx)(Kn, { onClick: ir, children: "Logout" }),
            ],
          })
        );
      };
      function Ar(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return zr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return zr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function zr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Rr = function (e) {
          var t = e.isLogin,
            n = e.setIsLogin,
            r = Ar((0, Ot.useState)(!1), 2),
            o = r[0],
            i = r[1],
            a = function () {
              return i(!1);
            };
          return (0, Fn.jsxs)("div", {
            children: [
              (0, Fn.jsx)(Kn, {
                className: "bg-zinc-200 text-black",
                onClick: function () {
                  return i(!0);
                },
                children: t ? "Profile" : "Login",
              }),
              t
                ? (0, Fn.jsx)(_r, {
                    isOpen: o,
                    onClose: a,
                    children: (0, Fn.jsx)(Ir, {}),
                  })
                : (0, Fn.jsx)(_r, {
                    isOpen: o,
                    onClose: a,
                    children: (0, Fn.jsx)(xr, { setIsLogin: n, onClose: a }),
                  }),
            ],
          });
        },
        $r = (function (e) {
          return (e.likes = "Likes"), (e.latest = "CreationDate"), e;
        })({});
      const Ur = pr("ThumbsUp", [
        ["path", { d: "M7 10v12", key: "1qc93n" }],
        [
          "path",
          {
            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
            key: "y3tblf",
          },
        ],
      ]);
      function Fr(e) {
        return (
          (Fr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Fr(e)
        );
      }
      function Dr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return qr(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Vr(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Mr() {
        Mr = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, "_invoke", { value: j(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          m = "completed",
          g = {};
        function y() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          x = k && k(k(L([])));
        x && x !== n && r.call(x, a) && (w = x);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var u = l.arg,
                c = u.value;
              return c && "object" == Fr(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (u.value = e), a(u);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    }
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = C(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = d(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : h), u.arg === g)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function C(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                C(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Fr(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          o(_, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(b, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          S(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(_),
          u(_, l, "Generator"),
          u(_, a, function () {
            return this;
          }),
          u(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (l && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function Br(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function Gr(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              Br(i, r, o, a, s, "next", e);
            }
            function s(e) {
              Br(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Hr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          Vr(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Vr(e, t) {
        if (e) {
          if ("string" == typeof e) return qr(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? qr(e, t)
              : void 0
          );
        }
      }
      function qr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Wr = function (e) {
          var t = e.comment,
            n = e.user,
            r = Hr((0, Ot.useState)([]), 2),
            o = r[0],
            i = r[1],
            a = Hr((0, Ot.useState)(!1), 2),
            s = a[0],
            l = a[1],
            u = Hr((0, Ot.useState)(null), 2),
            c = u[0],
            d = u[1];
          return (
            (0, Ot.useEffect)(function () {
              Gr(
                Mr().mark(function e() {
                  var r, o;
                  return Mr().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), sr(t.PrimaryCommentId.id);
                        case 2:
                          (r = e.sent) &&
                            (i(r),
                            (o =
                              null == r
                                ? void 0
                                : r.find(function (e) {
                                    return e.User === n.id;
                                  })) && (l(!0), d(o.id)));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            }, []),
            (0, Fn.jsxs)(
              "div",
              {
                children: [
                  (0, Fn.jsx)("p", {
                    children: t.PrimaryCommentId.UserId.Name,
                  }),
                  (0, Fn.jsx)("p", { children: t.PrimaryCommentId.Text }),
                  (0, Fn.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                      s
                        ? (0, Fn.jsx)(Ur, {
                            onClick: Gr(
                              Mr().mark(function e() {
                                return Mr().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!c) {
                                          e.next = 3;
                                          break;
                                        }
                                        return (e.next = 3), ur(c);
                                      case 3:
                                        l(!1),
                                          d(null),
                                          i(
                                            o.filter(function (e) {
                                              return e.User !== n.id;
                                            })
                                          );
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            ),
                            className: "w-6 text-violet-800 h-6 cursor-pointer",
                          })
                        : (0, Fn.jsx)(Ur, {
                            onClick: Gr(
                              Mr().mark(function e() {
                                var r;
                                return Mr().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          lr(t.PrimaryCommentId.id, n.id)
                                        );
                                      case 2:
                                        (r = e.sent) &&
                                          (l(!0),
                                          d(r.id),
                                          i([].concat(Dr(o), [r])));
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            ),
                            className: "w-5 h-5 cursor-pointer",
                          }),
                      (0, Fn.jsxs)("span", { children: [o.length, " "] }),
                    ],
                  }),
                ],
              },
              t.PrimaryCommentId.id
            )
          );
        },
        Kr = function (e) {
          var t = e.comments,
            n = e.user,
            r = e.loadComments;
          return (0, Fn.jsxs)("div", {
            className: "flex flex-col h-[70vh] text-white overflow-auto gap-4",
            children: [
              t.map(function (e) {
                return (0,
                Fn.jsx)("div", { children: (0, Fn.jsx)(Wr, { comment: e, user: n }) }, e.id);
              }),
              0 === t.length && (0, Fn.jsx)("div", { children: "No comment" }),
              (0, Fn.jsxs)(Kn, {
                onClick: function () {
                  r();
                },
                children: [" ", "Load More...", " "],
              }),
            ],
          });
        };
      function Jr(e) {
        return (
          (Jr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Jr(e)
        );
      }
      function Qr() {
        Qr = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, "_invoke", { value: j(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          m = "completed",
          g = {};
        function y() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          x = k && k(k(L([])));
        x && x !== n && r.call(x, a) && (w = x);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var u = l.arg,
                c = u.value;
              return c && "object" == Jr(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (u.value = e), a(u);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    }
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = C(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = d(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : h), u.arg === g)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function C(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                C(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Jr(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          o(_, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(b, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          S(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(_),
          u(_, l, "Generator"),
          u(_, a, function () {
            return this;
          }),
          u(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (l && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function Yr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return to(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          eo(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Xr(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function Zr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          eo(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function eo(e, t) {
        if (e) {
          if ("string" == typeof e) return to(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? to(e, t)
              : void 0
          );
        }
      }
      function to(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var no = function (e) {
        var t = e.setComments,
          n = Zr((0, Ot.useState)(""), 2),
          r = n[0],
          o = n[1],
          i = Zr((0, Ot.useState)(!1), 2),
          a = i[0],
          s = i[1],
          l = (function () {
            var e,
              n =
                ((e = Qr().mark(function e() {
                  var n;
                  return Qr().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), "" !== r.trim())) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return s(!0), (e.next = 6), cr({ comment: r });
                          case 6:
                            (n = e.sent) &&
                              (t(function (e) {
                                return [n].concat(Yr(e));
                              }),
                              o("")),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 13:
                            return (e.prev = 13), s(!1), e.finish(13);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10, 13, 16]]
                  );
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                      Xr(i, r, o, a, s, "next", e);
                    }
                    function s(e) {
                      Xr(i, r, o, a, s, "throw", e);
                    }
                    a(void 0);
                  });
                });
            return function () {
              return n.apply(this, arguments);
            };
          })();
        return (0, Fn.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            (0, Fn.jsx)("input", {
              type: "text",
              onChange: function (e) {
                return o(e.target.value);
              },
              className: "w-full h-10 border-2 border-gray-300 rounded-lg p-2",
              placeholder: "Add comment",
              value: r,
            }),
            (0, Fn.jsx)("button", {
              disabled: a,
              className:
                "bg-blue-500 text-white w-20 h-10 rounded-lg flex items-center justify-center",
              onClick: l,
              children: a
                ? (0, Fn.jsx)(mr, { className: "animate-spin" })
                : "Post",
            }),
          ],
        });
      };
      function ro(e) {
        return (
          (ro =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ro(e)
        );
      }
      function oo() {
        oo = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, "_invoke", { value: j(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          m = "completed",
          g = {};
        function y() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          x = k && k(k(L([])));
        x && x !== n && r.call(x, a) && (w = x);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var u = l.arg,
                c = u.value;
              return c && "object" == ro(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (u.value = e), a(u);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    }
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = C(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = d(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : h), u.arg === g)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function C(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                C(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(ro(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          o(_, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(b, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          S(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(_),
          u(_, l, "Generator"),
          u(_, a, function () {
            return this;
          }),
          u(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (l && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function io(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return uo(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          lo(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ao(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function so(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          lo(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function lo(e, t) {
        if (e) {
          if ("string" == typeof e) return uo(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? uo(e, t)
              : void 0
          );
        }
      }
      function uo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var co = function () {
        var e = so((0, Ot.useState)([]), 2),
          t = e[0],
          n = e[1],
          r = so((0, Ot.useState)(null), 2),
          o = r[0],
          i = r[1],
          a = (0, Ot.useRef)(0),
          s = (function () {
            var e,
              r =
                ((e = oo().mark(function e() {
                  var r, o, s, l, u;
                  return oo().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = 9 * a.current),
                            (s = o + 9),
                            console.log("loadComments", a.current),
                            console.log("start", o, "end", s),
                            (e.next = 6),
                            ar($r.latest, o, s)
                          );
                        case 6:
                          return (l = e.sent), (e.t0 = rr), (e.next = 10), tr();
                        case 10:
                          if (
                            ((e.t3 = r = e.sent), (e.t2 = null === e.t3), e.t2)
                          ) {
                            e.next = 14;
                            break;
                          }
                          e.t2 = void 0 === r;
                        case 14:
                          if (!e.t2) {
                            e.next = 18;
                            break;
                          }
                          (e.t4 = void 0), (e.next = 19);
                          break;
                        case 18:
                          e.t4 = r.email;
                        case 19:
                          if (((e.t1 = e.t4), e.t1)) {
                            e.next = 22;
                            break;
                          }
                          e.t1 = "";
                        case 22:
                          return (e.t5 = e.t1), (e.next = 25), (0, e.t0)(e.t5);
                        case 25:
                          (u = e.sent) && i(u),
                            l &&
                              l.length > 0 &&
                              (n([].concat(io(t), io(l))), a.current++);
                        case 28:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                      ao(i, r, o, a, s, "next", e);
                    }
                    function s(e) {
                      ao(i, r, o, a, s, "throw", e);
                    }
                    a(void 0);
                  });
                });
            return function () {
              return r.apply(this, arguments);
            };
          })();
        return (
          (0, Ot.useEffect)(function () {
            s();
          }, []),
          (0, Fn.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              o && (0, Fn.jsx)(no, { setComments: n }),
              o && (0, Fn.jsx)(Kr, { loadComments: s, comments: t, user: o }),
            ],
          })
        );
      };
      function fo(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return ho(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ho(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ho(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var po = function (e) {
        var t = e.isLogin,
          n = fo((0, Ot.useState)(!1), 2),
          r = n[0],
          o = n[1],
          i = function () {
            return o(!1);
          };
        return (0, Fn.jsxs)("div", {
          children: [
            (0, Fn.jsx)(Kn, {
              className: "bg-zinc-200 text-black",
              onClick: function () {
                return o(!0);
              },
              children: "Add comment",
            }),
            t
              ? (0, Fn.jsx)(_r, {
                  isOpen: r,
                  onClose: i,
                  children: (0, Fn.jsx)(co, {}),
                })
              : (0, Fn.jsx)(_r, {
                  isOpen: r,
                  onClose: i,
                  children: (0, Fn.jsx)("div", { children: "Not Login" }),
                }),
          ],
        });
      };
      function mo(e) {
        return (
          (mo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          mo(e)
        );
      }
      function go(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return yo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return yo(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function yo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function vo() {
        vo = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, "_invoke", { value: j(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          m = "completed",
          g = {};
        function y() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var k = Object.getPrototypeOf,
          x = k && k(k(L([])));
        x && x !== n && r.call(x, a) && (w = x);
        var _ = (b.prototype = y.prototype = Object.create(w));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var u = l.arg,
                c = u.value;
              return c && "object" == mo(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (u.value = e), a(u);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    }
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = C(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var u = d(t, n, r);
              if ("normal" === u.type) {
                if (((o = r.done ? m : h), u.arg === g)) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((o = m), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function C(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                C(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(T, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(mo(t) + " is not iterable");
        }
        return (
          (v.prototype = b),
          o(_, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(b, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(_)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          S(E.prototype),
          u(E.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(_),
          u(_, l, "Generator"),
          u(_, a, function () {
            return this;
          }),
          u(_, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (l && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function bo(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function wo(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              bo(i, r, o, a, s, "next", e);
            }
            function s(e) {
              bo(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var ko = (function () {
        var e = wo(
          vo().mark(function e() {
            var t, n, r;
            return vo().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      Tt(
                        "https://vhgqkyxryzlvmtbmyanr.supabase.co",
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZ3FreXhyeXpsdm10Ym15YW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NzQ2ODYsImV4cCI6MjAzMDI1MDY4Nn0.i_J-wwu3rh5BC1nMTDTuEHAChOqF0Vh3oUKAV7WrK3A"
                      )
                    );
                  case 2:
                    return (
                      (t = e.sent),
                      (e.next = 5),
                      t
                        .from("ProjectSpecifications")
                        .select("*")
                        .eq("Domain", "http://127.0.0.1:5500")
                    );
                  case 5:
                    if (((n = e.sent), (r = n.data) && 0 != r.length)) {
                      e.next = 9;
                      break;
                    }
                    throw new Error("Project Specification not found");
                  case 9:
                    It.init(t, r[0]);
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      const xo = function () {
        var e = go((0, Ot.useState)(!1), 2),
          t = e[0],
          n = e[1];
        return (
          (0, Ot.useEffect)(function () {
            wo(
              vo().mark(function e() {
                return vo().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), ko();
                      case 2:
                        return (e.next = 4), nr();
                      case 4:
                        if (!e.sent) {
                          e.next = 6;
                          break;
                        }
                        n(!0);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          }, []),
          (0, Fn.jsxs)("div", {
            className: "bg-zinc-900 p-4 flex gap-2",
            children: [
              (0, Fn.jsx)(Rr, { isLogin: t, setIsLogin: n }),
              (0, Fn.jsx)(po, { isLogin: t }),
            ],
          })
        );
      };
      var _o = a(72),
        So = a.n(_o),
        Eo = a(825),
        jo = a.n(Eo),
        Co = a(659),
        To = a.n(Co),
        Oo = a(56),
        Po = a.n(Oo),
        Lo = a(159),
        No = a.n(Lo),
        Io = a(113),
        Ao = a.n(Io),
        zo = a(972),
        Ro = {};
      (Ro.styleTagTransform = Ao()),
        (Ro.setAttributes = Po()),
        (Ro.insert = To().bind(null, "head")),
        (Ro.domAPI = jo()),
        (Ro.insertStyleElement = No());
      So()(zo.A, Ro);
      zo.A && zo.A.locals && zo.A.locals;
      var $o = document.querySelector("#mml-root");
      if (!$o) throw new Error("Failed to find the root element");
      (0, e.H)($o).render((0, Fn.jsx)(xo, {}));
    })();
})();
