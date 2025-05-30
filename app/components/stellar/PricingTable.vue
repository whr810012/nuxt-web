<template>
  <div class="relative">
    <!-- Blurred shape -->
    <div class="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stop-color="#A855F7" />
            <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
      </svg>
    </div>
    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-800/50 text-sm [&>div:nth-of-type(-n+2)]:py-6 [&>div:nth-last-of-type(-n+2)]:pb-6 max-md:[&>div:nth-last-of-type(-n+2)]:mb-8 max-md:[&>div:nth-of-type(-n+2):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+2)]:rounded-b-3xl md:[&>div:nth-of-type(1)]:rounded-tl-3xl md:[&>div:nth-of-type(2)]:rounded-tr-3xl md:[&>div:nth-last-of-type(2)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-800/30 [&>div]:backdrop-blur-sm [&>div]:transition-all [&>div]:duration-300 [&>div]:hover:bg-slate-700/40 [&>div:nth-of-type(2n+2)]:bg-transparent [&>div:nth-of-type(2n+2)]:relative [&>div:nth-of-type(2n+2)]:before:absolute [&>div:nth-of-type(2n+2)]:before:-inset-px [&>div:nth-of-type(2n+2)]:before:rounded-[inherit] [&>div:nth-of-type(2n+2)]:before:border-2 [&>div:nth-of-type(2n+2)]:before:border-purple-500/80 [&>div:nth-of-type(2n+2)]:before:shadow-2xl [&>div:nth-of-type(2n+2)]:before:-z-10 [&>div:nth-of-type(2n+2)]:before:pointer-events-none [&>div:nth-of-type(2n+2)]:hover:before:border-purple-400/90 [&>div:nth-of-type(2n+2)]:hover:before:shadow-purple-500/30">
      <!-- Free price -->
      <div class="px-6 flex flex-col justify-end">
        <div class="grow pb-4 mb-4 border-b border-slate-800">
          <div class="text-base font-medium text-slate-200 pb-0.5 transition-colors duration-300 group-hover:text-slate-100">{{ $t('pricing.table.free.title') }}</div>
          <div class="mb-1 group">
            <span class="text-lg font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-400">¥</span><span class="text-3xl font-bold text-slate-50 transition-colors duration-300 group-hover:text-white">0</span><span class="text-sm text-slate-600 font-medium transition-colors duration-300 group-hover:text-slate-500">/{{ $t('pricing.table.period.forever') }}</span>
          </div>
          <div class="text-slate-500 transition-colors duration-300 group-hover:text-slate-400">{{ $t('pricing.table.free.description') }}</div>
        </div>
        <div class="pb-4 border-b border-slate-800">
          <a class="btn-sm text-slate-300 bg-slate-700/50 hover:bg-slate-600/70 w-full transition duration-300 ease-in-out group backdrop-blur-sm shadow-lg hover:shadow-slate-700/30 hover:scale-[1.02] hover:text-white" href="#0">
            {{ $t('pricing.table.free.button') }} <span class="tracking-normal text-slate-400 group-hover:translate-x-1 transition-transform duration-300 ease-in-out ml-1">-&gt;</span>
          </a>
        </div>
      </div>
      <!-- VIP price -->
      <div class="px-6 flex flex-col justify-end">
        <div class="pb-5 md:border-b border-slate-800">
          <!-- Toggle switch -->
          <div class="max-md:text-center">
            <div class="inline-flex items-center whitespace-nowrap">
              <div class="text-sm text-slate-500 font-medium mr-2 md:max-lg:hidden transition-colors duration-300 hover:text-slate-300">Monthly</div>
              <div class="relative">
                <input type="checkbox" id="toggle" class="peer sr-only" v-model="annual" />
                <label for="toggle" class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-700/50 px-0.5 outline-slate-400 transition-all duration-300 before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-md before:transition-all before:duration-300 hover:bg-slate-600/70 peer-checked:bg-purple-500/90 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-focus-visible:peer-checked:outline-purple-500 before:hover:shadow-lg">
                  <span class="sr-only">Pay Yearly</span>
                </label>
              </div>
              <div class="text-sm text-slate-500 font-medium ml-2 transition-colors duration-300 hover:text-slate-300 group">Yearly <span class="text-teal-500 transition-colors duration-300 group-hover:text-teal-400">(-20%)</span></div>
            </div>
          </div>
        </div>
        <div class="grow pb-4 mb-4 border-b border-slate-800">
          <div class="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5 transition-all duration-300 group-hover:from-purple-400 group-hover:to-purple-100">{{ $t('pricing.table.vip.title') }}</div>
          <div class="mb-1 group">
            <span class="text-lg font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-400">¥</span><span class="text-3xl font-bold text-slate-50 transition-colors duration-300 group-hover:text-white">{{ annual ? '299.9' : '29.9' }}</span><span class="text-sm text-slate-600 font-medium transition-colors duration-300 group-hover:text-slate-500">/{{ annual ? $t('pricing.table.period.year') : $t('pricing.table.period.month') }}</span>
          </div>
          <div class="text-slate-500 transition-colors duration-300 group-hover:text-slate-400">{{ $t('pricing.table.vip.description') }}</div>
        </div>
        <div class="pb-4 border-b border-slate-800">
          <a class="btn-sm text-white bg-purple-500/90 hover:bg-purple-600 w-full transition duration-300 ease-in-out group shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 backdrop-blur-sm hover:scale-[1.02]" href="#0">
            {{ $t('pricing.table.vip.button') }} <span class="tracking-normal text-purple-300 group-hover:translate-x-1 transition-transform duration-300 ease-in-out ml-1">-&gt;</span>
          </a>
        </div>
      </div>
      <!-- Features Title -->
      <div class="px-6 flex flex-col justify-end">
        <div class="py-2 text-slate-50 font-medium mt-4 transition-colors duration-300 hover:text-white">{{ $t('pricing.table.features.title') }}</div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="py-2 text-slate-50 font-medium mt-4 transition-colors duration-300 hover:text-white">{{ $t('pricing.table.features.title') }}</div>
      </div>
      <!-- API Calls -->
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-slate-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:fill-slate-400" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.features.api_calls_free') }}</span>
        </div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-purple-500/30 py-2 text-slate-300 transition-all duration-300 hover:text-white hover:bg-purple-500/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-400 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:fill-purple-300 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="14" height="11">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100 font-medium transition-transform duration-300 group-hover:translate-x-1">{{ annual ? $t('pricing.table.features.api_calls_vip') : $t('pricing.table.features.api_calls_vip_monthly') }}</span>
          <span class="ml-2 text-xs py-0.5 px-1.5 bg-purple-500/30 text-purple-200 rounded-md">VIP</span>
        </div>
      </div>
      <!-- Popular Routes Access -->
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-slate-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:fill-slate-400" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.features.popular_routes_access_free') }}</span>
        </div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-purple-500/30 py-2 text-slate-300 transition-all duration-300 hover:text-white hover:bg-purple-500/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-400 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:fill-purple-300 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="14" height="11">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100 font-medium transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.features.popular_routes_access_vip') }}</span>
          <span class="ml-2 text-xs py-0.5 px-1.5 bg-purple-500/30 text-purple-200 rounded-md">VIP</span>
        </div>
      </div>
      <!-- Travel Data Export -->
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-slate-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:fill-slate-400" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.features.travel_data_export_free') }}</span>
        </div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-purple-500/30 py-2 text-slate-300 transition-all duration-300 hover:text-white hover:bg-purple-500/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-400 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:fill-purple-300 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="14" height="11">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100 font-medium transition-transform duration-300 group-hover:translate-x-1">{{ annual ? $t('pricing.table.features.travel_data_export_vip') : $t('pricing.table.features.travel_data_export_vip_monthly') }}</span>
          <span class="ml-2 text-xs py-0.5 px-1.5 bg-purple-500/30 text-purple-200 rounded-md">VIP</span>
        </div>
      </div>
      <!-- Font Color Options -->
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-slate-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:fill-slate-400" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.features.font_color_free') }}</span>
        </div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-purple-500/30 py-2 text-slate-300 transition-all duration-300 hover:text-white hover:bg-purple-500/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-400 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:fill-purple-300 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="14" height="11">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100 font-medium transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.features.font_color_vip') }}</span>
          <span class="ml-2 text-xs py-0.5 px-1.5 bg-purple-500/30 text-purple-200 rounded-md">VIP</span>
        </div>
      </div>
      
      <!-- VIP Badge -->
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-slate-500/50 mr-3 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1 line-through opacity-70">{{ $t('pricing.table.features.vip_badge_free') }}</span>
        </div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-purple-500/30 py-2 text-slate-300 transition-all duration-300 hover:text-white hover:bg-purple-500/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-400 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:fill-purple-300 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="14" height="11">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100 font-medium transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.features.vip_badge_description') }}</span>
          <span class="ml-2 text-xs py-0.5 px-1.5 bg-purple-500/30 text-purple-200 rounded-md">VIP</span>
        </div>
      </div>
      
      <!-- Comment Highlight -->
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-slate-500/50 mr-3 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1 line-through opacity-70">{{ $t('pricing.table.features.comment_highlight_free') }}</span>
        </div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-purple-500/30 py-2 text-slate-300 transition-all duration-300 hover:text-white hover:bg-purple-500/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-400 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:fill-purple-300 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="14" height="11">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100 font-medium transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.features.comment_highlight_vip') }}</span>
          <span class="ml-2 text-xs py-0.5 px-1.5 bg-purple-500/30 text-purple-200 rounded-md">VIP</span>
        </div>
      </div>
      <!-- Support Title -->
      <div class="px-6 flex flex-col justify-end">
        <div class="py-2 text-slate-50 font-medium mt-4 transition-colors duration-300 hover:text-white">{{ $t('pricing.table.support.title') }}</div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="py-2 text-slate-50 font-medium mt-4 transition-colors duration-300 hover:text-white">{{ $t('pricing.table.support.title') }}</div>
      </div>
      <!-- Basic Support -->
      <div class="px-6 flex flex-col justify-end">
        <div class="py-2 text-slate-400 border-b border-slate-800/50 transition-colors duration-300 hover:text-slate-300">{{ $t('pricing.table.support.basic') }}</div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-500/90 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:fill-purple-400 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.support.basic') }}</span>
        </div>
      </div>
      <!-- Priority Support -->
      <div class="px-6 flex flex-col justify-end">
        <div class="py-2 text-slate-400 border-b border-slate-800/50 transition-colors duration-300 hover:text-slate-300">{{ $t('pricing.table.support.priority') }}</div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-500/90 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:fill-purple-400 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.support.priority') }}</span>
        </div>
      </div>
      <!-- 24/7 Service -->
      <div class="px-6 flex flex-col justify-end">
        <div class="py-2 text-slate-400 border-b border-slate-800/50 transition-colors duration-300 hover:text-slate-300">{{ $t('pricing.table.support.service_247') }}</div>
      </div>
      <div class="px-6 flex flex-col justify-end">
        <div class="flex items-center h-full border-b border-slate-800/50 py-2 text-slate-400 transition-all duration-300 hover:text-slate-300 hover:bg-slate-700/20 rounded-lg group">
          <svg class="shrink-0 fill-purple-500/90 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:fill-purple-400 group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
            <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
          </svg>
          <span class="transition-transform duration-300 group-hover:translate-x-1">{{ $t('pricing.table.support.service_247') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PricingTable',
  setup() {

    const annual = ref(true)

    return {
      annual,
    }
  },
}
</script>