<template>
  <div class="max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20">
    <Highlighter class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group [&_*:nth-child(n+5):not(:nth-child(n+12))]:order-1 [&_*:nth-child(n+10):not(:nth-child(n+11))]:order-2!">

      <template v-for="item in items">
        <div>
          <router-link :to="item.link">
            <HighlighterItem>
              <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                <!-- Particles animation -->
                <Particles class="absolute inset-0 -z-10" :quantity="3" />
                <div class="flex items-center justify-center">
                  <img class="w-full h-full aspect-video object-cover" :src="item.bg" width="352" height="198" alt="Customer Background" aria-hidden="true" />
                  <img class="absolute" :src="item.img" :alt="item.name" />
                </div>
              </div>
            </HighlighterItem>
          </router-link>
        </div>
      </template>

      <!-- Testimonial #01 -->
      <div class="flex flex-col items-center justify-center text-center p-4">
        <p class="font-medium bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
          <span class="line-clamp-4">
            “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.”
          </span>
        </p>
        <div class="inline-flex mb-2">
          <img class="rounded-full" src="@/assets/images/customer-avatar-01.jpg" width="32" height="32" alt="Customer Avatar 01" />
        </div>
        <div class="text-sm font-medium text-slate-300">
          Mike Hunt <span class="text-slate-700">-</span> <a class="text-purple-500 hover:underline" href="#0">Thunderbolt</a>
        </div>
      </div>
      <!-- Testimonial #02 -->
      <div class="flex flex-col items-center justify-center text-center p-4">
        <p class="font-medium bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
          <span class="line-clamp-4">
            “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.”
          </span>
        </p>
        <div class="inline-flex mb-2">
          <img class="rounded-full" src="@/assets/images/customer-avatar-02.jpg" width="32" height="32" alt="Customer Avatar 02" />
        </div>
        <div class="text-sm font-medium text-slate-300">
          Mirko Mitt <span class="text-slate-700">-</span> <a class="text-purple-500 hover:underline" href="#0">Mildrink</a>
        </div>
      </div>

    </Highlighter>
  </div>
</template>

<script>
import Particles from './Particles.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem02.vue'
import CustomerImg01 from '@/assets/images/customer-01.svg'
import CustomerBg01 from '@/assets/images/customer-bg-01.png'
import CustomerImg02 from '@/assets/images/customer-02.svg'
import CustomerBg02 from '@/assets/images/customer-bg-02.png'
import CustomerImg03 from '@/assets/images/customer-03.svg'
import CustomerBg03 from '@/assets/images/customer-bg-03.png'
import CustomerImg04 from '@/assets/images/customer-04.svg'
import CustomerBg04 from '@/assets/images/customer-bg-04.png'
import CustomerImg05 from '@/assets/images/customer-05.svg'
import CustomerBg05 from '@/assets/images/customer-bg-05.png'
import CustomerImg06 from '@/assets/images/customer-06.svg'
import CustomerBg06 from '@/assets/images/customer-bg-06.png'
import CustomerImg07 from '@/assets/images/customer-07.svg'
import CustomerBg07 from '@/assets/images/customer-bg-07.png'
import CustomerImg08 from '@/assets/images/customer-08.svg'
import CustomerBg08 from '@/assets/images/customer-bg-08.png'
import CustomerImg09 from '@/assets/images/customer-09.svg'
import CustomerBg09 from '@/assets/images/customer-bg-09.png'
import CustomerImg10 from '@/assets/images/customer-10.svg'
import CustomerBg10 from '@/assets/images/customer-bg-10.png'

export default {
  name: 'CustomersList',
  components: {
    Particles,
    Highlighter,
    HighlighterItem,
  },
  setup() {
    const items = [
      {
        name: 'Customer name',
        img: CustomerImg01,
        bg: CustomerBg01,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg02,
        bg: CustomerBg02,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg03,
        bg: CustomerBg03,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg04,
        bg: CustomerBg04,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg05,
        bg: CustomerBg05,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg06,
        bg: CustomerBg06,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg07,
        bg: CustomerBg07,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg08,
        bg: CustomerBg08,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg09,
        bg: CustomerBg09,
        link: '/customer',
      },
      {
        name: 'Customer name',
        img: CustomerImg10,
        bg: CustomerBg10,
        link: '/customer',
      },
    ]

    return {
      items
    }
  }
}
</script>