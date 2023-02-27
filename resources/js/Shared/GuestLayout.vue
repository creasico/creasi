<script>
import ApplicationLogo from '../components/ApplicationLogo.vue'
export default {
  components: { ApplicationLogo },
}
</script>

<template>
  <div id="background" class="font-sans antialiased auth-bg">
    <div class="text-gray-700">
      <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <ApplicationLogo width="291" height="56" />
        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#background {
    background-image:  url('/image/app-bg.jpeg')
}
</style>
