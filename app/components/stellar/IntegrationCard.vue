<template>
  <div class="bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
    <div class="flex flex-col p-5 h-full">
      <div class="flex items-center space-x-3 mb-3">
        <div class="relative">
          <img :src="item.img" width="40" height="40" :alt="item.name">
          <img class="absolute top-0 -right-1" src="@/assets/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true" v-if="item.featured">
        </div>
        <router-link class="font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" :to="item.link">{{ item.name }}</router-link>
      </div>
      <div class="grow">
        <div class="text-sm text-slate-400">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntegrationCard',
  props: ['item'],
}
</script>