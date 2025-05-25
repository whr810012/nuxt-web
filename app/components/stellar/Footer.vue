<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Blocks -->
      <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
          <div class="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
            <div class="mb-4 sm:mb-0">
              <div class="mb-4">
                <!-- Logo -->
                <router-link class="inline-flex" to="/" aria-label="智旅星途">
                  <img src="@/assets/images/logo.png" class="rounded-[50%]" width="40" height="40" alt="智旅星途">
                </router-link>
              </div>
              <div class="text-sm text-slate-300">&copy; 智旅星途 <span class="text-slate-500">-</span> {{ $t('footer.copyright') }}</div>
              <div class="mt-2 text-sm text-slate-400">{{ $t('footer.slogan') }}</div>
            </div>
            <!-- Social links
            <ul class="flex">
              <li>
                <a class="flex justify-center items-center text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0" aria-label="微信">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.26 20.127c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5m-10.5-5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5m15.25.627C26.01 10.38 20.58 6 14.13 6 7.13 6 1.5 10.9 1.5 17c0 3.42 1.85 6.53 4.88 8.63.23.16.38.42.38.71l-.08 2.74c-.02.33.25.6.58.6.1 0 .2-.03.29-.08l3.08-1.79c.19-.11.41-.17.63-.17.08 0 .16.01.24.03 1.01.26 2.08.4 3.19.4 7 0 12.63-4.9 12.63-11 0-.71-.08-1.4-.22-2.07" />
                  </svg>
                </a>
              </li>
              <li class="ml-2">
                <a class="flex justify-center items-center text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0" aria-label="微博">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.84 21.82a4.41 4.41 0 0 1-5.17-3.43 4.41 4.41 0 0 1 3.43-5.17 4.41 4.41 0 0 1 5.17 3.43 4.41 4.41 0 0 1-3.43 5.17m-1.09-8.59a2.2 2.2 0 0 0-2.58 1.72 2.2 2.2 0 0 0 1.72 2.58 2.2 2.2 0 0 0 2.58-1.72 2.2 2.2 0 0 0-1.72-2.58m2.58 3.44c-.24.38-.8.57-1.24.42-.44-.15-.6-.58-.36-.95.24-.38.78-.57 1.22-.42.44.15.62.58.38.95m.87-1.27c-.08.15-.29.22-.46.15-.17-.05-.24-.22-.15-.36.08-.15.27-.22.44-.15.17.07.24.24.17.36m.2-2.32c-2.3-.6-4.9.55-5.9 2.58-1.02 2.09-.03 4.4 2.29 5.15 2.4.78 5.24-.41 6.23-2.65.97-2.2-.29-4.46-2.62-5.08m8.93-2.22a1.1 1.1 0 0 0-1.09-1.1h-1.09c-1.51-4.85-6.78-7.58-11.7-6.07-4.3 1.32-7.04 5.8-6.07 10.24a1.1 1.1 0 0 0 1.09 1.1h1.09c.6 0 1.09-.5 1.09-1.1 0-.6-.49-1.09-1.09-1.09h-.2c-.77-3.07 1.09-6.22 4.17-7.03 3.5-.91 7.04 1.27 7.85 4.85h-.2a1.1 1.1 0 0 0-1.09 1.1c0 .6.49 1.09 1.09 1.09h1.09a1.1 1.1 0 0 0 1.09-1.1v-.8h.2c.6 0 1.09-.49 1.09-1.09 0-.6-.49-1.09-1.09-1.09h-.2v.8h-1.09c-.05-.2-.1-.39-.17-.58h1.26c.6 0 1.09-.49 1.09-1.09" />
                  </svg>
                </a>
              </li>
              <li class="ml-2">
                <a class="flex justify-center items-center text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0" aria-label="小红书">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5 7.5h-17A3.5 3.5 0 0 0 4 11v10a3.5 3.5 0 0 0 3.5 3.5h17a3.5 3.5 0 0 0 3.5-3.5V11a3.5 3.5 0 0 0-3.5-3.5zm-8.45 11.95h-5.2v-1.5h5.2v1.5zm5.2-4h-10.4v-1.5h10.4v1.5z" />
                  </svg>
                </a>
              </li>
            </ul> -->
          </div>
        </div>

        <!-- 2nd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-50 font-medium mb-2">{{ $t('footer.products.title') }}</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.products.features') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.products.integrations') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.products.pricing') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.products.changelog') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.products.method') }}</a>
            </li>
          </ul>
        </div>

        <!-- 3rd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-50 font-medium mb-2">{{ $t('footer.company.title') }}</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.company.about') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.company.diversity') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.company.blog') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.company.careers') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.company.financial') }}</a>
            </li>
          </ul>
        </div>

        <!-- 4th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-50 font-medium mb-2">{{ $t('footer.resources.title') }}</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.resources.community') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.resources.terms') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.resources.report') }}</a>
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-50 font-medium mb-2">{{ $t('footer.legals.title') }}</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.legals.refund') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.legals.terms') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.legals.privacy') }}</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">{{ $t('footer.legals.brand') }}</a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
// 使用setup语法，与Header.vue保持一致
</script>