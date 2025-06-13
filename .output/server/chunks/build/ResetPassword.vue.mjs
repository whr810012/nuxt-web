import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './auth-illustration.svg.mjs';
import { _ as _imports_1 } from './logo.svg.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResetPassword",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "grow" }, _attrs))}><section class="relative"><div class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true"><img${ssrRenderAttr("src", _imports_0)} class="max-w-none" width="1440" height="450" alt="Page Illustration"></div><div class="relative max-w-6xl mx-auto px-4 sm:px-6"><div class="pt-32 pb-12 md:pt-40 md:pb-20"><div class="max-w-3xl mx-auto text-center pb-12"><div class="mb-5">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "inline-flex",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl"${_scopeId}><img class="relative"${ssrRenderAttr("src", _imports_1)} width="42" height="42" alt="Stellar"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl" }, [
                createVNode("img", {
                  class: "relative",
                  src: _imports_1,
                  width: "42",
                  height: "42",
                  alt: "Stellar"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">${ssrInterpolate(_ctx.$t("auth.resetPassword"))}</h1></div><div class="max-w-sm mx-auto"><form><div class="space-y-4"><div><label class="block text-sm text-slate-300 font-medium mb-1" for="email">${ssrInterpolate(_ctx.$t("auth.email"))}</label><input id="email" class="form-input w-full" type="email" required></div></div><div class="mt-6"><button class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">${ssrInterpolate(_ctx.$t("auth.resetPassword"))} <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></button></div></form></div></div></div></section></main>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ResetPassword.vue.mjs.map
