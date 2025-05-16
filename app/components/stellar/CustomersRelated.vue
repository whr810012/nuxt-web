<template>
  <aside>
    <h2 class="inline-flex font-bold text-lg bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Related stories</h2>
    <div class="mx-auto sm:max-w-[728px] lg:max-w-none">
      <Highlighter class="grid gap-4 lg:gap-6 sm:grid-cols-3 lg:grid-cols-3 group">

        <template v-for="item in items">
          <div>
            <router-link :to="item.link">
              <HighlighterItem>
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <!-- Particles animation -->
                  <Particles class="absolute inset-0 -z-10" :quantity="3" />
                  <div class="flex items-center justify-center h-32 lg:h-36">
                    <img class="w-full h-full aspect-video object-cover" :src="item.bg" width="352" height="198" alt="Customer Background" aria-hidden="true" />
                    <img class="absolute" :src="item.img" :alt="item.name" />
                  </div>
                </div>
              </HighlighterItem>
            </router-link>
          </div>
        </template>

      </Highlighter>
    </div>
  </aside>
</template>

<script>
import Particles from './Particles.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem02.vue'
import CustomerImg02 from '@/assets/images/customer-02.svg'
import CustomerBg02 from '@/assets/images/customer-bg-02.png'
import CustomerImg03 from '@/assets/images/customer-03.svg'
import CustomerBg03 from '@/assets/images/customer-bg-03.png'
import CustomerImg06 from '@/assets/images/customer-06.svg'
import CustomerBg06 from '@/assets/images/customer-bg-06.png'

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
        img: CustomerImg06,
        bg: CustomerBg06,
        link: '/customer',
      },
    ]

    return {
      items
    }
  }
}
</script>