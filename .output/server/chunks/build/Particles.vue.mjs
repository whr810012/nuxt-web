import { ref, mergeProps, reactive, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const useMousePosition = () => {
  const mousePosition = ref({ x: 0, y: 0 });
  return mousePosition;
};

const _sfc_main = {
  name: "Particles",
  props: {
    quantity: {
      type: Number,
      default: 30
    },
    staticity: {
      type: Number,
      default: 50
    },
    ease: {
      type: Number,
      default: 50
    },
    refresh: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const canvasRef = ref(null);
    const canvasContainerRef = ref(null);
    const context = ref(null);
    const circles = ref([]);
    const mousePosition = useMousePosition();
    const mouse = reactive({ x: 0, y: 0 });
    const canvasSize = reactive({ w: 0, h: 0 });
    const dpr = 1;
    watch(
      () => mousePosition.value,
      () => {
        onMouseMove();
      }
    );
    watch(
      () => props.refresh,
      () => {
        initCanvas();
      }
    );
    const initCanvas = () => {
      resizeCanvas();
      drawParticles();
    };
    const onMouseMove = () => {
      if (canvasRef.value) {
        const rect = canvasRef.value.getBoundingClientRect();
        const { w, h } = canvasSize;
        const x = mousePosition.value.x - rect.left - w / 2;
        const y = mousePosition.value.y - rect.top - h / 2;
        const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
        if (inside) {
          mouse.x = x;
          mouse.y = y;
        }
      }
    };
    const resizeCanvas = () => {
      if (canvasContainerRef.value && canvasRef.value && context.value) {
        circles.value.length = 0;
        canvasSize.w = canvasContainerRef.value.offsetWidth;
        canvasSize.h = canvasContainerRef.value.offsetHeight;
        canvasRef.value.width = canvasSize.w * dpr;
        canvasRef.value.height = canvasSize.h * dpr;
        canvasRef.value.style.width = canvasSize.w + "px";
        canvasRef.value.style.height = canvasSize.h + "px";
        context.value.scale(dpr, dpr);
      }
    };
    const circleParams = () => {
      const x = Math.floor(Math.random() * canvasSize.w);
      const y = Math.floor(Math.random() * canvasSize.h);
      const translateX = 0;
      const translateY = 0;
      const size = Math.floor(Math.random() * 2) + 1;
      const alpha = 0;
      const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
      const dx = (Math.random() - 0.5) * 0.2;
      const dy = (Math.random() - 0.5) * 0.2;
      const magnetism = 0.1 + Math.random() * 4;
      return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism };
    };
    const drawCircle = (circle, update = false) => {
      if (context.value) {
        const { x, y, translateX, translateY, size, alpha } = circle;
        context.value.translate(translateX, translateY);
        context.value.beginPath();
        context.value.arc(x, y, size, 0, 2 * Math.PI);
        context.value.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        context.value.fill();
        context.value.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (!update) {
          circles.value.push(circle);
        }
      }
    };
    const clearContext = () => {
      if (context.value) {
        context.value.clearRect(0, 0, canvasSize.w, canvasSize.h);
      }
    };
    const drawParticles = () => {
      clearContext();
      const particleCount = props.quantity;
      for (let i = 0; i < particleCount; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    };
    return {
      canvasRef,
      canvasContainerRef
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "canvasContainerRef",
    "aria-hidden": "true"
  }, _attrs))}><canvas></canvas></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Particles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Particles = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "StellarParticles" });

export { Particles as P, useMousePosition as u };
//# sourceMappingURL=Particles.vue.mjs.map
