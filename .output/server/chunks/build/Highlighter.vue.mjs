import { mergeProps, ref, reactive, watch, useSSRContext } from 'vue';
import { u as useMousePosition } from './Particles.vue.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  name: "Highlighter",
  props: {
    refresh: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const containerRef = ref(null);
    const mousePosition = useMousePosition();
    const mouse = reactive({ x: 0, y: 0 });
    const containerSize = reactive({ w: 0, h: 0 });
    const boxes = ref([]);
    watch(
      () => mousePosition.value,
      () => {
        onMouseMove();
      }
    );
    watch(
      () => props.refresh,
      () => {
        initContainer();
      }
    );
    const initContainer = () => {
      if (containerRef.value) {
        containerSize.w = containerRef.value.offsetWidth;
        containerSize.h = containerRef.value.offsetHeight;
      }
    };
    const onMouseMove = () => {
      if (containerRef.value) {
        const rect = containerRef.value.getBoundingClientRect();
        const { w, h } = containerSize;
        const x = mousePosition.value.x - rect.left;
        const y = mousePosition.value.y - rect.top;
        const inside = x < w && x > 0 && y < h && y > 0;
        if (inside) {
          mouse.x = x;
          mouse.y = y;
          boxes.value.forEach((box) => {
            const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.x;
            const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.y;
            box.style.setProperty("--mouse-x", `${boxX}px`);
            box.style.setProperty("--mouse-y", `${boxY}px`);
          });
        }
      }
    };
    return {
      containerRef
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ ref: "containerRef" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Highlighter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Highlighter = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "StellarHighlighter" });

export { Highlighter as H };
//# sourceMappingURL=Highlighter.vue.mjs.map
