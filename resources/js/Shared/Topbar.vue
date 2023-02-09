<script>
import { Link } from '@inertiajs/vue3'
export default {
  components: {
    Link,
  },
  data() {
    return { langs: ['id', 'en'] }
  },
}
</script>

<template>
  <div>
    <div class="bg-white w-full shadow">
      <div class="flex items-center justify-between container-fluid gap-2 py-3 px-3 sm:px-6">
        <Link href="/" class="rounded-md overflow-hidden sm:hidden">
          <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#388370" width="512" height="512" />
            <path fill="white" d="M275.751 81c-101.35 0-132.372 44.593-137.624 87.229l-21.983 171.552c-.525 5.454-1.144 9.902-1.144 13.372C115 392.319 147.092 431 236.364 431c101.35 0 132.257-44.592 137.509-87.228l3.777-26.998c1.052-8.428-.63-16.198-12.708-16.198h-54.041c-11.028 0-15.828 5.787-17.403 16.198l-2.062 12.549c-3.151 22.806-21.44 32.24-47.172 32.24-23.63 0-40.989-7.838-40.989-27.173 0-1.487.504-5.522 1.031-9.488l18.892-142.225c3.15-22.805 22.013-32.24 47.745-32.24 24.155 0 40.53 7.924 40.53 25.771 0 1.986-.507 6.406-1.03 9.382l-1.031 5.499c-1.575 8.924 2.071 15.383 13.625 15.383h54.041c11.027 0 14.683-4.973 16.258-15.383l2.633-19.409c.525-5.454 1.031-9.901 1.031-13.371C397 119.143 364.497 81 275.751 81Z" />
          </svg>
        </Link>
        <h2 class="flex-1 font-semibold text-lg leading-8">
          Dashboard
        </h2>
        <button class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div>
          <select v-model="$i18n.locale" class="rounded-md py-2 px-6 items-center">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang === 'id' ? 'ID' : 'EN' }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
