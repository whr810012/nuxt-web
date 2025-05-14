<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
        <Particles class="absolute inset-0 -z-10" :quantity="5" />
      </div>

      <div class="py-12 md:py-16">
        <div class="overflow-hidden">
          <div
            class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
              <li>
                <img src="@/assets/images/client-01.svg" alt="Client 1">
              </li>
              <li>
                <img src="@/assets/images/client-02.svg" alt="Client 2">
              </li>
              <li>
                <img src="@/assets/images/client-03.svg" alt="Client 3">
              </li>
              <li>
                <img src="@/assets/images/client-04.svg" alt="Client 4">
              </li>
              <li>
                <img src="@/assets/images/client-05.svg" alt="Client 5">
              </li>
              <li>
                <img src="@/assets/images/client-06.svg" alt="Client 6">
              </li>
              <li>
                <img src="@/assets/images/client-07.svg" alt="Client 7">
              </li>
              <li>
                <img src="@/assets/images/client-08.svg" alt="Client 8">
              </li>
              <li>
                <img src="@/assets/images/client-09.svg" alt="Client 9">
              </li>
            </ul>
            <ul
              class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
              aria-hidden="true">
              <li>
                <img src="@/assets/images/client-01.svg" alt="Client 1">
              </li>
              <li>
                <img src="@/assets/images/client-02.svg" alt="Client 2">
              </li>
              <li>
                <img src="@/assets/images/client-03.svg" alt="Client 3">
              </li>
              <li>
                <img src="@/assets/images/client-04.svg" alt="Client 4">
              </li>
              <li>
                <img src="@/assets/images/client-05.svg" alt="Client 5">
              </li>
              <li>
                <img src="@/assets/images/client-06.svg" alt="Client 6">
              </li>
              <li>
                <img src="@/assets/images/client-07.svg" alt="Client 7">
              </li>
              <li>
                <img src="@/assets/images/client-08.svg" alt="Client 8">
              </li>
              <li>
                <img src="@/assets/images/client-09.svg" alt="Client 9">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Clients',
  components: {
    Particles
  }
}
</script>