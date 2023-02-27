<script>
import Navbar from '../Shared/Navbar.vue'
import Topbar from '../Shared/Topbar.vue'
export default {
  components: {
    Navbar, Topbar,
  },
}
</script>

<template>
  <div>
    <div class="font-sans antialiased">
      <div class="min-h-screen overflow-hidden bg-gray-50 relative flex text-gray-700">
        <Navbar />
        <main class="w-screen">
          <Topbar />

          <div class="py-12 container mx-auto sm:px-6">
            <slot />
          </div>
        </main>
        <div id="dropdowns-wrapper" />
      </div>
    </div>
  </div>
</template>
