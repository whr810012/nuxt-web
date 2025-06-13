import { resolveComponent, mergeProps, useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { P as Particles } from './Particles.vue.mjs';
import { _ as _imports_0$2 } from './page-illustration.svg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { C as Cta } from './Cta02.vue.mjs';

const _imports_1$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='446'%20height='446'%3e%3cdefs%3e%3cfilter%20id='b'%20width='119.2%25'%20height='119.2%25'%20x='-9.6%25'%20y='-9.6%25'%20filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur%20in='SourceGraphic'%20stdDeviation='8'/%3e%3c/filter%3e%3cfilter%20id='c'%20width='114.9%25'%20height='114.9%25'%20x='-7.5%25'%20y='-7.5%25'%20filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur%20in='SourceGraphic'%20stdDeviation='8'/%3e%3c/filter%3e%3cfilter%20id='e'%20width='118.4%25'%20height='118.4%25'%20x='-9.2%25'%20y='-9.2%25'%20filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur%20in='SourceGraphic'%20stdDeviation='12'/%3e%3c/filter%3e%3cfilter%20id='f'%20width='123.7%25'%20height='123.7%25'%20x='-11.9%25'%20y='-11.9%25'%20filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur%20in='SourceGraphic'%20stdDeviation='7'/%3e%3c/filter%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='7.644%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23E9D5FF'/%3e%3cstop%20offset='31.441%25'%20stop-color='%23A855F7'/%3e%3cstop%20offset='100%25'%20stop-color='%23A855F7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='50%25'%20x2='50%25'%20y1='7.644%25'%20y2='97.631%25'%3e%3cstop%20offset='0%25'%20stop-color='%23E9D5FF'/%3e%3cstop%20offset='31.441%25'%20stop-color='%23A855F7'/%3e%3cstop%20offset='100%25'%20stop-color='%23A855F7'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='nonzero'%3e%3cpath%20fill='url(%23a)'%20fill-opacity='.64'%20d='M224%20110.243c-62.274%200-112.757%2050.483-112.757%20112.757%200%2062.274%2050.483%20112.757%20112.757%20112.757%2062.274%200%20112.757-50.483%20112.757-112.757%200-62.274-50.483-112.757-112.757-112.757Zm0-12c68.901%200%20124.757%2055.856%20124.757%20124.757%200%2068.901-55.856%20124.757-124.757%20124.757-68.901%200-124.757-55.856-124.757-124.757C99.243%20154.099%20155.1%2098.243%20224%2098.243Z'%20filter='url(%23b)'/%3e%3cpath%20fill='url(%23a)'%20fill-opacity='.48'%20d='M224%2074c-82.29%200-149%2066.71-149%20149s66.71%20149%20149%20149%20149-66.71%20149-149S306.29%2074%20224%2074Zm0-12c88.918%200%20161%2072.082%20161%20161s-72.082%20161-161%20161S63%20311.918%2063%20223%20135.082%2062%20224%2062Z'%20filter='url(%23c)'/%3e%3cpath%20fill='url(%23d)'%20fill-opacity='.24'%20d='M223%2039C121.38%2039%2039%20121.38%2039%20223s82.38%20184%20184%20184%20184-82.38%20184-184S324.62%2039%20223%2039Zm0-12c108.248%200%20196%2087.752%20196%20196s-87.752%20196-196%20196S27%20331.248%2027%20223%20114.752%2027%20223%2027Z'%20filter='url(%23e)'/%3e%3cpath%20fill='url(%23a)'%20d='M224%20146.486c-42.257%200-76.514%2034.257-76.514%2076.514s34.257%2076.514%2076.514%2076.514%2076.514-34.257%2076.514-76.514-34.257-76.514-76.514-76.514Zm0-12c48.885%200%2088.514%2039.63%2088.514%2088.514%200%2048.885-39.63%2088.514-88.514%2088.514-48.885%200-88.514-39.63-88.514-88.514%200-48.885%2039.63-88.514%2088.514-88.514Z'%20filter='url(%23f)'/%3e%3c/g%3e%3c/svg%3e";

const _imports_2$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='72'%20height='72'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%231E293B'/%3e%3cstop%20offset='100%25'%20stop-color='%231E293B'%20stop-opacity='.48'/%3e%3c/linearGradient%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23A855F7'/%3e%3cstop%20offset='49.365%25'%20stop-color='%23334155'/%3e%3cstop%20offset='100%25'%20stop-color='%23334155'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='94.04%25'%20x2='9.97%25'%20y1='27.296%25'%20y2='86.882%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F1F5F9'%20stop-opacity='0'/%3e%3cstop%20offset='100%25'%20stop-color='%23F1F5F9'/%3e%3c/linearGradient%3e%3cfilter%20id='c'%20width='154.7%25'%20height='154.7%25'%20x='-27.3%25'%20y='-27.3%25'%20filterUnits='objectBoundingBox'%3e%3cfeMorphology%20in='SourceAlpha'%20operator='dilate'%20radius='2.5'%20result='shadowSpreadOuter1'/%3e%3cfeOffset%20in='shadowSpreadOuter1'%20result='shadowOffsetOuter1'/%3e%3cfeMorphology%20in='SourceAlpha'%20radius='2.5'%20result='shadowInner'/%3e%3cfeOffset%20in='shadowInner'%20result='shadowInner'/%3e%3cfeComposite%20in='shadowOffsetOuter1'%20in2='shadowInner'%20operator='out'%20result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur%20in='shadowOffsetOuter1'%20result='shadowBlurOuter1'%20stdDeviation='2'/%3e%3cfeColorMatrix%20in='shadowBlurOuter1'%20values='0%200%200%200%200.658823529%200%200%200%200%200.333333333%200%200%200%200%200.968627451%200%200%200%201%200'/%3e%3c/filter%3e%3ccircle%20id='d'%20cx='36'%20cy='36'%20r='15.545'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3crect%20width='70'%20height='70'%20x='1'%20y='1'%20fill='url(%23b)'%20stroke='url(%23a)'%20stroke-width='2'%20rx='35'/%3e%3cg%20stroke-linecap='square'%3e%3cuse%20xlink:href='%23d'%20fill='%23000'%20filter='url(%23c)'/%3e%3cuse%20xlink:href='%23d'%20stroke='url(%23e)'%20stroke-width='5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const _sfc_main$5 = {
  name: "HeroAbout",
  components: {
    Particles
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Particles = resolveComponent("Particles");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true"><div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div><div class="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div></div>`);
  _push(ssrRenderComponent(_component_Particles, {
    class: "absolute inset-0 h-96 -z-10",
    quantity: 15
  }, null, _parent));
  _push(`<div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true"><img${ssrRenderAttr("src", _imports_0$2)} class="max-w-none" width="1440" height="427" alt="Page Illustration"></div><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="pt-32 pb-10 md:pt-40"><div class="text-center"><div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">The folks behind the product</div><h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Turning security into innovation</h1><div class="inline-flex items-center justify-center relative">`);
  _push(ssrRenderComponent(_component_Particles, {
    class: "absolute inset-0 -z-10",
    quantity: 10
  }, null, _parent));
  _push(`<div class="inline-flex [mask-image:_radial-gradient(circle_at_bottom,transparent_15%,black_70%)]"><img${ssrRenderAttr("src", _imports_1$1)} width="446" height="446" alt="About illustration"></div><img class="absolute mt-[30%] drop-shadow-lg animate-float"${ssrRenderAttr("src", _imports_2$1)} width="72" height="72" alt="About icon"></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/HeroAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]), { __name: "StellarHeroAbout" });

const _imports_0$1 = "" + __buildAssetsURL("team.DWAT_tnY.jpg");

const _sfc_main$4 = {
  name: "Story"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="434" height="427"><defs><linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#A855F7"></stop><stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#bs4-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path></svg></div><div class="px-4 sm:px-6"><div class="max-w-5xl mx-auto"><div class="pb-12 md:pb-20"><div class="max-w-3xl mx-auto text-center pb-12 md:pb-20"><h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Our story (so far)</h2></div><div class="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14"><figure class="min-w-[240px]"><img class="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]"${ssrRenderAttr("src", _imports_0$1)} width="420" height="280" alt="Team"></figure><div class="max-w-[548px] mx-auto"><div class="text-slate-400 space-y-6"><p> We came together over a shared excitement about building a product that could solve our own problem of where our next favourite hack is coming from. But also a product that helps everyone thrive in this market: from founders and engineers to companies and investors. </p><p> Stellar is a product that connects people around the topics and ideas that fascinate them. <strong class="text-slate-50 font-medium">The idea that we can use technology to take our experience</strong>, as security lovers, to a new dimension and leave the computer industry in better shape while we&#39;re at it. </p><p> You can dive into the atoms that make up a product, share the moments that move you and discuss the ideas you find compelling. We want to create a ground for <strong class="text-slate-50 font-medium">discussion and bring knowledge together</strong>, while making it more accessible and easier to grasp. </p><p> Contrary to popular belief, this product is not random security. It has roots in a piece of classical literature, making it over 5 years old. Richard McClintock, a professor at <a class="text-purple-500 font-medium hover:underline" href="#0">Hampden-Sydney College</a> in Virginia, looked up one of the more obscure words, consectetur from a passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p><p> We all thrive on learning something new every day and everyone is constantly trying on different hats. We are working with new technologies while rethinking an old industry and are excited about all the possibilities and opportunities to innovate. It&#39;s a problem deeply ingrained in traditional sectors like startups and the wider service industry but which has been compounded in the past five to ten years by the emergence of the mostly tech-powered gig economy which has created a new generation of shift workers and indeed </p></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Story.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Story = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]), { __name: "StellarStory" });

const Member01 = "" + __buildAssetsURL("team-01.rPtLTmAV.png");

const Member02 = "" + __buildAssetsURL("team-02.yhV_oRoz.png");

const Member03 = "" + __buildAssetsURL("team-03.D5d06gTp.png");

const Member04 = "" + __buildAssetsURL("team-04.Bra2jY5B.png");

const Member05 = "" + __buildAssetsURL("team-05.X_uBSqZt.png");

const Member06 = "" + __buildAssetsURL("team-06.O3ZayNxI.png");

const Member07 = "" + __buildAssetsURL("team-07.BcnvA-Kh.png");

const Member08 = "" + __buildAssetsURL("team-08.DGluSNfo.png");

const Member09 = "" + __buildAssetsURL("team-09.Ca9sgwTn.png");

const Member10 = "" + __buildAssetsURL("team-10.DvF0J0_Y.png");

const Member11 = "" + __buildAssetsURL("team-11.BiRatqeP.png");

const Member12 = "" + __buildAssetsURL("team-12.JB0tMMC6.png");

const Member13 = "" + __buildAssetsURL("team-13.y8Ng1Wpc.png");

const Member14 = "" + __buildAssetsURL("team-14.BIQEtUin.png");

const Member15 = "" + __buildAssetsURL("team-15.DEgmJSou.png");

const Member16 = "" + __buildAssetsURL("team-16.hI4tFjYg.png");

const Member17 = "" + __buildAssetsURL("team-17.DuEjODg1.png");

const Member18 = "" + __buildAssetsURL("team-18.BHBiU3kX.png");

const Member19 = "" + __buildAssetsURL("team-19.0FWhsv2B.png");

const Member20 = "" + __buildAssetsURL("team-20.B_68Uj6I.png");

const _sfc_main$3 = {
  name: "Team",
  setup() {
    const items = [
      {
        img: Member01,
        name: "Sarah Barnekow",
        role: "CEO & Co-founder",
        twitter: "#0"
      },
      {
        img: Member02,
        name: "Alex Suevalov",
        role: "Tech Lead",
        twitter: "#0"
      },
      {
        img: Member03,
        name: "Mark Lamprecht",
        role: "Software Engineer",
        twitter: "#0"
      },
      {
        img: Member04,
        name: "Scott Bailey",
        role: "Software Engineer",
        twitter: "#0"
      },
      {
        img: Member05,
        name: "Vedant Hegde",
        role: "Customer Experience",
        twitter: "#0"
      },
      {
        img: Member06,
        name: "Lucy Radux",
        role: "Marketing Manager",
        twitter: "#0"
      },
      {
        img: Member07,
        name: "Devani Janssen",
        role: "Product Design",
        twitter: "#0"
      },
      {
        img: Member08,
        name: "Dima Trystram",
        role: "Customer Success",
        twitter: "#0"
      },
      {
        img: Member09,
        name: "Fraser Davidson",
        role: "Customer Success",
        twitter: "#0"
      },
      {
        img: Member10,
        name: "William Adkins",
        role: "Customer Experience",
        twitter: "#0"
      },
      {
        img: Member11,
        name: "Debbie Poulin",
        role: "Head of Talent",
        twitter: "#0"
      },
      {
        img: Member12,
        name: "James Kudinov",
        role: "Product Design",
        twitter: "#0"
      },
      {
        img: Member13,
        name: "Zhenya Rynzhuk",
        role: "Software Engineer",
        twitter: "#0"
      },
      {
        img: Member14,
        name: "Mary Maka",
        role: "Enterprise Architect",
        twitter: "#0"
      },
      {
        img: Member15,
        name: "Monty Hayton",
        role: "Video Producer",
        twitter: "#0"
      },
      {
        img: Member16,
        name: "Srdjan Vidakovic",
        role: "Operations Manager",
        twitter: "#0"
      },
      {
        img: Member17,
        name: "David Cran",
        role: "Financial Analyst",
        twitter: "#0"
      },
      {
        img: Member18,
        name: "Jacek Janiczak",
        role: "Data Engineer",
        twitter: "#0"
      },
      {
        img: Member19,
        name: "Tommy Chandra",
        role: "Head of Design",
        twitter: "#0"
      },
      {
        img: Member20,
        name: "Ally Golovko",
        role: "Software Engineer",
        twitter: "#0"
      }
    ];
    return {
      items
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true"><div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square"><div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div></div></div><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="py-12 md:py-20"><div class="max-w-3xl mx-auto text-center pb-12 md:pb-20"><h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">We are a happy, small team</h2><p class="text-lg text-slate-400">Various versions of Lorem Ipsum have evolved over the years, sometimes by accident, sometimes on purpose, and by injecting humour and the like.</p></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6"><!--[-->`);
  ssrRenderList($setup.items, (item) => {
    _push(`<div class="relative flex items-center justify-between py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 transition-opacity focus-within:before:opacity-10 before:rounded-xl before:transition-opacity"><div class="flex items-center space-x-4"><img class="shrink-0"${ssrRenderAttr("src", item.img)} width="48" height="48"${ssrRenderAttr("alt", item.name)}><div class="grow"><div class="font-bold text-slate-100 mb-0.5">${ssrInterpolate(item.name)}</div><div class="text-sm text-purple-500 font-medium">${ssrInterpolate(item.role)}</div></div></div><a class="shrink-0 text-slate-500 md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 focus:outline-hidden group-hover:before:absolute group-hover:before:inset-0"${ssrRenderAttr("href", item.twitter)}${ssrRenderAttr("aria-label", `${item.name}'s Twitter`)}><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path></svg></a></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Team.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Team = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]), { __name: "StellarTeam" });

const _imports_0 = "" + __buildAssetsURL("recruitment-01.DKVVLFmT.jpg");

const _imports_1 = "" + __buildAssetsURL("recruitment-02.-p_BLsfM.jpg");

const _imports_2 = "" + __buildAssetsURL("recruitment-03.JooWSoY2.jpg");

const _imports_3 = "" + __buildAssetsURL("recruitment-04.BySgrtel.jpg");

const _sfc_main$2 = {
  name: "Recruitment",
  setup() {
    const items = [
      {
        area: "Engineering",
        positions: [
          {
            title: "Software Engineering Intern",
            location: "Remote / North America",
            link: "#0"
          },
          {
            title: "Software Engineer, Core Infrastructure",
            location: "Remote",
            link: "#0"
          },
          {
            title: "Software Engineer, Data Platform",
            location: "Remote / Europe",
            link: "#0"
          },
          {
            title: "Software Engineer, Marketing Systems",
            location: "Remote / North America",
            link: "#0"
          }
        ]
      },
      {
        area: "Marketing",
        positions: [
          {
            title: "Product Marketing Manager",
            location: "Remote / North America",
            link: "#0"
          },
          {
            title: "Marketing Manager",
            location: "Remote / Europe",
            link: "#0"
          }
        ]
      },
      {
        area: "Design",
        positions: [
          {
            title: "Product Designer, Consumer",
            location: "Remote / North America",
            link: "#0"
          },
          {
            title: "Senior Product Designer",
            location: "Remote / Europe",
            link: "#0"
          },
          {
            title: "Lead Designer",
            location: "Remote / Europe",
            link: "#0"
          }
        ]
      }
    ];
    return {
      items
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="434" height="427"><defs><linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#6366F1"></stop><stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#bs3-a)" fill-rule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)"></path></svg></div><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]"><div class="max-w-3xl mx-auto text-center pb-12 md:pb-20"><h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Join a team of makers</h2><p class="text-lg text-slate-400">We are makers at heart. Problem solvers and storytellers. We are a diverse team of individuals who build things to make our customers happy.</p></div><div class="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-xs mx-auto md:max-w-none -m-5"><div class="text-center p-5"><div class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(var(--color-slate-800),var(--color-slate-800))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><g fill="none" fill-rule="nonzero" opacity=".8"><path class="fill-slate-600" d="M14.416 3.527C13.841 4.39 13.5 5.242 13.5 6a1.5 1.5 0 1 0 3 0c0-.758-.34-1.61-.916-2.473A8.962 8.962 0 0 0 15 2.748c-.2.239-.398.5-.584.78ZM17.5 6a2.5 2.5 0 1 1-5 0c0-.992.41-2.015 1.084-3.027a9.979 9.979 0 0 1 1.062-1.327L15 1.293l.354.353a9.979 9.979 0 0 1 1.062 1.326C17.091 3.986 17.5 5.009 17.5 6ZM6 6.5c-1.374 0-2.5-1.055-2.5-2.375 0-.243.043-.492.125-.746.176-.548.523-1.108.99-1.672A9.774 9.774 0 0 1 5.677.62L6 .344l.323.275a9.774 9.774 0 0 1 1.061 1.089c.468.563.815 1.123.991 1.671.082.254.125.503.125.746C8.5 5.445 7.374 6.5 6 6.5Zm-.615-4.154c-.393.474-.678.933-.808 1.339-.051.16-.077.307-.077.44C4.5 4.877 5.164 5.5 6 5.5s1.5-.623 1.5-1.375c0-.133-.026-.28-.077-.44-.13-.406-.415-.865-.808-1.34A8.746 8.746 0 0 0 6 1.682c-.21.205-.42.43-.615.665Z"></path><path class="fill-slate-200" d="M9.483 14.562A6.495 6.495 0 0 1 15 11.5h4.5v.5a8.5 8.5 0 0 1-8.5 8.5H9.5v3h-1v-7H7A6.5 6.5 0 0 1 .5 10v-.5H4c2.89 0 5.26 2.23 5.483 5.062Zm-.485.938H8.5v1h.174a6.45 6.45 0 0 1 .324-1Zm.502 4H11a7.5 7.5 0 0 0 7.484-7H15A5.5 5.5 0 0 0 9.5 18v1.5Zm-1-4V15A4.5 4.5 0 0 0 4 10.5H1.522A5.5 5.5 0 0 0 7 15.5h1.5Z"></path></g></svg></div><div class="font-bold text-slate-100 mb-1">Passionate</div><p class="text-sm text-slate-400">You are passionate about digital products of any kind and are a builder at heart.</p></div><div class="text-center p-5"><div class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(var(--color-slate-800),var(--color-slate-800))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path class="fill-slate-200" d="M9.423 12.278H.87L11.614.458l-1.037 7.264h8.553L8.386 19.542l1.037-7.264Zm-6.293-1h7.447l-.74 5.18 7.033-7.736H9.423l.74-5.18-7.033 7.736Z" opacity=".8"></path></svg></div><div class="font-bold text-slate-100 mb-1">Energetic</div><p class="text-sm text-slate-400">You are passionate about digital products of any kind and are a builder at heart.</p></div><div class="text-center p-5"><div class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(var(--color-slate-800),var(--color-slate-800))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="nonzero" opacity=".8"><path class="fill-slate-600" d="M11.5 1h1v4h-1V1ZM23 11.5v1h-4v-1h4ZM12.5 23h-1v-4h1v4ZM1 12.5v-1h4v1H1Z"></path><path class="fill-slate-200" d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5Zm0-1c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5Zm0-8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></g></svg></div><div class="font-bold text-slate-100 mb-1">Achiever</div><p class="text-sm text-slate-400">You are passionate about digital products of any kind and are a builder at heart.</p></div></div></div></div><div class="max-w-[1440px] mx-auto px-4 md:px-0"><div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 md:-mx-5"><img class="w-full aspect-16/10 object-cover rounded-lg"${ssrRenderAttr("src", _imports_0)} width="352" height="220" alt="Recruitment 01"><img class="w-full aspect-16/10 object-cover rounded-lg"${ssrRenderAttr("src", _imports_1)} width="352" height="220" alt="Recruitment 02"><img class="w-full aspect-16/10 object-cover rounded-lg"${ssrRenderAttr("src", _imports_2)} width="352" height="220" alt="Recruitment 03"><img class="w-full aspect-16/10 object-cover rounded-lg"${ssrRenderAttr("src", _imports_3)} width="352" height="220" alt="Recruitment 04"></div></div><div class="relative px-4 sm:px-6"><div class="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/3 ml-24 blur-2xl opacity-40 pointer-events-none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="434" height="427"><defs><linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#6366F1"></stop><stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#bs2-a)" fill-rule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)"></path></svg></div><div class="max-w-3xl mx-auto py-12 md:py-20"><h3 class="h3 inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8 md:pb-16">Open positions</h3><div class="space-y-8"><!--[-->`);
  ssrRenderList($setup.items, (item) => {
    _push(`<div><h4 class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">${ssrInterpolate(item.area)}</h4><ul class="divide-y divide-slate-800"><!--[-->`);
    ssrRenderList(item.positions, (position) => {
      _push(`<li class="flex flex-col md:flex-row flex-wrap justify-between py-5"><span class="font-medium text-slate-50 mr-2">${ssrInterpolate(position.title)}</span><a class="inline-flex text-sm font-medium text-purple-500 group"${ssrRenderAttr("href", position.link)}>${ssrInterpolate(position.location)} <span class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a></li>`);
    });
    _push(`<!--]--></ul></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Recruitment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Recruitment = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "StellarRecruitment" });

const Testimonial01 = "" + __buildAssetsURL("testimonial-01.Czchv13E.png");

const Testimonial02 = "" + __buildAssetsURL("testimonial-02.DUgmpvAb.png");

const Testimonial03 = "" + __buildAssetsURL("testimonial-03.bR-Xmb8a.png");

const _sfc_main$1 = {
  name: "Testimonials02",
  setup() {
    const items = [
      {
        img: Testimonial01,
        name: "Mary Janiczak",
        role: "Data Engineer",
        twitter: "#0",
        quote: "The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users' shoes."
      },
      {
        img: Testimonial02,
        name: "Jack Smith",
        role: "Software Engineer",
        twitter: "#0",
        quote: "The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users' shoes."
      },
      {
        img: Testimonial03,
        name: "Anna Johnson",
        role: "Product Designer",
        twitter: "#0",
        quote: "The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users' shoes."
      }
    ];
    return {
      items
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true"><div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square"><div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div></div></div><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="py-12 md:py-20"><div class="max-w-3xl mx-auto text-center pb-12 md:pb-20"><h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Hear from our people</h2><p class="text-lg text-slate-400">Our company is comprised of people who make bold choices for our clients and the security sector. It&#39;s in our DNA to push our limits and make bold changes.</p></div><div class="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none"><!--[-->`);
  ssrRenderList($setup.items, (item) => {
    _push(`<div class="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl"><div class="flex items-center justify-between mb-4"><div class="flex items-center space-x-4"><img class="shrink-0"${ssrRenderAttr("src", item.img)} width="44" height="44"${ssrRenderAttr("alt", item.name)}><div class="grow"><div class="font-bold text-slate-100">${ssrInterpolate(item.name)}</div><div class="text-sm text-purple-500 font-medium">${ssrInterpolate(item.role)}</div></div></div><a class="shrink-0 text-slate-500"${ssrRenderAttr("href", item.twitter)}${ssrRenderAttr("aria-label", `${item.name}'s Twitter`)}><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path></svg></a></div><p class="text-sm text-slate-400">“${ssrInterpolate(item.quote)}”</p></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Testimonials02.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Testimonials = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "StellarTestimonials02" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(Story, null, null, _parent));
      _push(ssrRenderComponent(Team, null, null, _parent));
      _push(ssrRenderComponent(Recruitment, null, null, _parent));
      _push(ssrRenderComponent(Testimonials, null, null, _parent));
      _push(ssrRenderComponent(Cta, null, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=About.vue.mjs.map
