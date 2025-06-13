import { P as Particles } from './Particles.vue.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  name: "Cta02",
  components: {
    Particles
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Particles = resolveComponent("Particles");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24">`);
  _push(ssrRenderComponent(_component_Particles, {
    class: "absolute inset-0 -z-10",
    quantity: 6,
    staticity: 30
  }, null, _parent));
  _push(`</div><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="relative px-8 py-12 md:py-20 border-t border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]"><div class="absolute top-0 -mt-24 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="434" height="427"><defs><linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#A855F7"></stop><stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#bs4-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path></svg></div><div class="max-w-3xl mx-auto text-center"><div><div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">The security first platform</div></div><h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Supercharge your security</h2><p class="text-lg text-slate-400 mb-8">All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p><div><a class="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group" href="#0"> Start Building <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Cta02.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cta = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "StellarCta02" });

export { Cta as C };
//# sourceMappingURL=Cta02.vue.mjs.map
