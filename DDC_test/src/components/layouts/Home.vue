<template>
  <section class="relative min-h-[70vh] p-10">  
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
      ></div>
    </div>
    <div
      class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md"
    >
      <header class="mb-6">
        <h1 class="text-2xl font-semibold text-indigo-600 dark:text-slate-100">
          Jelentkező: Vas Fruzsina
        </h1>
        <p class="text-slate-500">
          Pozíció:
          <span class="font-medium text-slate-700 dark:text-slate-200"
            >Junior frontend fejlesztő</span
          >
        </p>
      </header>
      <div class="mb-2">
        <span
          class="inline-block rounded-full px-4 py-1 text-xs font-bold tracking-widest text-white dark:text-blue-400 shadow-md dark:bg-slate-800/80 relative"
        >
          <span class="absolute -inset-0.5 rounded-full z-[-1] bg-gradient-to-r from-indigo-500 to-cyan-500"></span>
          <span class="relative z-10">TECH STACK</span>
        </span>
      </div>
      <ul
        class="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2"
      >
        <li
          v-for="item in techStack"
          :key="item"
          class="flex items-start gap-2"
        >
          <span class="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          <span class="text-slate-400">{{ item }}</span>
        </li>
      </ul>

      <footer
        class="mt-8 rounded-full p-4 text-sm text-white dark:text-blue-400 shadow-md text-center dark:bg-slate-800/80 relative"
      >
        <span class="absolute -inset-0.5 rounded-full z-[-1] bg-gradient-to-r from-indigo-500 to-cyan-500"></span>
        <p class="relative z-10">
          Mit nyertek velem?
          <span class="font-medium">Egy koffeinista kolleginát</span>, aki
          nemcsak kódot ír, hanem
          <span class="font-medium">szépít, refaktorál, bugot szelídít</span>.
          ☕🚀
        </p>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
const techStack = [
  'Angular, React, Vue.js',
  'Bootstrap, Tailwind, UnoCSS',
  'Docker',
  'Firebase',
  'Figma',
  'Golang',
  'HTML, CSS, SCSS',
  'JavaScript, TypeScript',
  'Jira, Trello, Confluence',
  'Twig',
  'PHP',
  'Photoshop, Illustrator, InDesign',
  'PostgreSQL, MySQL, NoSQL',
];
</script>