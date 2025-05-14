<template>
  <div class="relative h-full bg-slate-800 rounded-3xl p-px -m-px before:absolute before:w-64 before:h-64 before:-left-32 before:-top-32 before:bg-indigo-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] hover:before:opacity-30 before:z-30 before:blur-[64px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),var(--color-slate-400),transparent)] group-hover:after:opacity-100 after:z-10 overflow-hidden">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HighlighterItem02',
}
</script>
