<template>
  <section class="relative">

    <!-- Radial gradient -->
    <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
      <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
      <div class="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
    </div>

    <!-- Particles animation -->
    <Particles class="absolute inset-0 h-96 -z-10" />

    <!-- Illustration -->
    <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
      <img src="@/assets/images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-20 md:pt-40 md:pb-24">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-20">
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">The security first platform</div>
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{{ t('pricing.hero.title') }}</h1>
            <div class="max-w-3xl mx-auto">
            <p class="text-lg text-slate-400">{{ t('pricing.hero.description') }}</p>
          </div>
        </div>

        <PricingTable />

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Particles from './Particles.vue'
import PricingTable from './PricingTable.vue'

const { t } = useI18n()
const tab = ref('monthly')
</script>