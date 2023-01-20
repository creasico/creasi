<script setup>
import { Head } from '@inertiajs/vue3'
import Nav from '../Pages/Nav.vue'
import Top from '../components/Top.vue'
import Dashboard from '../Pages/auth/Dashboard.vue'
</script>

<script>
export default {

}
</script>

<template>
  <Head title="Dashboard" />
  <div class="font-sans antialiased">
    <div class="min-h-screen overflow-hidden bg-gray-50 relative flex text-gray-700">
      <Nav />

      <main class="w-screen">
        <Top />

        <div class="py-12 container mx-auto sm:px-6">
          <Dashboard />
        </div>
      </main>
      <div id="dropdowns-wrapper" />
    </div>
  </div>
</template>
