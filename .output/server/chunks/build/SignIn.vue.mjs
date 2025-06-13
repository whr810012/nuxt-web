import { computed, toValue, reactive, defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './auth-illustration.svg.mjs';
import { _ as _imports_1 } from './logo.svg.mjs';
import { i as fetchDefaults, k as useRequestFetch, g as useUserStore, u as useRouter } from './server.mjs';
import { F as hash } from '../_/nitro.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';
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

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}

const request = async (url, config = {}) => {
  const defaultConfig = {
    baseURL: "",
    headers: {
      "Content-Type": "application/json"
    },
    // 请求拦截
    onRequest({ options }) {
      const userStore = useUserStore();
      const token = userStore.getToken;
      console.log("options", options);
      if (token) {
        {
          return;
        }
      }
    },
    // 响应拦截
    onResponse({ response }) {
      const data = response._data;
      if (data.code !== 200) {
        throw new Error(data.message || "请求失败");
      }
    },
    // 错误处理
    onResponseError({ response }) {
      const error = response._data;
      console.error("Response error:", error);
      throw error;
    }
  };
  const finalConfig = {
    ...defaultConfig,
    ...config
  };
  try {
    const response = await useFetch(url, {
      ...finalConfig,
      server: false
      // 禁止在服务端执行
    }, "$fXmcZp2Kqx");
    console.log("Fetch successful:", response);
    const { data, error } = response;
    console.log("data", data);
    if (error.value) {
      throw error.value;
    }
    console.log("data类型:", typeof data.value);
    console.log("data.value是否存在:", data.value !== void 0 && data.value !== null);
    console.log("data.value详情:", JSON.stringify(data.value));
    if (!data.value) {
      console.log("No data returned:", data.value);
      throw new Error("请求失败：没有返回数据");
    }
    if (data.value.code === 200) {
      return data.value.data;
    } else {
      throw new Error("请求失败：响应数据格式错误");
    }
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
};
const get = (url, config) => {
  return request(url, { ...config, method: "GET" });
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useUserStore();
    const email = ref("ersan");
    const password = ref("123456");
    const captchaCode = ref();
    const img = ref();
    const uuid = ref();
    const loading = ref(false);
    const loginType = ref("password");
    const phone = ref("");
    const smsCode = ref("");
    const phoneError = ref("");
    const smsLoading = ref(false);
    const smsCountdown = ref(0);
    ref(null);
    const isPhoneValid = computed(() => {
      return /^1[3-9]\d{9}$/.test(phone.value);
    });
    const init = async () => {
      const response = await get("/login/capacha");
      img.value = "data:image/png;base64," + response.img;
      uuid.value = response.uuid;
    };
    init();
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
      _push(`</div><h1 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">${ssrInterpolate(_ctx.$t("auth.signIn"))}</h1></div><div class="max-w-sm mx-auto"><div class="flex mb-6 bg-slate-800 rounded-lg p-1"><button type="button" class="${ssrRenderClass([unref(loginType) === "password" ? "bg-purple-500 text-white shadow" : "text-slate-400", "flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors"])}"> 密码登录 </button><button type="button" class="${ssrRenderClass([unref(loginType) === "sms" ? "bg-purple-500 text-white shadow" : "text-slate-400", "flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors"])}"> 短信登录 </button></div><form>`);
      if (unref(loginType) === "password") {
        _push(`<div class="space-y-4"><div><label class="block text-sm text-slate-300 font-medium mb-1" for="email">${ssrInterpolate(_ctx.$t("auth.userName"))}</label><input${ssrRenderAttr("value", unref(email))} id="email" class="form-input w-full" required></div><div><div class="flex justify-between"><label class="block text-sm text-slate-300 font-medium mb-1" for="password">${ssrInterpolate(_ctx.$t("auth.password"))}</label>`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "text-sm font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out ml-2",
          to: "/resetpassword"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("auth.forgot"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("auth.forgot")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><input${ssrRenderAttr("value", unref(password))} id="password" class="form-input w-full" type="password" autocomplete="on" required></div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="captcha">${ssrInterpolate(_ctx.$t("auth.verification"))}</label><div class="flex items-center space-x-2"><input id="captcha"${ssrRenderAttr("value", unref(captchaCode))} class="form-input flex-1" type="text" required><img${ssrRenderAttr("src", unref(img))} class="h-10 w-24 cursor-pointer rounded border border-slate-800" alt="Verification Code"></div></div></div>`);
      } else {
        _push(`<div class="space-y-4"><div><label class="block text-sm text-slate-300 font-medium mb-1" for="phone">手机号 <span class="text-rose-500">*</span></label><input id="phone"${ssrRenderAttr("value", unref(phone))} class="form-input w-full" type="tel" placeholder="请输入手机号" required>`);
        if (unref(phoneError)) {
          _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(unref(phoneError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="smsCode">短信验证码 <span class="text-rose-500">*</span></label><div class="flex space-x-2"><input id="smsCode"${ssrRenderAttr("value", unref(smsCode))} class="form-input flex-1" type="text" placeholder="请输入验证码" required><button type="button" class="px-4 py-2 text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed rounded transition-colors"${ssrIncludeBooleanAttr(unref(smsLoading) || unref(smsCountdown) > 0 || !unref(isPhoneValid)) ? " disabled" : ""}>`);
        if (unref(smsLoading)) {
          _push(`<span>发送中...</span>`);
        } else if (unref(smsCountdown) > 0) {
          _push(`<span>${ssrInterpolate(unref(smsCountdown))}s</span>`);
        } else {
          _push(`<span>获取验证码</span>`);
        }
        _push(`</button></div></div></div>`);
      }
      _push(`<div class="mt-6"><button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
      if (unref(loading)) {
        _push(`<span>${ssrInterpolate(_ctx.$t("common.loading"))}...</span>`);
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("auth.signIn"))} <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></span>`);
      }
      _push(`</button></div></form><div class="text-center mt-4"><div class="text-sm text-slate-400">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out",
        to: "/signup"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("auth.signUp"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("auth.signUp")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SignIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SignIn.vue.mjs.map
