import { ref, computed, reactive, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _imports_0 } from './auth-illustration.svg.mjs';
import { _ as _imports_1 } from './logo.svg.mjs';
import { useRouter } from 'vue-router';
import { g as useUserStore } from './server.mjs';
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

const __default__ = {
  name: "SignUp"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useUserStore();
    const loading = ref(false);
    const smsLoading = ref(false);
    const smsCountdown = ref(0);
    ref(null);
    const isPhoneValid = computed(() => {
      return /^1[3-9]\d{9}$/.test(formData.value.phonenumber);
    });
    const formData = ref({
      nickName: "",
      userName: "",
      email: "",
      phonenumber: "",
      password: "",
      sex: "",
      smsCode: ""
    });
    const errors = reactive({
      nickName: "",
      userName: "",
      email: "",
      phonenumber: "",
      password: "",
      sex: "",
      smsCode: ""
    });
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
      _push(`</div><h1 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">${ssrInterpolate(_ctx.$t("auth.createAccount"))}</h1></div><div class="max-w-sm mx-auto"><form><div class="space-y-4"><div><label class="block text-sm text-slate-300 font-medium mb-1" for="nick-name">昵称 <span class="text-rose-500">*</span></label><input id="nick-name"${ssrRenderAttr("value", formData.value.nickName)} class="form-input w-full" type="text" placeholder="请输入昵称（至少2个字符）" required>`);
      if (errors.nickName) {
        _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(errors.nickName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="user-name">用户名 <span class="text-rose-500">*</span></label><input id="user-name"${ssrRenderAttr("value", formData.value.userName)} class="form-input w-full" type="text" placeholder="请输入用户名（仅英文和数字，至少5个字符）" required>`);
      if (errors.userName) {
        _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(errors.userName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="email">邮箱 <span class="text-rose-500">*</span></label><input id="email"${ssrRenderAttr("value", formData.value.email)} class="form-input w-full" type="email" placeholder="example@company.com" required>`);
      if (errors.email) {
        _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="phonenumber">手机号 <span class="text-rose-500">*</span></label><input id="phonenumber"${ssrRenderAttr("value", formData.value.phonenumber)} class="form-input w-full" type="tel" placeholder="请输入手机号" required>`);
      if (errors.phonenumber) {
        _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(errors.phonenumber)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (formData.value.phonenumber && isPhoneValid.value) {
        _push(`<div><label class="block text-sm text-slate-300 font-medium mb-1" for="smsCode">手机验证码 <span class="text-rose-500">*</span></label><div class="flex space-x-2"><input id="smsCode"${ssrRenderAttr("value", formData.value.smsCode)} class="form-input flex-1" type="text" placeholder="请输入验证码" required><button type="button" class="px-4 py-2 text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed rounded transition-colors"${ssrIncludeBooleanAttr(smsLoading.value || smsCountdown.value > 0 || !isPhoneValid.value) ? " disabled" : ""}>`);
        if (smsLoading.value) {
          _push(`<span>发送中...</span>`);
        } else if (smsCountdown.value > 0) {
          _push(`<span>${ssrInterpolate(smsCountdown.value)}s</span>`);
        } else {
          _push(`<span>获取验证码</span>`);
        }
        _push(`</button></div>`);
        if (errors.smsCode) {
          _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(errors.smsCode)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-sm text-slate-300 font-medium mb-1" for="password">密码 <span class="text-rose-500">*</span></label><input id="password"${ssrRenderAttr("value", formData.value.password)} class="form-input w-full" type="password" autocomplete="on" placeholder="至少6个字符，包含数字、大小写字母" required>`);
      if (errors.password) {
        _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(errors.password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="gender">性别 <span class="text-rose-500">*</span></label><select id="gender" class="form-select text-sm py-2 w-full" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(formData.value.sex) ? ssrLooseContain(formData.value.sex, "") : ssrLooseEqual(formData.value.sex, "")) ? " selected" : ""}>请选择</option><option value="男"${ssrIncludeBooleanAttr(Array.isArray(formData.value.sex) ? ssrLooseContain(formData.value.sex, "男") : ssrLooseEqual(formData.value.sex, "男")) ? " selected" : ""}>男</option><option value="女"${ssrIncludeBooleanAttr(Array.isArray(formData.value.sex) ? ssrLooseContain(formData.value.sex, "女") : ssrLooseEqual(formData.value.sex, "女")) ? " selected" : ""}>女</option></select>`);
      if (errors.sex) {
        _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(errors.sex)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-6"><button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}>`);
      if (loading.value) {
        _push(`<span>${ssrInterpolate(_ctx.$t("common.loading"))}...</span>`);
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("auth.signUp"))} <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></span>`);
      }
      _push(`</button></div></form><div class="text-center mt-4"><div class="text-sm text-slate-400">${ssrInterpolate(_ctx.$t("auth.alreadyHaveAccount"))} `);
      _push(ssrRenderComponent(_component_router_link, {
        class: "font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out",
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
      _push(`</div></div><div class="flex items-center my-6"><div class="border-t border-slate-800 grow mr-3" aria-hidden="true"></div><div class="text-sm text-slate-500 italic">${ssrInterpolate(_ctx.$t("common.or"))}</div><div class="border-t border-slate-800 grow ml-3" aria-hidden="true"></div></div><div class="flex space-x-3"><button class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9"><span class="relative"><span class="sr-only">${ssrInterpolate(_ctx.$t("auth.continueWith"))} Twitter</span><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12"><path d="m4.34 0 2.995 3.836L10.801 0h2.103L8.311 5.084 13.714 12H9.482L6.169 7.806 2.375 12H.271l4.915-5.436L0 0h4.34Zm-.635 1.155H2.457l7.607 9.627h1.165L3.705 1.155Z"></path></svg></span></button><button class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9"><span class="relative"><span class="sr-only">${ssrInterpolate(_ctx.$t("auth.continueWith"))} GitHub</span><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z"></path></svg></span></button></div></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SignUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SignUp.vue.mjs.map
