<script>
export default {
  name: 'Auth',
}
</script>

<template>
  <div class="font-sans antialiased">
    <div class="min-h-screen overflow-hidden bg-gray-50 relative flex text-gray-700">
      <main class="w-screen">
        <!-- Page Heading -->
        <header class="bg-white w-full shadow">
          <div class="flex items-center container-fluid gap-2 py-4 px-4 sm:px-6">
            <a href="" class="rounded-md overflow-hidden sm:hidden">
              <x-application-logo square initial width="40" class="block h-10 w-auto fill-current text-gray-600" />
            </a>

            <button class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="sidebar = !sidebar">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <div class="py-12 container mx-auto sm:px-6">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style>

</style>
