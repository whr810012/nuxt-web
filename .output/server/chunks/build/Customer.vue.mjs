import { resolveComponent, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext, defineComponent, mergeProps, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './page-illustration.svg.mjs';
import { P as Particles } from './Particles.vue.mjs';
import { H as Highlighter } from './Highlighter.vue.mjs';
import { H as HighlighterItem, C as CustomerBg02, a as CustomerImg02, b as CustomerBg03, c as CustomerImg03, d as CustomerBg06, e as CustomerImg06 } from './customer-bg-06.png.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _imports_1 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIAEAAQAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAEEBQcCAwj/2gAIAQEAAAAA2lhy/brp3j4ZdRFsMtCwCQ+GYfQF2qBxCHfHHTtEz/zML50qAW8Tmy7aqE441nWhbF1mlIUZCZOY/wD/xAAZAQADAQEBAAAAAAAAAAAAAAAAAwQBAgX/2gAKAgIQAxAAAAAOejOsCejNpmBFJy9C2eZf6ET0/wD/xAAxEAABAwQAAwYFAwUAAAAAAAABAgMEAAUGERITIQciMUFRYRAUI3GRFVKBM0JiwtH/2gAIAQEAAT8Ao1f70IV3tNvH9SU8CfZAUN0FgilOJQAVEAEgbNbofA9Bs088QBwAbJ0N+ddomQ3J3OordtKPmY2mWlJ6gndO3TOF2yOyichmTrbjobA6/g1dsqzCGQxLaanQlNJS4WGyh4K11WkirT24IYiNMXa2PrlJIQVN+K6gTG58FiWzvlvNpcTsa6EboUazHK4OKwFOvqU5MdBDEdsArVWB4rPumazbvd4r0UhoPstSB1CV1IuTa7k5E+XfQErICyElP5BNTJUFk8t95IJ9UmslxeTcM0jQ7W2VvS+8gDy9/t0NYpaXbFjMC2vuh11hrS1Dw2TsgUKNPYtClZQL7KRzX22w2ylXUI0Sd0whz9UvbhW4lwMIQ2f8dE6H5NR7O189Inc13i0CpC17T09BUi3S3pyZKJxbbA0pngB2fXdYrCYVksyWtgKdRGQ00v8AYN7P2J2KFD4vtNocU8oq0pISr08/+1fgtl36MJhQC9oW4vvD7DXTzq3lRgpQWSyQdcG9/iscty4LT7jw04+sH+AOlCh8Zk56XPEeO8EMHaVqP7QQVr/1HuTV7mvJkrTF07y1669O4eqTVtlux7gxKmBJbQsEtpGwBVvvVsuq3hb50eSWVlDoaWCUKoGhW6utzSw2WkHvK2CrfhUu4PxXCpMNDjPDxLdkvBpGh4AgbVw+wH81MS89IjzHnEPKkx0LUW0cKT9h5CszvRs1icW2SmS/9Jn2PrWM2HJZklu5WW3S3zHd2HkIJTxjrTHa5kdhnJiZLaUH9w5ZZd1Vlu8O+2qPcoDvMjPp2k+Y9QfcVcJgiRSvpxHoBWUZhDskVS1H5iWTpthKhviPmfQVAauc1kzLm6ozH9HljYSyk/2AeVR2VBtDeu9obrNrym55A/wK3Fh7ZZ9z5msR7WrbjMGPaDZ3REio0t5pY41uHxURWYdouHXa4svOWh27uxeNKOZ9Nquy7MYORMyIMS1tWwQ0Apjsq2hSTX//xAAfEQABBAICAwAAAAAAAAAAAAABAAIDEAQREiIxQVH/2gAIAQIBAT8AW0CDch+KM9reQotGnu9BS5XHqFjtIZt3k1//xAAdEQABBAIDAAAAAAAAAAAAAAABAAIDEBExIkFC/9oACAEDAQE/AFjOkQRcYUo43GCFKTqmN7KZB6KmcC7Ar//Z";

const _imports_2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FF4B6C'/%3e%3cstop%20offset='100%25'%20stop-color='%23FF5272'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='32'%20cy='32'%20r='32'%20fill='url(%23a)'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M43.245%2037.057c.316.89.413%201.73.22%202.57a5.107%205.107%200%200%201-3.16%203.989%204.954%204.954%200%200%201-2.602.336%206.475%206.475%200%200%201-2.43-.817c-.973-.552-1.945-1.345-3.015-2.498-1.07%201.153-2.018%201.946-3.014%202.498A6.473%206.473%200%200%201%2026.18%2044c-.68%200-1.337-.12-1.969-.384a5.117%205.117%200%200%201-3.16-3.988c-.122-.866-.025-1.707.292-2.595.12-.313.242-.6.364-.865.194-.432.39-.84.56-1.225l.024-.048c1.677-3.604%203.5-7.255%205.372-10.859l.073-.144c.2-.374.394-.75.583-1.13.243-.432.51-.888.876-1.32.802-.913%201.895-1.442%203.111-1.442%201.191%200%202.31.529%203.087%201.49.39.432.632.888.876%201.321.189.379.383.755.583%201.13l.073.144a249.213%20249.213%200%200%201%205.372%2010.858l.025.024c.17.384.364.793.559%201.225.121.265.243.577.364.865Zm-10.963%201.25c1.312-1.658%202.163-3.196%202.456-4.469.121-.528.145-1.033.073-1.465a2.32%202.32%200%200%200-.39-1.01c-.437-.672-1.24-1.056-2.14-1.056-.899%200-1.677.408-2.138%201.057a2.31%202.31%200%200%200-.39%201.009c-.073.432-.048.913.073%201.465.292%201.297%201.143%202.835%202.456%204.468Zm9.699%201.129c.097-.625.024-1.226-.17-1.85-.072-.24-.194-.48-.316-.768-.194-.385-.364-.817-.559-1.202v-.024a316.515%20316.515%200%200%200-5.324-10.81l-.073-.145c-.194-.36-.388-.745-.583-1.105a5.308%205.308%200%200%200-.681-1.057%202.555%202.555%200%200%200-1.945-.89c-.754%200-1.434.314-1.945.89a5.267%205.267%200%200%200-.68%201.057c-.195.36-.39.745-.584%201.105l-.073.144A260.674%20260.674%200%200%200%2023.7%2035.568l-.024.048c-.195.408-.39.817-.56%201.201-.12.288-.243.528-.315.769a3.93%203.93%200%200%200-.22%201.874c.17%201.249%201.022%202.33%202.213%202.81.559.217%201.191.313%201.847.24a4.811%204.811%200%200%200%201.848-.624c.875-.48%201.774-1.225%202.771-2.33-1.58-1.946-2.577-3.748-2.941-5.333a4.933%204.933%200%200%201-.122-2.043c.098-.6.317-1.153.657-1.633.753-1.057%202.018-1.706%203.427-1.706%201.41%200%202.674.624%203.428%201.706.34.48.56%201.033.657%201.633a5.942%205.942%200%200%201-.122%202.043c-.365%201.585-1.337%203.363-2.941%205.309%201.02%201.105%201.896%201.85%202.771%202.33.632.36%201.24.552%201.848.625.631.072%201.264%200%201.847-.24%201.19-.48%202.042-1.562%202.212-2.811Z'/%3e%3c/g%3e%3c/svg%3e";

const _sfc_main$1 = {
  name: "CustomersList",
  components: {
    Particles,
    Highlighter,
    HighlighterItem
  },
  setup() {
    const items = [
      {
        name: "Customer name",
        img: CustomerImg02,
        bg: CustomerBg02,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg03,
        bg: CustomerBg03,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg06,
        bg: CustomerBg06,
        link: "/customer"
      }
    ];
    return {
      items
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Highlighter = resolveComponent("Highlighter");
  const _component_router_link = resolveComponent("router-link");
  const _component_HighlighterItem = resolveComponent("HighlighterItem");
  const _component_Particles = resolveComponent("Particles");
  _push(`<aside${ssrRenderAttrs(_attrs)}><h2 class="inline-flex font-bold text-lg bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Related stories</h2><div class="mx-auto sm:max-w-[728px] lg:max-w-none">`);
  _push(ssrRenderComponent(_component_Highlighter, { class: "grid gap-4 lg:gap-6 sm:grid-cols-3 lg:grid-cols-3 group" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.items, (item) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_router_link, {
            to: item.link
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_HighlighterItem, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Particles, {
                        class: "absolute inset-0 -z-10",
                        quantity: 3
                      }, null, _parent4, _scopeId3));
                      _push4(`<div class="flex items-center justify-center h-32 lg:h-36"${_scopeId3}><img class="w-full h-full aspect-video object-cover"${ssrRenderAttr("src", item.bg)} width="352" height="198" alt="Customer Background" aria-hidden="true"${_scopeId3}><img class="absolute"${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.name)}${_scopeId3}></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" }, [
                          createVNode(_component_Particles, {
                            class: "absolute inset-0 -z-10",
                            quantity: 3
                          }),
                          createVNode("div", { class: "flex items-center justify-center h-32 lg:h-36" }, [
                            createVNode("img", {
                              class: "w-full h-full aspect-video object-cover",
                              src: item.bg,
                              width: "352",
                              height: "198",
                              alt: "Customer Background",
                              "aria-hidden": "true"
                            }, null, 8, ["src"]),
                            createVNode("img", {
                              class: "absolute",
                              src: item.img,
                              alt: item.name
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_HighlighterItem, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" }, [
                        createVNode(_component_Particles, {
                          class: "absolute inset-0 -z-10",
                          quantity: 3
                        }),
                        createVNode("div", { class: "flex items-center justify-center h-32 lg:h-36" }, [
                          createVNode("img", {
                            class: "w-full h-full aspect-video object-cover",
                            src: item.bg,
                            width: "352",
                            height: "198",
                            alt: "Customer Background",
                            "aria-hidden": "true"
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            class: "absolute",
                            src: item.img,
                            alt: item.name
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.items, (item) => {
            return openBlock(), createBlock("div", null, [
              createVNode(_component_router_link, {
                to: item.link
              }, {
                default: withCtx(() => [
                  createVNode(_component_HighlighterItem, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" }, [
                        createVNode(_component_Particles, {
                          class: "absolute inset-0 -z-10",
                          quantity: 3
                        }),
                        createVNode("div", { class: "flex items-center justify-center h-32 lg:h-36" }, [
                          createVNode("img", {
                            class: "w-full h-full aspect-video object-cover",
                            src: item.bg,
                            width: "352",
                            height: "198",
                            alt: "Customer Background",
                            "aria-hidden": "true"
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            class: "absolute",
                            src: item.img,
                            alt: item.name
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["to"])
            ]);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></aside>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/CustomersRelated.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CustomersRelated = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "StellarCustomersRelated" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Customer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "customer-page" }, _attrs))}><section class="relative"><div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true"><div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div><div class="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div></div>`);
      _push(ssrRenderComponent(Particles, {
        class: "absolute inset-0 h-96 -z-10",
        quantity: 15
      }, null, _parent));
      _push(`<div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true"><img${ssrRenderAttr("src", _imports_0)} class="max-w-none" width="1440" height="427" alt="Page Illustration"></div><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]"><div class="md:flex md:justify-between"><div class="md:grow pb-12 md:pb-20"><div class="max-w-3xl"><article class="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "inline-flex text-sm font-medium text-purple-500 group",
        to: "/customers"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="tracking-normal group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1"${_scopeId}>&lt;-</span> ${ssrInterpolate(_ctx.$t("customer.goBack"))}`);
          } else {
            return [
              createVNode("span", { class: "tracking-normal group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1" }, "<-"),
              createTextVNode(" " + toDisplayString(_ctx.$t("customer.goBack")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><header><h1 class="h2 inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">${ssrInterpolate(_ctx.$t("customer.title"))}</h1><div class="text-sm flex items-center space-x-4 mb-8"><img class="rounded-full"${ssrRenderAttr("src", _imports_1)} width="32" height="32" alt="Customer Avatar 03"><div><div class="text-slate-300 font-medium">${ssrInterpolate(_ctx.$t("customer.author"))}</div><div class="text-slate-500">${ssrInterpolate(_ctx.$t("customer.position"))}</div></div></div></header><div class="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic"><p><a href="#0">Airbnb</a> is an American San Francisco-based company operating an online marketplace for short- and long-term homestays and experiences. The company acts as a broker and charges a commission from each booking. The company was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and Joe Gebbia. Airbnb is a shortened version of its original name, AirBedandBreakfast.com. Airbnb is the most well-known company for short-term housing rentals. </p><p> Regulation of <strong>short-term rentals can include requirements for hosts to have business licenses</strong>, payment of hotel taxes and compliance with building, city and zoning standards. The hotel industry has lobbied for stricter regulations on short-term home rental and in addition to government-imposed restrictions, many homeowner associations also limit short term rentals. </p><h2>Why do Airbnb need web governance policies?</h2><p> Brian Chesky, Co-Founder and CEO at Airbnb: </p><p> Through spending twenty years working with hots, Airbnb reflected that a lack of governance policy is a systemic issue with most short rentals. Without web governance, hosts usually experience a lack of process and accountability leading to: </p><ul><li> An organic sprawl of content, creating bloated websites </li><li> Inconsistent, poorer quality content </li><li> Weak user experience impacting the ability to support digital goals </li></ul><p> When these problems become acute enough, large website redesign projects begin. But <strong>without governance being put in place at the same time, the same problem will only happen again</strong>. Airbnb mitigate this risk by baking web governance into their working process with clients from strategy through to site launch and beyond. </p><h2>Good governance leads to stronger results</h2><p> With a strong process for content governance, the benefits are clear for both Airbnb as a company and their clients. Since its founding in 2008, Airbnb has become one of the most successful and valuable start-ups in the world, and has had a significant impact on the industry of renting homes and the hospitality industry more generally. </p><blockquote><p> “With a strong process for content governance, the benefits are clear for both Airbnb as a company and their clients. Since its founding in 2008, Airbnb has become one of the most successful and valuable start-ups in the world, and has had a significant impact on the industry of renting homes and the hospitality industry more generally.” </p></blockquote><p> Airbnb has also had a significant impact on the hospitality industry, particularly in the area of hotels and other traditional accommodation providers, which are often referred to as the HORECA industry. Some industry experts believe that Airbnb&#39;s rapid growth has disrupted the traditional HORECA model, and has led to a decline in revenue and occupancy rates for traditional hotels in certain markets. </p><h2>How do you get organisation wide buy-in?</h2><p> Mike reflected that the optimum time to introduce a web governance policy is during a website relaunch project because of the collective energy focused on creating a better user experience. Voltaire recommends starting governance policy in line with strategy kick-off. </p></div></article>`);
      _push(ssrRenderComponent(CustomersRelated, null, null, _parent));
      _push(`</div></div><aside class="md:w-64 lg:w-80 md:shrink-0 md:pt-[3.75rem] lg:pt-0 pb-12 md:pb-20"><div class="sticky top-6 md:pl-6 lg:pl-10"><div class="space-y-6"><div class="bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800"><div class="px-5 py-6"><div class="mb-5"><div class="flex items-center space-x-4"><img${ssrRenderAttr("src", _imports_2)} width="64" height="64" alt="Customer badge"><div class="text-lg font-semibold text-slate-100">Airbnb Inc.</div></div></div><ul class="text-sm"><li class="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1]"><span class="text-slate-400">Location</span><span class="text-slate-300 font-medium">San Francisco</span></li><li class="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1]"><span class="text-slate-400">Website</span><a class="text-purple-500 font-medium flex items-center space-x-1" href="#0"><span>airbnb.com</span><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="9" height="9"><path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z"></path></svg></a></li><li class="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1]"><span class="text-slate-400">Industry</span><span class="text-slate-300 font-medium">Hospitality</span></li><li class="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1]"><span class="text-slate-400">Product</span><span class="text-slate-300 font-medium">Stellar X</span></li><li class="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,--theme(--color-slate-700/.3),--theme(--color-slate-700),--theme(--color-slate-700/.3))1]"><span class="text-slate-400">Impact</span><span class="text-slate-300 font-medium">+7% new hosts</span></li></ul></div></div></div></div></aside></div></div></div></section></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Customer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Customer.vue.mjs.map
