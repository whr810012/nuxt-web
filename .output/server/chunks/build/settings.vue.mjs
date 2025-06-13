import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  data() {
    return {
      activeSection: 0,
      settingSections: [
        { title: "个人信息", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
        { title: "通知设置", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>' },
        { title: "主题设置", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>' }
      ],
      settings: {
        username: "",
        email: "",
        bio: "",
        emailNotifications: true,
        pushNotifications: false,
        theme: "light"
      },
      isSaving: false
    };
  },
  methods: {
    async saveSettings() {
      var _a, _b;
      this.isSaving = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        (_a = this.$useToast) == null ? void 0 : _a.success("设置已成功保存");
      } catch (error) {
        (_b = this.$useToast) == null ? void 0 : _b.error("保存设置失败，请重试");
        console.error("保存设置失败:", error);
      } finally {
        this.isSaving = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "settings-container" }, _attrs))} data-v-acddaf01><h1 class="settings-title" data-v-acddaf01>用户设置</h1><div class="settings-content" data-v-acddaf01><div class="settings-sidebar" data-v-acddaf01><ul class="settings-nav" data-v-acddaf01><!--[-->`);
  ssrRenderList($data.settingSections, (section, index) => {
    _push(`<li class="${ssrRenderClass({ active: $data.activeSection === index })}" data-v-acddaf01><span class="nav-icon" data-v-acddaf01>${section.icon ?? ""}</span><span data-v-acddaf01>${ssrInterpolate(section.title)}</span></li>`);
  });
  _push(`<!--]--></ul></div><div class="settings-main" data-v-acddaf01><div class="settings-section" data-v-acddaf01>`);
  if ($data.activeSection === 0) {
    _push(`<!--[--><h2 data-v-acddaf01>个人信息</h2><div class="form-card" data-v-acddaf01><div class="form-group" data-v-acddaf01><label for="username" data-v-acddaf01>用户名</label><input type="text" id="username"${ssrRenderAttr("value", $data.settings.username)} placeholder="请输入您的用户名" data-v-acddaf01></div><div class="form-group" data-v-acddaf01><label for="email" data-v-acddaf01>邮箱</label><input type="email" id="email"${ssrRenderAttr("value", $data.settings.email)} placeholder="请输入您的邮箱地址" data-v-acddaf01></div><div class="form-group" data-v-acddaf01><label for="bio" data-v-acddaf01>个人简介</label><textarea id="bio" placeholder="请简单介绍一下自己..." data-v-acddaf01>${ssrInterpolate($data.settings.bio)}</textarea></div></div><!--]-->`);
  } else if ($data.activeSection === 1) {
    _push(`<!--[--><h2 data-v-acddaf01>通知设置</h2><div class="form-card" data-v-acddaf01><div class="form-group checkbox" data-v-acddaf01><input type="checkbox" id="emailNotif"${ssrIncludeBooleanAttr(Array.isArray($data.settings.emailNotifications) ? ssrLooseContain($data.settings.emailNotifications, null) : $data.settings.emailNotifications) ? " checked" : ""} data-v-acddaf01><label for="emailNotif" data-v-acddaf01>接收邮件通知</label><p class="form-help" data-v-acddaf01>我们会通过邮件通知您重要的更新和活动</p></div><div class="form-group checkbox" data-v-acddaf01><input type="checkbox" id="pushNotif"${ssrIncludeBooleanAttr(Array.isArray($data.settings.pushNotifications) ? ssrLooseContain($data.settings.pushNotifications, null) : $data.settings.pushNotifications) ? " checked" : ""} data-v-acddaf01><label for="pushNotif" data-v-acddaf01>接收推送通知</label><p class="form-help" data-v-acddaf01>允许在您的设备上接收实时推送通知</p></div></div><!--]-->`);
  } else if ($data.activeSection === 2) {
    _push(`<!--[--><h2 data-v-acddaf01>主题设置</h2><div class="form-card" data-v-acddaf01><div class="form-group" data-v-acddaf01><label for="theme" data-v-acddaf01>主题</label><select id="theme" data-v-acddaf01><option value="light" data-v-acddaf01${ssrIncludeBooleanAttr(Array.isArray($data.settings.theme) ? ssrLooseContain($data.settings.theme, "light") : ssrLooseEqual($data.settings.theme, "light")) ? " selected" : ""}>浅色</option><option value="dark" data-v-acddaf01${ssrIncludeBooleanAttr(Array.isArray($data.settings.theme) ? ssrLooseContain($data.settings.theme, "dark") : ssrLooseEqual($data.settings.theme, "dark")) ? " selected" : ""}>深色</option><option value="system" data-v-acddaf01${ssrIncludeBooleanAttr(Array.isArray($data.settings.theme) ? ssrLooseContain($data.settings.theme, "system") : ssrLooseEqual($data.settings.theme, "system")) ? " selected" : ""}>跟随系统</option></select><p class="form-help" data-v-acddaf01>选择您喜欢的界面主题风格</p></div></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><button class="save-button" data-v-acddaf01> 保存设置 </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-acddaf01"]]);

export { settings as default };
//# sourceMappingURL=settings.vue.mjs.map
