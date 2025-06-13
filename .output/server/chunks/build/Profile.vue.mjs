import { ref, computed, reactive, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _imports_0 } from './auth-illustration.svg.mjs';
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
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';

const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const loading = ref(false);
    const passwordLoading = ref(false);
    const activeSection = ref("profile");
    const userInfo = computed(() => userStore.getUserInfo);
    ref(null);
    const profileData = reactive({
      nickName: "",
      userName: "",
      email: "",
      phonenumber: "",
      sex: ""
    });
    const passwordData = reactive({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    const errors = reactive({
      nickName: "",
      userName: "",
      email: "",
      phonenumber: "",
      password: "",
      sex: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="relative"><div class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true"><img${ssrRenderAttr("src", _imports_0)} class="max-w-none" width="1440" height="450" alt="Page Illustration"></div><div class="relative max-w-6xl mx-auto px-4 sm:px-6"><div class="pt-32 pb-12 md:pt-40 md:pb-20"><div class="max-w-3xl mx-auto text-center pb-12"><h1 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60"> 个人资料</h1></div><div class="max-w-xl mx-auto mb-6 flex space-x-4"><button class="${ssrRenderClass([{ "bg-purple-500 text-white": unref(activeSection) === "profile", "bg-slate-700/50 text-slate-300 hover:bg-slate-700": unref(activeSection) !== "profile" }, "flex-1 py-2 px-4 rounded-lg transition-all duration-300 font-medium text-center"])}"> 个人信息 </button>`);
      {
        _push(`<!---->`);
      }
      _push(`</div><div class="max-w-xl mx-auto bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm p-6 shadow-lg">`);
      if (unref(activeSection) === "profile") {
        _push(`<div class="flex flex-col items-center mb-6"><div class="relative group"><div class="w-24 h-24 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-200 text-2xl font-bold overflow-hidden mb-4 transition-all duration-300 group-hover:opacity-80">`);
        if (unref(profileData).authorities) {
          _push(`<img${ssrRenderAttr("src", unref(profileData).authorities)} alt="Avatar" class="w-full h-full object-cover">`);
        } else {
          _push(`<span>${ssrInterpolate((_b = (_a = unref(userInfo)) == null ? void 0 : _a.nickName) == null ? void 0 : _b.charAt(0).toUpperCase())}</span>`);
        }
        _push(`</div><div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"><label for="authorities-upload" class="cursor-pointer"><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></label><input id="authorities-upload" type="file" accept="image/*" class="hidden"></div></div><span class="text-sm text-slate-400">点击头像更换</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeSection) === "profile") {
        _push(`<form><div class="space-y-4"><div><label class="block text-sm text-slate-300 font-medium mb-1" for="nick-name">昵称</label><input id="nick-name"${ssrRenderAttr("value", unref(profileData).nickName)} class="form-input w-full" type="text" required>`);
        if (unref(errors).nickName) {
          _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(unref(errors).nickName)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="user-name">用户名</label><input id="user-name"${ssrRenderAttr("value", unref(profileData).userName)} class="form-input w-full" type="text" disabled><p class="text-xs text-slate-500 mt-1">用户名不可修改</p></div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="email">邮箱</label><input id="email"${ssrRenderAttr("value", unref(profileData).email)} class="form-input w-full" type="email">`);
        if (unref(errors).email) {
          _push(`<p class="text-rose-500 text-xs mt-1">${ssrInterpolate(unref(errors).email)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="phonenumber">手机号</label><input id="phonenumber"${ssrRenderAttr("value", unref(profileData).phonenumber)} class="form-input w-full" type="tel" disabled><p class="text-xs text-slate-500 mt-1">手机号不可修改</p></div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="gender">性别</label><select id="gender" class="form-select text-sm py-2 w-full"><option value="男"${ssrIncludeBooleanAttr(Array.isArray(unref(profileData).sex) ? ssrLooseContain(unref(profileData).sex, "男") : ssrLooseEqual(unref(profileData).sex, "男")) ? " selected" : ""}>男</option><option value="女"${ssrIncludeBooleanAttr(Array.isArray(unref(profileData).sex) ? ssrLooseContain(unref(profileData).sex, "女") : ssrLooseEqual(unref(profileData).sex, "女")) ? " selected" : ""}>女</option></select></div></div><div class="mt-6"><button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
        if (unref(loading)) {
          _push(`<span>保存中...</span>`);
        } else {
          _push(`<span>保存修改</span>`);
        }
        _push(`</button></div></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeSection) === "password") {
        _push(`<div><form><div class="space-y-4"><div><label class="block text-sm text-slate-300 font-medium mb-1" for="current-password">当前密码</label><input id="current-password"${ssrRenderAttr("value", unref(passwordData).currentPassword)} class="form-input w-full" type="password" required></div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="new-password">新密码</label><input id="new-password"${ssrRenderAttr("value", unref(passwordData).newPassword)} class="form-input w-full" type="password" required></div><div><label class="block text-sm text-slate-300 font-medium mb-1" for="confirm-password">确认新密码</label><input id="confirm-password"${ssrRenderAttr("value", unref(passwordData).confirmPassword)} class="form-input w-full" type="password" required></div></div><div class="mt-6"><button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs"${ssrIncludeBooleanAttr(unref(passwordLoading)) ? " disabled" : ""}>`);
        if (unref(passwordLoading)) {
          _push(`<span>更新中...</span>`);
        } else {
          _push(`<span>更新密码</span>`);
        }
        _push(`</button></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Profile.vue.mjs.map
