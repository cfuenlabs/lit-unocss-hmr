import { css as l, LitElement as c, html as p } from "lit";
import { property as f, customElement as x } from "lit/decorators.js";
var d = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (e, t, a, r) => {
  for (var n = r > 1 ? void 0 : r ? b(t, a) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (n = (r ? o(t, a, n) : o(n)) || n);
  return r && n && d(t, a, n), n;
};
let u = class extends c {
  constructor() {
    super(), this.data = {
      hello: "hello",
      hello2: "hello2",
      hello3: "hello3"
    };
  }
  render() {
    return p`
		<div flex flex-col justify-center items-center>
			<h1 m-0 text="[#A1AFC3]" text-9xl>CFUEN <span text-6xl ml="-30px">LABS</span></h1>
			<h3 m-0 class="text-[#A1AFC3]" text-4xl>UnoCSS + Lit + HMR</h1>
		</div>
		`;
  }
};
u.styles = l`
		:root {
			font-family: "Inter", sans-serif;
		}
		/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.m-0,
[m-0=""]{margin:0;}
[ml~="-\\33 0px"]{margin-left:-30px;}
.flex,
[flex=""]{display:flex;}
.flex-col,
[flex-col=""]{flex-direction:column;}
[items-center=""]{align-items:center;}
.justify-center,
[justify-center=""]{justify-content:center;}
.text-6xl,
[text-6xl=""]{font-size:3.75rem;line-height:1;}
[text-4xl=""]{font-size:2.25rem;line-height:2.5rem;}
[text-9xl=""]{font-size:8rem;line-height:1;}
.text-\\[\\#A1AFC3\\],
[text~="\\[\\#A1AFC3\\]"]{--un-text-opacity:1;color:rgb(161 175 195 / var(--un-text-opacity));};
	`;
i([
  f({
    type: Object,
    converter(e) {
      return JSON.parse(e);
    }
  })
], u.prototype, "data", 2);
u = i([
  x("cfuenlabs-rules")
], u);
export {
  u as CFuenLabsRules
};
