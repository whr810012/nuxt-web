import { defineComponent, ref, computed, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { f as useI18n, g as useUserStore } from './server.mjs';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'ipx';
import 'node:path';
import 'pinia';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';

const _imports_0 = "" + __buildAssetsURL("logo.BQB2Ihus.png");

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, setLocale } = useI18n();
    const isOpen = ref(false);
    const availableLocales = computed(() => {
      return locales.value.map((l) => {
        return {
          code: l.code,
          name: l.name
        };
      });
    });
    const currentLocale = computed(() => {
      return availableLocales.value.find((l) => l.code === locale.value) || availableLocales.value[0];
    });
    const closeDropdown = () => {
      isOpen.value = false;
    };
    const vClickOutside = {
      mounted(el, binding) {
        el._clickOutside = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event);
          }
        };
        (void 0).addEventListener("click", el._clickOutside);
      },
      unmounted(el) {
        (void 0).removeEventListener("click", el._clickOutside);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs, ssrGetDirectiveProps(_ctx, vClickOutside, closeDropdown)))} data-v-a81fa12e><button class="${ssrRenderClass([{ "bg-slate-700/30": unref(isOpen) }, "flex items-center px-3 py-1.5 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-700/50 transition-all duration-200"])}" data-v-a81fa12e><span class="mr-1.5" data-v-a81fa12e>${ssrInterpolate(unref(currentLocale).name)}</span><svg class="${ssrRenderClass([{ "transform rotate-180": unref(isOpen) }, "w-4 h-4 transition-transform duration-200"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a81fa12e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a81fa12e></path></svg></button>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute right-0 mt-1 py-1 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-xl z-50 overflow-hidden" data-v-a81fa12e><!--[-->`);
        ssrRenderList(unref(availableLocales), (locale2) => {
          _push(`<a class="${ssrRenderClass([{ "bg-slate-700/30 text-white": locale2.code === unref(currentLocale).code }, "flex items-center px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 cursor-pointer transition-colors duration-150"])}" data-v-a81fa12e>`);
          if (locale2.code === unref(currentLocale).code) {
            _push(`<span class="mr-2 text-emerald-400" data-v-a81fa12e>✓</span>`);
          } else {
            _push(`<span class="mr-2 opacity-0" data-v-a81fa12e>✓</span>`);
          }
          _push(` ${ssrInterpolate(locale2.name)}</a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/LanguageSwitcher.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LanguageSwitcher = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-a81fa12e"]]), { __name: "StellarLanguageSwitcher" });

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    useRouter();
    ref(false);
    ref(null);
    ref(null);
    const isDropdownOpen = ref(false);
    const closeDropdown = () => {
      isDropdownOpen.value = false;
    };
    const vClickOutside = {
      mounted(el, binding) {
        el._clickOutside = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event);
          }
        };
        (void 0).addEventListener("click", el._clickOutside);
      },
      unmounted(el) {
        (void 0).removeEventListener("click", el._clickOutside);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_router_link = resolveComponent("router-link");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "absolute w-full z-30" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="flex items-center justify-between h-16 md:h-20"><div class="flex-1">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "inline-flex",
        to: "/",
        "aria-label": "Cruip"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="max-w-none rounded-[50%]"${ssrRenderAttr("src", _imports_0)} width="38" height="38" alt="Stellar"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "max-w-none rounded-[50%]",
                src: _imports_0,
                width: "38",
                height: "38",
                alt: "Stellar"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="hidden md:flex md:grow">`);
      {
        _push(`<!---->`);
      }
      _push(`</nav><ul class="flex-1 flex justify-end items-center"><div class="flex items-end mx-2 mt-1">`);
      _push(ssrRenderComponent(LanguageSwitcher, null, null, _parent));
      _push(`</div>`);
      if (!((_a = unref(userStore).getUserInfo) == null ? void 0 : _a.nickName)) {
        _push(`<!--[--><li>`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out",
          to: "/signin"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("auth.signIn"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("auth.signIn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="ml-6">`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none",
          to: "/signup"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative inline-flex items-center"${_scopeId}>${ssrInterpolate(_ctx.$t("auth.signUp"))} <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"${_scopeId}>-&gt;</span></span>`);
            } else {
              return [
                createVNode("span", { class: "relative inline-flex items-center" }, [
                  createTextVNode(toDisplayString(_ctx.$t("auth.signUp")) + " ", 1),
                  createVNode("span", { class: "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" }, "->")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><!--]-->`);
      } else {
        _push(`<li${ssrRenderAttrs(mergeProps({ class: "relative" }, ssrGetDirectiveProps(_ctx, vClickOutside, closeDropdown)))}><div class="${ssrRenderClass([{ "bg-slate-700/30 text-white": unref(isDropdownOpen) }, "flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-700/30 whitespace-nowrap transition-all duration-200"])}"><div class="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-200 text-xs font-bold overflow-hidden">`);
        if ((_b = unref(userStore).getUserInfo) == null ? void 0 : _b.authorities) {
          _push(`<img${ssrRenderAttr("src", unref(userStore).getUserInfo.authorities)} alt="Avatar" class="w-full h-full object-cover">`);
        } else {
          _push(`<span>${ssrInterpolate((_d = (_c = unref(userStore).getUserInfo) == null ? void 0 : _c.nickName) == null ? void 0 : _d.charAt(0).toUpperCase())}</span>`);
        }
        _push(`</div><span class="max-w-[100px] truncate">${ssrInterpolate((_e = unref(userStore).getUserInfo) == null ? void 0 : _e.nickName)}</span><svg class="${ssrRenderClass([{ "rotate-180": unref(isDropdownOpen) }, "w-4 h-4 transition-transform duration-200"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div><div style="${ssrRenderStyle(unref(isDropdownOpen) ? null : { display: "none" })}" class="absolute right-0 mt-1 w-56 py-2 bg-slate-800 rounded-lg shadow-xl border border-slate-700/50 backdrop-blur-sm z-50 overflow-hidden"><div class="px-4 py-2 border-b border-slate-700/50 mb-1"><div class="text-sm font-medium text-white">${ssrInterpolate((_f = unref(userStore).getUserInfo) == null ? void 0 : _f.nickName)}</div><div class="text-xs text-slate-400 truncate">${ssrInterpolate(((_g = unref(userStore).getUserInfo) == null ? void 0 : _g.email) || "未设置邮箱")}</div></div>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/profile",
          class: "flex items-center px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors duration-150"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg> 个人资料 `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  })
                ])),
                createTextVNode(" 个人资料 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          to: "/settings",
          class: "flex items-center px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors duration-150"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg> 设置 `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  }),
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  })
                ])),
                createTextVNode(" 设置 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="border-t border-slate-700/50 my-1"></div><a href="#" class="flex items-center px-4 py-2 text-sm text-rose-400 hover:bg-slate-700/50 hover:text-rose-300 transition-colors duration-150"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg> 退出登录 </a></div></li>`);
      }
      _push(`</ul>`);
      {
        _push(`<!---->`);
      }
      _push(`</div></div></header>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = Object.assign(_sfc_main$2, { __name: "StellarHeader" });

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12"><div class="sm:col-span-12 lg:col-span-4 order-1 lg:order-none"><div class="h-full flex flex-col sm:flex-row lg:flex-col justify-between"><div class="mb-4 sm:mb-0"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "inline-flex",
        to: "/",
        "aria-label": "智旅星途"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="rounded-[50%]" width="40" height="40" alt="智旅星途"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "rounded-[50%]",
                width: "40",
                height: "40",
                alt: "智旅星途"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-sm text-slate-300">© 智旅星途 <span class="text-slate-500">-</span> ${ssrInterpolate(_ctx.$t("footer.copyright"))}</div><div class="mt-2 text-sm text-slate-400">${ssrInterpolate(_ctx.$t("footer.slogan"))}</div></div></div></div><div class="sm:col-span-6 md:col-span-3 lg:col-span-2"><h6 class="text-sm text-slate-50 font-medium mb-2">${ssrInterpolate(_ctx.$t("footer.products.title"))}</h6><ul class="text-sm space-y-2"><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.products.features"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.products.integrations"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.products.pricing"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.products.changelog"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.products.method"))}</a></li></ul></div><div class="sm:col-span-6 md:col-span-3 lg:col-span-2"><h6 class="text-sm text-slate-50 font-medium mb-2">${ssrInterpolate(_ctx.$t("footer.company.title"))}</h6><ul class="text-sm space-y-2"><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.company.about"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.company.diversity"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.company.blog"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.company.careers"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.company.financial"))}</a></li></ul></div><div class="sm:col-span-6 md:col-span-3 lg:col-span-2"><h6 class="text-sm text-slate-50 font-medium mb-2">${ssrInterpolate(_ctx.$t("footer.resources.title"))}</h6><ul class="text-sm space-y-2"><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.resources.community"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.resources.terms"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.resources.report"))}</a></li></ul></div><div class="sm:col-span-6 md:col-span-3 lg:col-span-2"><h6 class="text-sm text-slate-50 font-medium mb-2">${ssrInterpolate(_ctx.$t("footer.legals.title"))}</h6><ul class="text-sm space-y-2"><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.legals.refund"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.legals.terms"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.legals.privacy"))}</a></li><li><a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">${ssrInterpolate(_ctx.$t("footer.legals.brand"))}</a></li></ul></div></div></div></footer>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = Object.assign(_sfc_main$1, { __name: "StellarFooter" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "default-layout flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
